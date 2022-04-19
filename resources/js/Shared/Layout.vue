<template>
    <section>
        <Header />
    </section>

    <section>
        <slot />
    </section>

    <section>
        <Footer />
    </section>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    components: { Header, Footer },
};
</script>
