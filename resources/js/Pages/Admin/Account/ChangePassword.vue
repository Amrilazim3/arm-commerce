<template>
    <Head title="Change Password" />
    <div class="lg:flex">
        <SideNav />
        <FormKit
            type="form"
            submit-label="Save"
            form-class="px-10 lg:pl-10 lg:pr-28 py-6 space-y-8 divide-y divide-gray-200 lg:flex-1"
            :submit-attrs="{
                outerClass: '$reset',
                wrapperClass: 'mt-6 flex justify-end',
            }"
            messages-class="$reset pt-5"
            :disabled="form.processing"
            @submit="changePassword"
            :input-errors="{
                old_password: form.errors.oldPassword
                    ? form.errors.oldPassword
                    : '',
                new_password: form.errors.newPassword
                    ? form.errors.newPassword
                    : '',
                new_password_confirm: form.errors.newPasswordConfirmation
                    ? form.errors.newPasswordConfirmation
                    : '',
            }"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Change Password
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Feeling unsecured with current password? Change it to
                        enhaced your security.
                    </p>
                </div>

                <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="old_password"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Old password
                        </label>
                        <FormKit
                            name="old_password"
                            type="password"
                            outer-class="$reset mt-1 sm:mt-0 sm:col-span-2"
                            inner-class="$reset max-w-lg rounded-md shadow-sm"
                            validation="required"
                            validation-label="Old password"
                            placeholder="Enter your old password"
                            v-model="form.oldPassword"
                        />
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="new_password"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            New password
                        </label>
                        <FormKit
                            name="new_password"
                            type="password"
                            outer-class="$reset mt-1 sm:mt-0 sm:col-span-2"
                            inner-class="$reset max-w-lg rounded-md shadow-sm"
                            validation="required|length:7"
                            validation-label="New password"
                            placeholder="Enter your new password"
                            v-model="form.newPassword"
                        />
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="new_password_confirm"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            New password confirm
                        </label>
                        <FormKit
                            name="new_password_confirm"
                            type="password"
                            outer-class="$reset mt-1 sm:mt-0 sm:col-span-2"
                            inner-class="$reset max-w-lg rounded-md shadow-sm"
                            validation="required|length:7|confirm:new_password"
                            validation-label="New password confirm"
                            placeholder="Confirm your password"
                            v-model="form.newPasswordConfirmation"
                        />
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
        </FormKit>
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
