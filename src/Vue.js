import { initState } from './init'

class Vue {
  constructor(options) {

    this._init(options)  // 1. 调用init函数
  }
  _init = function (options) {
    const vm = this // 储存实例对象
    vm.$options = options // 将传入的options挂载在实例对象上

    initState(vm) // 2. 调用初始化state的函数
  }
}



export default Vue