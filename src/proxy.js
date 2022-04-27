function proxyData (vm, target, key) {
Object.defineProperty(vm, key, {
  get() {
    return vm[target][key] // 4.1 获取值时做一层代理，将实际上_data里的属性值作为实例上的值返回
  },
  set(newValue) {
    vm[target][key] = newValue // 4.2 设置新值时也是将值赋值给_data里的属性
  }
} )
}

export default proxyData