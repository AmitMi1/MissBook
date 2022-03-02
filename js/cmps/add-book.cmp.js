import { utilService } from '../services/util-service.js'
import { bookService } from '../services/book-service.js'
import { modalService } from '../services/modal-service.js'

export default {
    template: `
        <section class="add-book">
            <div class="main-screen" @click="toggleScreen"></div>
          <div class="input-container flex center align-center">
                <input type="text" placeholder="Search online..." v-model.trim="searchTerm">
                <button @click="search" ><i class="fa-solid fa-book-atlas"></i></button>
                </div>
            <div ref="modal" class="modal fade-out" >
            <button @click="toggleScreen">X</button>
            <div class="modal-container">
            <ul class="clean-list res-list">
            <li v-for="book in books" :key="book.id">
            <p>{{book.volumeInfo.title}}</p>
            <button @click="addBook(book)" class="btn-add-book flex align-center center"><i class="fa-solid fa-plus"></i></button>
            <hr>
            </li>
            </ul>
            </div>
            </div>
        </section>
    `,
    data() {
        return {
            searchTerm: null,
            books: null,
        }
    },
    created() {

    },
    mounted() {


    },
    methods: {
        search() {
            console.log(this.$refs);

            if (!this.searchTerm) return
            bookService.searchBook(this.searchTerm)
                .then(res => {
                    this.searchTerm = ''
                    modalService.toggleModal(true, this.$refs.modal)
                    this.books = res
                    console.log(this.books[0])
                })

        },
        toggleScreen() {
            modalService.toggleModal(false, this.$refs.modal)
        },
        addBook(googleBook) {
            console.log(bookService.get(googleBook.id));
            bookService.get(googleBook.id)
                .then(res => {
                    if (!res) {
                        bookService.addGoogleBook(googleBook)
                            .then(book => this.$emit('added', book))
                    }
                })

            // bookService.addGoogleBook(googleBook)
            //     .then(book => this.$emit('added', book))
            //     .catch(err => console.log(err))
            // console.log(book)
            // this.$emit('added', book)
        }
    },
    computed: {

    },
    unmounted() {

    },
}