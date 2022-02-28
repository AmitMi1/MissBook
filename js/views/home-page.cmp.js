import { eventBus } from '../services/eventBus-service.js'

export default {
    template: `
        <section class="home-page app-main">
        </section>
    `,
    created() {
        eventBus.emit('home', true)
    },
    unmounted() {
        eventBus.emit('home', false)

    }
}