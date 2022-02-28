import { router } from './router.js'
import bookApp from './views/book-app.cmp.js'
import appHeader from './cmps/app-header.cmp.js'

const options = {
    template: `
        <section>
            <app-header />
            <router-view />
            <!-- <book-app /> -->
            <!-- <app-footer /> -->
        </section>
    `,
    components: {
        bookApp,
        appHeader,
        // appFooter
    }
};

const app = Vue.createApp(options)
app.use(router)
app.mount('#app')

