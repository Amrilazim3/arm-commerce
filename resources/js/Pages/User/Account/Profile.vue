<template>
    <Head title="Profile" />
    <div class="lg:flex">
        <UserNav />
        <form
            class="px-10 lg:pl-10 lg:pr-28 py-6 space-y-8 divide-y divide-gray-200 lg:flex-1"
        >
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
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
                                        v-model="user.name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <label
                                for="photo"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Photo
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="flex items-center">
                                    <span
                                        class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                                    >
                                        <template
                                            v-if="
                                                user.profileImage !==
                                                    null &&
                                                user.newProfileImage == ''
                                            "
                                        >
                                            <img
                                                :src="user.profileImage"
                                                alt="profile-image"
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                user.newProfileImage !== ''
                                            "
                                        >
                                            <img
                                                :src="user.newProfileImage"
                                                alt="profile-image"
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
                                        class="text-red-500 text-sm font-medium ml-4"
                                        v-if="
                                            user.profileImage ||
                                            user.newProfileImage !== ''
                                        "
                                        @click.prevent="removeProfileImage"
                                    >
                                        remove
                                    </button>
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
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autocomplete="email"
                                    class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                    v-model="user.email"
                                    placeholder="Enter your email"
                                    required
                                />
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
                                <MazPhoneNumberInput
                                    v-model="user.phoneNumber"
                                    show-code-on-list
                                    color="info"
                                    default-country-code="MY"
                                    :preferred-countries="['MY', 'ID', 'SG']"
                                    @update="user.phoneResults = $event"
                                    :success="user.phoneResults?.isValid"
                                    class="max-w-lg"
                                />
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
                                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="gender"
                                            id="gender"
                                            value="male"
                                            v-model="user.gender"
                                        />
                                        <label
                                            class="form-check-label inline-block text-gray-800"
                                            for="gender"
                                            >Male</label
                                        >
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="gender"
                                            id="gender"
                                            value="female"
                                            v-model="user.gender"
                                        />
                                        <label
                                            class="form-check-label inline-block text-gray-800"
                                            for="gender"
                                            >Female</label
                                        >
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="gender"
                                            id="gender"
                                            value="other"
                                            v-model="user.gender"
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
                                    v-model="user.dateOfBirth"
                                    :enableTimePicker="false"
                                    placeholder="Enter your date of birth"
                                    class="max-w-lg"
                                />
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
                        :disabled="
                            user.processing || !user.isDirty ||
                            (user.phoneNumber && !user.phoneResults.isValid)
                        "
                        :class="
                            user.processing || !user.isDirty ||
                            (user.phoneNumber && !user.phoneResults.isValid)
                                ? 'cursor-not-allowed bg-indigo-300'
                                : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        "
                        @click.prevent="updateProfile"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import UserNav from "../../../Shared/UserNav.vue";

export default {
    components: {
        UserNav,
    },

    data() {
        let user = this.$page.props.auth.user;
        return {
            user: this.$inertia.form({
                name: user.name,
                profileImage: user.profile_image_url,
                newProfileImage: "",
                email: user.email,
                phoneNumber: user.phone_number,
                phoneResults: "",
                dateOfBirth:
                    user.date_of_birth == null
                        ? new Date()
                        : user.date_of_birth,
                gender: user.gender,
            }),
        };
    },

    methods: {
        handleProfileImageUpload(event) {
            this.user.newProfileImage = URL.createObjectURL(
                event.target.files[0]
            );
        },

        removeProfileImage() {
            if (this.user.profileImage && this.user.newProfileImage == "") {
                let question = confirm("Remove this profile image?");

                if (question) {
                    this.user.profileImage = null;
                    return;
                }
            }

            this.user.newProfileImage = "";
            return;
        },

        updateProfile() {
            this.user.put("/user/account/profile", {
                preserveScroll: true,
                onSuccess: () => {
                    console.log('success')
                },
                onError: () => {
                    console.log('error')
                }
            })
        },
    },
};
</script>
