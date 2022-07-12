<template>
    <Head title="Payments" />
    <div class="lg:flex">
        <UserNav />
        <div class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1">
            <div class="space-y-12 sm:space-y-5">
                <div class="inline-block md:flex md:justify-between">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Banks and Cards
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            Setup your own payment method that you like when you
                            want to make a payment.
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
                                                        @click="
                                                            isOpenAddCard = true
                                                        "
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
                                        <template v-if="1 + 1 == 2">
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
                                                        <img
                                                            src="https://arm-commerce.com/images/card-solid.svg"
                                                            alt="card-icon"
                                                            class="h-6"
                                                        />
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
                                                        <img
                                                            src="https://arm-commerce.com/images/card-solid.svg"
                                                            alt="card-icon"
                                                            class="h-6"
                                                        />
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
                                                        <img
                                                            src="https://arm-commerce.com/images/card-solid.svg"
                                                            alt="card-icon"
                                                            class="h-6"
                                                        />
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
                                                        @click="
                                                            isOpenAddBankAccount = true
                                                        "
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
                                        <template v-if="1 + 1 == 2">
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
                                                        <img
                                                            src="https://arm-commerce.com/images/bank-building-solid.svg"
                                                            alt="card-icon"
                                                            class="h-6"
                                                        />
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

    <TransitionRoot as="template" :show="isOpenAddCard">
        <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="isOpenAddCard = false"
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
                                    Add Card
                                </h2>
                            </div>

                            <form class="space-y-6 sm:px-10" @submit.prevent="addCard">
                                <div class="flex-1">
                                    <label
                                        for="card-number"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Card number
                                    </label>
                                    <div class="mt-1">
                                        <input
                                            id="card-number"
                                            name="card-number"
                                            type="text"
                                            autocomplete="card-number"
                                            required
                                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            v-model="cardForm.cardNumber"
                                        />
                                    </div>
                                    <div
                                        v-if="cardForm.errors.cardNumber"
                                        class="text-red-500 text-sm mt-1"
                                    >
                                        {{ cardForm.errors.cardNumber }}
                                    </div>
                                </div>

                                <div
                                    class="flex items-center justify-between space-x-1.5"
                                >
                                    <div class="flex-1">
                                        <label
                                            for="expiry-date"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Expiry Date
                                        </label>
                                        <input
                                            id="expiry-date"
                                            name="expiry-date"
                                            type="text"
                                            autocomplete="expiry-date"
                                            required
                                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            v-model="cardForm.expiryDate"
                                        />
                                        <div
                                            v-if="cardForm.errors.expiryDate"
                                            class="text-red-500 text-sm mt-1"
                                        >
                                            {{ cardForm.errors.expiryDate }}
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <label
                                            for="cvv-code"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            CVV Code
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                id="cvv-code"
                                                name="cvv-code"
                                                type="text"
                                                autocomplete="cvv-code"
                                                required
                                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                v-model="cardForm.cvvCode"
                                            />
                                        </div>
                                        <div
                                            v-if="cardForm.errors.cvvCode"
                                            class="text-red-500 text-sm mt-1"
                                        >
                                            {{ cardForm.errors.cvvCode }}
                                        </div>
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Full Name
                                    </label>
                                    <div class="mt-1">
                                        <input
                                            id="full-name"
                                            name="full-name"
                                            type="text"
                                            autocomplete="name"
                                            placeholder="Full name on card."
                                            required
                                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            v-model="cardForm.fullName"
                                        />
                                    </div>
                                    <div
                                        v-if="cardForm.errors.fullName"
                                        class="text-red-500 text-sm mt-1"
                                    >
                                        {{ cardForm.errors.fullName }}
                                    </div>
                                </div>

                                <div class="flex flex-row-reverse pt-4">
                                    <button
                                        type="submit"
                                        class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        @click.prevent="addCard"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        class="mr-2.5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                        @click="isOpenAddCard = false"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>

    <TransitionRoot as="template" :show="isOpenAddBankAccount">
        <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="isOpenAddBankAccount = false"
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
                                    Add Bank Account
                                </h2>
                            </div>

                            <form class="space-y-6 sm:px-10" @submit.prevent="addBankAccount">
                                <div class="flex-1">
                                    <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Full Name
                                    </label>
                                    <div class="mt-1">
                                        <input
                                            id="full-name"
                                            name="full-name"
                                            type="text"
                                            autocomplete="name"
                                            placeholder="Full name in the bank account"
                                            required
                                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            v-model="bankAccountForm.fullName"
                                        />
                                    </div>
                                    <div
                                        v-if="bankAccountForm.errors.fullName"
                                        class="text-red-500 text-sm mt-1"
                                    >
                                        {{ bankAccountForm.errors.fullName }}
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <label
                                        for="account-number"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Account number
                                    </label>
                                    <div class="mt-1">
                                        <input
                                            id="account-number"
                                            name="account-number"
                                            type="text"
                                            autocomplete="account-number"
                                            required
                                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            v-model="bankAccountForm.accountNumber"
                                        />
                                    </div>
                                    <div
                                        v-if="bankAccountForm.errors.accountNumber"
                                        class="text-red-500 text-sm mt-1"
                                    >
                                        {{ bankAccountForm.errors.accountNumber }}
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <label
                                        for="bank-name"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Bank Name
                                    </label>
                                    <div class="mt-1">
                                        <select
                                            id="bank-name"
                                            name="bank-name"
                                            autocomplete="bank-name"
                                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                            v-model="bankAccountForm.bankName"
                                        >
                                            <option selected value="">
                                                Select bank name
                                            </option>
                                            <template
                                                v-for="bank in bankLists"
                                                :key="bank"
                                            >
                                                <option
                                                    :value="bank"
                                                    class="w-52 bg-gray-50 border-0 rounded-sm"
                                                >
                                                    {{ bank }}
                                                </option>
                                            </template>
                                        </select>
                                    </div>
                                    <div
                                        v-if="bankAccountForm.errors.bankName"
                                        class="text-red-500 text-sm mt-1"
                                    >
                                        {{ bankAccountForm.errors.bankName }}
                                    </div>
                                </div>

                                <div class="flex flex-row-reverse pt-4">
                                    <button
                                        type="submit"
                                        class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        @click.prevent="addBankAccount"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        class="mr-2.5 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                        @click="isOpenAddBankAccount = false"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
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

    props: {
        bankLists: Array,
    },

    data() {
        return {
            isOpenAddCard: false,
            isOpenAddBankAccount: false,
            cardForm: this.$inertia.form({
                cardNumber: null,
                expiryDate: null,
                cvvCode: null,
                fullName: "",
            }),
            bankAccountForm: this.$inertia.form({
                fullName: "",
                accountNumber: null,
                bankName: ""
            }),
        };
    },

    methods: {
        addCard() {
            console.log(this.cardForm);
        },

        addBankAccount() {
            console.log(this.bankAccountForm);
        },
    },
};
</script>
