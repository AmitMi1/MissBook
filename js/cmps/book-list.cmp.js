import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <h1>Bookshelf</h1>
            <ul class="clean-list flex wrap space-evenly">
                <li v-for="book in books" :key="book.id" class="book-preview-container" >
                   <book-preview :book="book" @selected="select(book.id)"/>
                   <hr>
                   <div class="actions">
                       <!-- <button @click="remove(car.id)">X</button>
                       <button @click="select(car)">Details</button> -->
                   </div>
                </li>
            </ul>
        </section>
    `,
    components: {
        bookPreview
    },
    methods: {
        remove(id) {
            this.$emit('remove', id)
        },
        select(id) {
            console.log(id)
            this.$emit('selected', id)
        }
    },
    computed: {}
}