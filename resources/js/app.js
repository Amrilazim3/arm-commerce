import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import UserLayout from './Shared/UserLayout';
import AdminLayout from './Shared/AdminLayout';
import Notifications from 'notiwind';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import 'maz-ui/css/main.css';
import '../css/app.css';
import MazInput from 'maz-ui/components/MazInput';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';

createInertiaApp({
    resolve: async name => {
        let page = (await
            import(`./Pages/${name}`)
        ).default;

        if (page.layout === undefined) {
            page.layout = UserLayout;
        }

        if (page.layout === null) {
            page.layout = AdminLayout;
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
            .component("MazInput", MazInput)
            .component("MazPhoneNumberInput", MazPhoneNumberInput)
            .mount(el)
    },

    title: title => `Arm-Commerce | ${title}`
})

InertiaProgress.init({
    delay: 250,

    color: "rgb(2 132 199)",

    showSpinner: true
})