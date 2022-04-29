<template>
    <div class="px-10 py-6 flex space-x-3">
        <Menu as="div">
            <div>
                <MenuButton
                    class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    :class="
                        $page.component.includes('User/Account')
                            ? 'bg-indigo-300'
                            : ''
                    "
                >
                    My Account
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
                    class="focus:outline-none absolute z-10 mt-2 w-32 p-2 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Account/Profile'
                                    ? 'bg-violet-500 text-gray-100'
                                    : '',
                            ]"
                        >
                            Profile
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Account/Payment'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            Bank & Cards
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Account/Addresses'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            Addresses
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Account/Password'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            Change Password
                        </Link>
                    </MenuItem>
                </MenuItems>
            </transition>
        </Menu>

        <Menu as="div">
            <div>
                <MenuButton
                    class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    :class="
                        $page.component.includes('User/Payment')
                            ? 'bg-indigo-300'
                            : ''
                    "
                >
                    My Purchase
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
                    class="focus:outline-none absolute z-10 mt-2 w-32 p-2 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Purchase/Index'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            All
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Purchase/ToPay'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            To Pay
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Purchase/ToShip'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            To Ship
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Purchase/ToReceive'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            To Receive
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Purchase/Completed'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            Completed
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            :class="[
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                $page.component == 'User/Purchase/Cancelled'
                                    ? 'bg-violet-500 text-white'
                                    : '',
                            ]"
                        >
                            Cancelled
                        </Link>
                    </MenuItem>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    },
};
</script>
