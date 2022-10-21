<template>
    <Head title="Addresses" />
    <div class="lg:flex">
        <SideNav />
        <div class="container p-12 mx-auto">
            <!-- <div class="flex flex-col w-full px-0 mx-auto md:flex-row"> -->
            <FormKit
                type="form"
                :actions="false"
                form-class="flex flex-col w-full px-0 mx-auto md:flex-row"
                @submit="checkout"
                messages-class="$reset hidden"
            >
                <div
                    class="flex flex-col space-y-8 divide-y divide-gray-300 md:w-2/4"
                >
                    <!-- contact -->
                    <div class="flex flex-col">
                        <h2 class="mb-4 font-semibold md:text-lg text-heading">
                            Contact Information
                        </h2>
                    </div>
                    <!-- shipping -->
                    <div class="flex flex-col">
                        <h2
                            class="pt-4 mb-4 font-semibold md:text-lg text-heading"
                        >
                            Shipping Information
                        </h2>
                        <div class="w-full max-w-md mb-6">
                            <RadioGroup v-model="selectedAddress">
                                <RadioGroupLabel class="sr-only"
                                    >Server size</RadioGroupLabel
                                >
                                <div class="space-y-2 mb-10">
                                    <RadioGroupOption
                                        as="template"
                                        v-for="address in addresses"
                                        :key="address.id"
                                        :value="address"
                                        v-slot="{ active, checked }"
                                    >
                                        <div
                                            :class="[
                                                active
                                                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300'
                                                    : '',
                                                checked
                                                    ? 'bg-indigo-600 bg-opacity-75 text-white '
                                                    : 'bg-white ',
                                            ]"
                                            class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
                                        >
                                            <div
                                                class="flex w-full items-center justify-between"
                                            >
                                                <div class="flex items-center">
                                                    <div class="text-sm">
                                                        <RadioGroupLabel
                                                            as="p"
                                                            :class="
                                                                checked
                                                                    ? 'text-white'
                                                                    : 'text-gray-900'
                                                            "
                                                            class="font-medium"
                                                        >
                                                            {{
                                                                address.full_name
                                                            }}
                                                            ({{
                                                                address.phone_number
                                                            }})
                                                        </RadioGroupLabel>
                                                        <RadioGroupDescription
                                                            as="span"
                                                            :class="
                                                                checked
                                                                    ? 'text-sky-100'
                                                                    : 'text-gray-500'
                                                            "
                                                            class="inline"
                                                        >
                                                            <span>
                                                                {{
                                                                    address.street_name
                                                                }}
                                                            </span>
                                                        </RadioGroupDescription>
                                                    </div>
                                                </div>
                                                <div
                                                    v-show="checked"
                                                    class="shrink-0 text-white"
                                                >
                                                    <svg
                                                        class="h-6 w-6"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="12"
                                                            fill="#fff"
                                                            fill-opacity="0.2"
                                                        />
                                                        <path
                                                            d="M7 13l3 3 7-7"
                                                            stroke="#fff"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>

                            <div class="flex justify-between">
                                <button
                                    type="button"
                                    @click="
                                        isNewAddress = true;
                                        selectedAddress = null;
                                    "
                                    class="text-blue-500"
                                >
                                    add address
                                </button>

                                <XCircleIcon
                                    v-show="isNewAddress"
                                    @click="isNewAddress = false"
                                    class="h-5 w-5 text-red-500 self-center"
                                />
                            </div>
                        </div>
                        <!-- buat custom address -->
                        <div
                            v-show="isNewAddress"
                            class="justify-center w-full mx-auto"
                        >
                            <FormKit
                                name="full_name"
                                label="Full name"
                                type="text"
                                validation="required|length:5,30"
                                placeholder="Enter your full name"
                                inner-class="mb-4"
                                input-class="py-3.5"
                                v-model="newAddress.fullName"
                            />
                            <FormKit
                                name="phone_number"
                                label="Phone number"
                                type="number"
                                validation="required|number"
                                placeholder="60178891233"
                                inner-class="mb-4"
                                input-class="py-3.5"
                                v-model="newAddress.phoneNumber"
                            />
                            <FormKit
                                name="state"
                                label="State"
                                type="select"
                                :options="states"
                                validation="required"
                                placeholder="Select state"
                                inner-class="mb-4"
                                input-class="py-3.5"
                                v-model="newAddress.state"
                            />
                            <div
                                class="flex items-center mb-4 justify-between space-x-1.5"
                            >
                                <FormKit
                                    name="city"
                                    label="City"
                                    type="select"
                                    outer-class="flex-1"
                                    validation="required"
                                    v-model="newAddress.city"
                                    placeholder="Select city"
                                    input-class="py-3.5"
                                >
                                    <template v-if="cities.length !== 0">
                                        <template
                                            v-for="city in cities"
                                            :key="city"
                                        >
                                            <option :value="city">
                                                {{ city }}
                                            </option>
                                        </template>
                                    </template>
                                    <template v-else>
                                        <option value="" selected>
                                            Select city
                                        </option>
                                    </template>
                                </FormKit>
                                <FormKit
                                    name="postal_code"
                                    label="Postal code"
                                    type="number"
                                    outer-class="flex-1"
                                    validation="required|length:5,5"
                                    placeholder="Enter postal code"
                                    input-class="py-3.5"
                                    v-model="newAddress.postalCode"
                                />
                            </div>
                            <FormKit
                                name="street_name"
                                label="Street name"
                                type="text"
                                validation="required"
                                placeholder="Enter your street name"
                                inner-class="mb-4"
                                input-class="py-3.5"
                                v-model="newAddress.streetName"
                            />
                        </div>
                    </div>
                    <!-- payment -->
                    <div class="flex flex-col">
                        <h2
                            class="pt-4 mb-4 font-semibold md:text-lg text-heading"
                        >
                            Payment
                        </h2>
                    </div>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="border rounded-md md:pt-0 2xl:p-6">
                        <h2 class="text-lg font-semibold">Order Summary</h2>
                        <div class="mt-8">
                            <div class="flex flex-col space-y-4">
                                <div class="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://source.unsplash.com/user/erondu/1600x900"
                                            alt="image"
                                            class="w-60"
                                        />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Title</h2>
                                        <p class="text-sm">
                                            Lorem ipsum dolor sit amet, tet
                                        </p>
                                        <span class="text-red-600">Price</span>
                                        $20
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://source.unsplash.com/collection/190727/1600x900"
                                            alt="image"
                                            class="w-60"
                                        />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Title</h2>
                                        <p class="text-sm">
                                            Lorem ipsum dolor sit amet, tet
                                        </p>
                                        <span class="text-red-600">Price</span>
                                        $20
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex p-4 mt-4">
                            <h2 class="text-xl font-bold">ITEMS 2</h2>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                        >
                            Subtotal<span class="ml-2">$40.00</span>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                        >
                            Shipping Tax<span class="ml-2">$10</span>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                        >
                            Total<span class="ml-2">$50.00</span>
                        </div>
                        <FormKit
                            type="submit"
                            label="Confirm order"
                            input-class="w-full mt-4 py-3.5"
                        />
                    </div>
                </div>
            </FormKit>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import SideNav from "../../Shared/SideNav.vue";
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
} from "@headlessui/vue";
import { XCircleIcon } from "@heroicons/vue/outline";

export default {
    components: {
        SideNav,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupDescription,
        RadioGroupOption,
        XCircleIcon,
    },

    props: {
        addresses: Array,
        states: Array,
        statesCities: Object,
    },

    data() {
        return {
            selectedAddress: null,
            isNewAddress: false,
            newAddress: {
                fullName: "",
                phoneNumber: "",
                state: "",
                city: "",
                postalCode: "",
                streetName: "",
            },
            cities: [],
        };
    },

    watch: {
        newAddress: {
            handler(newValue) {
                if (newValue.state) {
                    this.cities = this.statesCities[newValue.state];
                }
            },
            deep: true,
        },
    },

    methods: {
        checkout() {
            console.log("checkout");
        },
    },
};
</script>
