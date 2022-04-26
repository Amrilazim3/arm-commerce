<template>
    <section>
        <Header />
    </section>

    <section>
        <AlertMessage />
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
import AlertMessage from "./AlertMessage.vue";

export default {
    components: { Header, Footer, VerificationNotice, AlertMessage },
};
</script>
