const app = Vue.createApp({
    data(){
        return {
            url: 'https://www.w3schools.com/',
            showBook: true,
            books: [
                {title: 'The Final Empire', author: 'Erasmus', img: 'assets/eras.png', isFav: true},
                {title: 'The Last Empire', author: 'Tambing', img: 'assets/putri.png', isFav: false},
                {title: 'The Third Empire', author: 'Pandu Tambing', img: 'assets/sesil.png', isFav: true}
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