import { utilService } from '../services/util-service.js'

export default {
    template: `
        <section class="review-container">
            <form v-on:submit.prevent="submit" class="flex column align-center center">
                <input type="text" v-model="review.name" ref="nameInput" placeholder="Your name..." required>
                <input type="number" min="1" max="5" v-model="review.rating">
                <input type="date" v-model="review.readAt" ref="dateInput" required>
                <textarea name="" id="" cols="30" rows="10" v-model="review.text"></textarea>
                <button><i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </section>
    `,
    data() {
        return {
            review: {
                id: null,
                idImg: null,
                name: '',
                rating: 5,
                readAt: null,
                text: '',
            }
        }
    },
    created() {
        this.review.id = utilService.makeId(10)
    },
    mounted() {
        this.$refs.dateInput.valueAsDate = new Date()
        this.$refs.nameInput.focus()
    },
    methods: {
        submit() {
            this.review.text.trim()
            this.$emit('new-review', this.review)
        },
    },
    computed: {},
    unmounted() { },
}