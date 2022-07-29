<template>
    <section>
        <MainNav />
    </section>

    <section>
        <Notifications />
        <VerificationNotice />
        <slot />
    </section>

    <section>
        <Footer />
    </section>
</template>

<script>
import MainNav from "./Partials/MainNav.vue";
import Footer from "./Partials/Footer.vue";
import VerificationNotice from "./VerificationNotice.vue";
import Notifications from "./Notifications.vue";

export default {
    components: {
        MainNav,
        Footer,
        Notifications,
        VerificationNotice
    },
};
</script>
