const app = Vue.createApp({
    data(){
        return {
            showBook: true,
            books: [
                {title: 'The Final Empire', author: 'Erasmus'},
                {title: 'The Last Empire', author: 'Tambing'},
                {title: 'The Third Empire', author: 'Pandu Tambing'}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            // this.title = 'Buku Saya'
            this.title = title 
        },
        showHideBook(){
            this.showBook = !this.showBook
        },
        handleEvent(e, data){
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')