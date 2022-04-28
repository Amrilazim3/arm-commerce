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
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import VerificationNotice from "./VerificationNotice.vue";
import Notifications from "./Notifications.vue";

export default {
    components: { Header, Footer, VerificationNotice, Notifications },
};
</script>
