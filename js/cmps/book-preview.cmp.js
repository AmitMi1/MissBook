export default {
    props: ['book'],
    template: `
        <section class="book-preview">
           <h4>{{ book.title }}</h4>
           <div>
           <img :src="bookImgUrl" title="Click for details" @Click="select(book.id, $event)">
           </div>
           <p>{{ formattedCurrency }}</p>
        </section>
    `,
    data() {
        return {}
    },
    created() { },
    methods: {
        select(bookId, ev) {
            console.log(ev);
            if (ev.pointerType === 'touch') {
                setTimeout(() => {

                    this.$emit('selected', bookId)
                }, 500)
            } else this.$emit('selected', bookId)
        }
    },
    computed: {
        bookImgUrl() {
            return this.book.thumbnail
        },
        formattedCurrency() {
            var formatter = Intl.NumberFormat('en-US', { style: 'currency', currency: this.book.listPrice.currencyCode, })
            return formatter.format(this.book.listPrice.amount)
        }
    }
}