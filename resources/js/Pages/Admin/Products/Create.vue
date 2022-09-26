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
                        product_name: product.errors.name
                            ? product.errors.name
                            : '',
                        description: product.errors.description
                            ? product.errors.description
                            : '',
                        category: product.errors.category
                            ? product.errors.category
                            : '',
                        stock: product.errors.stock ? product.errors.stock : '',
                        price: product.errors.price ? product.errors.price : '',
                        media: product.errors.media ? product.errors.media : '',
                    }"
                >
                    <div class="space-y-8 sm:space-y-5">
                        <FormKit
                            type="text"
                            name="product_name"
                            label="Name"
                            placeholder="Heavy skipping rope"
                            validation="required"
                            validation-label="Name"
                            v-model="product.name"
                        />
                        <div class="w-full">
                            <label
                                class="font-semibold text-sm inline-block mb-1 text-gray-700"
                                >Description</label
                            >
                            <Tiptap v-model="product.description" />
                            <!-- just to use the validation for the description -->
                            <FormKit
                                name="description"
                                type="text"
                                validation="required|length:100"
                                wrapper-class="hidden"
                                v-model="product.description"
                            />
                        </div>
                        <div class="w-1/2">
                            <FormKit
                                label="Category"
                                type="select"
                                validation="required"
                                v-model="product.category"
                            >
                                <option value="" selected>
                                    Select category
                                </option>
                                <template
                                    v-for="category in categories"
                                    :key="category.id"
                                >
                                    <option>{{ category.name }}</option>
                                </template>
                            </FormKit>
                            <FormKit
                                type="button"
                                input-class="$reset border-transparent text-sm font-medium text-blue-500 bg-white hover:underline"
                                label="custom category"
                                @click="isCustomCategory = true"
                            />
                        </div>
                        <template v-if="isCustomCategory">
                            <div class="w-1/2">
                                <FormKit
                                    type="text"
                                    name="category"
                                    label="Custom category"
                                    inner-class="flex"
                                    suffixIcon="close"
                                    suffixIcon-class="ml-2.5 self-center h-4 w-4 cursor-pointer"
                                    @suffix-icon-click="closeCustomCategory"
                                    placeholder="Lifestyle"
                                    validation="required"
                                    validation-label="Custom category"
                                    v-model="product.category"
                                />
                            </div>
                        </template>
                        <div class="w-full flex space-x-3">
                            <FormKit
                                type="number"
                                name="stock"
                                label="Stock"
                                outer-class="flex-1"
                                placeholder="500"
                                validation="required|number"
                                validation-label="Product stock"
                                v-model="product.stock"
                            />
                            <FormKit
                                type="number"
                                step="any"
                                name="price"
                                label="Price"
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
                                    <p class="text-center">
                                        Upload product images / videos
                                    </p>
                                </label>
                                <!-- catch error for media -->
                                <FormKit
                                    name="media"
                                    type="text"
                                    validation="required"
                                    wrapper-class="hidden"
                                    v-model="product.media"
                                />
                            </div>
                            <div
                                class="mt-4 bg-white py-4 px-2 max-h-64 border rounded-md overflow-y-scroll"
                                v-if="previewProductMediaUploaded.length !== 0"
                            >
                                <div
                                    class="flex w-full justify-between mb-2 bg-gray-50 border rounded-md border-gray-300 py-2 space-x-2 divide-x divide-gray-300"
                                    v-for="(
                                        media, index
                                    ) in previewProductMediaUploaded"
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
                                outer-class="max-w-max"
                                input-class="$reset border-gray-300 focus:ring-indigo-500 formkit-input rounded text-indigo-600"
                                v-model="isHasOptions"
                            />
                            <template
                                v-for="(element, elementKey) in product.options"
                                :key="elementKey"
                            >
                                <div
                                    :class="[
                                        'border-t mt-4',
                                        isHasOptions ? 'block' : 'hidden',
                                    ]"
                                >
                                    <div class="px-6">
                                        <template v-if="element.isSaved">
                                            <div class="flex justify-between">
                                                <div class="mt-2.5">
                                                    <h3
                                                        class="text-base font-semibold"
                                                    >
                                                        {{ element.name }}
                                                    </h3>
                                                    <ul
                                                        class="flex flex-wrap text-gray-600 text-sm"
                                                    >
                                                        <template
                                                            v-for="value in element.values"
                                                            :key="value"
                                                        >
                                                            <template
                                                                v-if="
                                                                    value !== ''
                                                                "
                                                            >
                                                                <li
                                                                    class="border border-gray-300 rounded-md mb-1 mr-1.5 px-3 py-1 bg-indigo-200"
                                                                >
                                                                    {{ value }}
                                                                </li>
                                                            </template>
                                                        </template>
                                                    </ul>
                                                </div>
                                                <FormKit
                                                    type="button"
                                                    label="Edit"
                                                    input-class="$reset ml-2.5 bg-white px-3 py-1.5 border border-gray-400 rounded-md text-sm hover:bg-gray-100"
                                                    outer-class="self-center"
                                                    @click="
                                                        editOption(elementKey)
                                                    "
                                                />
                                            </div>
                                        </template>
                                        <template v-else>
                                            <FormKit
                                                type="form"
                                                @submit="saveOption(elementKey)"
                                                :submit-attrs="{
                                                    inputClass:
                                                        '$reset mt-4 bg-white px-3 py-1.5 border border-gray-400 rounded-md font-semibold hover:bg-gray-100',
                                                }"
                                                submit-label="Done"
                                            >
                                                <!-- option name -->
                                                <FormKit
                                                    label="Option name"
                                                    type="text"
                                                    :validation="[
                                                        ['required'],
                                                        ['uniqueOptionName'],
                                                    ]"
                                                    :validation-rules="{
                                                        uniqueOptionName,
                                                    }"
                                                    :validation-messages="{
                                                        uniqueOptionName: (
                                                            node
                                                        ) =>
                                                            `${node.node.value} has already been taken.`,
                                                    }"
                                                    :delay="150"
                                                    placeholder="Enter option name"
                                                    suffixIcon="trash"
                                                    wrapper-class="mt-4"
                                                    inner-class="flex"
                                                    suffixIcon-class="self-center pl-2 cursor-pointer w-7"
                                                    @suffix-icon-click="
                                                        removeOption(elementKey)
                                                    "
                                                    v-model="element.name"
                                                />
                                                <!-- option values -->
                                                <template
                                                    v-for="(
                                                        value, key
                                                    ) in element.values"
                                                    :key="key"
                                                >
                                                    <template v-if="key == 0">
                                                        <FormKit
                                                            label="Option values"
                                                            type="text"
                                                            validation-label="Option value"
                                                            :validation="[
                                                                ['required'],
                                                                [
                                                                    'uniqueOptionValues',
                                                                    elementKey,
                                                                ],
                                                            ]"
                                                            :validation-rules="{
                                                                uniqueOptionValues,
                                                            }"
                                                            :validation-messages="{
                                                                uniqueOptionValues:
                                                                    (node) =>
                                                                        `${node.node.value} has already been taken.`,
                                                            }"
                                                            :delay="150"
                                                            placeholder="Enter option value"
                                                            :suffixIcon="
                                                                element.values
                                                                    .length !==
                                                                1
                                                                    ? 'trash'
                                                                    : ''
                                                            "
                                                            wrapper-class="mt-4"
                                                            inner-class="flex"
                                                            suffixIcon-class="self-center pl-2 cursor-pointer w-7"
                                                            v-model="
                                                                element.values[
                                                                    key
                                                                ]
                                                            "
                                                            @keyup="
                                                                addOptionValueInput(
                                                                    elementKey,
                                                                    key
                                                                )
                                                            "
                                                            @suffix-icon-click="
                                                                removeOptionValueInput(
                                                                    elementKey,
                                                                    key
                                                                )
                                                            "
                                                        />
                                                    </template>
                                                    <template v-else>
                                                        <FormKit
                                                            type="text"
                                                            validation-label="Option value"
                                                            :validation="[
                                                                [
                                                                    element
                                                                        .values
                                                                        .length -
                                                                        1 !==
                                                                    key
                                                                        ? 'required'
                                                                        : '',
                                                                ],
                                                                [
                                                                    'uniqueOptionValues',
                                                                    elementKey,
                                                                ],
                                                            ]"
                                                            :validation-rules="{
                                                                uniqueOptionValues,
                                                            }"
                                                            :validation-messages="{
                                                                uniqueOptionValues:
                                                                    (node) =>
                                                                        `${node.node.value} has already been taken.`,
                                                            }"
                                                            :delay="150"
                                                            placeholder="Add another value"
                                                            suffixIcon="trash"
                                                            wrapper-class="mt-1"
                                                            inner-class="flex"
                                                            suffixIcon-class="self-center pl-2 cursor-pointer w-7"
                                                            v-model="
                                                                element.values[
                                                                    key
                                                                ]
                                                            "
                                                            @keyup="
                                                                addOptionValueInput(
                                                                    elementKey,
                                                                    key
                                                                )
                                                            "
                                                            @suffix-icon-click="
                                                                removeOptionValueInput(
                                                                    elementKey,
                                                                    key
                                                                )
                                                            "
                                                        />
                                                    </template>
                                                </template>
                                            </FormKit>
                                        </template>
                                    </div>
                                </div>
                            </template>
                            <!-- add another option button -->
                            <template
                                v-if="
                                    isHasOptions && product.options.length < 3
                                "
                            >
                                <FormKit
                                    type="button"
                                    outer-class="mt-6 border-t border-gray-300"
                                    input-class="$reset flex py-2 border-transparent text-sm font-medium text-blue-500 bg-white"
                                    prefixIcon="add"
                                    prefixIcon-class="self-center mr-2.5 w-4 h-4"
                                    label="add another option"
                                    @click="addNewOption"
                                />
                            </template>
                        </div>
                        <template v-if="product.variants.length > 0">
                            <div>
                                <label
                                    class="font-semibold text-sm inline-block mb-1 text-gray-700"
                                    >Variants</label
                                >
                                <div
                                    class="flex flex-col border rounded border-gray-300"
                                >
                                    <div class="overflow-x-scroll">
                                        <div class="inline-block min-w-full">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full">
                                                    <thead
                                                        class="bg-white border-b"
                                                    >
                                                        <tr
                                                            class="whitespace-nowrap"
                                                        >
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                            >
                                                                #
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                            >
                                                                highlight image
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                            >
                                                                name
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                            >
                                                                stock
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                            >
                                                                price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <template
                                                            v-for="(
                                                                variant, key
                                                            ) in product.variants"
                                                            :key="variant"
                                                        >
                                                            <tr
                                                                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                                            >
                                                                <td
                                                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                                                >
                                                                    {{
                                                                        key + 1
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                                                                >
                                                                    <template
                                                                        v-if="
                                                                            variant.isDelete
                                                                        "
                                                                    >
                                                                        <label
                                                                            class="flex flex-col"
                                                                        >
                                                                            <PhotographIcon
                                                                                class="h-8 self-center"
                                                                            />
                                                                        </label>
                                                                    </template>
                                                                    <template
                                                                        v-else
                                                                    >
                                                                        <template
                                                                            v-if="
                                                                                previewVariantsMediaUploaded[
                                                                                    key
                                                                                ]
                                                                            "
                                                                        >
                                                                            <div
                                                                                class="relative"
                                                                            >
                                                                                <img
                                                                                    :src="
                                                                                        previewVariantsMediaUploaded[
                                                                                            key
                                                                                        ]
                                                                                    "
                                                                                    alt="preview highlight image"
                                                                                    class="h-10 w-10 rounded object-cover mx-auto"
                                                                                />
                                                                                <XIcon
                                                                                    class="absolute top-0 right-5 h-4 w-4 cursor-pointer text-gray-800 p-0.5 bg-gray-300 rounded-full"
                                                                                    @click="
                                                                                        removeVariantMediaPreview(
                                                                                            key
                                                                                        )
                                                                                    "
                                                                                />
                                                                            </div>
                                                                        </template>
                                                                        <template
                                                                            v-else
                                                                        >
                                                                            <label
                                                                                class="cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                            >
                                                                                <input
                                                                                    type="file"
                                                                                    accept="image/*"
                                                                                    class="hidden"
                                                                                    @change="
                                                                                        handleVariantMediaUpload(
                                                                                            $event,
                                                                                            key
                                                                                        )
                                                                                    "
                                                                                />
                                                                                <PhotographIcon
                                                                                    class="h-8 self-center"
                                                                                />
                                                                            </label>
                                                                        </template>
                                                                    </template>
                                                                </td>
                                                                <td
                                                                    :class="[
                                                                        'text-sm  px-6 py-4 whitespace-nowrap',
                                                                        variant.isDelete
                                                                            ? 'line-through text-gray-700'
                                                                            : 'text-gray-900',
                                                                    ]"
                                                                >
                                                                    {{
                                                                        variant.name
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                                                                >
                                                                    <FormKit
                                                                        type="number"
                                                                        :validation="
                                                                            variant.isDelete
                                                                                ? ''
                                                                                : 'required|number|min:0'
                                                                        "
                                                                        :disabled="
                                                                            variant.isDelete
                                                                        "
                                                                        :validation-label="
                                                                            () => {
                                                                                let position =
                                                                                    key +
                                                                                    1;
                                                                                return (
                                                                                    'Stock variant ' +
                                                                                    position
                                                                                );
                                                                            }
                                                                        "
                                                                        input-class="$reset appearance-none block border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 formkit-input placeholder-gray-400 px-3 py-2 rounded-md shadow-sm sm:text-sm w-32"
                                                                        placeholder="0"
                                                                        v-model="
                                                                            variant.stock
                                                                        "
                                                                    />
                                                                </td>
                                                                <td
                                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                                                                >
                                                                    <FormKit
                                                                        type="number"
                                                                        step="any"
                                                                        :validation="
                                                                            variant.isDelete
                                                                                ? ''
                                                                                : 'required|number|min:0'
                                                                        "
                                                                        :disabled="
                                                                            variant.isDelete
                                                                        "
                                                                        :validation-label="
                                                                            () => {
                                                                                let position =
                                                                                    key +
                                                                                    1;
                                                                                return (
                                                                                    'Price variant ' +
                                                                                    position
                                                                                );
                                                                            }
                                                                        "
                                                                        input-class="$reset appearance-none block border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 formkit-input placeholder-gray-400 px-3 py-2 rounded-md shadow-sm sm:text-sm w-32"
                                                                        placeholder="0.00"
                                                                        v-model="
                                                                            variant.price
                                                                        "
                                                                    />
                                                                </td>
                                                                <td
                                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                                                                >
                                                                    <template
                                                                        v-if="
                                                                            variant.isDelete
                                                                        "
                                                                    >
                                                                        <ReplyIcon
                                                                            class="h-5 w-5 cursor-pointer"
                                                                            @click="
                                                                                unDeleteVariant(
                                                                                    key
                                                                                )
                                                                            "
                                                                        />
                                                                    </template>
                                                                    <template
                                                                        v-else
                                                                    >
                                                                        <TrashIcon
                                                                            class="h-5 w-5 cursor-pointer"
                                                                            @click="
                                                                                deleteVariant(
                                                                                    key
                                                                                )
                                                                            "
                                                                        />
                                                                    </template>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
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
    TrashIcon,
    UploadIcon,
    PhotographIcon,
    XIcon,
    ReplyIcon,
} from "@heroicons/vue/outline";

export default {
    components: {
        SideNav,
        Tiptap,
        TrashIcon,
        UploadIcon,
        PhotographIcon,
        XIcon,
        ReplyIcon,
    },

    props: {
        categories: Array,
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
                options: [],
                variants: [],
            }),
            previewProductMediaUploaded: [],
            previewVariantsMediaUploaded: [],
        };
    },

    watch: {
        isHasOptions(newCondition) {
            if (!newCondition) {
                this.product.options = [];
                if (this.product.variants.length > 0) {
                    this.generateVariants();
                }
                return;
            }

            this.product.options = [{ name: "", values: [""], isSaved: false }];
        },

        product: {
            handler(newObject) {
                if (newObject.description == "<p></p>") {
                    this.product.description = "";
                }

                if (newObject.options.length == 0) {
                    this.isHasOptions = false;
                }
            },
            deep: true,
        },
    },

    methods: {
        closeCustomCategory() {
            this.isCustomCategory = false;
            this.product.category = "";
        },

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
                                    this.previewProductMediaUploaded.push([
                                        reader.result,
                                        item[1].type,
                                    ]);
                                });
                                return;
                            }
                            this.previewProductMediaUploaded.push([
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
                        this.previewProductMediaUploaded.splice(index, 1);
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

        addOptionValueInput(objectKey, currentArrayKey) {
            if (
                currentArrayKey + 1 in this.product.options[objectKey].values ==
                false
            ) {
                this.product.options[objectKey].values.push("");
            }
        },

        removeOptionValueInput(objectKey, currentArrayKey) {
            this.product.options[objectKey].values.splice(currentArrayKey, 1);
        },

        addNewOption() {
            if (this.product.options.length <= 3) {
                this.product.options.push({
                    name: "",
                    values: [""],
                    isSaved: false,
                });
            }
        },

        removeOption(objectKey) {
            this.product.options.splice(objectKey, 1);
            this.generateVariants();
        },

        saveOption(objectKey) {
            this.product.options[objectKey].isSaved = true;
            this.generateVariants();
        },

        generateVariants() {
            let options = this.product.options;

            let generatedOptionsValues = [];
            for (let i = 0; i < options.length; i++) {
                generatedOptionsValues.push([]);
                options[i].values.map((value) => {
                    value !== "" ? generatedOptionsValues[i].push(value) : null;
                });
            }

            let variantsCombined = [];
            let temp = [];
            for (let i = 0; i < generatedOptionsValues.length; i++) {
                if (variantsCombined.length == 0 && i == 0) {
                    generatedOptionsValues[i].map((d) =>
                        variantsCombined.push(d)
                    );
                }

                if (i !== 0) {
                    variantsCombined.flatMap((d) => {
                        generatedOptionsValues[i].map((v) => {
                            temp.push(d + " / " + v);
                        });
                    });

                    variantsCombined = temp;
                    temp = [];
                }
            }

            let variants = this.product.variants;
            if (variants.length == 0) {
                variantsCombined.map((v, k) => {
                    variants.push({
                        name: v,
                        filePath: null,
                        stock: null,
                        price: null,
                        isDelete: false,
                    });

                    this.previewVariantsMediaUploaded[k] = undefined;
                });
            }

            if (variants.length !== 0) {
                for (let i = 0; i < variantsCombined.length; i++) {
                    if (variants[i] !== undefined) {
                        if (variants[i].name !== variantsCombined[i]) {
                            if (variants[i].filePath) {
                                this.$inertia.patch(
                                    "temp/media",
                                    {
                                        filePath: variants[i].filePath,
                                    },
                                    {
                                        preserveScroll: true,
                                    }
                                );

                                this.previewVariantsMediaUploaded[i] =
                                    undefined;
                            }

                            let existsInVariants = false;
                            variants.forEach((el, elKey) => {
                                if (el.name == variantsCombined[i]) {
                                    existsInVariants = true;

                                    if (
                                        this.previewVariantsMediaUploaded[
                                            elKey
                                        ] !== undefined
                                    ) {
                                        this.previewVariantsMediaUploaded[i] =
                                            this.previewVariantsMediaUploaded[
                                                elKey
                                            ];
                                    }

                                    variants[i] = {
                                        name: el.name,
                                        filePath: el.filePath,
                                        stock: el.stock,
                                        price: el.price,
                                        isDelete: el.isDelete,
                                    };
                                }
                            });

                            if (!existsInVariants) {
                                variants[i] = {
                                    name: variantsCombined[i],
                                    filePath: null,
                                    stock: null,
                                    price: null,
                                    isDelete: false,
                                };
                            }
                        }
                    }

                    if (variants[i] === undefined) {
                        variants.push({
                            name: variantsCombined[i],
                            filePath: null,
                            stock: null,
                            price: null,
                            isDelete: false,
                        });

                        this.previewVariantsMediaUploaded.push(undefined);
                    }
                }

                if (variants.length > variantsCombined.length) {
                    let previewVariantsMediaUploaded =
                        this.previewVariantsMediaUploaded;

                    if (variantsCombined.length == 0) {
                        variants.forEach((el, key) => {
                            if (el.filePath) {
                                this.$inertia.patch(
                                    "https://arm-commerce.com/admin/products/temp/media",
                                    {
                                        filePath: el.filePath,
                                    },
                                    {
                                        preserveScroll: true,
                                    }
                                );

                                previewVariantsMediaUploaded[key] = undefined;
                            }
                        });
                    }

                    let gap = variants.length - variantsCombined.length;
                    while (gap !== 0) {
                        variants.pop();
                        previewVariantsMediaUploaded.pop();
                        gap--;
                    }
                }
            }
        },

        deleteVariant(element) {
            let variant = this.product.variants[element];
            let options = variant.name.split(" / ");
            variant.isDelete = true;

            options.map((v, k) => {
                let hasOtherVariant = false;

                this.product.variants.forEach((el) => {
                    if (!el.isDelete) {
                        if (el.name.includes(v) && el.name.includes(" / ")) {
                            hasOtherVariant = true;
                        }
                    }
                });

                if (!hasOtherVariant) {
                    let optionValues = this.product.options[k].values;

                    optionValues.map((optV, optVK) => {
                        if (optV === v) {
                            optionValues.splice(optVK, 1);
                        }
                        if (
                            optionValues.length === 1 &&
                            optionValues.includes("")
                        ) {
                            this.removeOption(k);
                        }
                    });
                }
            });

            this.generateVariants();
        },

        unDeleteVariant(element) {
            this.product.variants[element].isDelete = false;
        },

        handleVariantMediaUpload(event, key) {
            var uploadedVariantMedia = event.target.files[0];

            this.$inertia.post(
                "temp/media",
                {
                    variant: uploadedVariantMedia,
                },
                {
                    preserveScroll: true,
                    onSuccess: (response) => {
                        this.previewVariantsMediaUploaded[key] =
                            URL.createObjectURL(uploadedVariantMedia);
                        this.product.variants[key].filePath =
                            response.props.flash.success;
                        this.$notify(
                            {
                                group: "success",
                                title: "Success",
                                text: "Highlight image uploaded",
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

        removeVariantMediaPreview(key) {
            this.$inertia.patch(
                "temp/media",
                { filePath: this.product.variants[key].filePath },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.previewVariantsMediaUploaded[key] = undefined;
                        this.product.variants[key].filePath = null;
                        this.$notify(
                            {
                                group: "success",
                                title: "Success",
                                text: "Highlight image removed",
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

        editOption(objectKey) {
            this.product.options[objectKey].isSaved = false;
        },

        uniqueOptionName(node) {
            let counter = 0;
            let options = this.product.options;

            for (let i = 0; i < 3; i++) {
                if (options[i] !== undefined) {
                    if (
                        options[i].name.toLowerCase() ==
                        node.value.toLowerCase()
                    ) {
                        counter++;
                    }
                }
            }

            if (counter >= 2) {
                counter = 0;
                return false;
            }
        },

        uniqueOptionValues(node, key) {
            let counter = 0;
            let values = this.product.options[key].values;

            values.forEach((el) => {
                if (el.toLowerCase() === node.value.toLowerCase()) {
                    counter++;
                }
            });

            if (counter >= 2) {
                counter = 0;
                return false;
            }
        },
    },
};
</script>
