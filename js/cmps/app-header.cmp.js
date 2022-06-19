import { eventBus } from '../services/eventBus-service.js'

export default {
    template: `
        <header class="app-header">
            <div ref="hero" class="header">
            <nav class="nav-bar">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/book">Books</router-link>
                </nav>
                <div class="sides">
               
            <div class="info">
            <h1 title="Bookshelf" @click="showBooks()">MISS BOOKS</h1>
            <div class="meta">
            By Amit
            </div>
            </div>
            </div>
            </div>
        </header>
    
    `,
    created() {
        this.unsubscribe = eventBus.on('home', this.setHero)
    },
    unmounted() {
    },
    methods: {
        setHero(isHome) {
            if (isHome) {
                this.$refs.hero.children[1].children[0].children[0].classList.value += 'big-hero-text'
                this.$refs.hero.classList.value += ' big-hero'
            } else {
                this.$refs.hero.children[1].children[0].children[0].classList.value = ''

                this.$refs.hero.classList.value = 'header'
            }
        },
        showBooks() {
            return this.$router.push(`/book`)
        }
    },
    computed: {

    },
}