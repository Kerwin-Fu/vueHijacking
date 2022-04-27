import observe from "./observe"

function observeArr(arr) {
// 遍历数组中每个值分别进行观察
  for (let i = 0; i < arr.length; i++) {
    observe(arr[i])
  }

}

export default observeArr