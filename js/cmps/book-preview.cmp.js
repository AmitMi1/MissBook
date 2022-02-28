export default {
    props: ['book'],
    template: `
        <section class="book-preview">
           <h4>{{ book.title }}</h4>
           <div>
           <img :src="bookImgUrl" title="Click for details" @Click="select">
           </div>
           <p>{{ formattedCurrency }}</p>
        </section>
    `,
    data() {
        return {}
    },
    created() { },
    methods: {
        select(ev) {
            console.log(ev);
            if (ev.pointerType === 'touch') {
                setTimeout(() => {
                    return this.$router.push(`/book/${this.book.id}`)
                }, 650)
            } else return this.$router.push(`/book/${this.book.id}`)
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