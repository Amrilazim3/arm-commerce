<template>
    <Head>
        <title>Products</title>
    </Head>

    <div class="bg-white">
        <div
            class="max-w-2xl mx-auto py-14 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div class="flex justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                    {{ category }} products
                </h2>

                <SearchBar :requests="requests" :categories="categories" />
            </div>

            <ProductsLayout :productsData="productsData" />
        </div>
    </div>
</template>

<script>
import ProductsLayout from "../../../Shared/ProductsLayout.vue";
import SearchBar from "../../../Shared/SearchBar.vue";

export default {
    components: {
        ProductsLayout,
        SearchBar
    },

    props: {
        productsData: Object,
        category: String,
        requests: Array,
        categories: Array,
    },
};
</script>
