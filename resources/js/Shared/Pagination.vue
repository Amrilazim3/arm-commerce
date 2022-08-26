<template>
    <div v-if="links.length > 3">
        <div class="flex flex-wrap mt-8 cursor-pointer">
            <template v-for="(link, key) in links" :key="key">
                <div
                    v-if="link.url === null"
                    class="mr-1 mb-1 px-4 py-3 text-sm cursor-not-allowed leading-4 text-gray-400 border rounded"
                    v-html="link.label"
                />

                <Link
                    v-else
                    class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-indigo-200 focus:border-primary focus:text-primary"
                    :class="{ 'bg-indigo-200': link.active }"
                    :href="link.url"
                    @click.prevent="scrollToTop"
                    v-html="link.label"
                />
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        links: Array,
    },

    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
    },
};
</script>
