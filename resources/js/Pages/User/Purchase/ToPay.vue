<template>
    <Head title="To Pay" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="1 + 1 == 2 ? 'mb-32' : 'mb-10'"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        To Pay
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Complete all bills here.
                    </p>
                </div>

                <template v-for="bill in bills" :key="bill.billId">
                    <div class="p-4">
                        <div
                            class="mx-auto w-full rounded border border-gray-300 divide-y divide-gray-200"
                        >
                            <div class="sm:flex justify-between p-5 bg-gray-50">
                                <div class="flex space-x-6">
                                    <div>
                                        <h2 class="text-sm font-semibold">
                                            Bill number
                                        </h2>
                                        <p class="text-sm text-gray-500">
                                            {{ bill.billId }}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 class="text-sm font-semibold">
                                            Date placed
                                        </h2>
                                        <p class="text-sm text-gray-500">
                                            {{ bill.createdAt }}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 class="text-sm font-semibold">
                                            Total amount
                                        </h2>
                                        <p class="text-sm text-gray-500">
                                            {{ bill.total }}MYR
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-4 sm:-mt-0">
                                    <button
                                        @click="openBill(bill.billId)"
                                        class="rounded-md border border-gray-300 p-2.5 text-sm"
                                    >
                                        Pay Bill
                                    </button>
                                </div>
                            </div>

                            <template
                                v-for="order in ordersData"
                                :key="order.id"
                            >
                                <template v-if="order.bill_id == bill.billId">
                                    <div class="p-5">
                                        <div class="flex space-x-4">
                                            <div class="w-36 h-36">
                                                <img
                                                    :src="
                                                        'https://picsum.photos/200/100?random=' +
                                                        order.id
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
                                                            order.cart.product
                                                                .name
                                                        }}
                                                    </h3>
                                                    <h3
                                                        class="text-black text-base fontsem"
                                                    >
                                                        {{
                                                            order.cart.price /
                                                            order.cart.quantity
                                                        }}MYR
                                                    </h3>
                                                </div>
                                                <template
                                                    v-if="
                                                        order.cart.variant_name
                                                    "
                                                >
                                                    <p
                                                        class="text-sm text-gray-500"
                                                    >
                                                        variant :
                                                        {{
                                                            order.cart
                                                                .variant_name
                                                        }}
                                                    </p>
                                                </template>
                                                <p
                                                    class="text-sm text-gray-500"
                                                >
                                                    quantity :
                                                    {{ order.cart.quantity }}
                                                </p>
                                                <p
                                                    class="text-sm text-gray-500"
                                                >
                                                    total :
                                                    {{ order.cart.price }}MYR
                                                </p>
                                            </div>
                                        </div>
                                        <div class="mt-3 flex justify-end">
                                            <Link
                                                :href="'/products/' + order.cart.product.slug"
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
        ordersData: Array,
    },

    data() {
        return {
            bills: [],
        };
    },

    mounted() {
        this.ordersData.forEach((order) => {
            if (this.bills.length == 0) {
                let object = {
                    billId: order.bill_id,
                    createdAt: order.created_at,
                    total: order.cart.price,
                };

                this.bills.push(object);

                return;
            }

            var isExistBillId = false;

            this.bills.forEach((bill) => {
                if (bill.billId == order.bill_id) {
                    isExistBillId = true;
                    bill.total += order.cart.price;
                }
            });

            if (!isExistBillId) {
                let object = {
                    billId: order.bill_id,
                    createdAt: order.created_at,
                    total: order.cart.price,
                };

                this.bills.push(object);
            }
        });
    },

    methods: {
        openBill(billId) {
            window.location.href = 'https://www.billplz-sandbox.com/bills/' + billId;
        }
    }
};
</script>
