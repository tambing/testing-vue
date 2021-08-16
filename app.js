const app = Vue.createApp({
    data(){
        return {
            showBook: true,
            title: 'The Final Empire',
            author: 'Erasmus Tambing',
            age: 23,
        }
    },
    methods: {
        changeTitle(title){
            // this.title = 'Buku Saya'
            this.title = title 
        },
        showHideBook(){
            this.showBook = !this.showBook
        }
    }
})

app.mount('#app')