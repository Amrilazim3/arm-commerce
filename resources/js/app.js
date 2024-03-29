import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout';
import HideSubNavLayout from './Shared/HideSubNavLayout';
import Notifications from 'notiwind';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import '../css/app.css';
import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue';
import TailwindFormKitConfig from '../../formkit.config';
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueNumberInput from '@chenfengyuan/vue-number-input';
import { createPinia } from 'pinia';

const pinia = createPinia();
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
            .use(
                FormKitPlugin,
                defaultConfig(TailwindFormKitConfig)
            )
            .use(VueTippy, {
                directive: 'tippy', // => v-tippy
                component: 'tippy', // => <tippy/>
                componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
                defaultProps: {
                    placement: 'bottom',
                    allowHTML: true,
                },
            })
            .use(VueSweetalert2)
            .use(pinia)
            .component("Link", Link)
            .component("Head", Head)
            .component("Datepicker", Datepicker)
            .component(VueNumberInput.name, VueNumberInput)
            .mount(el)
    },
    title: title => `Arm-commerce | ${title}`
})

InertiaProgress.init({
    delay: 250,

    color: "rgb(2 70 199)",

    showSpinner: true
})