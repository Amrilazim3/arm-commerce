<template>
    <Head title="Login" />
    <div
        class="bg-gray-100 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                class="mx-auto h-12 w-auto"
                src="https://arm-commerce.com/images/dumbbell-solid.svg"
                alt="arm-commerce-icon"
            />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Log in to your account
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <FormKit
                    type="form"
                    form-label="Log in"
                    form-class="space-y-6"
                    :submit-attrs="{
                        inputClass: 'w-full'
                    }"
                    :disabled="form.processing"
                    @submit="login"
                    :input-errors="{
                        email: form.errors.email ? form.errors.email : '',
                        password: form.errors.password ? form.errors.password : ''
                    }"
                >
                    <FormKit
                        name="email"
                        label="Email address"
                        type="text"
                        validation="required|email"
                        placeholder="Enter your email address"
                        v-model="form.email"
                    />

                    <FormKit
                        name="password"
                        label="Password"
                        type="password"
                        validation="required"
                        placeholder="Enter your password"
                        v-model="form.password"
                    />

                    <div class="flex items-center justify-between">
                        <FormKit
                            outer-class="$reset"
                            label="Remember me"
                            type="checkbox"
                            v-model="form.isRememberMe"
                        />

                        <Link
                            href="/password/forgot"
                            class="font-medium text-sm text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    <p
                        class="text-sm font-medium text-green-500"
                        v-if="
                            $page.props.flash.success ==
                            'Your password has been reset!'
                        "
                    >
                        {{ $page.props.flash.success }}
                    </p>
                </FormKit>
                <ThirdPartyServices />
            </div>
        </div>
    </div>
</template>

<script>
import ThirdPartyServices from "../../Shared/ThirdPartyServices.vue";

export default {
    layout: null,

    components: {
        ThirdPartyServices,
    },

    data() {
        return {
            form: this.$inertia.form({
                email: "",
                password: "",
                isRememberMe: false,
            }),
        };
    },

    methods: {
        login() {
            this.form.post("/login", {
                preserveScroll: true,
            });
        },
    },
};
</script>
