import Observer from './observer'

export default function observe (data) {
  if (typeof data !== 'object' || data === null) return  // 如果传入的值不是object或者为nell 则不执行

  return new Observer(data) // 6. 为所有符合的data值执行observer操作，传入data
}