<template>
    <header>
        <MainNav />

        <SubNav />

        <template v-if="$page.props.auth.isLoggedIn && !$page.props.auth.user.isAdmin">
            <CartSlideOver />
        </template>
    </header>
</template>

<script>
import MainNav from "./MainNav.vue";
import SubNav from "./SubNav.vue";
import CartSlideOver from "../CartSlideOver.vue";

export default {
    components: {
        MainNav,
        SubNav,
        CartSlideOver
    },
};
</script>
