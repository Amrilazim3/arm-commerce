<template>
    <Head title="Forgot Password" />
    <div
        class="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Forgot password
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="sendResetLink">
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
                                :readonly="
                                    $page.props.auth.isLoggedIn ? true : false
                                "
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
                        <button
                            type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
                            :disabled="form.email == '' || form.processing"
                            :class="
                                form.email == '' || form.processing
                                    ? 'bg-indigo-300 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            "
                        >
                            Send reset link
                        </button>
                    </div>

                    <p class="text-sm font-medium text-blue-500" v-if="emailSentSuccessed">Reset password link has been sent to your inbox.</p>
                    <p class="text-sm font-medium text-red-500" v-if="emailSentFailed">Something when wrong went performing this action, Please try again.</p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: null,

    data() {
        return {
            form: this.$inertia.form({
                email: this.$page.props.auth.isLoggedIn
                    ? this.$page.props.auth.user.email
                    : "",
            }),
            emailSentSuccessed: false,
            emailSentFailed: false,
        };
    },

    methods: {
        sendResetLink() {
            this.form.post("/user/account/forgot-password", {
                preserveScroll: true,
                onSuccess: () => {
                    this.emailSentFailed = false;
                    this.emailSentSuccessed = true;
                },
                onError: () => {
                    this.emailSentSuccessed = false;
                    this.emailSentFailed = true;
                }
            });
        },
    },
};
</script>
