import { defineStore } from "pinia";
import axios from "axios"

export const useCartSliderStore = defineStore('cartSliderStore', {
    state() {
        return {
            isClicked: false,
            cartProducts: [],
            cartSubtotal: 0,
        }
    },

    actions: {
        async getCartProducts() {
            try {
                const result = await axios.get("https://arm-commerce.com/user/carts");
                
                this.cartProducts = result.data;

                this.cartSubtotal = 0;
                this.cartProducts.forEach((item) => {
                    this.cartSubtotal += item.price * item.quantity;
                });
            } catch (error) {
                console.log(error);
            }
        },

        changeValue() {
            this.isClicked = !this.isClicked;
        },
    }
})