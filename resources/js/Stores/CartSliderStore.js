import { defineStore } from "pinia";
const Swal = require('sweetalert2');
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

        async removeProduct(productId) {
            const result = await axios.delete(`/user/carts/${productId}`);

            if (result.data == 1) {
                Swal.fire(
                    "Success",
                    "Product has been removed from the cart",
                    "success"
                );

                this.getCartProducts();

                return true;
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: "Something went wrong! Please try again",
                });

                return false;
            }

        },

        changeValue() {
            this.isClicked = !this.isClicked;
        },
    }
})