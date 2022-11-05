<template>
    <Head title="To Ship" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="1 + 1 == 2 ? 'mb-32' : 'mb-10'"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        To Ship
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        See all products to be ship here.
                    </p>
                </div>

                <div class="p-4">
                    <div
                        class="mx-auto w-full rounded border border-gray-300 divide-y divide-gray-200"
                    >
                        <div class="sm:flex justify-between p-5 bg-gray-50">
                            <div class="flex space-x-6">
                                <div>
                                    <h2 class="text-sm font-semibold">
                                        Bill number
                                    </h2>
                                    <p class="text-sm text-gray-500">
                                        BLA22XX3
                                    </p>
                                </div>
                                <div>
                                    <h2 class="text-sm font-semibold">
                                        Date placed
                                    </h2>
                                    <p class="text-sm text-gray-500">
                                        Jul 6, 2021
                                    </p>
                                </div>
                                <div>
                                    <h2 class="text-sm font-semibold">
                                        Total amount
                                    </h2>
                                    <p class="text-sm text-gray-500">60MYR</p>
                                </div>
                            </div>
                            <div class="mt-4 sm:-mt-0">
                                <button
                                    class="rounded-md border border-gray-300 p-2.5 text-sm"
                                >
                                    Pay Bill
                                </button>
                            </div>
                        </div>
                        <!-- loop all item in here -->
                        <div class="p-5">
                            <div class="flex space-x-4">
                                <div class="sm:w-2/6 sm:h-2/6">
                                    <img
                                        src="https://picsum.photos/200/100"
                                        alt="dummy"
                                        class="w-full h-full bg-gray-50 object-contain border rounded"
                                    />
                                </div>
                                <div class="w-full">
                                    <div class="flex mb-2 justify-between">
                                        <h3
                                            class="text-black text-base fontsem"
                                        >
                                            Name of the product
                                        </h3>
                                        <h3
                                            class="text-black text-base fontsem"
                                        >
                                            60MYR
                                        </h3>
                                    </div>
                                    <p class="text-sm text-gray-500">
                                        variant : blue / small
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        quantity : 2
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        total : 20MYR
                                    </p>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end">
                                <button
                                    class="font-semibold text-sm text-indigo-500"
                                >
                                    View product
                                </button>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="flex space-x-4">
                                <div class="sm:w-2/6 sm:h-2/6">
                                    <img
                                        src="https://picsum.photos/200/100"
                                        alt="dummy"
                                        class="w-full h-full object-contain border rounded"
                                    />
                                </div>
                                <div class="w-full">
                                    <div class="flex mb-2 justify-between">
                                        <h3
                                            class="text-black text-base fontsem"
                                        >
                                            Name of the product
                                        </h3>
                                        <h3
                                            class="text-black text-base fontsem"
                                        >
                                            60MYR
                                        </h3>
                                    </div>
                                    <p class="text-sm text-gray-500">
                                        variant : blue / small
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        quantity : 2
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        total : 20MYR
                                    </p>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end">
                                <button
                                    class="font-semibold text-sm text-indigo-500"
                                >
                                    View product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";

export default {
    components: {
        SideNav,
    },
};
</script>
