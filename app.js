const app = Vue.createApp({
    data(){
        return {
            title: 'The Final Empire',
            author: 'Erasmus Tambing',
            age: 23,
        }
    },
    methods: {
        changeTitle(title){
            // this.title = 'Buku Saya'
            this.title = title
        }
    }
})

app.mount('#app')