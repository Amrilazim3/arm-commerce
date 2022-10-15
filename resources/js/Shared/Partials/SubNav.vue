<template>
    <nav class="hidden px-6 py-4 text-white bg-gray-700 md:block">
        <div class="flex justify-between">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="text-white fill-current h-7"
            >
                <path
                    d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z"
                />
            </svg>

            <div class="space-x-4 font-medium">
                <Link href="/category/fitness">Fitness</Link>
                <Link href="/category/workout">Workout</Link>
                <Link href="/category/supplement">Supplement</Link>
            </div>

            <div class="flex space-x-2 self-center">
                <template v-if="$page.props.auth.isLoggedIn">
                    <template v-if="$page.props.auth.user.isAdmin">
                        <!-- public/shop-lock-solid.svg -->
                        <!-- the reason we use the svg tag because we can directly change the icon color -->
                        <Link href="/admin/products">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                class="h-5 text-white fill-current"
                            >
                                <path
                                    d="M0 155.2C0 147.9 2.153 140.8 6.188 134.7L81.75 21.37C90.65 8.021 105.6 0 121.7 0H518.3C534.4 0 549.3 8.021 558.2 21.37L633.8 134.7C637.8 140.8 640 147.9 640 155.2C640 174.5 625.2 190.3 606.3 191.9C586.1 172.2 558.5 160 528 160C497.5 160 469.8 172.2 449.6 192H36.84C16.5 192 .0003 175.5 .0003 155.2H0zM384 224V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224H128V384H320V224H384zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 240C510.3 240 496 254.3 496 272V320H560V272C560 254.3 545.7 240 528 240z"
                                />
                            </svg>
                        </Link>
                    </template>
                    <template v-else>
                        <ShoppingCartIcon
                            @click="isOpenCartSlideOver = true"
                            class="h-6 w-6 self-center cursor-pointer"
                        />
                        <span class="font-semibold">0</span>
                    </template>
                </template>
                <template v-else>
                    <Link href="/login" class="flex space-x-2">
                        <ShoppingCartIcon
                            class="h-6 w-6 self-center cursor-pointer"
                        />
                        <span class="font-semibold">0</span>
                    </Link>
                </template>
            </div>
        </div>
    </nav>

    <TransitionRoot as="template" :show="isOpenCartSlideOver">
        <Dialog
            as="div"
            class="relative z-10"
            @close="isOpenCartSlideOver = false"
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
                                                        isOpenCartSlideOver = false
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

                                        <div class="mt-8">
                                            <div class="flow-root">
                                                <ul
                                                    role="list"
                                                    class="-my-6 divide-y divide-gray-200"
                                                >
                                                    <li
                                                        v-for="product in products"
                                                        :key="product.id"
                                                        class="flex py-6"
                                                    >
                                                        <div
                                                            class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                                                        >
                                                            <img
                                                                :src="
                                                                    product.imageSrc
                                                                "
                                                                :alt="
                                                                    product.imageAlt
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
                                                                        <a
                                                                            :href="
                                                                                product.href
                                                                            "
                                                                            >{{
                                                                                product.name
                                                                            }}</a
                                                                        >
                                                                    </h3>
                                                                    <p
                                                                        class="ml-4"
                                                                    >
                                                                        {{
                                                                            product.price
                                                                        }}
                                                                    </p>
                                                                </div>
                                                                <p
                                                                    class="mt-1 text-sm text-gray-500"
                                                                >
                                                                    {{
                                                                        product.color
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
                                    </div>

                                    <div
                                        class="border-t border-gray-200 py-6 px-4 sm:px-6"
                                    >
                                        <div
                                            class="flex justify-between text-base font-medium text-gray-900"
                                        >
                                            <p>Subtotal</p>
                                            <p>$262.00</p>
                                        </div>
                                        <p class="mt-0.5 text-sm text-gray-500">
                                            Shipping and taxes calculated at
                                            checkout.
                                        </p>
                                        <div class="mt-6">
                                            <a
                                                href="#"
                                                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >Checkout</a
                                            >
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
                                                        isOpenCartSlideOver = false
                                                    "
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true">
                                                        &rarr;</span
                                                    >
                                                </button>
                                            </p>
                                        </div>
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
import { ShoppingCartIcon } from "@heroicons/vue/solid";

export default {
    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        XIcon,
        ShoppingCartIcon,
    },

    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Throwback Hip Bag",
                    href: "#",
                    color: "Salmon",
                    price: "$90.00",
                    quantity: 1,
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
                    imageAlt:
                        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
                },
                {
                    id: 2,
                    name: "Medium Stuff Satchel",
                    href: "#",
                    color: "Blue",
                    price: "$32.00",
                    quantity: 1,
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
                    imageAlt:
                        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
                },
            ],
            isOpenCartSlideOver: false,
        };
    },
};
</script>
