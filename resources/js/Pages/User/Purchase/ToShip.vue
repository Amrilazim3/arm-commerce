<template>
    <Head title="To Ship" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="1 + 1 == 2 ? 'mb-32' : 'mb-10'"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        To Ship
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        See all products to be ship here.
                    </p>
                </div>

                <template v-if="shippingsData.length == 0">
                    <div class="flex items-center justify-center h-64">
                        <h1 class="text-xl text-blue-500 font-semibold">
                            No item to be ship yet...
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
                                                    Date placed
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
                                        <div class="mt-4 sm:-mt-0">
                                            <button
                                                @click="openBill(list.billId)"
                                                class="rounded-md border border-gray-300 p-2.5 text-sm"
                                            >
                                                View Receipt
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-3 max-w-md">
                                        <h2 class="text-sm font-semibold">
                                            Shipping address
                                        </h2>
                                        <p class="text-sm text-gray-500">
                                            {{ list.address }}
                                        </p>
                                    </div>
                                    <div class="mt-4 flex space-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                            class="h-6 w-6 self-center fill-green-500"
                                        >
                                            <path
                                                d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"
                                            />
                                        </svg>
                                        <p class="text-green-600 text-sm">
                                            Your item is being prepared.
                                        </p>
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
                                                            ship.order.cart.product.images.length == 0 ?
                                                            'https://picsum.photos/200/100?random=' +
                                                            ship.id : 
                                                            ship.order.cart.product.images[0].url
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
                                                    View product
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
        shippingsData: Object,
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
                    address:
                        ship.order.address.street_name +
                        " " +
                        ship.order.address.postal_code +
                        " " +
                        ship.order.address.city +
                        " " +
                        ship.order.address.state,
                };

                this.shipLists.push(object);

                return;
            }

            var isExistBillId = false;

            this.shipLists.forEach((list) => {
                if (list.billId == ship.order.bill_id) {
                    isExistBillId = true;
                    list.total += ship.order.cart.price * ship.order.cart.quantity;
                }
            });

            if (!isExistBillId) {
                let object = {
                    billId: ship.order.bill_id,
                    createdAt: ship.created_at,
                    total: ship.order.cart.price * ship.order.cart.quantity,
                    address:
                        ship.order.address.street_name +
                        " " +
                        ship.order.address.postal_code +
                        " " +
                        ship.order.address.city +
                        " " +
                        ship.order.address.state,
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
