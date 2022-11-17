<template>
    <Head title="To Receive" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="1 + 1 == 2 ? 'mb-32' : 'mb-10'"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        To Receive
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        See all products to be receive here.
                    </p>
                </div>

                <template v-if="shippingsData.length == 0">
                    <div class="flex items-center justify-center h-64">
                        <h1 class="text-xl text-blue-500 font-semibold">
                            No item to be receive yet...
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
                                        <div
                                            class="mt-4 sm:-mt-0 flex space-x-3"
                                        >
                                            <button
                                                @click="
                                                    productReceive(list.billId)
                                                "
                                                class="rounded-md border border-gray-300 hover:bg-gray-100 text-indigo-500 p-2.5 text-sm"
                                            >
                                                Order receive
                                            </button>
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
                                            class="self-center h-6 w-6 fill-green-500"
                                        >
                                            <path
                                                d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"
                                            />
                                        </svg>
                                        <p class="text-green-600 text-sm">
                                            Your item is on delivery.
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
                    list.total +=
                        ship.order.cart.price * ship.order.cart.quantity;
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

        productReceive(billId) {
            var orderIds = [];

            this.shippingsData.forEach((item) => {
                if (item.order.bill_id == billId) {
                    orderIds.push(item.order.id);
                }
            });

            this.$swal
                .fire({
                    text: "Confirm the product has been received?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "rgb(99 102 241)",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.$inertia.patch(
                            "/user/purchase/to-receive",
                            { orderIds: orderIds },
                            {
                                preserveScroll: true,
                                onSuccess: () => {
                                    let dataLength = this.shippingsData.length;
                                    for (var i = dataLength - 1; i >= 0; i--) {
                                        if (
                                            orderIds.includes(
                                                this.shippingsData[i].order_id
                                            )
                                        ) {
                                            this.shippingsData.splice(i, 1);
                                        }
                                    }

                                    this.shipLists.forEach((item, key) => {
                                        if (item.billId == billId) {
                                            this.shipLists.splice(key, 1);
                                        }
                                    });

                                    this.$swal.fire(
                                        "Success!",
                                        "Thank you for your commitment",
                                        "success"
                                    );
                                },
                                onError: () => {
                                    this.$swal.fire(
                                        "Failed!",
                                        "Something went wrong, please try again.",
                                        "error"
                                    );
                                },
                            }
                        );
                    }
                });
        },
    },
};
</script>
