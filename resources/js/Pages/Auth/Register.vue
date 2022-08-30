<template>
    <Head title="Register" />
    <div
        class="bg-gray-100 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <svg
                class="mx-auto h-12 w-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
            >
                <path
                    d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z"
                />
            </svg>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Create your account here
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div
                class="bg-white border py-8 px-4 shadow sm:rounded-lg sm:px-10"
            >
                <FormKit
                    type="form"
                    submit-label="Create account"
                    form-class="space-y-6"
                    :submit-attrs="{
                        inputClass: 'w-full',
                    }"
                    :disabled="form.processing"
                    @submit="register"
                    :input-errors="{
                        name: form.errors.name ? form.errors.name : '',
                        email: form.errors.email ? form.errors.email : '',
                        password: form.errors.password
                            ? form.errors.password
                            : '',
                    }"
                >
                    <FormKit
                        name="name"
                        label="Name"
                        type="text"
                        validation="required|length:5,30"
                        placeholder="Enter your name"
                        v-model="form.name"
                    />

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
                        validation="required|length:7"
                        placeholder="Enter your password"
                        v-model="form.password"
                    />

                    <FormKit
                        name="password_confirm"
                        label="Password confirmation"
                        type="password"
                        validation="required|length:7|confirm:password"
                        placeholder="Confirm your password"
                        v-model="form.password_confirmation"
                    />

                    <FormKit
                        label="Remember me"
                        type="checkbox"
                        v-model="form.isRememberMe"
                    />
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
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                isRememberMe: false,
            }),
        };
    },

    methods: {
        register() {
            this.form.post("/register", {
                preserveScroll: true,
            });
        },
    },
};
</script>
