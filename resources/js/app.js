import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import UserLayout from './Shared/UserLayout';
import AdminLayout from './Shared/AdminLayout';
import Notifications from 'notiwind';

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
            .mount(el)
    },

    title: title => `Arm-Commerce | ${title}`
})

InertiaProgress.init({
    delay: 250,

    color: "rgb(2 132 199)",

    showSpinner: true
})