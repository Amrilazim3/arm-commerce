<template>
    <div class="flex w-1/2">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200"
                >
                    categories
                    <ChevronDownIcon class="ml-2 h-5 w-5" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="absolute z-10 mt-2 w-56 h-60 overflow-y-scroll origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <template v-for="category in categories" :key="category.id">
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <Link
                                    :href="baseUrl + '/products/categories/' + category.slug"
                                    :class="[
                                        active
                                            ? 'bg-indigo-500 text-white'
                                            : '',
                                        $page.url.includes(category.slug) 
                                            ? 'bg-indigo-500 text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    {{ category.name }}
                                </Link>
                            </MenuItem>
                        </div>
                    </template>
                </MenuItems>
            </transition>
        </Menu>
        <form @submit.prevent="search" class="relative w-full">
            <input
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300"
                placeholder="Search product name, category..."
                v-model="params.search"
            />
            <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-indigo-600 rounded-r-lg border border-indigo-600 hover:bg-indigo-700"
            >
                <SearchIcon aria-hidden="true" class="w-5 h-5" />
                <span class="sr-only">Search</span>
            </button>
        </form>
    </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, SearchIcon } from "@heroicons/vue/solid";

export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        ChevronDownIcon,
        SearchIcon,
    },

    props: {
        requests: Array,
        categories: Array,
        baseUrl: String
    },

    data() {
        return {
            params: {
                search: this.requests.search,
            },
        };
    },

    methods: {
        search() {
            this.$inertia.get(this.$page.url, this.params, {
                preserveScroll: true,
            });
        },
    },
};
</script>
