<template>
    <Head title="Addresses" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="addresses.length == 0 ? 'mb-32' : 'mb-10'"
        >
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

                    <template v-if="addresses.length == 5">
                        <div class="tooltip-wrap">
                            <button
                                disabled
                                class="mt-2 md:-mt-2 px-4 border border-transparent self-center py-2.5 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 cursor-not-allowed"
                            >
                                Limit reached
                            </button>
                            <div
                                class="tooltip-content rounded-md mt-10 lg:w-max"
                            >
                                <p class="text-xs cursor-default">
                                    You can have only 5 address.
                                </p>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <button
                            @click="openAddressForm"
                            class="mt-2 md:-mt-2 px-4 border border-transparent self-center py-1 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <p class="flex items-center">
                                <span class="text-2xl mr-1.5">+</span> Add
                                address
                            </p>
                        </button>
                    </template>
                </div>

                <template v-if="addresses.length == 0">
                    <div>
                        <h1 class="text-2xl mt-4">No address yet.</h1>
                    </div>
                </template>
                <template v-else>
                    <div class="flex flex-col">
                        <div
                            class="mt-2 overflow-x-auto align-middle sm:-mx-6 lg:-mx-8"
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
                                        <tbody
                                            class="divide-y divide-gray-200 px-6"
                                            v-for="address in addresses"
                                            :key="address.id"
                                        >
                                            <tr>
                                                <td
                                                    class="whitespace-normal px-6 py-4 hidden md:block"
                                                >
                                                    <div
                                                        class="items-center max-w-sm lg:max-w-md"
                                                    >
                                                        <div
                                                            class="text-sm font-medium text-gray-500 text-right space-y-3"
                                                        >
                                                            <h2>Full Name</h2>
                                                            <h2>
                                                                Phone Number
                                                            </h2>
                                                            <h2>Address</h2>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td
                                                    class="whitespace-normal px-6 py-4"
                                                >
                                                    <div
                                                        class="flex items-center max-w-sm md:max-w-md"
                                                    >
                                                        <div
                                                            class="text-sm font-medium text-gray-900 space-y-3"
                                                        >
                                                            <p>
                                                                {{
                                                                    address.full_name
                                                                }}
                                                            </p>
                                                            <p>
                                                                {{
                                                                    address.phone_number
                                                                }}
                                                            </p>
                                                            <div>
                                                                <p>
                                                                    {{
                                                                        address.street_name
                                                                    }}
                                                                </p>
                                                                <p>
                                                                    {{
                                                                        address.postal_code
                                                                    }},
                                                                    {{
                                                                        address.city
                                                                    }},
                                                                    {{
                                                                        address.state
                                                                    }}
                                                                </p>
                                                            </div>
                                                            <template
                                                                v-if="
                                                                    address.is_default
                                                                "
                                                            >
                                                                <h2
                                                                    class="mt-2 text-lg font-semibold text-gray-600"
                                                                >
                                                                    (Default)
                                                                </h2>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td
                                                    class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                        @click="
                                                            getAddressData(
                                                                address.id
                                                            )
                                                        "
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                        @click="
                                                            openDeleteAddressModal(
                                                                address.id
                                                            )
                                                        "
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>

    <TransitionRoot as="template" :show="isOpen">
        <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="closeAddressForm"
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
                                    <template
                                        v-if="addressForm._method == 'patch'"
                                    >
                                        Edit Address
                                    </template>
                                    <template v-else> Add Address </template>
                                </h2>
                            </div>

                            <div class="bg-white px-4 sm:rounded-lg sm:px-10">
                                <FormKit
                                    type="form"
                                    submit-label="Save"
                                    form-class="space-y-6"
                                    :actions="false"
                                    :submit-attrs="{
                                        outerClass: 'flex justify-end',
                                    }"
                                    :disabled="addressForm.processing"
                                    @submit="addAddress"
                                    :input-errors="{
                                        full_name: addressForm.errors.fullName
                                            ? addressForm.errors.fullName
                                            : '',
                                        phone_number: addressForm.errors
                                            .phoneNumber
                                            ? addressForm.errors.phoneNumber
                                            : '',
                                        state: addressForm.errors.state
                                            ? addressForm.errors.state
                                            : '',
                                        city: addressForm.errors.city
                                            ? addressForm.errors.city
                                            : '',
                                        postal_code: addressForm.errors
                                            .postalCode
                                            ? addressForm.errors.postalCode
                                            : '',
                                        street_name: addressForm.errors
                                            .streetName
                                            ? addressForm.errors.streetName
                                            : '',
                                    }"
                                >
                                    <FormKit
                                        name="full_name"
                                        label="Full name"
                                        type="text"
                                        validation="required|length:5,30"
                                        placeholder="Enter your full name"
                                        v-model="addressForm.fullName"
                                    />
                                    <FormKit
                                        name="phone_number"
                                        label="Phone number"
                                        type="number"
                                        validation="required|number|length:11,12"
                                        placeholder="60178891233"
                                        v-model="addressForm.phoneNumber"
                                    />
                                    <FormKit
                                        name="state"
                                        label="State"
                                        type="select"
                                        :options="states"
                                        validation="required"
                                        placeholder="Select state"
                                        v-model="addressForm.state"
                                    />
                                    <div
                                        class="flex items-center justify-between space-x-1.5"
                                    >
                                        <FormKit
                                            name="city"
                                            label="City"
                                            type="select"
                                            outer-class="flex-1"
                                            validation="required"
                                            v-model="addressForm.city"
                                            placeholder="Select city"
                                        >
                                            <option value="" selected>
                                                Select city
                                            </option>
                                            <template
                                                v-for="city in cities"
                                                :key="city"
                                            >
                                                <option :value="city">
                                                    {{ city }}
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
                                            v-model="addressForm.postalCode"
                                        />
                                    </div>
                                    <FormKit
                                        name="street_name"
                                        label="Street name"
                                        type="text"
                                        validation="required"
                                        placeholder="Enter your street name"
                                        v-model="addressForm.streetName"
                                    />

                                    <div class="flex flex-row-reverse">
                                        <FormKit type="submit" label="Save" />
                                        <FormKit
                                            type="button"
                                            label="Cancel"
                                            @click="closeAddressForm"
                                            input-class="$reset mr-2.5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                        />
                                        <!-- <button
                                            type="submit"
                                            class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
                                            :disabled="
                                                !addressForm.isDirty ||
                                                addressForm.processing
                                            "
                                            :class="
                                                !addressForm.isDirty ||
                                                addressForm.processing
                                                    ? 'bg-indigo-400 cursor-not-allowed'
                                                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            "
                                        >
                                            Save john doe
                                        </button>
                                        
                                        <button
                                            type="button"
                                            class="mr-2.5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                            @click="
                                                isOpen = false;
                                                addressForm.reset();
                                                addressForm._method = 'post';
                                            "
                                        >
                                            Cancel
                                        </button> -->
                                    </div>
                                </FormKit>
                            </div>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>

    <TransitionRoot as="template" :show="isOpenDeleteModal">
        <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="isOpenDeleteModal = false"
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

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <!-- DialogPanel component make it clickable outside of modal -->
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all"
                        >
                            <DialogTitle
                                as="h3"
                                class="text-lg font-medium leading-6 text-red-600"
                            >
                                Delete this address?
                            </DialogTitle>

                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    are you sure want to delete this address?
                                </p>
                            </div>

                            <div class="mt-4 flex space-x-2">
                                <button
                                    class="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
                                    @click="isOpenDeleteModal = false"
                                >
                                    no
                                </button>
                                <button
                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none"
                                    @click="deleteAddress(addressIdToDelete)"
                                >
                                    yes
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";

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
        SideNav,
        Dialog,
        DialogPanel,
        DialogTitle,
        DialogDescription,
        TransitionChild,
        TransitionRoot,
    },

    props: {
        addresses: Array,
        states: Array,
        statesCities: Object,
    },

    data() {
        return {
            isOpen: false,
            isOpenDeleteModal: false,
            addressForm: this.$inertia.form({
                phoneNumber: null,
                fullName: "",
                state: "",
                city: "",
                postalCode: null,
                streetName: "",
                isDefault: false,
            }),
            cities: [],
            addressIdToEdit: null,
            addressIdToDelete: null,
        };
    },

    watch: {
        addressForm: {
            handler(newValue) {
                this.cities = this.statesCities[newValue.state];
            },
            deep: true,
        },
    },

    methods: {
        openAddressForm() {
            this.isOpen = true;
            window.addEventListener("close", this.closeAddressForm);
        },

        addAddress() {
            if (this.addressForm._method == "patch") {
                this.updateAddress(this.addressIdToEdit);
                return;
            }
            this.addressForm.post("/user/account/addresses", {
                preserveScroll: true,
                onSuccess: () => {
                    this.addressForm.reset();
                    this.isOpen = false;
                    this.$notify(
                        {
                            group: "success",
                            title: "Success",
                            text: "Address successfully added",
                        },
                        3500
                    );
                },
            });
        },

        getAddressData(addressId) {
            this.addresses.map((element) => {
                if (element.id == addressId) {
                    this.addressIdToEdit = addressId;
                    this.addressForm.fullName = element.full_name;
                    this.addressForm.phoneNumber = element.phone_number;
                    this.addressForm.state = element.state;
                    this.addressForm.city = element.city;
                    this.addressForm.postalCode = element.postal_code;
                    this.addressForm.streetName = element.street_name;
                    this.addressForm.isDefault = element.is_default;
                    this.addressForm._method = "patch";
                    this.isOpen = true;
                    return;
                }
            });
        },

        updateAddress(addressId) {
            this.addressForm.patch(`/user/account/addresses/${addressId}`, {
                preserveScroll: true,
                onSuccess: () => {
                    this.addressForm.reset();
                    this.addressForm._method = "post";
                    this.isOpen = false;
                    this.$notify(
                        {
                            group: "success",
                            title: "Success",
                            text: "Address successfully updated",
                        },
                        3500
                    );
                },
                onError: () => {
                    this.$notify(
                        {
                            group: "error",
                            title: "Error",
                            text: "Address failed to be update. Please try again",
                        },
                        3500
                    );
                },
            });
        },

        openDeleteAddressModal(addressId) {
            this.addressIdToDelete = addressId;
            this.isOpenDeleteModal = true;
        },

        deleteAddress(addressId) {
            this.$inertia.delete(`/user/account/addresses/${addressId}`, {
                preserveScroll: true,
                onSuccess: () => {
                    this.isOpenDeleteModal = false;
                    this.$notify(
                        {
                            group: "success",
                            title: "Success",
                            text: "Address successfully deleted",
                        },
                        3500
                    );
                },
                onError: () => {
                    this.$notify(
                        {
                            group: "error",
                            title: "Error",
                            text: "Something wrong happen when perfoming this action. Please try again",
                        },
                        3500
                    );
                },
            });
        },

        closeAddressForm() {
            this.isOpen = false;
            setTimeout(() => {
                this.addressForm.reset();
                window.removeEventListener("click", this.closeAddressForm);
            }, 100);
            this.addressForm._method = "post";
        },
    },
};
</script>

<style>
.tooltip-wrap {
    position: relative;
}
.tooltip-wrap .tooltip-content {
    display: none;
    position: absolute;
    top: 5%;
    background-color: rgb(229 231 235);
    padding: 0.5em;
}
.tooltip-wrap:hover .tooltip-content {
    display: block;
}
</style>
