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
                                :href="'https://arm-commerce.com/category/' + product.category.slug"
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

                    <template v-if="$page.props.auth.user.isAdmin">
                        <Link 
                            :href="'https://arm-commerce.com/admin/products/' + product.slug + '/edit'"
                            class="text-indigo-500 text-md font-semibold"
                        >
                            Edit
                        </Link>
                    </template>
                </ol>
            </nav>

            <!-- media -->
            <div
                class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
            >
                <div
                    class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block"
                >
                    <img
                        :src="
                            product.images[0] == undefined
                                ? 'https://picsum.photos/250/250?random=' +
                                  Math.random(10)
                                : product.images[0].url
                        "
                        class="h-full w-full object-cover object-center"
                    />
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div
                        class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg"
                    >
                        <img
                            :src="
                                product.images[1] == undefined
                                    ? 'https://picsum.photos/200/300?random=' +
                                      Math.random(10)
                                    : product.images[1].url
                            "
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div
                        class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg"
                    >
                        <img
                            :src="
                                product.images[2] == undefined
                                    ? 'https://picsum.photos/200/300?random=' +
                                      Math.random(10)
                                    : product.images[2].url
                            "
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
                <div
                    class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4"
                >
                    <img
                        :src="
                            product.images[3] == undefined
                                ? 'https://picsum.photos/200/300?random=' +
                                  Math.random(10)
                                : product.images[3].url
                        "
                        class="h-full w-full object-cover object-center"
                    />
                </div>
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
                        {{ product.price }} MYR
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

                    <!-- Available stock -->
                    <div class="mt-3">
                        <h3 class="sr-only">Available stock</h3>
                        <p class="font-medium text-md text-indigo-500">
                            {{ product.stock }} available stock
                        </p>
                    </div>

                    <form class="mt-10">
                        <!-- available options -->
                        <!-- <div>
                            <h3 class="text-sm font-medium text-gray-900">
                                Color
                            </h3>

                            <RadioGroup v-model="selectedColor" class="mt-4">
                                <RadioGroupLabel class="sr-only">
                                    Choose a color
                                </RadioGroupLabel>
                                <div class="flex items-center space-x-3">
                                    <RadioGroupOption
                                        as="template"
                                        v-for="color in product.colors"
                                        :key="color.name"
                                        :value="color"
                                        v-slot="{ active, checked }"
                                    >
                                        <div
                                            :class="[
                                                color.selectedClass,
                                                active && checked
                                                    ? 'ring ring-offset-1'
                                                    : '',
                                                !active && checked
                                                    ? 'ring-2'
                                                    : '',
                                                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                                            ]"
                                        >
                                            <RadioGroupLabel
                                                as="span"
                                                class="sr-only"
                                            >
                                                {{ color.name }}
                                            </RadioGroupLabel>
                                            <span
                                                aria-hidden="true"
                                                :class="[
                                                    color.class,
                                                    'h-8 w-8 border border-black border-opacity-10 rounded-full',
                                                ]"
                                            />
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </div> -->

                        <!-- <div class="mt-10">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-medium text-gray-900">
                                    Size
                                </h3>
                                <a
                                    href="#"
                                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >Size guide</a
                                >
                            </div>

                            <RadioGroup v-model="selectedSize" class="mt-4">
                                <RadioGroupLabel class="sr-only">
                                    Choose a size
                                </RadioGroupLabel>
                                <div
                                    class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                >
                                    <RadioGroupOption
                                        as="template"
                                        v-for="size in product.sizes"
                                        :key="size.name"
                                        :value="size"
                                        :disabled="!size.inStock"
                                        v-slot="{ active, checked }"
                                    >
                                        <div
                                            :class="[
                                                size.inStock
                                                    ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                    : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                active
                                                    ? 'ring-2 ring-indigo-500'
                                                    : '',
                                                'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                                            ]"
                                        >
                                            <RadioGroupLabel as="span">{{
                                                size.name
                                            }}</RadioGroupLabel>
                                            <span
                                                v-if="size.inStock"
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
                                            <span
                                                v-else
                                                aria-hidden="true"
                                                class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                            >
                                                <svg
                                                    class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                    viewBox="0 0 100 100"
                                                    preserveAspectRatio="none"
                                                    stroke="currentColor"
                                                >
                                                    <line
                                                        x1="0"
                                                        y1="100"
                                                        x2="100"
                                                        y2="0"
                                                        vector-effect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </div> -->

                        <button
                            type="submit"
                            class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add to bag
                        </button>
                    </form>
                </div>

                <div
                    class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
                >
                    <!-- Description and details -->
                    <div>
                        <h3 class="sr-only">Description</h3>

                        <div v-html="product.description" class="space-y-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/solid";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

export default {
    components: {
        StarIcon,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
    },

    props: {
        productData: Object,
    },

    data() {
        return {
            product: this.productData,
            reviews: {
                href: "#",
                average: 5,
                totalCount: 117,
            },
        };
    },

    mounted() {
        console.log(this.product.images[2]);
    }
};
</script>
