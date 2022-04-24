<template>
    <section>
        <Header />
    </section>

    <section>
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

export default {
    components: { Header, Footer, VerificationNotice },
};
</script>
