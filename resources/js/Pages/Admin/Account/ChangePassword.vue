<template>
    <Head title="Change Password" />
    <div class="lg:flex">
        <SideNav />
        <form
            class="px-10 lg:pl-10 lg:pr-28 py-6 space-y-8 divide-y divide-gray-200 lg:flex-1"
            @submit.prevent="changePassword"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Change Password
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            Feeling unsecured with current password? Change it to enhaced your security.
                        </p>
                    </div>

                    <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <label
                                for="old-password"
                                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Old password
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="max-w-lg flex rounded-md shadow-sm">
                                    <input
                                        type="password"
                                        name="old-password"
                                        id="old-password"
                                        autocomplete="password"
                                        class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter your old password"
                                        v-model="form.oldPassword"
                                        required
                                    />
                                </div>
                                <div
                                    v-if="form.errors.oldPassword"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ form.errors.oldPassword }}
                                </div>
                            </div>
                        </div>

                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <label
                                for="new-password"
                                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                New password
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="max-w-lg flex rounded-md shadow-sm">
                                    <input
                                        type="password"
                                        name="new-password"
                                        id="new-password"
                                        class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter your new password"
                                        v-model="form.newPassword"
                                        required
                                    />
                                </div>
                                <div
                                    v-if="form.errors.newPassword"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ form.errors.newPassword }}
                                </div>
                            </div>
                        </div>

                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <label
                                for="new-password-confirmation"
                                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                New password confirmation
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="max-w-lg flex rounded-md shadow-sm">
                                    <input
                                        type="password"
                                        name="new-password-confirmation"
                                        id="new-password-confirmation"
                                        class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Confirm your new password"
                                        v-model="form.newPasswordConfirmation"
                                        required
                                    />
                                </div>
                                <div
                                    v-if="form.errors.newPasswordConfirmation"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ form.errors.newPasswordConfirmation }}
                                </div>
                            </div>
                        </div>

                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <Link
                                href="/password/forgot"
                                class="text-sm font-medium text-blue-500"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-5">
                <div class="flex justify-end">
                    <button
                        type="submit"
                        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
                        :disabled="form.processing || !form.isDirty"
                        :class="
                            form.processing || !form.isDirty
                                ? 'cursor-not-allowed bg-indigo-300'
                                : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        "
                    >
                        Change
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import SideNav from "../../../Shared/SideNav.vue";

export default {
    components: {
        SideNav,
    },

    data() {
        return {
            form: this.$inertia.form({
                _method: "patch",
                oldPassword: "",
                newPassword: "",
                newPasswordConfirmation: "",
            }),
        };
    },

    methods: {
        changePassword() {
            this.form.post("/admin/account/password/change", {
                preserveScroll: true,
                onSuccess: () => {
                    this.$notify(
                        {
                            group: "success",
                            title: "Success",
                            text: "Your new password is updated",
                        },
                        3500
                    );
                },
                onError: () => {
                    this.$notify(
                        {
                            group: "error",
                            title: "Error",
                            text: "Your new password failed to be update, please try again",
                        },
                        3500
                    );
                },
            });
        },
    },
};
</script>
