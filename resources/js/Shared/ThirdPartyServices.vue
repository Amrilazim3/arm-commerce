<template>
    <div class="mt-6">
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                    Or continue with
                </span>
            </div>
        </div>

        <div class="mt-6 grid grid-cols-3 gap-3">
            <div>
                <button
                    @click="login('google')"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span class="sr-only">Sign in with Google</span>
                    <svg
                        class="w-5 h-5 fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                    >
                        <path
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        />
                    </svg>
                </button>
            </div>

            <div>
                <button
                    @click="login('facebook')"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span class="sr-only">Sign in with Facebook</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <div>
                <button
                    @click="login('github')"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span class="sr-only">Sign in with GitHub</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener("message", this.onMessage, false);
    },
    beforeDestroy() {
        window.removeEventListener("message", this.onMessage);
    },

    methods: {
        login(service) {
            this.$inertia.get(
                `/oauth/${service}`,
                {},
                {
                    preserveScroll: true,
                    onSuccess: (res) => {
                        const newWindow = openWindow("", "login");
                        newWindow.location.href = res.props.flash.success;
                    },
                }
            );
        },

        async onMessage(e) {
            if (e.data.id) {
                this.$inertia.post(
                    "/oauth/login",
                    { id: e.data.id },
                    { preserveScroll: true }
                );
            }
        },
    },
};

function openWindow(url, title, options = {}) {
    if (typeof url === "object") {
        options = url;
        url = "";
    }
    options = { url, title, width: 600, height: 720, ...options };
    const dualScreenLeft =
        window.screenLeft !== undefined
            ? window.screenLeft
            : window.screen.left;
    const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : window.screen.top;
    const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        window.screen.width;
    const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        window.screen.height;
    options.left = width / 2 - options.width / 2 + dualScreenLeft;
    options.top = height / 2 - options.height / 2 + dualScreenTop;
    const optionsStr = Object.keys(options)
        .reduce((acc, key) => {
            acc.push(`${key}=${options[key]}`);
            return acc;
        }, [])
        .join(",");
    const newWindow = window.open(url, title, optionsStr);
    if (window.focus) {
        newWindow.focus();
    }
    return newWindow;
}
</script>
