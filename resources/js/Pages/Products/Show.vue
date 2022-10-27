<template>
    <Head :title="product.name" />
    <div class="bg-white">
        <div class="pt-16">
            <nav aria-label="Breadcrumb">
                <ol
                    role="list"
                    class="mx-auto flex justify-between max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <div class="flex items-center space-x-2">
                        <div class="flex items-center">
                            <Link
                                :href="
                                    'https://arm-commerce.com/products/categories/' +
                                    product.category.slug
                                "
                                class="mr-2 text-sm font-medium text-gray-900"
                                >{{ product.category.name }}</Link
                            >
                            <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                class="h-5 w-4 text-gray-300"
                            >
                                <path
                                    d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"
                                />
                            </svg>
                        </div>
                        <li class="text-sm">
                            <Link
                                :href="
                                    'https://arm-commerce.com/products/' +
                                    product.slug
                                "
                                aria-current="page"
                                class="font-medium text-gray-500 hover:text-gray-600"
                                >{{ product.name }}</Link
                            >
                        </li>
                    </div>

                    <template v-if="$page.props.auth.isLoggedIn">
                        <template v-if="$page.props.auth.user.isAdmin">
                            <Link
                                :href="
                                    'https://arm-commerce.com/admin/products/' +
                                    product.slug +
                                    '/edit'
                                "
                                class="text-indigo-500 text-md font-semibold"
                            >
                                Edit
                            </Link>
                        </template>
                    </template>
                </ol>
            </nav>

            <!-- media -->
            <div
                class="mx-auto mt-6 max-w-2xl bg-gray-100 p-6 rounded-sm sm:px-6 lg:max-w-7xl lg:px-8 space-y-3"
            >
                <Carousel
                    id="gallery"
                    :items-to-show="1"
                    :wrap-around="false"
                    v-model="currentSlide"
                >
                    <Slide v-for="slide in product.images" :key="slide">
                        <div class="carousel__item">
                            <img
                                :src="slide"
                                alt=""
                                class="w-80 h-80 object-contain"
                            />
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>

                <Carousel
                    id="thumbnails"
                    :items-to-show="4"
                    :wrap-around="true"
                    v-model="currentSlide"
                    ref="carousel"
                >
                    <Slide v-for="(slide, key) in product.images" :key="slide">
                        <div class="carousel__item" @click="slideTo(key)">
                            <img
                                :src="slide"
                                alt=""
                                class="w-44 h-44 object-cover"
                            />
                        </div>
                    </Slide>
                </Carousel>
            </div>

            <div
                class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
            >
                <div
                    class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
                >
                    <h1
                        class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                    >
                        {{ product.name }}
                    </h1>
                </div>

                <!-- Options -->
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 class="sr-only">Product information</h2>
                    <p class="text-3xl tracking-tight text-gray-900">
                        {{ displayedPrice }} MYR
                    </p>

                    <!-- Reviews -->
                    <div class="mt-6">
                        <h3 class="sr-only">Reviews</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <StarIcon
                                    v-for="rating in [0, 1, 2, 3, 4]"
                                    :key="rating"
                                    :class="[
                                        reviews.average > rating
                                            ? 'text-gray-900'
                                            : 'text-gray-200',
                                        'h-5 w-5 flex-shrink-0',
                                    ]"
                                    aria-hidden="true"
                                />
                            </div>
                            <p class="sr-only">
                                {{ reviews.average }} out of 5 stars
                            </p>
                            <a
                                :href="reviews.href"
                                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >{{ reviews.totalCount }} reviews</a
                            >
                        </div>
                    </div>

                    <form class="mt-10">
                        <!-- available options -->
                        <template
                            v-for="(option, key) in product.options"
                            :key="option"
                        >
                            <div class="mt-10">
                                <div class="flex items-center justify-between">
                                    <h3
                                        class="text-sm font-medium text-gray-900"
                                    >
                                        {{ option.name }}
                                    </h3>
                                </div>

                                <RadioGroup
                                    v-model="selectedOptions[key]"
                                    class="mt-4"
                                >
                                    <RadioGroupLabel class="sr-only">
                                        Choose a {{ option.name }}
                                    </RadioGroupLabel>
                                    <div
                                        class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                    >
                                        <RadioGroupOption
                                            as="template"
                                            v-for="value in option.values"
                                            :key="value"
                                            :value="value"
                                            v-slot="{ active, checked }"
                                        >
                                            <div
                                                :class="[
                                                    active
                                                        ? 'ring-2 ring-indigo-500'
                                                        : '',
                                                    'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                                                ]"
                                            >
                                                <RadioGroupLabel as="span">{{
                                                    value
                                                }}</RadioGroupLabel>
                                                <span
                                                    :class="[
                                                        active
                                                            ? 'border'
                                                            : 'border-2',
                                                        checked
                                                            ? 'border-indigo-500'
                                                            : 'border-transparent',
                                                        'pointer-events-none absolute -inset-px rounded-md',
                                                    ]"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                            </div>
                        </template>

                        <!-- quantities -->
                        <div class="mt-10">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-medium text-gray-900">
                                    Quantity
                                </h3>
                            </div>
                            <vue-number-input
                                v-model="quantity"
                                :min="1"
                                :max="maxQuantity"
                                inline
                                center
                                controls
                                rounded
                                class="mt-4"
                            ></vue-number-input>
                            <p class="text-sm">
                                {{ this.maxQuantity }} stock available
                            </p>
                        </div>

                        <div class="flex space-x-3">
                            <button
                                type="submit"
                                @click.prevent="addToCart"
                                :disabled="isDisableButton"
                                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                                :class="
                                    isDisableButton
                                        ? 'cursor-not-allowed bg-gray-500 text-white'
                                        : 'hover:bg-gray-300 bg-gray-200 focus:ring-gray-500 text-black'
                                "
                            >
                                Add to cart
                            </button>
                            <button
                                type="submit"
                                @click.prevent="buyProduct"
                                :disabled="isDisableButton"
                                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                                :class="
                                    isDisableButton
                                        ? 'cursor-not-allowed bg-gray-500'
                                        : 'focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700'
                                "
                            >
                                Buy now
                            </button>
                        </div>
                        <template v-if="$page.props.auth.isLoggedIn">
                            <template v-if="$page.props.auth.user.isAdmin">
                                <p class="mt-4 text-sm text-red-500">
                                    Above button not working with admin.
                                </p>
                            </template>
                        </template>
                    </form>
                </div>

                <div
                    class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
                >
                    <!-- Description and details -->
                    <div>
                        <h3 class="sr-only">Description</h3>

                        <div
                            v-html="product.description"
                            class="space-y-6 prose max-w-max"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/solid";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useCartSliderStore } from "../../Stores/CartSliderStore";

export default {
    components: {
        StarIcon,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
        Carousel,
        Slide,
        Navigation,
    },

    props: {
        productData: Object,
    },

    data() {
        return {
            product: this.productData,
            displayedPrice: this.productData.price,
            reviews: {
                href: "#",
                average: 5,
                totalCount: 117,
            },
            selectedOptions: [],
            isDisableButton: false,
            quantity: 1,
            maxQuantity: this.productData.stock,
            currentSlide: 0,
        };
    },

    watch: {
        selectedOptions: {
            handler(newArr) {
                this.validateVariantion();
            },
            deep: true,
        },
    },

    mounted() {
        if (this.product.images.length == 0) {
            for (let i = 0; i < 5; i++) {
                this.product.images.push(
                    "https://picsum.photos/250/250?random=" + Math.random()
                );
            }
        }

        if (this.product.options.length > 0) {
            this.isDisableButton = true;
        }
    },

    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },

        addToCart() {
            if (
                this.$page.props.auth.isLoggedIn &&
                this.$page.props.auth.user.isAdmin
            ) {
                return;
            }

            var data = {};
            data.quantity = this.quantity;

            let variant = this.selectedOptions.join(" / ");
            data.variant = variant;

            data.price = this.displayedPrice;

            this.$inertia.post(
                `/user/products/${this.product.slug}/cart`,
                data,
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.maxQuantity -= this.quantity;

                        if (this.$page.props.auth.isLoggedIn) {
                            const cartSliderStore = useCartSliderStore();

                            this.$swal
                                .fire({
                                    icon: "success",
                                    title: "Success",
                                    text: "Product has been added to your cart",
                                    showCancelButton: true,
                                    confirmButtonText: "view cart",
                                    cancelButtonText: "continue shopping",
                                })
                                .then((result) => {
                                    if (result.isConfirmed) {
                                        cartSliderStore.changeValue();
                                    }
                                });

                            cartSliderStore.getCartProducts();
                        }
                    },
                    onError: () => {
                        if (this.$page.props.auth.isLoggedIn) {
                            this.$swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong! Please try again",
                            });
                        }
                    },
                }
            );
        },

        buyProduct() {
            if (
                this.$page.props.auth.isLoggedIn &&
                this.$page.props.auth.user.isAdmin
            ) {
                return;
            }

            var data = {};
            data.quantity = this.quantity;

            let variant = this.selectedOptions.join(" / ");
            data.variant = variant;

            data.price = this.displayedPrice;

            this.$inertia.post(
                `/user/products/${this.product.slug}/buy`,
                data,
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.maxQuantity -= this.quantity;
                        
                        if (this.$page.props.auth.isLoggedIn) {
                            const cartSliderStore = useCartSliderStore();

                            cartSliderStore.getCartProducts();

                            this.$inertia.get("/user/checkout");
                        }
                    },
                    onError: () => {
                        if (this.$page.props.auth.isLoggedIn) {
                            this.$swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong! Please try again",
                            });
                        }
                    },
                }
            );
        },

        validateVariantion() {
            var joinedOption = this.selectedOptions.join(" / ");

            var variantExists = false;
            this.product.variants.forEach((variant) => {
                if (variant.name == joinedOption) {
                    variantExists = true;

                    this.maxQuantity = variant.stock;
                    this.displayedPrice = variant.price;

                    if (variant.image_url) {
                        this.product.images.map((image, key) => {
                            if (image == variant.image_url) {
                                this.currentSlide = key;
                            }
                        });
                    }
                }
            });

            if (variantExists) {
                this.isDisableButton = false;
            }

            if (!variantExists) {
                this.isDisableButton = true;
            }
        },
    },
};
</script>
