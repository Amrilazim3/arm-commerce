<template>
    <Head title="Profile" />
    <div class="lg:flex">
        <SideNav />
        <form
            class="px-10 lg:pl-10 lg:pr-28 py-6 space-y-8 divide-y divide-gray-200 lg:flex-1"
            @submit.prevent="updateProfile"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Admin Profile Information
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            Update admin information to make sure your data is securely stored.
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
                                name
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="max-w-lg flex rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autocomplete="name"
                                        class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        v-model="admin.name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div
                                    v-if="admin.errors.name"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ admin.errors.name }}
                                </div>
                            </div>
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
                                                admin.profileImageUrl !== null &&
                                                admin.newProfileImageUrl == ''
                                            "
                                        >
                                            <img
                                                :src="admin.profileImageUrl"
                                                alt="profile-image"
                                                class="h-full w-full object-cover"
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                admin.newProfileImageUrl !== ''
                                            "
                                        >
                                            <img
                                                :src="admin.newProfileImageUrl"
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
                                        Change
                                    </label>
                                    <button
                                        class="text-red-500 text-sm font-medium ml-4 hover:underline"
                                        v-if="
                                            admin.profileImageUrl ||
                                            admin.newProfileImageUrl !== ''
                                        "
                                        @click.prevent="removeProfileImage"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div
                                    v-if="admin.errors.newProfileImageFile"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ admin.errors.newProfileImageFile }}
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
                                    <span class="max-w-lg sm:text-sm">{{
                                        admin.email
                                    }}</span>
                                    <template v-if="admin.emailIsVerfied">
                                        <span class="text-sm ml-1.5 text-blue-500"
                                            >(verified)</span
                                        >
                                    </template>
                                    <template v-else>
                                        <span class="text-sm ml-1.5 text-gray-500"
                                            >(unverified)</span
                                        >
                                        <span
                                            ><button
                                                class="text-sm font-medium ml-1.5"
                                                :class="
                                                    emailVerification.resendButton
                                                        .processing
                                                        ? 'text-blue-300 cursor-not-allowed'
                                                        : 'text-blue-500 hover:underline'
                                                "
                                                :disabled="emailVerification.resendButton.processing"
                                                @click.prevent="requestResendLink"
                                            >
                                                resend link
                                            </button></span
                                        >
                                    </template>
                                    <Link
                                        class="font-medium text-sm ml-2.5 text-red-500 hover:underline"
                                        href="/admin/account/email/change"
                                        >Change</Link
                                    >
                                </div>
                                <template v-if="emailVerification.isSuccessResent">
                                    <p class="text-sm text-green-600">Email verification successfully sent.</p>
                                </template>
                                <template v-if="emailVerification.isFailResent">
                                    <p class="text-sm text-red-600">Email verification failed to sent. Please try again.</p>
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
                                Phone Number
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    autocomplete="phone-number"
                                    class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Example : 60119872345"
                                    v-model="admin.phoneNumber"
                                />
                                <div
                                    v-if="admin.errors.phoneNumber"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ admin.errors.phoneNumber }}
                                </div>
                            </div>
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
                            <div class="mt-1 sm:mt-0 sm:pt-2 sm:col-span-2">
                                <div class="flex space-x-10">
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-indigo-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="gender"
                                            id="gender"
                                            value="male"
                                            v-model="admin.gender"
                                        />
                                        <label
                                            class="form-check-label inline-block text-gray-800"
                                            for="gender"
                                            >Male</label
                                        >
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-indigo-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="gender"
                                            id="gender"
                                            value="female"
                                            v-model="admin.gender"
                                        />
                                        <label
                                            class="form-check-label inline-block text-gray-800"
                                            for="gender"
                                            >Female</label
                                        >
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-indigo-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="gender"
                                            id="gender"
                                            value="other"
                                            v-model="admin.gender"
                                        />
                                        <label
                                            class="form-check-label inline-block text-gray-800"
                                            for="gender"
                                            >Other</label
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <label
                                for="birthdate"
                                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Date Of Birth
                            </label>
                            <div class="mt-1 sm:mt-0 sm:pt-2 sm:col-span-2">
                                <Datepicker
                                    v-model="admin.dateOfBirth"
                                    :enableTimePicker="false"
                                    placeholder="Enter your date of birth"
                                    class="max-w-lg"
                                />
                                <div
                                    v-if="admin.errors.dateOfBirth"
                                    class="text-red-500 text-sm mt-1"
                                >
                                    {{ admin.errors.dateOfBirth }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-5">
                <div class="flex justify-end">
                    <button
                        type="submit"
                        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
                        :disabled="admin.processing || !admin.isDirty"
                        :class="
                            admin.processing || !admin.isDirty
                                ? 'cursor-not-allowed bg-indigo-300'
                                : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        "
                    >
                        Save
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
        let user = this.$page.props.auth.user;
        return {
            admin: this.$inertia.form({
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
        };
    },

    methods: {
        handleProfileImageUpload(event) {
            let selectedImage = event.target.files[0];

            this.admin.newProfileImageUrl = URL.createObjectURL(selectedImage);
            this.admin.newProfileImageFile = selectedImage;
        },

        removeProfileImage() {
            if (
                this.admin.profileImageUrl &&
                this.admin.newProfileImageUrl == ""
            ) {
                let question = confirm("Remove this profile image?");

                if (question) {
                    this.admin.profileImageUrl = null;
                    this.admin.newProfileImageFile = "";
                    return;
                }
            }

            this.admin.newProfileImageFile = "";
            this.admin.newProfileImageUrl = "";
            return;
        },

        updateProfile() {
            this.admin.post("/admin/account/profile", {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => {
                    if (this.admin.newProfileImageUrl) {
                        this.admin.profileImageUrl =
                            this.admin.newProfileImageUrl;
                        this.admin.newProfileImageUrl = "";
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
                            text: "Your profile failed to update, Please try again",
                        },
                        3500
                    );
                },
            });
        },

        requestResendLink() {
            this.emailVerification.resendButton.post("/email/verify/send", {
                preserveScroll: true,
                onSuccess: () => {
                    this.emailVerification.isSuccessResent = true;
                },
                onError: () => {
                    this.emailVerification.isFailResent = true;
                }
            });
        },
    },
};
</script>
