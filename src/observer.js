import defineReactiveData from './reactive'
import { arrMethods } from './array'
import observeArr  from './observeArr'

class Observer {
  constructor(data) {
    // 如果是数组则进入
    if (Array.isArray(data)) {
      data.__proto__ = arrMethods // 7 如果data是数组的话，则将改写的数组方法赋值给data的__proto__
      observeArr(data) // 为了防止data中的属性也是object或array，所以将data传入数组观察方法中观察它的属性
    } else {
      // 不是数组是对象则进入
      this.walk(data) // 6.1 对对象进行walk操作
    }
  }

  walk(data) {
    const keys = Object.keys(data) // 获取一个拥有对象上所有属性值的数组

    for (let i = 0; i < keys.length; i++) {
      // 获取所有的属性名及对应的属性值
      const key = keys[i],
        value = data[key]
      // 为data的object属性执行响应式操作
      defineReactiveData(data, key, value) // 6.2 为data的object属性执行响应式操作
    }
  }
}

export default Observer