<template>
    <Head title="Create Product" />
    <div class="lg:flex">
        <SideNav />
        <div class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1">
            <h1 class="text-xl font-semibold text-gray-900">Create product</h1>
            <div class="mt-6 space-y-3 divide-y divide-gray-300">
                <div class="md:flex">
                    <div class="md:w-1/2">
                        <div class="mb-3 min-w-full">
                            <label
                                for="product-name"
                                class="form-label font-medium inline-block mb-2 text-gray-700"
                                >Product name</label
                            >
                            <input
                                type="text"
                                class="form-control block w-full lg:w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                id="product-name"
                                placeholder="Enter product name"
                                v-model="product.name"
                            />
                        </div>

                        <!-- use quill editor -->
                        <div class="mb-3 min-w-full">
                            <label
                                for="product-description"
                                class="form-label font-medium inline-block mb-2 text-gray-700"
                                >Product Description</label
                            >
                            <textarea
                                class="form-control block w-full lg:w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                id="product-description"
                                rows="5"
                                placeholder="Describe your product here"
                                v-model="product.description"
                            ></textarea>
                        </div>

                        <div class="mb-3 min-w-full">
                            <label
                                for="product-description"
                                class="form-label font-medium inline-block mb-2 text-gray-700"
                                >Product Category</label
                            >
                            <input
                                type="text"
                                class="form-control block w-full lg:w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                list="categories"
                                v-model="product.category"
                                placeholder="Select product category"
                            />
                            <datalist id="categories">
                                <option value="Fitness">Fitness</option>
                                <option value="Gym">Gym</option>
                                <option value="Supplement">Supplement</option>
                            </datalist>
                        </div>

                        <!-- still in research -->
                        <div class="flex mb-3">
                            <button
                                class="inline-block px-6 py-2.5 bg-indigo-600 text-white leading-tight rounded-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                add variation
                            </button>
                        </div>

                        <div class="mb-3 min-w-">
                            <label
                                for="product-stock"
                                class="form-label font-medium inline-block mb-2 text-gray-700"
                                >Product stock</label
                            >
                            <input
                                type="number"
                                class="form-control block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                id="product-stock"
                                min="0"
                                placeholder="Enter your available stock"
                                v-model="product.stock"
                            />
                        </div>

                        <div class="mb-3 min-w-">
                            <label
                                for="product-price"
                                class="form-label font-medium inline-block mb-2 text-gray-700"
                                >Product price</label
                            >
                            <input
                                type="number"
                                class="form-control block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                id="product-price"
                                min="0"
                                placeholder="Enter product price"
                                v-model="product.price"
                            />
                        </div>
                    </div>

                    <div class="mt-10 md:-mt-2 md:w-1/2">
                        <label
                            for="product-images"
                            class="flex flex-col cursor-pointer w-4/6 bg-white py-4 border border-gray-300 rounded-md-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <input
                                multiple
                                type="file"
                                id="product-images"
                                name="product-images"
                                accept="image/*"
                                class="hidden"
                                @change="handleProductImageUpload($event)"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                class="h-6 self-center"
                            >
                                <path
                                    d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"
                                />
                            </svg>
                            <p class="text-center">
                                Upload product images
                            </p>
                        </label>

                        <div class="mt-6">
                            <div class="flex w-4/6 justify-between mb-2 bg-white border border-gray-300 rounded-md-md py-2 space-x-2 divide-x divide-gray-300" v-for="(image, index) in product.images" :key="index">
                                <div class="px-3">{{ image.name }}</div>
                                <button class="px-3 hover:text-red-500" @click.prevent="product.images.splice(index, 1)">delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex pt-4 justify-end">
                    <button
                        type="button"
                        class="inline-block px-4 py-2.5 bg-indigo-600 text-white font-medium text-sm leading-tight rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click.prevent="createProduct"
                    >
                        Create
                    </button>
                </div>
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

    data() {
        return {
            product: this.$inertia.form({
                name: "",
                description: "",
                category: "",
                stock: null,
                price: null,
                images: [],
            }),

            // variant: '',
            // variants: [],
            // variantValue: '',
            // variantValues: {},
        };
    },

    methods: {
        handleProductImageUpload(event) {
            console.log(event.target.files[0]);
            this.product.images = [ ...this.product.images, event.target.files[0]  ];
            // send the received image to the back-end for each image.
        },

        createProduct() {
            this.product.post("/admin/products", {
                preserveScroll: true,
                onSuccess: () => {
                    this.$notify(
                        {
                            group: "success",
                            title: "Success",
                            text: "Product successfully created.",
                        },
                        3500
                    );
                },
                onError: () => {
                    this.$notify(
                        {
                            group: "error",
                            title: "Error",
                            text: "Product failed to be create.",
                        },
                        3500
                    );
                },
            });
        },

        /**
         * 
         * 
        addVariant(variant) {
            // var colour = ["A", "B"];
            // var size = ["Big", "Small", "Large"];
            // console.log(colour.flatMap(d => size.map(v => d + '-' + v))); guna untuk combine more than 1 variation values
            
            console.log('adding variant');
            this.variantValues[variant] = [];
            console.log(this.variantValues[variant])
            Object.assign(this.variantValues, {size: ['small', 'large']});
        },

        addToList() {
            console.log('adding variant value');
            this.variantValues[this.variant].push(this.variantValue);
            console.log(this.variantValues);
        },
         */
    },
};
</script>
