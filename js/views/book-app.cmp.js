import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from './book-details.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'

export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter"></book-filter>
            <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook" @selected:="selectBook(bookId)"></book-list>
            <book-details @close="selectedBook=null" v-if="selectedBook" :book="selectedBook"></book-details>      
        </section>
    `,
    components: {
        bookList,
        bookDetails,
        bookFilter,
    },
    data() {
        return {
            books: bookService.query(),
            filterBy: null,
            selectedBook: null,
        }
    },
    methods: {
        selectBook(bookId) {
            const book = this.books.find(book => book.id === bookId)
            this.selectedBook = book
            // this.selectedBook = bookId
            console.log(book)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            // const regex = new RegExp(this.filterBy.vendor, 'i');
            // return this.cars.filter(car => regex.test(car.vendor));
        },
    },
};
