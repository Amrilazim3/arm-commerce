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
            <div class="flex justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                    New Arrivals
                </h2>

                <SearchBar :requests="requests" :categories="categories" />
            </div>

            <ProductsLayout :productsData="productsData" />
        </div>
    </div>
</template>

<script>
import ProductsLayout from "../../Shared/ProductsLayout.vue";
import SearchBar from "../../Shared/SearchBar.vue";

export default {
    components: {
        ProductsLayout,
        SearchBar
    },

    props: {
        productsData: Object,
        requests: Array,
        categories: Array,
    },

    mounted() {
        if (this.$page.props.flash.success == "payment success") {
            this.$swal
                .fire({
                    icon: "success",
                    title: "Success",
                    text: "Payment successful, thank you for your support.",
                    showCancelButton: true,
                    confirmButtonText: "view my purchase",
                    cancelButtonText: "okay",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.$inertia.get('user/purchase/to-ship');
                    }
                });
        }

        if (this.$page.props.flash.success == "payment failed") {
            this.$swal
                .fire({
                    icon: "error",
                    title: "Failed",
                    text: "Something went wrong when performing the payment.",
                    showCancelButton: true,
                    confirmButtonText: "view failed payment",
                    cancelButtonText: "close",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log("go to failed purchase page");
                    }
                });
        }
    },
};
</script>
