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

            <ProductsLayout :productsData="productsData" />
        </div>
    </div>
</template>

<script>
import ProductsLayout from "../../Shared/ProductsLayout.vue";

export default {
    components: {
        ProductsLayout
    },

    props: {
        productsData: Object,
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
                        console.log("go to completed purchase page");
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
