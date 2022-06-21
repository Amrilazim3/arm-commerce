<template>
    <Head title="Payments" />
    <div class="lg:flex">
        <UserNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="1 + 1 == 2 ? 'mb-32' : 'mb-10'"
        >
            <div class="space-y-12 sm:space-y-5">
                <div class="inline-block md:flex md:justify-between">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Banks and Cards
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            Setup your own payment method that you like when you want to make a payment.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div
                        class="-my-2 overflow-x-auto align-middle sm:-mx-6 lg:-mx-8"
                    >
                        <div
                            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                        >
                            <div
                                class="overflow-hidden border-b border-t border-gray-200 shadow sm:rounded-lg"
                            >
                                <table
                                    class="min-w-full divide-y divide-gray-200"
                                >
                                    <thead>
                                        <tr>
                                            <td>
                                                <h3
                                                    class="font-bold text-lg px-6 py-6"
                                                >
                                                    Credit / Debit Cards
                                                </h3>
                                            </td>
                                            <td></td>
                                            <td class="w-0">
                                                <template v-if="false">
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
                                                            <p
                                                                class="text-xs cursor-default"
                                                            >
                                                                You can have
                                                                only 5 address.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <button
                                                        class="bg-indigo-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium hover:bg-indigo-700 md:-mt-2 px-4 py-1 rounded-md self-center shadow-sm text-sm text-white"
                                                    >
                                                        <p
                                                            class="flex items-center"
                                                        >
                                                            <span
                                                                class="text-2xl mr-1.5"
                                                                >+</span
                                                            >
                                                            Add Card
                                                        </p>
                                                    </button>
                                                </template>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="divide-y divide-gray-200 px-6"
                                    >
                                        <!-- when user not add any card -->
                                        <template v-if="1 + 1 == 22">
                                            <tr>
                                                <td>
                                                    <h2
                                                        class="px-4 py-6 text-lg text-gray-900"
                                                    >
                                                        No cards added yet.
                                                    </h2>
                                                </td>

                                                <td></td>

                                                <td
                                                    class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4 invisible"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </template>
                                        <template v-else>
                                            <tr>
                                                <td
                                                    class="whitespace-normal px-6 py-4 flex"
                                                >
                                                    <div
                                                        class="text-sm font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        <img src="https://arm-commerce.com/images/card-solid.svg" alt="card-icon" class="h-6">
                                                    </div>
                                                    <p
                                                        class="text-sm px-4 font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        Master Card
                                                    </p>
                                                    <p
                                                        class="text-sm font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        2822 2122 0423 2042
                                                    </p>
                                                </td>

                                                <td></td>

                                                <td
                                                    class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    class="whitespace-normal px-6 py-4 flex"
                                                >
                                                    <div
                                                        class="text-sm font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        <img src="https://arm-commerce.com/images/card-solid.svg" alt="card-icon" class="h-6">
                                                    </div>
                                                    <p
                                                        class="text-sm px-4 font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        Visa
                                                    </p>
                                                    <p
                                                        class="text-sm font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        1599 2012 4332 0122
                                                    </p>
                                                </td>

                                                <td></td>

                                                <td
                                                    class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    class="whitespace-normal px-6 py-4 flex"
                                                >
                                                    <div
                                                        class="text-sm font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        <img src="https://arm-commerce.com/images/card-solid.svg" alt="card-icon" class="h-6">
                                                    </div>
                                                    <p
                                                        class="text-sm px-4 font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        Master Card
                                                    </p>
                                                    <p
                                                        class="text-sm font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        2553 7765 1234 0775
                                                    </p>
                                                </td>

                                                <td></td>

                                                <td
                                                    class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div
                        class="-my-2 overflow-x-auto align-middle sm:-mx-6 lg:-mx-8"
                    >
                        <div
                            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                        >
                            <div
                                class="overflow-hidden border-b border-t border-gray-200 shadow sm:rounded-lg"
                            >
                                <table
                                    class="min-w-full divide-y divide-gray-200"
                                >
                                    <thead>
                                        <tr>
                                            <td>
                                                <h3
                                                    class="font-bold text-lg px-6 py-6"
                                                >
                                                    Bank Accounts
                                                </h3>
                                            </td>
                                            <td></td>
                                            <td class="w-0">
                                                <template v-if="false">
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
                                                            <p
                                                                class="text-xs cursor-default"
                                                            >
                                                                You can have
                                                                only 5 address.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <button
                                                        class="bg-indigo-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium hover:bg-indigo-700 md:-mt-2 px-4 py-1 rounded-md self-center shadow-sm text-sm text-white"
                                                    >
                                                        <p
                                                            class="flex items-center"
                                                        >
                                                            <span
                                                                class="text-2xl mr-1.5"
                                                                >+</span
                                                            >
                                                            Add Bank
                                                        </p>
                                                    </button>
                                                </template>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="divide-y divide-gray-200 px-6"
                                    >
                                        <template v-if="1 + 1 == 22">
                                            <tr>
                                                <td>
                                                    <h2
                                                        class="px-4 py-6 text-lg text-gray-900"
                                                    >
                                                        No bank accounts added
                                                        yet.
                                                    </h2>
                                                </td>

                                                <td></td>

                                                <td
                                                    class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4 invisible"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </template>
                                        <template v-else>
                                            <tr>
                                                <td
                                                    class="whitespace-normal px-6 py-4 flex"
                                                >
                                                    <div
                                                        class="text-sm font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        <img src="https://arm-commerce.com/images/bank-building-solid.svg" alt="card-icon" class="h-6">
                                                    </div>
                                                    <div
                                                        class="text-sm px-4 font-medium text-gray-900 whitespace-normal"
                                                    >
                                                        151584282718
                                                    </div>
                                                </td>

                                                <td></td>

                                                <td
                                                    class="space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                    >
                                                        Delete
                                                    </button>
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
        </div>
    </div>

    <TransitionRoot as="template" :show="false">
        <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="false"
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
                        <div
                            class="md:max-w-xl lg:max-w-2xl w-full space-y-8"
                        ></div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import UserNav from "../../../Shared/UserNav.vue";

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

    data() {
        return {};
    },
};
</script>
