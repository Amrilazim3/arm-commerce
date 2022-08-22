<template>
    <div>
        <FloatingMenu
            :editor="editor"
            :tippy-options="{ duration: 50 }"
            v-if="editor"
            class="border rounded-md px-2 py-0.5 border-gray-800 bg-white space-x-2"
        >
            <!-- Bullet List -->
            <button
                @click="editor.chain().focus().toggleBulletList().run()"
                class="px-0.5 border rounded-md hover:border-gray-600"
                :class="{ 'bg-gray-600 text-white': editor.isActive('bulletList') }"
            >
                Bullet List
            </button>
            <!-- Ordered List -->
            <button
                @click="editor.chain().focus().toggleOrderedList().run()"
                class="px-0.5 border rounded-md hover:border-gray-600"
                :class="{ 'bg-gray-600 text-white': editor.isActive('orderedList') }"
            >
                Ordered List
            </button>
            <!-- Bold -->
            <button
                @click="editor.chain().focus().toggleBold().run()"
                class="px-0.5 border rounded-md hover:border-gray-600"
                :class="{ 'bg-gray-600 text-white': editor.isActive('bold') }"
            >
                Bold
            </button>
        </FloatingMenu>
        <EditorContent :editor="editor" />
    </div>
</template>

<script>
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Editor, EditorContent, FloatingMenu } from "@tiptap/vue-3";

export default {
    components: {
        EditorContent,
        FloatingMenu,
    },

    props: {
        modelValue: {
            type: String,
            default: "",
        },
    },

    emits: ["update:modelValue"],

    data() {
        return {
            editor: null,
        };
    },

    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value;

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return;
            }

            this.editor.commands.setContent(value, false);
        },
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
                Placeholder.configure({
                    placeholder: "Write a detail about your product...",
                    showOnlyWhenEditable: true,
                }),
            ],
            editorProps: {
                attributes: {
                    class: "form-control prose prose-sm block w-full h-52 overflow-y-scroll px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none",
                },
            },
            content: this.modelValue,
            onUpdate: () => {
                this.$emit("update:modelValue", this.editor.getHTML());
            },
        });
    },

    beforeUnmount() {
        this.editor.destroy();
    },
};
</script>

<style>
.ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
