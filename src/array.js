import { ARR_METHODS } from './config'
import observeArr from './observeArr'

const originArrMethods = Array.prototype,
  arrMethods = Object.create(originArrMethods) // 7.1 拷贝一份数组的原型方法出来，不要直接修改数组的原型方法

ARR_METHODS.map(function (m) {
  // 7.2 改写复制品数组原型上的所有改变数组原值的方法，做到能响应式监听里面的值的变化
  arrMethods[m] = function () {
    // 7.3 获取调用对应的值时传入的参数并用数组存放
    const args = Array.prototype.slice.call(arguments),
      // 7.4 最终还是需要数组的原型调用该方法，this指向调用其的实例，参数传入数组化的arguments
      rt = originArrMethods[m].apply(this, args)

    let newArr
    // 7.4 某些方法传入的某些参数可能还会是object或array类型，所以要分别进行观察
    switch (m) {
      case 'push':
      case 'unshift':
        newArr
        break;
      case 'splice':
        // splice前两个参数类型是固定的
        newArr = args.slice(2)
        break;
      default:
        break
    }
    // 7.5 获取到合法的newArr值之后调用观察数组的方法
    newArr && observeArr(newArr)
    return rt
  }
})

export {
  arrMethods
}