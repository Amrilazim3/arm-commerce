<template>
    <Head title="Addresses" />
    <div class="lg:flex">
        <UserNav />
        <div class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1">
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div class="inline-block md:flex md:justify-between">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            My addresses
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            Address help the seller to detect where to send your
                            products to the right places.
                        </p>
                    </div>

                    <button
                        @click="isOpen = true"
                        class="mt-2 md:-mt-2 px-4 border border-transparent self-center py-1 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <p class="flex items-center">
                            <span class="text-2xl mr-1.5">+</span> Add address
                        </p>
                    </button>
                </div>

                <div class="flex flex-col">
                    <div
                        class="-my-2 overflow-x-auto align-middle sm:-mx-6 lg:-mx-8"
                    >
                        <div
                            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                        >
                            <div
                                class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
                            >
                                <table
                                    class="min-w-full divide-y divide-gray-200"
                                >
                                    <!-- loop all address here -->
                                    <tbody
                                        class="divide-y divide-gray-200 px-6"
                                    >
                                        <tr>
                                            <td
                                                class="whitespace-normal px-6 py-4"
                                            >
                                                <div
                                                    class="flex items-center max-w-sm md:max-w-md"
                                                >
                                                    <div
                                                        class="text-sm font-medium text-gray-900"
                                                    >
                                                        <p>
                                                            Lorong haji miskon
                                                            kampung parit bareng
                                                            tepi surau tiang
                                                            nombor 3
                                                        </p>
                                                        <h2>Parit raja</h2>
                                                        <h2>
                                                            86400, Batu pahat
                                                        </h2>
                                                        <h2>Johor</h2>
                                                    </div>
                                                </div>
                                            </td>

                                            <td
                                                class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                                            >
                                                <a
                                                    href="#"
                                                    class="text-indigo-600 hover:text-indigo-900"
                                                    >Edit</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-red-500 hover:text-red-600"
                                                    >Delete</a
                                                >
                                            </td>
                                        </tr>

                                        <tr>
                                            <td
                                                class="whitespace-normal px-6 py-4"
                                            >
                                                <div
                                                    class="flex items-center max-w-sm md:max-w-md"
                                                >
                                                    <div
                                                        class="text-sm font-medium text-gray-900"
                                                    >
                                                        <p>
                                                            Lorong haji miskon
                                                            kampung parit bareng
                                                            tepi surau tiang
                                                            nombor 3
                                                        </p>
                                                        <h2>Parit raja</h2>
                                                        <h2>
                                                            86400, Batu pahat
                                                        </h2>
                                                        <h2>Johor</h2>
                                                    </div>
                                                </div>
                                            </td>

                                            <td
                                                class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                                            >
                                                <a
                                                    href="#"
                                                    class="text-indigo-600 hover:text-indigo-900"
                                                    >Edit</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-red-500 hover:text-red-600"
                                                    >Delete</a
                                                >
                                            </td>
                                        </tr>

                                        <tr>
                                            <td
                                                class="whitespace-normal px-6 py-4"
                                            >
                                                <div
                                                    class="flex items-center max-w-sm md:max-w-md"
                                                >
                                                    <div
                                                        class="text-sm font-medium text-gray-900"
                                                    >
                                                        <p>
                                                            Lorong haji miskon
                                                            kampung parit bareng
                                                            tepi surau tiang
                                                            nombor 3
                                                        </p>
                                                        <h2>Parit raja</h2>
                                                        <h2>
                                                            86400, Batu pahat
                                                        </h2>
                                                        <h2>Johor</h2>
                                                    </div>
                                                </div>
                                            </td>

                                            <td
                                                class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                                            >
                                                <a
                                                    href="#"
                                                    class="text-indigo-600 hover:text-indigo-900"
                                                    >Edit</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-red-500 hover:text-red-600"
                                                    >Delete</a
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TransitionRoot as="template" :show="isOpen">
        <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="isOpen = false"
        >
            <div
                class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            >
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <span
                        class="fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity"
                    />
                </TransitionChild>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span
                    class="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                    >&#8203;</span
                >
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                    >
                        <div class="md:max-w-xl lg:max-w-2xl w-full space-y-8">
                            <div>
                                <h2
                                    class="mt-6 text-center text-3xl font-extrabold text-gray-900"
                                >
                                    Add Address
                                </h2>
                            </div>

                            <div class="bg-white px-4 sm:rounded-lg sm:px-10">
                                <form
                                    class="space-y-6"
                                    @submit.prevent="addAddress()"
                                >
                                    <div
                                        class="flex items-center justify-between space-x-1.5"
                                    >
                                        <div class="flex-1">
                                            <label
                                                for="phone-number"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Phone number
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    id="phone-number"
                                                    name="phone-number"
                                                    type="text"
                                                    autocomplete="phone-number"
                                                    required
                                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    v-model="
                                                        addressForm.phoneNumber
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <label
                                                for="full-name"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Full name
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    id="full-name"
                                                    name="full-name"
                                                    type="text"
                                                    autocomplete="full-name"
                                                    required
                                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    :disabled="addressForm.phoneNumber == null || addressForm.phoneNumber == ''"
                                                    v-model="
                                                        addressForm.fullName
                                                    "
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="flex items-center justify-between space-x-1.5"
                                    >
                                        <div class="flex-1">
                                            <label
                                                for="country"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                                :disabled="addressForm.fullName == ''"
                                                v-model="addressForm.country"
                                            >
                                                <option
                                                    selected
                                                    value=""
                                                    class="w-52 bg-gray-50 border-0 rounded-sm"
                                                >
                                                    Select Country
                                                </option>
                                                <template
                                                    v-for="country in countries"
                                                    :key="country.id"
                                                >
                                                    <option
                                                        :value="country.name"
                                                        class="w-52 bg-gray-50 border-0 rounded-sm"
                                                    >
                                                        {{ country.name }}
                                                    </option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="flex-1">
                                            <label
                                                for="state"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                State
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    id="state"
                                                    name="state"
                                                    type="text"
                                                    autocomplete="state"
                                                    required
                                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    :disabled="addressForm.country == ''"
                                                    v-model="addressForm.state"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="flex items-center justify-between space-x-1.5"
                                    >
                                        <div class="flex-1">
                                            <label
                                                for="city"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                City
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    id="city"
                                                    name="city"
                                                    type="text"
                                                    autocomplete="city"
                                                    required
                                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    :disabled="addressForm.state == ''"
                                                    v-model="addressForm.city"
                                                />
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <label
                                                for="postal-code"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Postal code
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    id="postal-code"
                                                    name="postal-code"
                                                    type="text"
                                                    autocomplete="postal-code"
                                                    required
                                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    :disabled="addressForm.city == ''"
                                                    v-model="
                                                        addressForm.postalCode
                                                    "
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex-1">
                                        <label
                                            for="street-name"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Street name
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                id="street-name"
                                                name="street-name"
                                                type="text"
                                                autocomplete="address"
                                                required
                                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                :disabled="addressForm.postalCode == null || addressForm.postalCode == ''"
                                                v-model="addressForm.streetName"
                                            />
                                        </div>
                                    </div>

                                    <div class="flex flex-row-reverse">
                                        <button
                                            type="submit"
                                            class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            @click="addAddress()"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            class="mr-2.5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                            @click="isOpen = false"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import UserNav from "../../../Shared/UserNav.vue";
import axios from "axios";

import {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";

export default {
    components: {
        UserNav,
        Dialog,
        DialogPanel,
        DialogTitle,
        DialogDescription,
        TransitionChild,
        TransitionRoot,
    },

    mounted() {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            var counter = 1;
            response.data.map((element) => {
                let object = {};
                object.name = element.name.common;
                object.id = counter;
                counter++;
                this.countries.push(object);
            });
        });
    },

    data() {
        return {
            isOpen: false,
            countries: [],
            addressForm: this.$inertia.form({
                phoneNumber: null,
                fullName: "",
                country: "",
                state: "",
                city: "",
                postalCode: null,
                streetName: "",
            }),
        };
    },

    methods: {
        addAddress() {
            console.log("hello");
        },
    },
};
</script>
