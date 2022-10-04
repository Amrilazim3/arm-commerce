<template>
    <Head title="Profile" />
    <div class="lg:flex">
        <SideNav />

        <FormKit
            type="form"
            form-class="px-10 lg:pl-10 lg:pr-28 py-6 space-y-8 divide-y divide-gray-200 lg:flex-1"
            messages-class="$reset pt-5"
            submit-label="Save"
            :submit-attrs="{
                outerClass: '$reset',
                wrapperClass: '$reset mt-6 flex justify-end',
            }"
            :disabled="user.processing"
            @submit="updateProfile"
            :input-errors="{
                name: user.errors.name ? user.errors.name : '',
                phone_number: user.errors.phoneNumber
                    ? user.errors.phoneNumber
                    : '',
                gender: user.errors.gender ? user.errors.gender : '',
                date_of_birth: user.errors.dateOfBirth
                    ? user.errors.dateOfBirth
                    : '',
            }"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Profile Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Update your account's profile information and email
                        address.
                    </p>
                </div>

                <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Name
                        </label>
                        <FormKit
                            name="name"
                            type="text"
                            outer-class="$reset mt-1 sm:mt-0 sm:col-span-2"
                            inner-class="$reset max-w-lg flex rounded-md shadow-sm"
                            validation="required|length:5:30"
                            placeholder="Enter your name"
                            v-model="user.name"
                        />
                    </div>

                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="profile-image"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Profile image
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="flex items-center">
                                <span
                                    class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                                >
                                    <template
                                        v-if="
                                            user.profileImageUrl !== null &&
                                            user.newProfileImageUrl == ''
                                        "
                                    >
                                        <img
                                            :src="user.profileImageUrl"
                                            alt="profile-image"
                                            class="h-full w-full object-cover"
                                        />
                                    </template>
                                    <template
                                        v-else-if="
                                            user.newProfileImageUrl !== ''
                                        "
                                    >
                                        <img
                                            :src="user.newProfileImageUrl"
                                            alt="profile-image"
                                            class="h-full w-full object-cover"
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
                                <label
                                    for="profile-image"
                                    class="inline-block cursor-pointer ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <input
                                        type="file"
                                        id="profile-image"
                                        name="profile-image"
                                        accept="image/*"
                                        class="hidden"
                                        @change="
                                            handleProfileImageUpload($event)
                                        "
                                    />
                                    select
                                </label>
                                <button
                                    class="text-red-500 text-sm font-medium ml-4 hover:underline"
                                    v-if="
                                        user.profileImageUrl ||
                                        user.newProfileImageUrl !== ''
                                    "
                                    @click.prevent="removeProfileImage"
                                >
                                    remove
                                </button>
                            </div>
                            <div
                                v-if="user.errors.newProfileImageFile"
                                class="text-red-500 text-sm mt-1"
                            >
                                {{ user.errors.newProfileImageFile }}
                            </div>
                        </div>
                    </div>

                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Email address
                        </label>
                        <div class="self-center mt-1 sm:mt-0 sm:col-span-2">
                            <div>
                                <span class="max-w-lg sm:text-sm">
                                    {{ user.email }}
                                </span>
                                <template v-if="user.emailIsVerfied">
                                    <span class="text-sm ml-1.5 text-blue-500"
                                        >(verified)
                                    </span>
                                </template>
                                <template v-else>
                                    <span class="text-sm ml-1.5 text-gray-500">
                                        (unverified)
                                    </span>
                                    <span>
                                        <button
                                            type="button"
                                            class="text-sm font-medium ml-1.5"
                                            :class="
                                                emailVerification.resendButton
                                                    .processing
                                                    ? 'text-blue-300 cursor-not-allowed'
                                                    : 'text-blue-500 hover:underline'
                                            "
                                            :disabled="
                                                emailVerification.resendButton
                                                    .processing
                                            "
                                            @click.prevent="requestResendLink"
                                        >
                                            resend link
                                        </button>
                                    </span>
                                </template>
                                <Link
                                    class="font-medium text-sm ml-2.5 text-red-500 hover:underline"
                                    href="/user/account/email/change"
                                >
                                    change
                                </Link>
                            </div>
                            <template v-if="emailVerification.isSuccessResent">
                                <p class="text-sm text-green-600">
                                    Email verification successfully sent.
                                </p>
                            </template>
                            <template v-if="emailVerification.isFailResent">
                                <p class="text-sm text-red-600">
                                    Email verification failed to sent. Please
                                    try again.
                                </p>
                            </template>
                        </div>
                    </div>

                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="phone-number"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Phone number
                        </label>
                        <FormKit
                            name="phone_number"
                            type="number"
                            outer-class="$reset mt-1 sm:mt-0 sm:col-span-2"
                            inner-class="$reset max-w-lg flex rounded-md shadow-sm"
                            validation-label="Phone number"
                            placeholder="60119872345"
                            v-model="user.phoneNumber"
                        />
                    </div>

                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="gender"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Gender
                        </label>
                        <FormKit
                            name="gender"
                            type="radio"
                            outer-class="$reset mt-1 sm:mt-0 sm:col-span-2"
                            inner-class="$reset max-w-lg flex rounded-md shadow-sm"
                            :options="['Male', 'Female', 'Other']"
                            options-class="$reset flex space-x-10"
                            fieldset-class="$reset"
                            v-model="user.gender"
                        />
                    </div>

                    <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                        <label
                            for="date_of_birth"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Date of birth
                        </label>
                        <div class="mt-1 sm:mt-0 sm:pt-2 sm:col-span-2">
                            <Datepicker
                                v-model="user.dateOfBirth"
                                :enableTimePicker="false"
                                placeholder="Enter your date of birth"
                                class="max-w-lg"
                            />
                        </div>
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
        let user = this.$page.props.auth.user;
        return {
            user: this.$inertia.form({
                _method: "patch",
                name: user.name,
                profileImageUrl: user.profileImageUrl,
                newProfileImageUrl: "",
                newProfileImageFile: "",
                email: user.email,
                emailIsVerfied: user.emailIsVerfied,
                phoneNumber: user.phoneNumber ? user.phoneNumber : null,
                phoneResults: "",
                dateOfBirth:
                    user.dateOfBirth !== null ? user.dateOfBirth : null,
                gender: user.gender,
            }),

            emailVerification: {
                resendButton: this.$inertia.form({}),
                isSuccessResent: false,
                isFailResent: false,
            },

            safeToLeave: true,
        };
    },

    watch: {
        user: {
            handler(newObj) {
                if (!newObj.isDirty) {
                    this.safeToLeave = true;
                }

                if (newObj.isDirty) {
                    this.safeToLeave = false;
                }
            },
            deep: true,
        },
    },

    mounted() {
        // need to set safeToLeave variable to true again,
        // because when phone number / date of birth input is empty 
        // the user.isDirty will become true and safeToLeave will become false.
        this.safeToLeave = true; 

        window.onbeforeunload = this.handleExit;

        document.addEventListener('inertia:before', this.handleRouteChange)
    },

    beforeUnmount() {
        window.onbeforeunload = false;

        document.removeEventListener('inertia:before', this.handleRouteChange);
    },

    methods: {
        handleRouteChange(event) {
            if (!this.safeToLeave) {
                if (!confirm('Are you sure you want to navigate away? the changes you made will not be saved!')) {
                    event.preventDefault();
                }
            }
        },

        handleExit() {
            if (!this.safeToLeave) {
                return "The changes you made will not be saved!";
            }
        },

        handleProfileImageUpload(event) {
            let selectedImage = event.target.files[0];

            this.user.newProfileImageUrl = URL.createObjectURL(selectedImage);
            this.user.newProfileImageFile = selectedImage;
        },

        removeProfileImage() {
            if (
                this.user.profileImageUrl &&
                this.user.newProfileImageUrl == ""
            ) {
                this.$swal
                    .fire({
                        text: "Remove current profile picture?",
                        showCancelButton: true,
                        confirmButtonText: "Yes",
                        cancelButtonColor: "rgb(99, 102, 241)",
                        confirmButtonColor: "rgb(156, 163, 175)",
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            this.user.profileImageUrl = "";
                            this.user.newProfileImageFile = "";
                            return;
                        }
                    });
            }

            this.user.newProfileImageFile = "";
            this.user.newProfileImageUrl = "";
            return;
        },

        updateProfile() {
            this.safeToLeave = true;

            this.user.post("/user/account/profile", {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => {
                    this.user.isDirty = false;

                    if (this.user.newProfileImageUrl) {
                        this.user.profileImageUrl =
                            this.user.newProfileImageUrl;
                        this.user.newProfileImageUrl = "";
                    }

                    this.$notify(
                        {
                            group: "success",
                            title: "Success",
                            text: "Your profile was updated",
                        },
                        3500
                    );
                },
                onError: () => {
                    this.$notify(
                        {
                            group: "error",
                            title: "Error",
                            text: "Your profile failed to update. Please try again",
                        },
                        3500
                    );
                },
            });
        },

        requestResendLink() {
            this.safeToLeave = true;

            this.emailVerification.resendButton.post("/email/verify/send", {
                preserveScroll: true,
                onSuccess: () => {
                    this.emailVerification.isSuccessResent = true;
                },
                onError: () => {
                    this.emailVerification.isFailResent = true;
                },
            });
        },
    },
};
</script>
