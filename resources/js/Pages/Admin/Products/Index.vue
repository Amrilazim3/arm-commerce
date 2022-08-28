<template>
    <Head title="Products" />
    <div class="lg:flex">
        <SideNav />
        <div
            class="px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1"
            :class="products.data.length == 0 ? 'mb-20' : ''"
        >
            <div class="flex justify-between">
                <h1 class="text-xl font-semibold text-gray-900">Store</h1>
                <button
                    class="px-4 border border-transparent self-center py-1 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    v-if="products.data.length !== 0"
                >
                    <Link
                        href="/admin/products/create"
                        class="flex items-center"
                    >
                        <span class="text-2xl mr-1.5">+</span> add product
                    </Link>
                </button>
            </div>
            <div class="relative mt-3 xl:w-96">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <SearchIcon  class="h-5 w-5 text-black" />
                </span>
                <input
                    type="text"
                    class="form-control block w-full pl-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    id="search-input"
                    placeholder="Search product or category"
                    v-model="params.search"
                    ref="search"
                />
            </div>
            <template v-if="products.data.length == 0">
                <template v-if="$page.url.includes('search')">
                    <div class="flex items-center justify-center w-full h-72">
                        <p class="text-indigo-500 font-semibold text-xl">
                            No result for this search.
                        </p>
                    </div>
                </template>
                <template v-else>
                    <div
                        class="border rounded-md border-gray-400 w-full h-72 mt-6 grid place-items-center"
                    >
                        <div>
                            <h3
                                class="text-xl font-bold text-gray-800 text-left mb-6"
                            >
                                You don't have any product to see
                            </h3>
                            <p class="text-sm text-gray-400 text-left">
                                You need some product in order to see it here
                            </p>
                            <button
                                class="mt-6 font-semibold px-3 py-2.5 bg-indigo-500 hover:bg-indigo-700 text-white text-sm border rounded-md"
                            >
                                <Link href="/admin/products/create"
                                    >Create product now</Link
                                >
                            </button>
                        </div>
                    </div>
                </template>
            </template>
            <template v-else>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full sm:px-6 lg:px-8">
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
                                            <th
                                                scope="col"
                                                class="flex justify-end px-6"
                                            >
                                                <Menu
                                                    as="div"
                                                    class="absolute inline-block text-left"
                                                >
                                                    <MenuButton
                                                        class="flex px-6 pt-2.5 pb-2 bg-gray-200 text-gray-900 font-medium text-sm leading-normal rounded border hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-300 transition duration-150 ease-in-out align-center"
                                                    >
                                                        Sort
                                                        <SwitchVerticalIcon
                                                            class="ml-2 h-4 w-4 self-center"
                                                            aria-hidden="true"
                                                        />
                                                    </MenuButton>

                                                    <transition
                                                        enter-active-class="transition duration-100 ease-out"
                                                        enter-from-class="transform scale-95 opacity-0"
                                                        enter-to-class="transform scale-100 opacity-100"
                                                        leave-active-class="transition duration-75 ease-in"
                                                        leave-from-class="transform scale-100 opacity-100"
                                                        leave-to-class="transform scale-95 opacity-0"
                                                    >
                                                        <MenuItems
                                                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                        >
                                                            <div
                                                                class="px-1 py-1"
                                                            >
                                                                <MenuItem
                                                                    v-slot="{
                                                                        active,
                                                                    }"
                                                                >
                                                                    <button
                                                                        :class="[
                                                                            active ||
                                                                            $page.url.includes(
                                                                                'created_at=asc'
                                                                            )
                                                                                ? 'bg-indigo-200 text-gray-900'
                                                                                : 'hover:bg-indigo-200',
                                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]"
                                                                        @click.prevent="
                                                                            sortByCreated(
                                                                                'asc'
                                                                            )
                                                                        "
                                                                    >
                                                                        Created
                                                                        (newest
                                                                        first)
                                                                    </button>
                                                                </MenuItem>
                                                                <MenuItem
                                                                    v-slot="{
                                                                        active,
                                                                    }"
                                                                >
                                                                    <button
                                                                        :class="[
                                                                            active ||
                                                                            $page.url.includes(
                                                                                'created_at=desc'
                                                                            )
                                                                                ? 'bg-indigo-200 text-gray-900'
                                                                                : 'hover:bg-indigo-200',
                                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]"
                                                                        @click.prevent="
                                                                            sortByCreated(
                                                                                'desc'
                                                                            )
                                                                        "
                                                                    >
                                                                        Created
                                                                        (oldest
                                                                        first)
                                                                    </button>
                                                                </MenuItem>
                                                            </div>

                                                            <div
                                                                class="px-1 py-1"
                                                            >
                                                                <MenuItem
                                                                    v-slot="{
                                                                        active,
                                                                    }"
                                                                >
                                                                    <button
                                                                        :class="[
                                                                            active ||
                                                                            $page.url.includes(
                                                                                'stock=asc'
                                                                            )
                                                                                ? 'bg-indigo-200 text-gray-900'
                                                                                : 'hover:bg-indigo-200',
                                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]"
                                                                        @click.prevent="
                                                                            sortByStock(
                                                                                'asc'
                                                                            )
                                                                        "
                                                                    >
                                                                        Low
                                                                        stock
                                                                    </button>
                                                                </MenuItem>
                                                                <MenuItem
                                                                    v-slot="{
                                                                        active,
                                                                    }"
                                                                >
                                                                    <button
                                                                        :class="[
                                                                            active ||
                                                                            $page.url.includes(
                                                                                'stock=desc'
                                                                            )
                                                                                ? 'bg-indigo-200 text-gray-900'
                                                                                : 'hover:bg-indigo-200',
                                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]"
                                                                        @click.prevent="
                                                                            sortByStock(
                                                                                'desc'
                                                                            )
                                                                        "
                                                                    >
                                                                        High
                                                                        stock
                                                                    </button>
                                                                </MenuItem>
                                                            </div>
                                                        </MenuItems>
                                                    </transition>
                                                </Menu>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template
                                            v-for="product in products.data"
                                            :key="product.id"
                                        >
                                            <tr class="border-b">
                                                <td
                                                    class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
                                                >
                                                    {{ product.id }}
                                                </td>
                                                <td
                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                                >
                                                    <Link
                                                        :href="
                                                            'products/' +
                                                            product.slug
                                                        "
                                                        class="hover:font-semibold hover:text-indigo-600"
                                                    >
                                                        {{ product.name }}
                                                    </Link>
                                                </td>
                                                <td
                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                                >
                                                    {{ product.category.name }}
                                                </td>
                                                <td
                                                    class="text-sm text-gray-900 px-6 py-4 whitespace-normal"
                                                >
                                                    {{ product.stock }}
                                                </td>
                                                <td
                                                    class="flex justify-end space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
                                                >
                                                    <button
                                                        class="text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium"
                                                        @click.prevent="
                                                            editProduct(
                                                                product.slug
                                                            )
                                                        "
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-600 text-right text-sm font-medium"
                                                        @click.prevent="
                                                            deleteProduct(
                                                                product.slug
                                                            )
                                                        "
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
                    <Pagination
                        class="flex justify-end"
                        :links="products.links"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";
import Pagination from "../../../Shared/Pagination.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import { SwitchVerticalIcon } from "@heroicons/vue/outline";
import { pickBy, debounce } from "lodash";

export default {
    props: {
        products: Object,
        requests: Object,
    },

    components: {
        SideNav,
        Pagination,
        SwitchVerticalIcon,
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        SearchIcon,
    },

    data() {
        return {
            params: {
                created_at: this.requests.created_at,
                stock: this.requests.stock,
                search: this.requests.search,
            },
        };
    },

    watch: {
        params: {
            handler() {
                this.searchInput();
            },
            deep: true,
        },
    },

    mounted() {
        this.$nextTick(() => this.$refs.search.focus());
    },

    methods: {
        sortByCreated(option) {
            this.params.created_at = option;
            let holder = this.params.stock;
            this.params.stock = null;

            let params = this.params;
            params = pickBy(params);

            this.$inertia.get(
                this.$page.url.includes("stock")
                    ? this.$page.url.replace("stock=" + holder, "")
                    : this.$page.url,
                params,
                {
                    preserveState: true,
                }
            );
        },

        sortByStock(option) {
            let holder = this.params.created_at;
            this.params.created_at = null;
            this.params.stock = option;

            let params = this.params;
            params = pickBy(params);

            this.$inertia.get(
                this.$page.url.includes("created_at")
                    ? this.$page.url.replace("created_at=" + holder, "")
                    : this.$page.url,
                params,
                {
                    preserveState: true,
                }
            );
        },

        searchInput: debounce(function () {
            let params = this.params;
            params = pickBy(params);
            this.$inertia.get("/admin/products/", params, {
                preserveScroll: true,
            });
        }, 500),

        editProduct(slug) {
            this.$inertia.patch("/admin/products/" + slug);
        },

        deleteProduct(slug) {
            this.$inertia.delete("/admin/products/" + slug);
        },
    },
};
</script>
