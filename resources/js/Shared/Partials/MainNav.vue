<template>
    <div>
        <Popover>
            <div class="px-6 py-3 text-white bg-gray-800">
                <div class="flex justify-between">
                    <Link href="/" class="text-2xl font-bold"
                        >Arm-commerce</Link
                    >

                    <!-- 
                        - large screen
                     -->
                    <div
                        class="self-center hidden space-x-5 font-semibold md:flex"
                    >
                        <template v-if="$page.props.auth.isLoggedIn">
                            <Menu>
                                <MenuButton class="space-x-5 md:flex">
                                    <span
                                        class="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100"
                                    >
                                        <template
                                            v-if="
                                                $page.props.auth.user
                                                    .profileImageUrl !== null
                                            "
                                        >
                                            <img
                                                :src="
                                                    $page.props.auth.user
                                                        .profileImageUrl
                                                "
                                                alt="profile-image"
                                            />
                                        </template>
                                        <template v-else>
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
                                        </template>
                                    </span>
                                    <span class="font-bold text-sm self-center">
                                        {{ $page.props.auth.user.name }}
                                        <template
                                            v-if="$page.props.auth.user.isAdmin"
                                        >
                                            <span class="text-xs text-blue-500"
                                                >(admin)</span
                                            >
                                        </template>
                                    </span>
                                </MenuButton>

                                <MenuItems
                                    class="absolute w-40 bg-gray-600 inline-grid p-1.5 right-5 text-white top-12 rounded-md"
                                >
                                    <template
                                        v-if="$page.props.auth.user.isAdmin"
                                    >
                                        <MenuItem v-slot="{ active }">
                                            <Link
                                                class="px-2"
                                                :class="{
                                                    'bg-gray-800 hover:bg-gray-700 rounded-md':
                                                        active ||
                                                        $page.component.includes(
                                                            'Admin/Account'
                                                        ),
                                                }"
                                                href="/admin/account/profile"
                                            >
                                                Admin Account
                                            </Link>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                            <Link
                                                class="px-2"
                                                :class="{
                                                    'bg-gray-800 hover:bg-gray-700 rounded-md':
                                                        active ||
                                                        $page.component.includes(
                                                            'Admin/Products'
                                                        ),
                                                }"
                                                href="/admin/products"
                                            >
                                                Products
                                            </Link>
                                        </MenuItem>
                                    </template>
                                    <template v-else>
                                        <MenuItem v-slot="{ active }">
                                            <Link
                                                class="px-2"
                                                :class="{
                                                    'bg-gray-800 hover:bg-gray-700 rounded-md':
                                                        active ||
                                                        $page.component.includes(
                                                            'User/Account'
                                                        ),
                                                }"
                                                href="/user/account/profile"
                                            >
                                                My Account
                                            </Link>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                            <Link
                                                class="px-2"
                                                :class="{
                                                    'bg-gray-800 hover:bg-gray-700 rounded-md':
                                                        active ||
                                                        $page.component.includes(
                                                            'User/Purchase'
                                                        ),
                                                }"
                                                href="/user/purchase/all"
                                            >
                                                My Purchase
                                            </Link>
                                        </MenuItem>
                                    </template>
                                    <MenuItem>
                                        <Link
                                            class="mt-0.5 px-2 text-red-500 font-bold text-left hover:underline"
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
                                        ? 'text-indigo-500'
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
                                        ? 'text-indigo-500'
                                        : ''
                                "
                                >Create an account</Link
                            >
                        </template>
                    </div>

                    <!--  
                        - mobile layout
                        - mobile toggle button
                    -->
                    <template v-if="$page.props.auth.isLoggedIn">
                        <div class="self-center -my-2 -mr-2 md:hidden">
                            <PopoverButton>
                                <span
                                    class="flex h-6 w-6 rounded-full overflow-hidden bg-gray-100"
                                >
                                    <template
                                        v-if="
                                            $page.props.auth.user
                                                .profileImageUrl !== null
                                        "
                                    >
                                        <img
                                            :src="
                                                $page.props.auth.user
                                                    .profileImageUrl
                                            "
                                            alt="profile-image"
                                        />
                                    </template>
                                    <template v-else>
                                        <svg
                                            class="h-full w-full text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </template>
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

                    <!-- mobile layout content -->
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
                                        <!-- dumbell logo -->
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
                                        <!-- close icon -->
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
                                            <Link
                                                href="#"
                                                class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                            >
                                                <div
                                                    class="text-base font-medium text-white"
                                                >
                                                    Fitness
                                                </div>
                                            </Link>

                                            <Link
                                                href="#"
                                                class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                            >
                                                <div
                                                    class="text-base font-medium text-white"
                                                >
                                                    Workout
                                                </div>
                                            </Link>

                                            <Link
                                                href="#"
                                                class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                            >
                                                <div
                                                    class="text-base font-medium text-white"
                                                >
                                                    Supplement
                                                </div>
                                            </Link>

                                            <div
                                                class="flex space-x-2 self-center"
                                            >
                                                <template v-if="$page.props.auth.isLoggedIn">
                                                    <template v-if="$page.props.auth.user.isAdmin">
                                                        <Link href="/admin/products">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 640 512"
                                                                class="h-5 text-white fill-current"
                                                            >
                                                                <path
                                                                    d="M0 155.2C0 147.9 2.153 140.8 6.188 134.7L81.75 21.37C90.65 8.021 105.6 0 121.7 0H518.3C534.4 0 549.3 8.021 558.2 21.37L633.8 134.7C637.8 140.8 640 147.9 640 155.2C640 174.5 625.2 190.3 606.3 191.9C586.1 172.2 558.5 160 528 160C497.5 160 469.8 172.2 449.6 192H36.84C16.5 192 .0003 175.5 .0003 155.2H0zM384 224V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224H128V384H320V224H384zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 240C510.3 240 496 254.3 496 272V320H560V272C560 254.3 545.7 240 528 240z"
                                                                />
                                                            </svg>
                                                        </Link>
                                                    </template>
                                                    <template v-else>
                                                        <Link href="/user/account/profile">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 576 512"
                                                                class="h-5 text-white fill-current"
                                                            >
                                                                <path
                                                                    d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                                                                />
                                                            </svg>
                                                        </Link>
                                                        <span>0</span>
                                                    </template>
                                                </template>
                                                <template v-else>
                                                    <Link href="/login">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                            class="h-5 text-white fill-current"
                                                        >
                                                            <path
                                                                d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                                                            />
                                                        </svg>
                                                    </Link>
                                                    <span>0</span>
                                                </template>
                                            </div>
                                        </nav>
                                    </div>
                                </div>

                                <div class="px-5 py-6">
                                    <template
                                        v-if="$page.props.auth.isLoggedIn"
                                    >
                                        <div class="grid grid-cols-1 gap-7">
                                            <template v-if="$page.props.auth.user.isAdmin">
                                                <Link
                                                    href="/admin/account/profile"
                                                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                                    :class="
                                                        $page.component.includes(
                                                            'Admin/Account'
                                                        )
                                                            ? 'bg-gray-400 hover:bg-gray-600'
                                                            : ''
                                                    "
                                                >
                                                    <div
                                                        class="text-base font-medium text-white"
                                                    >
                                                        Admin Account
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/admin/products"
                                                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                                    :class="
                                                        $page.component.includes(
                                                            'Admin/Products'
                                                        )
                                                            ? 'bg-gray-400 hover:bg-gray-600'
                                                            : ''
                                                    "
                                                >
                                                    <div
                                                        class="text-base font-medium text-white"
                                                    >
                                                        Products
                                                    </div>
                                                </Link>
                                            </template>
                                            <template v-else>
                                                <Link
                                                    href="/user/account/profile"
                                                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                                    :class="
                                                        $page.component.includes(
                                                            'User/Account'
                                                        )
                                                            ? 'bg-gray-400 hover:bg-gray-600'
                                                            : ''
                                                    "
                                                >
                                                    <div
                                                        class="text-base font-medium text-white"
                                                    >
                                                        My Account
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/user/purchase"
                                                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-400"
                                                    :class="
                                                        $page.component.includes(
                                                            'User/Purchase'
                                                        )
                                                            ? 'bg-gray-400 hover:bg-gray-600'
                                                            : ''
                                                    "
                                                >
                                                    <div
                                                        class="text-base font-medium text-white"
                                                    >
                                                        My Purchase
                                                    </div>
                                                </Link>
                                            </template>
                                            <Link
                                                class="text-red-500 font-bold text-left hover:underline"
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
