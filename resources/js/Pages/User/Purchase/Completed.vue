<template>
    <Head title="Completed" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="shippingsData.length <= 2 ? 'mb-32' : 'mb-10'"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Completed
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        See all completed product's status here.
                    </p>
                </div>

                <template v-if="shippingsData.length == 0">
                    <div class="flex items-center justify-center h-64">
                        <h1 class="text-xl text-blue-500 font-semibold">
                            No completed item yet...
                        </h1>
                    </div>
                </template>
                <template v-else>
                    <template v-for="list in shipLists" :key="list.billId">
                        <div class="p-4">
                            <div
                                class="mx-auto w-full rounded border border-gray-300 divide-y divide-gray-200"
                            >
                                <div class="p-5 bg-gray-50">
                                    <div class="sm:flex justify-between">
                                        <div class="flex space-x-6">
                                            <div>
                                                <h2
                                                    class="text-sm font-semibold"
                                                >
                                                    Date
                                                </h2>
                                                <p
                                                    class="text-sm text-gray-500"
                                                >
                                                    {{ list.createdAt }}
                                                </p>
                                            </div>
                                            <div>
                                                <h2
                                                    class="text-sm font-semibold"
                                                >
                                                    Total amount
                                                </h2>
                                                <p
                                                    class="text-sm text-gray-500"
                                                >
                                                    {{ list.total }}MYR
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            class="mt-4 sm:-mt-0 flex space-x-3"
                                        >
                                            <button
                                                @click="openBill(list.billId)"
                                                class="rounded-md border border-gray-300 p-2.5 text-sm"
                                            >
                                                View Receipt
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <template
                                    v-for="ship in shippingsData"
                                    :key="ship.id"
                                >
                                    <template
                                        v-if="ship.order.bill_id == list.billId"
                                    >
                                        <div class="p-5">
                                            <div class="flex space-x-4">
                                                <div class="w-36 h-36">
                                                    <img
                                                        :src="
                                                            ship.order.cart
                                                                .product.images
                                                                .length == 0
                                                                ? 'https://picsum.photos/200/100?random=' +
                                                                  ship.id
                                                                : ship.order
                                                                      .cart
                                                                      .product
                                                                      .images[0]
                                                                      .url
                                                        "
                                                        alt="dummy"
                                                        class="w-full h-full bg-gray-50 object-contain border rounded"
                                                    />
                                                </div>
                                                <div class="w-full">
                                                    <div
                                                        class="flex mb-2 justify-between"
                                                    >
                                                        <h3
                                                            class="text-black text-base fontsem"
                                                        >
                                                            {{
                                                                ship.order.cart
                                                                    .product
                                                                    .name
                                                            }}
                                                        </h3>
                                                        <h3
                                                            class="text-black text-base fontsem"
                                                        >
                                                            {{
                                                                ship.order.cart
                                                                    .price /
                                                                ship.order.cart
                                                                    .quantity
                                                            }}MYR
                                                        </h3>
                                                    </div>
                                                    <template
                                                        v-if="
                                                            ship.order.cart
                                                                .variant_name
                                                        "
                                                    >
                                                        <p
                                                            class="text-sm text-gray-500"
                                                        >
                                                            variant :
                                                            {{
                                                                ship.order.cart
                                                                    .variant_name
                                                            }}
                                                        </p>
                                                    </template>
                                                    <p
                                                        class="text-sm text-gray-500"
                                                    >
                                                        quantity :
                                                        {{
                                                            ship.order.cart
                                                                .quantity
                                                        }}
                                                    </p>
                                                    <p
                                                        class="text-sm text-gray-500"
                                                    >
                                                        total :
                                                        {{
                                                            ship.order.cart
                                                                .price
                                                        }}MYR
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-3 flex justify-end">
                                                <Link
                                                    :href="
                                                        '/products/' +
                                                        ship.order.cart.product
                                                            .slug
                                                    "
                                                    class="font-semibold text-sm text-indigo-500"
                                                >
                                                    Buy again
                                                </Link>
                                            </div>
                                        </div>
                                    </template>
                                </template>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";

export default {
    components: {
        SideNav,
    },

    props: {
        shippingsData: Array,
    },

    data() {
        return {
            shipLists: [],
        };
    },

    mounted() {
        this.shippingsData.forEach((ship) => {
            if (this.shipLists.length == 0) {
                let object = {
                    billId: ship.order.bill_id,
                    createdAt: ship.created_at,
                    total: ship.order.cart.price * ship.order.cart.quantity,
                };

                this.shipLists.push(object);

                return;
            }

            var isExistBillId = false;

            this.shipLists.forEach((list) => {
                if (list.billId == ship.order.bill_id) {
                    isExistBillId = true;
                    list.total +=
                        ship.order.cart.price * ship.order.cart.quantity;
                }
            });

            if (!isExistBillId) {
                let object = {
                    billId: ship.order.bill_id,
                    createdAt: ship.created_at,
                    total: ship.order.cart.price * ship.order.cart.quantity,
                };

                this.shipLists.push(object);
            }
        });
    },

    methods: {
        openBill(billId) {
            window.location.href =
                "https://www.billplz-sandbox.com/bills/" + billId;
        },
    },
};
</script>
