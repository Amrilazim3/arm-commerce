<template>
    <Head>
        <title>Products</title>
        <meta name="keywords" content="arm-commerce products" />
        <meta
            name="description"
            content="Gym, fitness equipment and supplement"
        />
    </Head>

    <div class="bg-white">
        <div
            class="max-w-2xl mx-auto py-14 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                New Arrivals
            </h2>

            <div
                class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
                <template v-for="product in products" :key="product.id">
                    <div class="group relative">
                        <div
                            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                        >
                            <template v-if="product.images.length == 0">
                                <img
                                    :src="
                                        'https://picsum.photos/200/300?random=' +
                                        product.id
                                    "
                                    alt=""
                                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </template>
                            <template v-else>
                                <img
                                    :src="product.images[0].url"
                                    alt=""
                                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </template>
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                    <Link :href="'products/' + product.slug">
                                        <span
                                            aria-hidden="true"
                                            class="absolute inset-0"
                                        ></span>
                                        {{ product.name }}
                                    </Link>
                                </h3>
                                <p class="mt-1 text-sm text-indigo-500">
                                    {{ product.stock }} unit in stock
                                </p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">
                                {{ product.price }} MYR
                            </p>
                        </div>
                    </div>
                </template>
            </div>
            <Pagination class="flex justify-end" :links="productsData.links" />
        </div>
    </div>
</template>

<script>
import Pagination from "../../Shared/Pagination.vue";

export default {
    components: {
        Pagination
    },

    props: {
        productsData: Object,
    },

    data() {
        return {
            products: [],
        };
    },

    mounted() {
        this.products = this.productsData.data;
    },
};
</script>
