<template>
    <header>
        <MainNav />

        <SubNav />
    </header>
</template>

<script>
import MainNav from "./MainNav.vue";
import SubNav from "./SubNav.vue";

export default {
    components: {
        MainNav,
        SubNav
    },
};
</script>
