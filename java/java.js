const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'Bob The Musical',
      author: 'Dr. Bob',
      age: 3
    }
  },

methods: {
toggleShowBooks(){
  this.showBooks = !this.showBooks
}
}

})
// changeTitle() {
//       this.title = 'Words of Randiance'
//     }
app.mount('#app')
