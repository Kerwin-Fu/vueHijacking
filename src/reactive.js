import observe from './observe'

function defineReactiveData (data, key, value) {
  observe(value) // 6.4 对象中可能属性值仍然是object或者array属性，所以需要递归处理
  // 6.3 为对象中所有的属性进行代理
  Object.defineProperty(data, key, {
    get() {
      console.log('获取：', value)
      return value
    },
    set(newValue) {
      observe(newValue) // 设置的newValue值可能也会是一个object，所以在这里也做一个递归判断处理
      if (newValue === value ) return 
      console.log('设置：', newValue)
      value = newValue
    }
  })
}

export default defineReactiveData