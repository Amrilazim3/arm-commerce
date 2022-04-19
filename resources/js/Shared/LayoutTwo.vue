<template>
    <section>
        <MainNav />
    </section>

    <section>
        <slot />
    </section>

    <section>
        <Footer />
    </section>
</template>

<script>
import MainNav from "./MainNav.vue"
import Footer from "./Footer.vue"

export default {
    components: {
        MainNav,
        Footer
    }    
}
</script>