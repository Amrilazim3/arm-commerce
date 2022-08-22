<template>
    <!-- sm screen -->
    <div class="lg:hidden px-10 py-6 flex space-x-3">
        <Menu as="div">
            <div>
                <template v-if="$page.props.auth.user.isAdmin">
                    <MenuButton
                        class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        :class="
                            $page.component.includes('Admin/Account')
                                ? 'bg-indigo-300'
                                : ''
                        "
                    >
                        Admin Account
                    </MenuButton>
                </template>
                <template v-else>
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
                </template>
            </div>

            <!-- drop down content -->
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="focus:outline-none absolute z-10 mt-2 w-40 p-2 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <template v-if="$page.props.auth.user.isAdmin">
                        <MenuItem>
                            <Link
                                href="/admin/account/profile"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'Admin/Account/Profile'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Profile
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/admin/account/password/change"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component ==
                                    'Admin/Account/ChangePassword'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Change Password
                            </Link>
                        </MenuItem>
                    </template>
                    <template v-else>
                        <MenuItem>
                            <Link
                                href="/user/account/profile"
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
                                href="/user/account/addresses"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'User/Account/Addresses'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Addresses
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/user/account/password/change"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component ==
                                    'User/Account/ChangePassword'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Change Password
                            </Link>
                        </MenuItem>
                    </template>
                </MenuItems>
            </transition>
        </Menu>

        <Menu as="div">
            <div>
                <template v-if="$page.props.auth.user.isAdmin">
                    <MenuButton
                        class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        :class="
                            $page.component.includes('Admin/Products')
                                ? 'bg-indigo-300'
                                : ''
                        "
                    >
                        Products
                    </MenuButton>
                </template>
                <template v-else>
                    <MenuButton
                        class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        :class="
                            $page.component.includes('User/Purchase')
                                ? 'bg-indigo-300'
                                : ''
                        "
                    >
                        My Purchase
                    </MenuButton>
                </template>
            </div>

            <!-- drop down content -->
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="focus:outline-none absolute z-10 mt-2 w-40 p-2 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <template v-if="$page.props.auth.user.isAdmin">
                        <MenuItem>
                            <Link
                                href="/admin/products"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'Admin/Products/Index'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Store
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/admin/products/create"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'Admin/Products/Create'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Create Product
                            </Link>
                        </MenuItem>
                    </template>
                    <template v-else>
                        <MenuItem>
                            <Link
                                href="/user/purchase"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'User/Purchase/Index'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                All
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/user/purchase/to-pay"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'User/Purchase/ToPay'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                To Pay
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/user/purchase/to-ship"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'User/Purchase/ToShip'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                To Ship
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/user/purchase/to-receive"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'User/Purchase/ToReceive'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                To Receive
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/user/purchase/completed"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'User/Purchase/Completed'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Completed
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/user/purchase/cancelled"
                                :class="[
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900',
                                    $page.component == 'User/Purchase/Cancelled'
                                        ? 'bg-violet-500 text-gray-100'
                                        : '',
                                ]"
                            >
                                Cancelled
                            </Link>
                        </MenuItem>
                    </template>
                </MenuItems>
            </transition>
        </Menu>
    </div>

    <!-- large screen -->
    <div class="hidden lg:flex pt-20 h-full justify-end w-2/12">
        <div class="inline-grid w-32">
            <template v-if="$page.props.auth.user.isAdmin">
                <Disclosure
                    :defaultOpen="$page.component.includes('Admin/Account')"
                    v-slot="{ open }"
                    as="div"
                >
                    <DisclosureButton
                        class="text-left text-md font-medium text-purple-600 hover:text-purple-700"
                        :class="open ? 'pl-2' : ''"
                        id="closure-one"
                        @click="closeOther('closure-one')"
                    >
                        <span>Admin Account</span>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            as="ul"
                            class="pl-2 pt-2 pb-2 text-sm text-purple-500"
                        >
                            <li>
                                <Link
                                    href="/admin/account/profile"
                                    :class="
                                        $page.component ==
                                        'Admin/Account/Profile'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/account/password/change"
                                    :class="
                                        $page.component ==
                                        'Admin/Account/ChangePassword'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Change Password
                                </Link>
                            </li>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </template>
            <template v-else>
                <Disclosure
                    :defaultOpen="$page.component.includes('User/Account')"
                    v-slot="{ open }"
                    as="div"
                >
                    <DisclosureButton
                        class="text-left text-md font-medium text-purple-600 hover:text-purple-700"
                        :class="open ? 'pl-2' : ''"
                        id="closure-one"
                        @click="closeOther('closure-one')"
                    >
                        <span>My Account</span>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            as="ul"
                            class="pl-2 pt-2 pb-2 text-sm text-purple-500"
                        >
                            <li>
                                <Link
                                    href="/user/account/profile"
                                    :class="
                                        $page.component ==
                                        'User/Account/Profile'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user/account/addresses"
                                    :class="
                                        $page.component ==
                                        'User/Account/Addresses'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Addresses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user/account/password/change"
                                    :class="
                                        $page.component ==
                                        'User/Account/ChangePassword'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Change Password
                                </Link>
                            </li>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </template>

            <template v-if="$page.props.auth.user.isAdmin">
                <Disclosure
                    :defaultOpen="$page.component.includes('Admin/Products')"
                    v-slot="{ open }"
                    as="div"
                >
                    <DisclosureButton
                        class="text-left text-md font-medium text-purple-600 hover:text-purple-700"
                        :class="open ? 'pl-2' : ''"
                        id="closure-two"
                        @click="closeOther('closure-two')"
                    >
                        <span>Products</span>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            as="ul"
                            class="pl-2 pt-2 pb-2 text-sm text-purple-500"
                        >
                            <li>
                                <Link
                                    href="/admin/products"
                                    :class="
                                        $page.component == 'Admin/Products/Index'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Store
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/products/create"
                                    :class="
                                        $page.component == 'Admin/Products/Create'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Create Product
                                </Link>
                            </li>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </template>
            <template v-else>
                <Disclosure
                    :defaultOpen="$page.component.includes('User/Purchase')"
                    v-slot="{ open }"
                    as="div"
                >
                    <DisclosureButton
                        class="text-left text-md font-medium text-purple-600 hover:text-purple-700"
                        :class="open ? 'pl-2' : ''"
                        id="closure-two"
                        @click="closeOther('closure-two')"
                    >
                        <span>My purchase</span>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            as="ul"
                            class="pl-2 pt-2 pb-2 text-sm text-purple-500"
                        >
                            <li>
                                <Link
                                    href="/user/purchase"
                                    :class="
                                        $page.component == 'User/Purchase/Index'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    All
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user/purchase/to-pay"
                                    :class="
                                        $page.component == 'User/Purchase/ToPay'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    To Pay
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user/purchase/to-ship"
                                    :class="
                                        $page.component == 'User/Purchase/ToShip'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    To Ship
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user/purchase/to-receive"
                                    :class="
                                        $page.component == 'User/Purchase/ToReceive'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    To Receive
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user/purchase/completed"
                                    :class="
                                        $page.component == 'User/Purchase/Completed'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Completed
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user/purchase/cancelled"
                                    :class="
                                        $page.component == 'User/Purchase/Cancelled'
                                            ? 'font-bold'
                                            : ''
                                    "
                                >
                                    Cancelled
                                </Link>
                            </li>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </template>
        </div>
    </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    },

    methods: {
        closeOther(except) {
            document.querySelectorAll('[id^="closure-"]').forEach((elem) => {
                if (
                    except !== elem.id &&
                    elem.getAttribute("aria-expanded") == "true"
                ) {
                    elem.click();
                }
            });
        },
    },
};
</script>
