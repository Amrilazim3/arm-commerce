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
                <Link
                    href="/products/categories/fitness"
                    :class="{
                        'text-blue-500': $page.url.includes('fitness'),
                    }"
                    >Fitness</Link
                >
                <Link
                    href="/products/categories/gym"
                    :class="{
                        'text-blue-500': $page.url.includes('gym'),
                    }"
                    >Gym</Link
                >
                <Link
                    href="/products/categories/supplement"
                    :class="{
                        'text-blue-500': $page.url.includes('supplement'),
                    }"
                    >Supplement</Link
                >
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
                            @click="cartSliderStore.changeValue()"
                            class="h-6 w-6 self-center cursor-pointer"
                        />
                        <span class="font-semibold">{{
                            cartSliderStore.cartProducts.length
                        }}</span>
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
</template>

<script>
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { useCartSliderStore } from "../../Stores/CartSliderStore";

export default {
    setup() {
        const cartSliderStore = useCartSliderStore();

        return {
            cartSliderStore,
        };
    },

    components: {
        ShoppingCartIcon,
    },
};
</script>
