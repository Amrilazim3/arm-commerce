<template>
    <Head title="Shippings" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 py-6 lg:flex-1"
            :class="shippings.length <= 3 ? 'mb-36' : ''"
        >
            <div>
                <h1 class="text-xl font-semibold text-gray-900">Shippings</h1>
                <p class="text-sm text-gray-600">
                    Make sure all products are ship in time
                </p>
            </div>
            <template v-if="shippings.length == 0">
                <div
                    class="w-full h-72 mt-6 grid place-items-center"
                >
                    <div>
                        <h3
                            class="text-xl font-bold text-blue-500 text-left mb-6"
                        >
                            Don't have any product to be shipped
                        </h3>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full mt-6">
                                    <thead class="border-b">
                                        <tr class="whitespace-nowrap">
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                #
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Phone Number
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Contact Email
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Address
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Product Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Variant
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Quantity
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- loop here -->
                                        <template
                                            v-for="shipItem in shippings"
                                            :key="shipItem.id"
                                        >
                                            <tr class="border-b">
                                                <td
                                                    class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                                >
                                                    {{ shipItem.id }}
                                                </td>
                                                <!-- tweaked -->
                                                <td
                                                    class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        shipItem.order.address
                                                            .full_name
                                                    }}
                                                </td>
                                                <td
                                                    class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        shipItem.order.address
                                                            .phone_number
                                                    }}
                                                </td>
                                                <td
                                                    class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        shipItem.order
                                                            .contact_email
                                                    }}
                                                </td>
                                                <td
                                                    class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                                >
                                                    {{
                                                        shipItem.order.address
                                                            .street_name
                                                    }}
                                                    {{
                                                        shipItem.order.address
                                                            .postal_code
                                                    }}
                                                    {{
                                                        shipItem.order.address
                                                            .city
                                                    }}
                                                    {{
                                                        shipItem.order.address
                                                            .state
                                                    }}
                                                </td>
                                                <td
                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                                >
                                                    <Link
                                                        :href="
                                                            'https://arm-commerce.com/products/' +
                                                            shipItem.order.cart
                                                                .product.slug
                                                        "
                                                        class="hover:font-semibold hover:text-indigo-600"
                                                    >
                                                        {{
                                                            shipItem.order.cart
                                                                .product.name
                                                        }}
                                                    </Link>
                                                </td>
                                                <td
                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                                >
                                                    {{
                                                        shipItem.order.cart
                                                            .variant_name ==
                                                        null
                                                            ? "-"
                                                            : shipItem.order
                                                                  .cart
                                                                  .variant_name
                                                    }}
                                                </td>
                                                <td
                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                                >
                                                    {{
                                                        shipItem.order.cart
                                                            .quantity
                                                    }}
                                                </td>
                                                <td
                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                                >
                                                    {{
                                                        shipItem.order.cart
                                                            .price
                                                    }}MYR
                                                </td>
                                                <td
                                                    class="justify-end self-center space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
                                                >
                                                    <button
                                                        class="bg-gray-50 border font-medium hover:bg-gray-200 hover:text-indigo-600 p-3 rounded text-indigo-500 text-right text-sm"
                                                        @click.prevent="
                                                            shipProduct(
                                                                shipItem.id
                                                            )
                                                        "
                                                    >
                                                        Ship now
                                                    </button>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Pagination
                        class="flex justify-end"
                        :links="shippingsData.links"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";
import Pagination from "../../../Shared/Pagination.vue";

export default {
    props: {
        shippingsData: Object,
    },

    components: {
        SideNav,
        Pagination,
    },

    data() {
        return {
            shippings: this.shippingsData.data,
        };
    },

    methods: {
        shipProduct(shipId) {
            this.$swal
                .fire({
                    title: "<p class='text-2xl'>Shipped this item?</p>",
                    text: "User will get notification for this action",
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonText: "Yes",
                    cancelButtonColor: "rgb(99, 102, 241)",
                    confirmButtonColor: "rgb(156, 163, 175)",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.$inertia.patch(`/admin/products/shippings/${shipId}`, {}, {
                            preserveScroll: true,
                            onSuccess: () => {
                                this.shippings.forEach((item, key) => {
                                    if (item.id == shipId) {
                                        this.shippings.splice(key, 1);
                                    }
                                })
                                this.$swal.fire('Product shipped!', '', 'success')
                            }
                        })
                    }
                });
        },
    },
};
</script>
