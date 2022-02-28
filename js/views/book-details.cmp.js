import longText from '../cmps/long-text.cmp.js'

export default {
    props: ['book'],
    template: `
        <section class="book-details flex column">
            <div class="details-container">
            <h4>{{ book.title }}</h4>
            <long-text :txt="book.description" />
            <!-- <p>{{ book.description }}</p> -->
            <p><i class="fa-solid fa-gem"></i> {{ formattedDate }}</p>
            <p><i class="fa-solid fa-book"></i> {{ formattedLength }}</p>
            <p :class="setPriceColor">{{ formattedCurrency }}</p>
        </div>
        <img :src="bookImgUrl">
        <button class="btn-back" @click="$emit('close')"><i class="fa-solid fa-angles-left"></i></button>
        </section>
    `,
    components: {
        longText
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
        }
    }
}