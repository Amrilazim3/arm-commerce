<template>
    <TransitionRoot as="template" :show="cartSliderStore.isClicked">
        <Dialog
            as="div"
            class="relative z-10"
            @close="cartSliderStore.isClicked = false"
        >
            <TransitionChild
                as="template"
                enter="ease-in-out duration-500"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-500"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
                    >
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                        >
                            <DialogPanel
                                class="pointer-events-auto w-screen max-w-md"
                            >
                                <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                >
                                    <div
                                        class="flex-1 overflow-y-auto py-6 px-4 sm:px-6"
                                    >
                                        <div
                                            class="flex items-start justify-between"
                                        >
                                            <DialogTitle
                                                class="text-lg font-medium text-gray-900"
                                                >Shopping cart</DialogTitle
                                            >
                                            <div
                                                class="ml-3 flex h-7 items-center"
                                            >
                                                <button
                                                    type="button"
                                                    class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    @click="
                                                        cartSliderStore.changeValue()
                                                    "
                                                >
                                                    <span class="sr-only"
                                                        >Close panel</span
                                                    >
                                                    <XIcon
                                                        class="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <template
                                            v-if="
                                                cartSliderStore.cartProducts
                                                    .length > 0
                                            "
                                        >
                                            <div class="mt-8">
                                                <div class="flow-root">
                                                    <ul
                                                        role="list"
                                                        class="-my-6 divide-y divide-gray-200"
                                                    >
                                                        <li
                                                            v-for="product in cartSliderStore.cartProducts"
                                                            :key="product.id"
                                                            class="flex py-6"
                                                        >
                                                            <div
                                                                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                                                            >
                                                                <img
                                                                    :src="
                                                                        product.imageUrl
                                                                            ? product.imageUrl
                                                                            : 'https://picsum.photos/200/300?random=' +
                                                                              product.id
                                                                    "
                                                                    :alt="
                                                                        product.name
                                                                    "
                                                                    class="h-full w-full object-cover object-center"
                                                                />
                                                            </div>

                                                            <div
                                                                class="ml-4 flex flex-1 flex-col"
                                                            >
                                                                <div>
                                                                    <div
                                                                        class="flex justify-between text-base font-medium text-gray-900"
                                                                    >
                                                                        <h3>
                                                                            <Link
                                                                                :href="
                                                                                    'https://arm-commerce.com/products/' +
                                                                                    product.slug
                                                                                "
                                                                                @click="
                                                                                    cartSliderStore.changeValue()
                                                                                "
                                                                                >{{
                                                                                    product.name
                                                                                }}</Link
                                                                            >
                                                                        </h3>
                                                                        <p
                                                                            class="ml-4 text-sm font-normal"
                                                                        >
                                                                            {{
                                                                                product.price
                                                                            }}
                                                                            MYR
                                                                        </p>
                                                                    </div>
                                                                    <p
                                                                        class="mt-1 text-sm text-gray-500"
                                                                    >
                                                                        {{
                                                                            product.variantName
                                                                        }}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    class="flex flex-1 items-end justify-between text-sm"
                                                                >
                                                                    <p
                                                                        class="text-gray-500"
                                                                    >
                                                                        Qty
                                                                        {{
                                                                            product.quantity
                                                                        }}
                                                                    </p>

                                                                    <div
                                                                        class="flex"
                                                                    >
                                                                        <button
                                                                            @click="
                                                                                removeProduct(
                                                                                    product.id
                                                                                )
                                                                            "
                                                                            type="button"
                                                                            class="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div
                                                class="grid place-items-center min-h-full"
                                            >
                                                <h2
                                                    class="text-normal font-normal text-gray-800"
                                                >
                                                    No products in cart
                                                </h2>
                                            </div>
                                        </template>
                                    </div>

                                    <div
                                        class="border-t border-gray-200 py-6 px-4 sm:px-6"
                                    >
                                        <template
                                            v-if="
                                                cartSliderStore.cartProducts
                                                    .length > 0
                                            "
                                        >
                                            <div
                                                class="flex justify-between text-base font-medium text-gray-900"
                                            >
                                                <p>Subtotal</p>
                                                <p>
                                                    {{
                                                        cartSliderStore.cartSubtotal
                                                    }}MYR
                                                </p>
                                            </div>
                                            <p
                                                class="mt-0.5 text-sm text-gray-500"
                                            >
                                                Shipping and taxes calculated at
                                                checkout.
                                            </p>
                                            <div class="mt-6">
                                                <button
                                                    @click="checkout"
                                                    class="w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Checkout
                                                </button>
                                            </div>
                                            <div
                                                class="mt-6 flex justify-center text-center text-sm text-gray-500"
                                            >
                                                <p>
                                                    or
                                                    <button
                                                        type="button"
                                                        class="font-medium text-indigo-600 hover:text-indigo-500"
                                                        @click="
                                                            cartSliderStore.changeValue()
                                                        "
                                                    >
                                                        Continue Shopping
                                                        <span
                                                            aria-hidden="true"
                                                        >
                                                            &rarr;</span
                                                        >
                                                    </button>
                                                </p>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div
                                                class="text-center text-sm text-gray-500"
                                            >
                                                <button
                                                    type="button"
                                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                                    @click="
                                                        cartSliderStore.changeValue()
                                                    "
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true">
                                                        &rarr;</span
                                                    >
                                                </button>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { useCartSliderStore } from "../Stores/CartSliderStore";
import axios from 'axios';

export default {
    setup() {
        const cartSliderStore = useCartSliderStore();

        return {
            cartSliderStore,
        };
    },

    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        XIcon,
    },

    mounted() {
        const cartSliderStore = useCartSliderStore();
        cartSliderStore.getCartProducts();
    },

    methods: {
        removeProduct(productId) {
            const cartSliderStore = useCartSliderStore();

            cartSliderStore.removeProduct(productId);
        },

        checkout() {
            const cartSliderStore = useCartSliderStore();

            var productIds = [];
            cartSliderStore.cartProducts.forEach((product) => {
                productIds.push(product.id);
            });

            axios.post("/user/carts/checkout", { productIds: productIds })
                .then(() => {
                    cartSliderStore.changeValue();

                    this.$inertia.get("/user/checkout");
                });
        },
    },
};
</script>
