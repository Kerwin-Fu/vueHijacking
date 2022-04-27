import proxyData from './proxy'
import observe from './observe'

function initState(vm) {
  const options = vm.$options // 获取实例对象上的options

  if (options.data) { // 判断实例是否拥有data属性或方法
    initData(vm) // 3. 如果有，调用初始化data的函数，传入实例对象

  }
}

  function initData(vm) {
    let data = vm.$options.data // 创建变量接收实例对象上Options中的data属性（方法）

    /**
     * 在实例上创建_data属性，因为不建议直接修改data的值
     * 判断data是否是函数
     * 如果是函数则调用获取函数中返回的数据，this指向改为实例对象
     * 不是函数则赋予原值
     * 如果既不是函数也不是属性则返回空对象
     */
    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}

    for (let key in data) { // 遍历取出data中的属性名
      proxyData(vm, '_data', key) // 4. 为所有属性添加一层代理
    }

    observe(vm._data) // 5. 为所有object的属性添加一个观察者 传入_data
  }

  export {
    initState
  }