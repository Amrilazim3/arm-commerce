<template>
    <div>
        <Popover>
            <div class="px-6 py-3 text-white bg-gray-800">
                <div class="flex justify-between">
                    <Link href="/" class="text-2xl font-bold"
                        >Arm-Commerce</Link
                    >

                    <div
                        class="self-center hidden space-x-5 font-semibold md:flex"
                    >
                        <template v-if="$page.props.auth.isLoggedIn">
                            <Menu>
                                <MenuButton class="space-x-5 md:flex">
                                    <span
                                        class="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100"
                                    >
                                        <svg
                                            class="h-full w-full text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        class="font-bold text-sm self-center"
                                        >{{ $page.props.auth.user.name }}</span
                                    >
                                </MenuButton>
                                <MenuItems
                                    class="absolute w-40 bg-gray-600 inline-grid p-0.5 right-5 text-white top-12 rounded-md"
                                >
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            class="px-2"
                                            :class="{
                                                'bg-gray-800 rounded-md':
                                                    active,
                                            }"
                                            href="/account-settings"
                                        >
                                            Profile
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            class="px-2 text-red-500 font-bold text-left"
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            >Log out</Link
                                        >
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </template>
                        <template v-else>
                            <Link
                                href="/login"
                                class="hover:text-indigo-500 transition ease-out duration-500"
                                :class="
                                    $page.component == 'Auth/Login'
                                        ? 'text-indigo-500 underline'
                                        : ''
                                "
                                >Login</Link
                            >
                            <span class="font-thin cursor-default">|</span>
                            <Link
                                href="/register"
                                class="hover:hover:text-indigo-500 transition ease-out duration-500"
                                :class="
                                    $page.component == 'Auth/Register'
                                        ? 'text-indigo-500 underline'
                                        : ''
                                "
                                >Create an account</Link
                            >
                        </template>
                    </div>

                    <!-- mobile layout -->
                    <!-- toggle button -->
                    <template v-if="$page.props.auth.isLoggedIn">
                        <div class="self-center -my-2 -mr-2 md:hidden">
                            <PopoverButton>
                                <span
                                    class="flex h-6 w-6 rounded-full overflow-hidden bg-gray-100"
                                >
                                    <svg
                                        class="h-full w-full text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                </span>
                            </PopoverButton>
                        </div>
                    </template>
                    <template v-else>
                        <div class="self-center -my-2 -mr-2 md:hidden">
                            <PopoverButton
                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span class="sr-only">Open menu</span>
                                <svg
                                    class="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </PopoverButton>
                        </div>
                    </template>

                    <transition
                        enter-active-class="duration-200 ease-out"
                        enter-from-class="opacity-0 scale-95"
                        enter-to-class="opacity-100 scale-100"
                        leave-active-class="duration-100 ease-in"
                        leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95"
                    >
                        <PopoverPanel
                            class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                class="bg-gray-800 divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
                            >
                                <div class="px-5 pt-5 pb-6">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                                class="text-white fill-current h-7"
                                            >
                                                <path
                                                    d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="-mr-2">
                                            <PopoverButton
                                                class="inline-flex items-center justify-center p-2 font-bold text-gray-500 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            >
                                                <span class="sr-only"
                                                    >Close menu</span
                                                >
                                                <svg
                                                    class="w-6 h-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </PopoverButton>
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <nav class="grid grid-cols-1 gap-7">
                                            <a
                                                href="#"
                                                class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                            >
                                                <div
                                                    class="text-base font-medium text-white"
                                                >
                                                    Fitness
                                                </div>
                                            </a>

                                            <a
                                                href="#"
                                                class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                            >
                                                <div
                                                    class="text-base font-medium text-white"
                                                >
                                                    Workout
                                                </div>
                                            </a>

                                            <a
                                                href="#"
                                                class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                            >
                                                <div
                                                    class="text-base font-medium text-white"
                                                >
                                                    Supplement
                                                </div>
                                            </a>

                                            <div class="flex space-x-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    class="h-5 text-white fill-current"
                                                >
                                                    <path
                                                        d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"
                                                    />
                                                </svg>
                                                <span>0</span>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div class="px-5 py-6">
                                    <template
                                        v-if="$page.props.auth.isLoggedIn"
                                    >
                                        <div class="grid grid-cols-1 gap-7">
                                            <a
                                                href="#"
                                                class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                            >
                                                <div
                                                    class="text-base font-medium text-white"
                                                >
                                                    Profile
                                                </div>
                                            </a>                                            
                                            <Link
                                                class="text-red-500 font-bold text-left"
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                >Log out</Link
                                            >
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="mt-6">
                                            <Link
                                                href="/register"
                                                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border hover:from-purple-700 hover:to-indigo-700"
                                            >
                                                Create an account
                                            </Link>
                                            <p
                                                class="mt-6 text-base font-medium text-center text-gray-500"
                                            >
                                                Existing customer?
                                                <Link
                                                    href="/login"
                                                    class="text-white hover:underline"
                                                >
                                                    Login
                                                </Link>
                                            </p>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </PopoverPanel>
                    </transition>
                </div>
            </div>
        </Popover>
    </div>
</template>

<script>
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
} from "@headlessui/vue";

export default {
    components: {
        // popover component
        Popover,
        PopoverButton,
        PopoverPanel,

        // dropdown component
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    },
};
</script>
