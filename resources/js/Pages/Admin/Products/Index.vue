<template>
    <Head title="Products" />
    <div class="lg:flex">
        <SideNav />
        <div class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1" :class="products.data.length == 0 ? 'mb-20' : ''">
            <h1 class="text-xl font-semibold text-gray-900">Products Store</h1>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-b">
                                    <tr>
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
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Stock
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="products.data.length == 0">
                                        <tr class="border-b">
                                            <td class="text-lg px-6 py-4">No products created yet.</td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr class="border-b">
                                            <td
                                                class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                            >
                                                1
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Mark is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Fitness
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                20
                                            </td>
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
                                        <tr class="border-b">
                                            <td
                                                class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                            >
                                                2
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Mark is simply dummy 
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Gym
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                122
                                            </td>
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
                                        <tr class="border-b">
                                            <td
                                                class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                            >
                                                3
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Whey protein
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Supplement
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                10
                                            </td>
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
                                        <tr class="border-b">
                                            <td
                                                class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                            >
                                                4
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Black King Skipping
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                Fitness
                                            </td>
                                            <td
                                                class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                            >
                                                15
                                            </td>
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
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";

export default {
    props: {
        products: Object
    },

    components: {
        SideNav,
    },
};
</script>
