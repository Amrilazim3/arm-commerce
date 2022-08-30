<template>
    <Head title="Create Product" />
    <div class="lg:flex">
        <SideNav />
        <div class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1">
            <h1 class="text-xl font-semibold text-gray-900">Create product</h1>
            <form
                class="mt-6 space-y-3 divide-y divide-gray-300"
                @submit.prevent="createProduct()"
            >
                <div class="lg:flex">
                    <!-- left side -->
                    <div class="lg:w-1/2 pr-6">
                        <div class="mb-3 min-w-full">
                            <label
                                for="product-name"
                                class="font-medium inline-block mb-2 text-gray-700"
                                >Product name</label
                            >
                            <input
                                type="text"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                id="product-name"
                                placeholder="Heavy skipping rope"
                                v-model="product.name"
                                required
                            />
                            <div
                                v-if="product.errors.name"
                                class="text-red-500 text-sm mt-1"
                            >
                                {{ product.errors.name }}
                            </div>
                        </div>

                        <div class="mb-3 min-w-full">
                            <label
                                for="product-description"
                                class="font-medium inline-block mb-2 text-gray-700"
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

                        <div class="mb-3 min-w-full">
                            <label
                                for="product-description"
                                class="font-medium inline-block mb-2 text-gray-700"
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
                            <div class="mb-3 min-w-full">
                                <label
                                    for="product-description"
                                    class="font-medium inline-block mb-2 text-gray-700"
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

                        <div
                            class="mb-3 min-w-full flex space-x-3 lg:space-x-6"
                        >
                            <div>
                                <label
                                    for="product-stock"
                                    class="font-medium inline-block mb-2 text-gray-700"
                                    >Product stock</label
                                >
                                <input
                                    type="number"
                                    class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                    id="product-stock"
                                    min="0"
                                    placeholder="500"
                                    v-model="product.stock"
                                    required
                                />
                                <div
                                    v-if="product.errors.stock"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ product.errors.stock }}
                                </div>
                            </div>

                            <div>
                                <label
                                    for="product-price"
                                    class="font-medium inline-block mb-2 text-gray-700"
                                    >Product price</label
                                >
                                <input
                                    type="number"
                                    class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                    id="product-price"
                                    min="0"
                                    placeholder="0.00"
                                    v-model="product.price"
                                    required
                                />
                                <div
                                    v-if="product.errors.price"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ product.errors.price }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- right side -->
                    <div class="mt-10 lg:w-1/2 lg:mt-0 lg:pl-6">
                        <div>
                            <label
                                for="product-name"
                                class="font-medium inline-block mb-2 text-gray-700"
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
                                    @change="handleProductMediaUpload($event)"
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
                            class="mt-6 bg-white py-4 px-2 h-64 border rounded-md overflow-y-scroll"
                            v-if="previewMediaUploaded.length !== 0"
                        >
                            <div
                                class="flex w-full justify-between mb-2 bg-gray-50 border rounded-sm border-gray-300 rounded-md-md py-2 space-x-2 divide-x divide-gray-300"
                                v-for="(media, index) in previewMediaUploaded"
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

                        <!-- options -->
                        <div
                            class="mt-8 border bg-white rounded-md p-4 space-y-6"
                            :class="isHasOptions ? 'mb-4' : ''"
                        >
                            <!-- option message with checkbox -->
                            <div>
                                <label
                                    for="product-options"
                                    class="font-medium inline-block mb-2 text-gray-700"
                                    >Options</label
                                >
                                <div>
                                    <input
                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox"
                                        v-model="isHasOptions"
                                        :checked="
                                            isHasOptions ||
                                            isHasSecondOptions ||
                                            isHasThirdOptions
                                        "
                                        id="product-options"
                                    />
                                    <label
                                        class="form-check-label inline-block text-gray-800"
                                        for="product-variants"
                                    >
                                        This product has options, like size or
                                        color
                                    </label>
                                </div>
                            </div>

                            
                            <!-- option 1 -->
                            <!-- <div
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
                                                @click.prevent="
                                                    showOptionNamesList
                                                "
                                                @focus="
                                                    isFocusOptionNameInputOne = true
                                                "
                                                :required="isHasOptions"
                                            />
                                            <TrashIcon
                                                @click.prevent="
                                                    isHasOptions = false
                                                "
                                                class="self-center pl-2 cursor-pointer w-7 h-7"
                                            />
                                        </div>
                                        <div class="relative">
                                            <div
                                                class="absolute w-full mt-2 p-2 border rounded-md bg-white shadow-md"
                                                :class="
                                                    isShowOptionNamesList &&
                                                    isFocusOptionNameInputOne
                                                        ? 'block'
                                                        : 'hidden'
                                                "
                                                ref="optionNamesList"
                                            >
                                                <ul class="space-y-1.5">
                                                    <template
                                                        v-for="variant in variants"
                                                        :key="variant.id"
                                                    >
                                                        <li
                                                            @click.prevent="
                                                                selectOptionName(
                                                                    variant.name
                                                                )
                                                            "
                                                            class="px-1.5 py-2 rounded-md cursor-pointer hover:bg-indigo-200"
                                                        >
                                                            {{ variant.name }}
                                                        </li>
                                                    </template>
                                                </ul>
                                            </div>
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
                            </div> -->

                            <!-- option 2 -->
                            <!-- <div
                                :class="[
                                    'border-t',
                                    isHasSecondOptions ? 'block' : 'hidden',
                                ]"
                            >
                                <div class="px-6">
                                    <div>
                                        <label
                                            for="option-two"
                                            class="font-medium inline-block my-2 text-gray-700"
                                            >Option name</label
                                        >
                                        <div class="flex">
                                            <input
                                                type="text"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                                id="option-two"
                                                placeholder="Color"
                                                @click.prevent="
                                                    showOptionNamesList
                                                "
                                                @focus="
                                                    isFocusOptionNameInputTwo = true
                                                "
                                                :required="isHasSecondOptions"
                                            />
                                            <TrashIcon
                                                @click.prevent="
                                                    isHasSecondOptions = false
                                                "
                                                class="self-center cursor-pointer pl-2 w-7 h-7"
                                            />
                                        </div>
                                        <div class="relative">
                                            <div
                                                class="absolute w-full mt-2 p-2 border rounded-md bg-white shadow-md"
                                                :class="
                                                    isShowOptionNamesList &&
                                                    isFocusOptionNameInputTwo
                                                        ? 'block'
                                                        : 'hidden'
                                                "
                                                ref="optionNamesList"
                                            >
                                                <ul class="space-y-1.5">
                                                    <template
                                                        v-for="variant in variants"
                                                        :key="variant.id"
                                                    >
                                                        <li
                                                            @click.prevent="
                                                                selectOptionName(
                                                                    variant.name
                                                                )
                                                            "
                                                            class="px-1.5 py-2 rounded-md cursor-pointer hover:bg-indigo-200"
                                                        >
                                                            {{ variant.name }}
                                                        </li>
                                                    </template>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            for="option-two-values"
                                            class="font-medium inline-block my-2 text-gray-700"
                                            >Option values</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                            id="option-two-values"
                                            placeholder="Black"
                                            :required="isHasSecondOptions"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        class="mt-4 bg-white px-3 py-1.5 border border-gray-400 rounded-md font-semibold hover:bg-gray-100"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div> -->

                            <!-- option 3 (limit reached) -->
                            <!-- <div
                                :class="[
                                    'border-t',
                                    isHasThirdOptions ? 'block' : 'hidden',
                                ]"
                            >
                                <div class="px-6">
                                    <div>
                                        <label
                                            for="option-three"
                                            class="font-medium inline-block my-2 text-gray-700"
                                            >Option name</label
                                        >
                                        <div class="flex">
                                            <input
                                                type="text"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                                id="option-three"
                                                placeholder="Weight"
                                                @click.prevent="
                                                    showOptionNamesList
                                                "
                                                @focus="
                                                    isFocusOptionNameInputThree = true
                                                "
                                                :required="isHasThirdOptions"
                                            />
                                            <TrashIcon
                                                @click.prevent="
                                                    isHasThirdOptions = false
                                                "
                                                class="self-center cursor-pointer pl-2 w-7 h-7"
                                            />
                                        </div>
                                        <div class="relative">
                                            <div
                                                class="absolute w-full mt-2 p-2 border rounded-md bg-white shadow-md"
                                                :class="
                                                    isShowOptionNamesList &&
                                                    isFocusOptionNameInputThree
                                                        ? 'block'
                                                        : 'hidden'
                                                "
                                                ref="optionNamesList"
                                            >
                                                <ul class="space-y-1.5">
                                                    <template
                                                        v-for="variant in variants"
                                                        :key="variant.id"
                                                    >
                                                        <li
                                                            @click.prevent="
                                                                selectOptionName(
                                                                    variant.name
                                                                )
                                                            "
                                                            class="px-1.5 py-2 rounded-md cursor-pointer hover:bg-indigo-200"
                                                        >
                                                            {{ variant.name }}
                                                        </li>
                                                    </template>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            for="option-three-values"
                                            class="font-medium inline-block my-2 text-gray-700"
                                            >Option values</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                            id="option-three-values"
                                            placeholder="15 kg"
                                            :required="isHasThirdOptions"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        class="mt-4 bg-white px-3 py-1.5 border border-gray-400 rounded-md font-semibold hover:bg-gray-100"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div> -->

                            <!-- make this button dynamic -->
                            <!-- not finish yet (29/8/2022) -->
                            <!-- <div
                                class="border-t pt-3"
                                :class="
                                    (!isHasOptions &&
                                        isHasSecondOptions &&
                                        isHasThirdOptions) ||
                                    (isHasOptions &&
                                        isHasSecondOptions &&
                                        isHasThirdOptions)
                                        ? 'hidden'
                                        : 'block'
                                "
                            >
                                <button
                                    type="button"
                                    class="text-indigo-500 text-sm font-semibold"
                                    @click.prevent="addOptions"
                                >
                                    Add another option
                                </button>
                            </div> -->
                        </div>
                    </div>
                </div>

                <div class="flex pt-4 justify-end">
                    <button
                        type="submit"
                        class="inline-block px-4 py-2.5 bg-indigo-600 text-white font-medium text-sm leading-tight rounded-md shadow-md"
                        :disabled="!product.isDirty || product.processing"
                        :class="
                            !product.isDirty || product.processing
                                ? 'bg-indigo-400 cursor-not-allowed'
                                : 'hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out'
                        "
                    >
                        Save
                    </button>
                </div>
            </form>
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
import { TrashIcon } from "@heroicons/vue/outline";

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
    },

    props: {
        categories: Object,
        variants: Object,
    },

    data() {
        return {
            isCustomCategory: false,
            isHasOptions: false,
            isHasSecondOptions: false,
            isHasThirdOptions: false,
            isShowOptionNamesList: false,
            isFocusOptionNameInputOne: false,
            isFocusOptionNameInputTwo: false,
            isFocusOptionNameInputThree: false,
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

    // watch: {
    //     isHasOptions(condition) {
    //         if (
    //             condition == false &&
    //             (this.isHasSecondOptions == false ||
    //                 this.isHasThirdOptions == false)
    //         ) {
    //             this.isHasSecondOptions = false;
    //             this.isHasThirdOptions = false;
    //         }
    //     },
    // },

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

        addOptions() {
            if (this.isHasOptions) {
                if (this.isHasSecondOptions) {
                    this.isHasThirdOptions = true;
                    return;
                }
                this.isHasSecondOptions = true;
                return;
            }
            this.isHasOptions = true;
        },

        showOptionNamesList() {
            this.isShowOptionNamesList = !this.isShowOptionNamesList;
            setTimeout(
                () =>
                    window.addEventListener("click", this.hideOptionNamesList),
                100
            );
        },

        hideOptionNamesList(e) {
            if (!this.$refs.optionNamesList.contains(e.target)) {
                this.isShowOptionNamesList = false;
                window.removeEventListener("click", this.hideOptionNamesList);
            }
            this.isFocusOptionNameInputOne = false;
            this.isFocusOptionNameInputTwo = false;
            this.isFocusOptionNameInputThree = false;
        },

        selectOptionName(option) {
            console.log(option);
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
