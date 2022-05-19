<template>
    <Head title="Reset Password" />
    <div
        class="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Reset password
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="resetPassword">
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <div class="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your email"
                                readonly
                                required
                                v-model="form.email"
                            />
                        </div>
                        <div
                            v-if="form.errors.email"
                            class="text-red-500 text-sm"
                        >
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <div>
                        <label
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                        >
                            New password
                        </label>
                        <div class="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your new password"
                                required
                                v-model="form.password"
                            />
                        </div>
                        <div
                            v-if="form.errors.password"
                            class="text-red-500 text-sm"
                        >
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <div>
                        <label
                            for="password-confirmation"
                            class="block text-sm font-medium text-gray-700"
                        >
                            New password confirmation
                        </label>
                        <div class="mt-1">
                            <input
                                id="password-confirmation"
                                name="password-confirmation"
                                type="password"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="New password confirmation"
                                required
                                v-model="form.password_confirmation"
                            />
                        </div>
                        <div
                            v-if="form.errors.password_confirmation"
                            class="text-red-500 text-sm"
                        >
                            {{ form.errors.password_confirmation }}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
                            :disabled="form.processing || !form.isDirty"
                            :class="
                                form.processing || !form.isDirty
                                    ? 'bg-indigo-300 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            "
                        >
                            Reset password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: null,

    props: {
        token: String,
        email: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                _method: "patch",
                token: this.token,
                email: this.email,
                password: "",
                password_confirmation: "",
            }),
        };
    },

    methods: {
        resetPassword() {
            this.form.post("/user/account/reset-password", {
                preserveScroll: true,
                onSuccess: () => {
                    if (this.$page.props.auth.isLoggedIn) {
                        this.$notify(
                            {
                                group: "success",
                                title: "Success",
                                text: "Your new password has been updated.",
                            },
                            3500
                        );
                    }
                },
                onError: () => {
                    this.$notify(
                        {
                            group: "error",
                            title: "Error",
                            text: "Your new password failed to be updated, please try again.",
                        },
                        3500
                    );
                },
            });
        },
    },
};
</script>
