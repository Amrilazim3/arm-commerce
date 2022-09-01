<template>
    <Head title="Change Email" />

    <div
        class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2
                    class="mt-6 text-center text-3xl font-extrabold text-gray-900"
                >
                    Change email
                </h2>
            </div>
            <FormKit
                type="form"
                submit-label="Submit"
                form-class="mt-8 space-y-6"
                :submit-attrs="{
                    inputClass: 'w-full',
                }"
                :disabled="form.processing"
                @submit="changeEmail"
                :input-errors="{
                    new_email: form.errors.newEmail ? form.errors.newEmail : '',
                    password: form.errors.password ? form.errors.password : '',
                }"
            >
                <FormKit type="hidden" name="remember" value="true" />

                <div class="rounded-md shadow-sm space-y-1">
                    <FormKit
                        name="old_email"
                        type="email"
                        :readonly="true"
                        validation="required|email"
                        input-class="$reset appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Current email address"
                        v-model="form.currentEmail"
                    />
                    <FormKit
                        name="new_email"
                        type="email"
                        validation="required|email"
                        validation-label="New email"
                        input-class="$reset appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="New email address"
                        v-model="form.newEmail"
                    />
                    <FormKit
                        name="password"
                        type="password"
                        validation="required"
                        input-class="$reset appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your password"
                        v-model="form.password"
                    />
                </div>

                <div class="flex items-center text-sm">
                    <Link
                        href="/password/forgot"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Forgot your password?
                    </Link>
                </div>

                <p class="text-red-500 text-sm" v-if="form.isDirty">
                    Note! we will send a new email verification link to your new
                    email inbox. Make sure your new email is correct.
                </p>
            </FormKit>
        </div>
    </div>
</template>

<script>
export default {
    layout: null,

    data() {
        let user = this.$page.props.auth.user;
        return {
            form: this.$inertia.form({
                _method: "patch",
                currentEmail: user.email,
                newEmail: "",
                password: "",
            }),
        };
    },

    methods: {
        changeEmail() {
            this.form.post("/admin/account/email/change", {
                preserveScroll: true,
            });
        },
    },
};
</script>
