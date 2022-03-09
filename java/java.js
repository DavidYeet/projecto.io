const app = Vue.createApp({
  //template: '<h2>I am the Template</h2>'
  data() {
    return {
      title: 'Bob The Musical',
      author: 'Dr. Bob',
      age: 3
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Words of Randiance'
    }
  }
})

app.mount('#app')
