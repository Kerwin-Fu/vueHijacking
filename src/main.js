import Vue from './Vue'


const vm = new Vue({
  el: '#app',
  data() {
    return {
      name: 'kerwin',
      age: 21,
      hobby: ['music', 'game'],
      adress: {
        horbin: {
          id: 1,
          lane: 'mid'
        },
        korb: {
          id: 2,
          lane: 'downtown'
        }
      }
    }
  }
})

console.log(vm.adress.horbin.id)

