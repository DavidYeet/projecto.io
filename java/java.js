const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'Bob The Musical',
      author: 'Dr. Bob',
      age: 3,
      x: 0,
      y: 0,
    }
  },

methods: {
toggleShowBooks(){
  this.showBooks = !this.showBooks
},
handleEvent(e, data) {
  console.log(e,e.type)
  if (data) {
    console.log(data)
  }
},
handleMousemove(e) {
  this.x = e.offsetX
  this.y = e.offsetY
  }
}

})
// changeTitle() {
//       this.title = 'Words of Randiance'
//     }
app.mount('#app')
