<template>
    <Head>
        <title>Products</title>
        <!-- <meta name="keywords" content="arm-commerce products" />
        <meta
            name="description"
            content="Gym, fitness equipment and supplement"
        /> -->
    </Head>

    <div class="bg-white">
        <div
            class="max-w-2xl mx-auto py-14 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                {{ category }} products
            </h2>

            <ProductsLayout :productsData="productsData" />
        </div>
    </div>
</template>

<script>
import ProductsLayout from '../../../Shared/ProductsLayout.vue';

export default {
    components: {
        ProductsLayout
    },

    props: {
        productsData: Object,
        category: String,
    },
};
</script>
