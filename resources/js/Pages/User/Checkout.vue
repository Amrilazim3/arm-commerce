<template>
    <Head title="Checkout" />
    <div class="lg:flex">
        <SideNav />
        <div class="container p-12 mx-auto">
            <template v-if="products.length == 0">
                <div class="flex items-center justify-center h-64">
                    <h1 class="text-xl text-blue-500 font-semibold">
                        No products to checkout here : (
                    </h1>
                </div>
            </template>
            <template v-else>
                <FormKit
                    type="form"
                    :actions="false"
                    form-class="flex flex-col w-full px-0 mx-auto md:flex-row"
                    @submit="checkout"
                    messages-class="$reset hidden"
                    :input-errors="{
                        email: $page.props.errors.email,
                        full_name: $page.props.errors.full_name
                            ? $page.props.errors.full_name
                            : '',
                        phone_number: $page.props.errors.phone_number
                            ? $page.props.errors.phone_number
                            : '',
                        state: $page.props.errors.state
                            ? $page.props.errors.state
                            : '',
                        city: $page.props.errors.city
                            ? $page.props.errors.city
                            : '',
                        postal_code: $page.props.errors.postal_code
                            ? $page.props.errors.postal_code
                            : '',
                        street_name: $page.props.errors.street_name
                            ? $page.props.errors.street_name
                            : '',
                    }"
                >
                    <div
                        class="flex flex-col space-y-8 divide-y divide-gray-300 md:w-2/4"
                    >
                        <!-- contact -->
                        <div class="flex flex-col">
                            <h2
                                class="mb-4 font-semibold md:text-lg text-heading"
                            >
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
                                                    <div
                                                        class="flex items-center"
                                                    >
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
                            <template v-if="addresses.length < 5">
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
                            </template>
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
                                    v-model="newAddress.full_name"
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
                                    v-model="newAddress.phone_number"
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
                                        :validation="
                                            isNewAddress ? 'required' : ''
                                        "
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
                                        v-model="newAddress.postal_code"
                                    />
                                </div>
                                <FormKit
                                    name="street_name"
                                    label="Street name"
                                    type="text"
                                    :validation="isNewAddress ? 'required' : ''"
                                    placeholder="Enter your street name"
                                    inner-class="mb-4"
                                    v-model="newAddress.street_name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div class="border rounded-md md:pt-0 2xl:p-6">
                            <h2 class="text-lg font-semibold">Order Summary</h2>
                            <div class="mt-8">
                                <div class="flex flex-col space-y-6">
                                    <template
                                        v-for="product in products"
                                        :key="product.id"
                                    >
                                        <div class="flex justify-between">
                                            <div class="flex space-x-4">
                                                <div>
                                                    <img
                                                        :src="
                                                            product.imageUrl
                                                                ? product.imageUrl
                                                                : 'https://picsum.photos/200/300?random=' +
                                                                  product.id
                                                        "
                                                        alt="image"
                                                        class="w-24 h-30 object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h2
                                                        class="text-md font-semibold"
                                                    >
                                                        {{ product.name }}
                                                    </h2>
                                                    <p>
                                                        <span
                                                            class="text-blue-600"
                                                            >quantity :
                                                        </span>
                                                        {{ product.quantity }}
                                                    </p>
                                                    <p>
                                                        <span
                                                            class="text-blue-600"
                                                            >price :
                                                        </span>
                                                        {{ product.price }}MYR
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <TrashIcon
                                                    @click="
                                                        removeProduct(
                                                            product.id
                                                        )
                                                    "
                                                    class="h-5 w-5 cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div class="flex mt-8">
                                <h2 class="text-xl font-semibold">
                                    Total items : {{ totalItems }}
                                </h2>
                            </div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                            >
                                Subtotal :
                                <span class="ml-2">{{ subtotal }}MYR</span>
                            </div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                            >
                                Shipping Tax : <span class="ml-2">2.00MYR</span>
                            </div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
                            >
                                Total :
                                <span class="ml-2"
                                    >{{ subtotal + 2.0 }}MYR</span
                                >
                            </div>
                            <FormKit
                                type="submit"
                                label="Confirm order"
                                input-class="w-full mt-4 py-3.5"
                            />
                            <p class="mt-4 text-red-600">
                                For user information, all of this products are
                                not exists in real world and the money you will
                                be pay will be used for our server maintenance.
                                Basically, you only need to pay
                                <span class="text-blue-500 font-semibold"
                                    >5.00MYR</span
                                >. Thank you.
                            </p>
                        </div>
                    </div>
                </FormKit>
            </template>
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
import { useCartSliderStore } from "../../Stores/CartSliderStore";
import axios from "axios";

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
        products: Array,
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
                full_name: "",
                phone_number: "",
                state: "",
                city: "",
                postal_code: "",
                street_name: "",
            },
            totalItems: 0,
            subtotal: 0,
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

        this.calculateQuantityAndTotal();
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
                    full_name: "",
                    phone_number: "",
                    state: "",
                    city: "",
                    postal_code: "",
                    street_name: "",
                };
                this.isNewAddress = false;
            }
        },
    },

    methods: {
        calculateQuantityAndTotal() {
            this.totalItems = 0;
            this.subtotal = 0;

            this.products.forEach((product) => {
                this.totalItems += product.quantity;

                this.subtotal += product.price * product.quantity;
            });
        },

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

            var checkoutInformation = {
                email: this.contactInformation,
                isNewAddress: this.isNewAddress,
                full_name: this.isNewAddress
                    ? this.newAddress.full_name
                    : this.selectedAddress.full_name,
                phone_number: this.isNewAddress
                    ? Number(this.newAddress.phone_number) 
                    : this.selectedAddress.phone_number,
                state: this.isNewAddress
                    ? this.newAddress.state
                    : this.selectedAddress.state,
                city: this.isNewAddress
                    ? this.newAddress.city
                    : this.selectedAddress.city,
                postal_code: this.isNewAddress
                    ? this.newAddress.postal_code
                    : this.selectedAddress.postal_code,
                street_name: this.isNewAddress
                    ? this.newAddress.street_name
                    : this.selectedAddress.street_name,
            };

            this.$inertia.post(
                "/user/checkout/validate_checkout_information",
                checkoutInformation,
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        axios
                            .post(
                                "/user/checkout/confirm_order",
                                checkoutInformation
                            )
                            .then((res) => {
                                window.location.href = res.data;
                            });
                    },
                }
            );
        },

        removeProduct(productId) {
            const cartSliderStore = useCartSliderStore();

            const result = cartSliderStore.removeProduct(productId);

            if (result) {
                this.products.forEach((product, key) => {
                    if (product.id == productId) {
                        this.products.splice(key, 1);

                        this.calculateQuantityAndTotal();
                    }
                });
            }
        },
    },
};
</script>