<template>
    <Head title="Checkout" />
    <div class="lg:flex">
        <SideNav />
        <div class="container p-12 mx-auto">
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
                        <FormKit
                            name="email"
                            label="Email address"
                            type="email"
                            validation="required|email"
                            v-model="contactInformation"
                        />
                    </div>
                    <!-- shipping -->
                    <div class="flex flex-col">
                        <h2
                            class="pt-4 mb-4 font-semibold md:text-lg text-heading"
                        >
                            Shipping Information
                        </h2>
                        <div
                            class="w-full max-w-md"
                            v-show="addresses.length !== 0"
                        >
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
                            
                            <template v-if="isEmptyShippingSection">
                                <p class="text-red-600 text-sm">
                                    Please select your shipping address
                                </p>
                            </template>
                        </div>
                        <div class="flex justify-between">
                            <button
                                type="button"
                                @click="
                                    isNewAddress = true;
                                    selectedAddress = null;
                                    isEmptyShippingSection = false;
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
                        <div
                            v-show="isNewAddress"
                            class="justify-center w-full mx-auto"
                        >
                            <FormKit
                                name="full_name"
                                label="Full name"
                                type="text"
                                :validation="
                                    isNewAddress
                                        ? 'required|length:5,30'
                                        : 'length:5,30'
                                "
                                placeholder="Enter your full name"
                                inner-class="mb-4"
                                v-model="newAddress.fullName"
                            />
                            <FormKit
                                name="phone_number"
                                label="Phone number"
                                type="number"
                                :validation="
                                    isNewAddress ? 'required|number' : ''
                                "
                                placeholder="60178891233"
                                inner-class="mb-4"
                                v-model="newAddress.phoneNumber"
                            />
                            <FormKit
                                name="state"
                                label="State"
                                type="select"
                                :options="states"
                                :validation="isNewAddress ? 'required' : ''"
                                placeholder="Select state"
                                inner-class="mb-4"
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
                                    :validation="isNewAddress ? 'required' : ''"
                                    v-model="newAddress.city"
                                    placeholder="Select city"
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
                                    :validation="
                                        isNewAddress
                                            ? 'required|length:5,5'
                                            : ''
                                    "
                                    placeholder="Enter postal code"
                                    v-model="newAddress.postalCode"
                                />
                            </div>
                            <FormKit
                                name="street_name"
                                label="Street name"
                                type="text"
                                :validation="isNewAddress ? 'required' : ''"
                                placeholder="Enter your street name"
                                inner-class="mb-4"
                                v-model="newAddress.streetName"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="border rounded-md md:pt-0 2xl:p-6">
                        <h2 class="text-lg font-semibold">Order Summary</h2>
                        <div class="mt-8">
                            <div class="flex flex-col space-y-6">
                                <!-- loop product to checkout here. -->
                                <div class="flex justify-between">
                                    <div class="flex space-x-4">
                                        <div>
                                            <img
                                                src="https://source.unsplash.com/user/erondu/1600x900"
                                                alt="image"
                                                class="w-24 h-30 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h2 class="text-md font-semibold">
                                                Title
                                            </h2>
                                            <p>
                                                <span class="text-blue-600"
                                                    >quantity :
                                                </span>
                                                2
                                            </p>
                                            <p>
                                                <span class="text-blue-600"
                                                    >price :
                                                </span>
                                                20MYR
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <TrashIcon
                                            class="h-5 w-5 cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="flex space-x-4">
                                        <div>
                                            <img
                                                src="https://source.unsplash.com/user/erondu/1600x900"
                                                alt="image"
                                                class="w-24 h-30 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h2 class="text-md font-semibold">
                                                Title
                                            </h2>
                                            <p>
                                                <span class="text-blue-600"
                                                    >quantity :
                                                </span>
                                                2
                                            </p>
                                            <p>
                                                <span class="text-blue-600"
                                                    >price :
                                                </span>
                                                20MYR
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <TrashIcon
                                            class="h-5 w-5 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex mt-8">
                            <h2 class="text-xl font-semibold">
                                Total items : 2
                            </h2>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                        >
                            Subtotal : <span class="ml-2">5.00MYR</span>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                        >
                            Shipping Tax : <span class="ml-2">5.00MYR</span>
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                        >
                            Total : <span class="ml-2">10.00MYR</span>
                        </div>
                        <FormKit
                            type="submit"
                            label="Confirm order"
                            input-class="w-full mt-4 py-3.5"
                        />
                        <p class="mt-4 text-red-600">
                            For user information, all of this products are not
                            exists in real world and the money you will be pay
                            will be used for our server maintenance. Thank you.
                        </p>
                    </div>
                </div>
            </FormKit>
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
import { XCircleIcon, TrashIcon } from "@heroicons/vue/outline";
import axios from 'axios';

export default {
    components: {
        SideNav,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupDescription,
        RadioGroupOption,
        XCircleIcon,
        TrashIcon,
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
            isEmptyShippingSection: false,
            contactInformation: "",
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

    mounted() {
        if (this.addresses.length !== 0) {
            this.addresses.forEach((address) => {
                if (address.is_default) {
                    this.selectedAddress = address;
                }
            });
        } else {
            this.isNewAddress = true;
        }
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

        selectedAddress(newValue) {
            if (newValue) {
                this.newAddress = {
                    fullName: "",
                    phoneNumber: "",
                    state: "",
                    city: "",
                    postalCode: "",
                    streetName: "",
                };
                this.isNewAddress = false;
            }
        },
    },

    methods: {
        checkout() {
            if (this.addresses.length > 0) {
                if (
                    this.selectedAddress == null &&
                    this.isNewAddress == false
                ) {
                    this.isEmptyShippingSection = true;
                    return;
                }
            }

            this.isEmptyShippingSection = false;

            axios.post('/user/checkout/confirm_order').then((res) => {
                window.location.href = res.data
            });
        },
    },
};
</script>
