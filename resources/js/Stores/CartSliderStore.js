import { defineStore } from "pinia";

export const useCartSliderStore = defineStore('cartSliderStore', {
    state() {
        return {
            isClicked: false
        }
    },

    actions: {
        changeValue() {
            this.isClicked = !this.isClicked;
        }
    }
})