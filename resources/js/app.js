import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout';
import HideSubNavLayout from './Shared/HideSubNavLayout';
import Notifications from 'notiwind';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import '../css/app.css';

createInertiaApp({
    resolve: async name => {
        let page = (await
            import(`./Pages/${name}`)
        ).default;

        if (page.layout === undefined) {
            page.layout = Layout;
        }

        if (page.layout === null) {
            page.layout = HideSubNavLayout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Notifications)
            .component("Link", Link)
            .component("Head", Head)
            .component("Datepicker", Datepicker)
            .mount(el)
    },

    title: title => `Arm-commerce | ${title}`
})

InertiaProgress.init({
    delay: 250,

    color: "rgb(2 132 199)",

    showSpinner: true
})