<template>
    <Head title="Create Product" />
    <div class="lg:flex">
        <SideNav />
        <div class="flex-1">
            <div class="container max-w-xl mx-auto my-10">
                <h1 class="text-xl font-semibold mb-6 text-gray-900">
                    Create product
                </h1>
                <FormKit
                    type="form"
                    form-class="p-3 sm:p-5 lg:p-6 bg-white border border-gray-300 rounded-md shadow-md space-y-3"
                    messages-class="$reset pt-5"
                    submit-label="Save"
                    :submit-attrs="{
                        outerClass: '$reset',
                        wrapperClass: '$reset mt-6 flex justify-end',
                    }"
                    :disabled="product.processing"
                    @submit="createProduct"
                    :input-errors="{
                        name: product.errors.name ? product.errors.name : '',
                        stock: product.errors.stock ? product.errors.stock : '',
                        price: product.errors.price ? product.errors.price : '',
                    }"
                >
                    <div class="space-y-8 sm:space-y-5">
                        <FormKit
                            type="text"
                            name="name"
                            label="Product name"
                            placeholder="Heavy skipping rope"
                            validation="required"
                            validation-label="Product name"
                            v-model="product.name"
                        />
                        <div class="w-full">
                            <label
                                for="product-description"
                                class="font-semibold text-sm inline-block mb-1 text-gray-700"
                                >Product Description</label
                            >
                            <Tiptap v-model="product.description" />
                            <div
                                v-if="product.errors.description"
                                class="text-red-500 text-sm mt-1"
                            >
                                {{ product.errors.description }}
                            </div>
                        </div>
                        <div class="w-full">
                            <label
                                for="product-category"
                                class="font-semibold text-sm inline-block mb-1 text-gray-700"
                                >Product Category</label
                            >
                            <Listbox
                                v-model="product.category"
                                :disabled="isCustomCategory"
                            >
                                <div class="relative">
                                    <ListboxButton
                                        class="relative w-full lg:w-1/2 border rounded-md py-2 pl-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm focus:text-gray-700 focus:bg-white focus:border-indigo-600"
                                        :class="
                                            isCustomCategory
                                                ? 'cursor-not-allowed bg-gray-200'
                                                : 'cursor-pointer bg-white'
                                        "
                                    >
                                        <span class="block truncate">{{
                                            product.category == ""
                                                ? "Select category"
                                                : product.category
                                        }}</span>
                                        <span
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                        >
                                            <SelectorIcon
                                                class="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </ListboxButton>

                                    <transition
                                        leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0"
                                    >
                                        <ListboxOptions
                                            class="mt-1 max-h-60 w-1/2 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                            :class="
                                                isCustomCategory
                                                    ? 'hidden'
                                                    : 'absolute'
                                            "
                                        >
                                            <ListboxOption
                                                v-slot="{ active, selected }"
                                                v-for="category in categories"
                                                :key="category.id"
                                                :value="category.name"
                                                as="template"
                                            >
                                                <li
                                                    :class="[
                                                        active
                                                            ? 'bg-indigo-100 text-gray-900'
                                                            : 'text-gray-900',
                                                        'relative cursor-pointer select-none py-2 pl-10 pr-4',
                                                    ]"
                                                >
                                                    <span
                                                        :class="[
                                                            selected
                                                                ? 'font-medium'
                                                                : 'font-normal',
                                                            'block truncate',
                                                        ]"
                                                    >
                                                        {{ category.name }}
                                                    </span>
                                                    <span
                                                        v-if="selected"
                                                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                                                    >
                                                        <CheckIcon
                                                            class="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </li>
                                            </ListboxOption>
                                            <ListboxOption>
                                                <li
                                                    @click.prevent="
                                                        isCustomCategory = true
                                                    "
                                                    class="relative cursor-pointer select-none py-2 w-full pl-10 pr-4 hover:bg-indigo-100"
                                                >
                                                    <span
                                                        class="relative cursor-pointer select-none py-2 pr-4"
                                                        >Custom category</span
                                                    >
                                                    <span
                                                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                                                        ><PlusSmIcon
                                                            class="h-5 w-5"
                                                    /></span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                            <div
                                v-if="
                                    product.errors.category &&
                                    isCustomCategory == false
                                "
                                class="text-red-500 text-sm mt-1"
                            >
                                {{ product.errors.category }}
                            </div>
                        </div>
                        <template v-if="isCustomCategory">
                            <div class="w-full">
                                <label
                                    for="custom-category"
                                    class="font-semibold text-sm inline-block mb-1 text-gray-700"
                                    >Custom category</label
                                >
                                <div class="flex space-x-3">
                                    <input
                                        type="text"
                                        class="form-control block w-full lg:w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                        id="product-name"
                                        placeholder="Lifestyle"
                                        v-model="product.category"
                                        required
                                    />
                                    <XCircleIcon
                                        @click.prevent="
                                            isCustomCategory = false;
                                            product.category = '';
                                        "
                                        class="h-5 w-5 cursor-pointer self-center text-indigo-500"
                                    />
                                </div>
                                <div
                                    v-if="product.errors.category"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ product.errors.category }}
                                </div>
                            </div>
                        </template>
                        <div class="w-full flex space-x-3">
                            <FormKit
                                type="number"
                                name="stock"
                                label="Product stock"
                                outer-class="flex-1"
                                placeholder="500"
                                validation="required|number"
                                validation-label="Product stock"
                                v-model="product.stock"
                            />
                            <FormKit
                                type="number"
                                name="price"
                                label="Product price"
                                placeholder="100"
                                outer-class="flex-1"
                                validation="required|number"
                                validation-label="Product price"
                                v-model="product.price"
                            />
                        </div>
                        <div class="pt-8">
                            <div>
                                <label
                                    for="product-media"
                                    class="font-semibold text-sm inline-block mb-1 text-gray-700"
                                    >Media</label
                                >
                                <label
                                    for="product-media"
                                    class="flex flex-col cursor-pointer w-full bg-white py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <input
                                        multiple
                                        type="file"
                                        id="product-media"
                                        name="product-media"
                                        accept="image/*,video/*"
                                        class="hidden"
                                        @change="
                                            handleProductMediaUpload($event)
                                        "
                                    />
                                    <UploadIcon class="h-6 self-center" />
                                    <!-- <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        class="h-6 self-center"
                                    >
                                        <path
                                            d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"
                                        />
                                    </svg> -->
                                    <p class="text-center">
                                        Upload product images / videos
                                    </p>
                                </label>
                                <div
                                    v-if="product.errors.media"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ product.errors.media }}
                                </div>
                            </div>
                            <div
                                class="mt-4 bg-white py-4 px-2 max-h-64 border rounded-md overflow-y-scroll"
                                v-if="previewMediaUploaded.length !== 0"
                            >
                                <div
                                    class="flex w-full justify-between mb-2 bg-gray-50 border rounded-sm border-gray-300 rounded-md-md py-2 space-x-2 divide-x divide-gray-300"
                                    v-for="(
                                        media, index
                                    ) in previewMediaUploaded"
                                    :key="index"
                                >
                                    <template v-if="media[1].includes('video')">
                                        <video
                                            :src="media[0]"
                                            controls
                                            class="pl-6 object-contain w-full h-52"
                                        />
                                    </template>
                                    <template v-else>
                                        <img
                                            :src="media[0]"
                                            :alt="index"
                                            class="pl-6 object-contain w-full h-52"
                                        />
                                    </template>
                                    <button
                                        class="px-3 hover:text-red-500"
                                        @click.prevent="
                                            handleProductMediaRemove(index)
                                        "
                                    >
                                        <TrashIcon class="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="pt-8">
                            <label
                                for="product-options"
                                class="font-semibold text-sm inline-block mb-2 text-gray-700"
                                >Options</label
                            >
                            <FormKit
                                type="checkbox"
                                label="This product has options, like size or color"
                                outer-class="mb-4"
                                v-model="isHasOptions"
                            />
                            <div
                                :class="[
                                    'border-t',
                                    isHasOptions ? 'block' : 'hidden',
                                ]"
                            >
                                <div class="px-6">
                                    <div>
                                        <label
                                            for="option-one"
                                            class="font-medium inline-block my-2 text-gray-700"
                                            >Option name</label
                                        >
                                        <div class="flex">
                                            <input
                                                type="text"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                                id="option-one"
                                                placeholder="Size"
                                                :required="isHasOptions"
                                            />
                                            <TrashIcon
                                                @click.prevent="
                                                    isHasOptions = false
                                                "
                                                class="self-center pl-2 cursor-pointer w-7 h-7"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            for="option-one-values"
                                            class="font-medium inline-block my-2 text-gray-700"
                                            >Option values</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                            id="option-one-values"
                                            placeholder="Big"
                                            :required="isHasOptions"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        class="mt-4 bg-white px-3 py-1.5 border border-gray-400 rounded-md font-semibold hover:bg-gray-100"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";
import Tiptap from "../../../Shared/Tiptap.vue";
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";
import {
    CheckIcon,
    SelectorIcon,
    PlusSmIcon,
    XCircleIcon,
} from "@heroicons/vue/solid";
import { TrashIcon, UploadIcon } from "@heroicons/vue/outline";

export default {
    components: {
        SideNav,
        Tiptap,
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
        CheckIcon,
        SelectorIcon,
        PlusSmIcon,
        XCircleIcon,
        TrashIcon,
        UploadIcon,
    },

    props: {
        categories: Object,
        variants: Object,
    },

    data() {
        return {
            isCustomCategory: false,
            isHasOptions: false,
            product: this.$inertia.form({
                name: "",
                description: "",
                category: "",
                stock: null,
                price: null,
                media: [],
            }),
            previewMediaUploaded: [],

            // variant: '',
            // variants: [],
            // variantValue: '',
            // variantValues: {},
        };
    },

    methods: {
        handleProductMediaUpload(event) {
            var uploadedMedia = event.target.files;

            // send data to the back end to be validate
            this.$inertia.post(
                "temp/media",
                {
                    media: uploadedMedia,
                },
                {
                    preserveScroll: true,
                    onSuccess: (response) => {
                        Object.entries(uploadedMedia).map((item, index) => {
                            this.product.media.push(
                                response.props.flash.success[index]
                            );

                            if (item[1].type == "video") {
                                let reader = new FileReader();
                                reader.readAsDataURL(item[1]);
                                reader.addEventListener("load", function () {
                                    this.previewMediaUploaded.push([
                                        reader.result,
                                        item[1].type,
                                    ]);
                                });
                                return;
                            }
                            this.previewMediaUploaded.push([
                                URL.createObjectURL(item[1]),
                                item[1].type,
                            ]);
                        });
                        this.$notify(
                            {
                                group: "success",
                                title: "Success",
                                text: "File uploaded",
                            },
                            3500
                        );
                    },
                    onError: () => {
                        this.$notify(
                            {
                                group: "error",
                                title: "Error",
                                text: "Something went wrong, Please try again",
                            },
                            3500
                        );
                    },
                }
            );
        },

        handleProductMediaRemove(index) {
            this.$inertia.patch(
                "temp/media",
                { filePath: this.product.media[index] },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.product.media.splice(index, 1);
                        this.previewMediaUploaded.splice(index, 1);
                        this.$notify(
                            {
                                group: "success",
                                title: "Success",
                                text: "File removed",
                            },
                            3500
                        );
                    },
                    onError: () => {
                        this.$notify(
                            {
                                group: "error",
                                title: "Error",
                                text: "Something went wrong, please try again",
                            },
                            3500
                        );
                    },
                }
            );
        },

        createProduct() {
            this.product.post("/admin/products", {
                preserveScroll: true,
                onSuccess: () => {
                    this.$notify(
                        {
                            group: "success",
                            title: "Success",
                            text: "Product successfully created",
                        },
                        3500
                    );
                },
                onError: () => {
                    this.$notify(
                        {
                            group: "error",
                            title: "Error",
                            text: "Product failed to be create",
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
