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
            <form class="mt-8 space-y-6" @submit.prevent="changeEmail">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email" class="sr-only">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            readonly
                            required
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            v-model="form.currentEmail"
                        />
                    </div>
                    <div>
                        <label for="new-email" class="sr-only"
                            >New email address</label
                        >
                        <input
                            id="new-email"
                            name="new-email"
                            type="email"
                            autocomplete="email"
                            required
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="New email address"
                            v-model="form.newEmail"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            v-model="form.password"
                        />
                    </div>
                </div>

                <p class="text-sm text-red-500" v-if="form.errors.newEmail">
                    {{ form.errors.newEmail }}
                </p>
                <p class="text-sm text-red-500" v-if="form.errors.password">
                    {{ form.errors.password }}
                </p>

                <div class="flex items-center">
                    <div class="text-sm">
                        <Link
                            href="/password/forgot"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
                        :disabled="form.processing || !form.isDirty"
                        :class="
                            form.processing || !form.isDirty
                                ? 'cursor-not-allowed bg-indigo-300'
                                : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        "
                    >
                        Change email
                    </button>
                </div>

                <p class="text-red-500 text-sm" v-if="form.isDirty">
                    Note! we will send a new email verification link to your new
                    email inbox. Make sure your new email is correct.
                </p>
            </form>
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
            this.form.post("/user/account/change-email", {
                preserveScroll: true,
            });
        },
    },
};
</script>
