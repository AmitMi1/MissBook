import { router } from './router.js'
import bookApp from './views/book-app.cmp.js'
import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
    template: `
        <section>
            <app-header />
            <user-msg></user-msg>
            <router-view />
            <!-- <book-app /> -->
            <!-- <app-footer /> -->
        </section>
    `,
    components: {
        bookApp,
        appHeader,
        userMsg
        // appFooter
    }
};

const app = Vue.createApp(options)
app.use(router)
app.mount('#app')

