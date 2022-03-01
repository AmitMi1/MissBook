import { bookService } from '../services/book-service.js'
import longText from '../cmps/long-text.cmp.js'
import addReview from '../cmps/add-review.cmp.js'
import bookReview from '../cmps/book-review.cmp.js'

export default {
    template: `
        <section v-if="book" class="book-details flex column center align-center">
            <div class="details-container">
            <h4>{{ book.title }}</h4>
            <long-text :txt="book.description" />
            <!-- <p>{{ book.description }}</p> -->
            <p><i class="fa-solid fa-gem symbol1"></i> {{ formattedDate }}</p>
            <p><i class="fa-solid fa-book symbol2"></i> {{ formattedLength }}</p>
            <p :class="setPriceColor">{{ formattedCurrency }}</p>
            </div>
            <img :src="bookImgUrl">
            <h4>REVIEWS</h4>
            <ul class="clean-list">
              <li v-for="review in getReviews">
                <book-review :review="review" @remove-review="remove"></book-review>
              </li>
            </ul>
            <button @click="onReview=!onReview"><i class="fa-solid fa-plus"></i></button>
            <add-review v-if="onReview" @new-review="addReview"></add-review>
            <!-- <button @click="close" @keyup.esc="close">close</button> -->
            <router-link to="/book" class="btn-route">
            <button class="btn-back"><i class="fa-solid fa-angles-left"></i></button>
            </router-link>
        </section>
    `,
    data() {
        return {
            book: null,
            onReview: false
        }
    },
    created() {
        const id = this.$route.params.bookId
        bookService.get(id)
            .then(book => this.book = book)
    },
    components: {
        longText,
        addReview,
        bookReview,
    },
    methods: {
        remove(reviewId) {
            console.log('removed', reviewId)

            bookService.removeReview(this.book.id, reviewId).then(() => {
                var currReviewIdx = this.book.reviews.findIndex((review) => review.id === reviewId)
                this.book.reviews.splice(currReviewIdx, 1)
            })
        },
        addReview(newReview) {
            bookService.addReview(this.book.id, newReview).then(() => {
                console.log('recived', newReview)
                if (!this.book.reviews) this.book.reviews = []
                this.book.reviews.push(newReview)
                this.onReview = !this.onReview
            })
        },
    },
    computed: {
        bookImgUrl() {
            return this.book.thumbnail
        },
        formattedCurrency() {
            var formatter = Intl.NumberFormat('en-US', { style: 'currency', currency: this.book.listPrice.currencyCode, })
            return formatter.format(this.book.listPrice.amount)
        },
        setPriceColor() {
            var price = this.book.listPrice.amount
            // console.log(price > 150)
            return { red: price > 150, green: price < 20 }
        },
        formattedDate() {
            var currYear = new Date().getFullYear()
            // if()
            var bookYear = this.book.publishedDate
            if (currYear - bookYear > 10) return 'Vetern Book'
            if (currYear - bookYear < 1) return 'New Book!'
        },
        formattedLength() {
            var pageCount = this.book.pageCount
            if (pageCount > 500) return 'Long reading'
            if (pageCount > 200) return 'Decent reading'
            if (pageCount < 200) return 'Light reading'
        },
        getReviews() {
            return this.book.reviews
        },
    }
}