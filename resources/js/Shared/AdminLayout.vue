<template>
    <section>
        <MainNav />
    </section>

    <section>
        <AlertMessage />
        <slot />
    </section>

    <section>
        <Footer />
    </section>
</template>

<script>
import MainNav from "./MainNav.vue";
import Footer from "./Footer.vue";
import AlertMessage from "./AlertMessage.vue";

export default {
    components: {
        MainNav,
        Footer,
        AlertMessage
    },
};
</script>
