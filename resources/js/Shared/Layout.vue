<template>
    <section>
        <Header />
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
import Header from "./Partials/Header.vue";
import Footer from "./Partials/Footer.vue";
import VerificationNotice from "./VerificationNotice.vue";
import Notifications from "./Notifications.vue";

export default {
    components: { Header, Footer, VerificationNotice, Notifications },
};
</script>
