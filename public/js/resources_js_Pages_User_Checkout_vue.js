"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_Checkout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Checkout.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Checkout.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/XCircleIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/TrashIcon.js");
/* harmony import */ var _Stores_CartSliderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Stores/CartSliderStore */ "./resources/js/Stores/CartSliderStore.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    RadioGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.RadioGroup,
    RadioGroupLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.RadioGroupLabel,
    RadioGroupDescription: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.RadioGroupDescription,
    RadioGroupOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.RadioGroupOption,
    XCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
    TrashIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    products: Array,
    addresses: Array,
    states: Array,
    statesCities: Object
  },
  data: function data() {
    return {
      selectedAddress: null,
      isNewAddress: false,
      isEmptyShippingSection: false,
      contactInformation: "",
      newAddress: {
        full_name: "",
        phone_number: "",
        state: "",
        city: "",
        postal_code: "",
        street_name: ""
      },
      totalItems: 0,
      subtotal: 0,
      cities: [],
      isDisabledButton: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.addresses.length !== 0) {
      this.addresses.forEach(function (address) {
        if (address.is_default) {
          _this.selectedAddress = address;
        }
      });
    } else {
      this.isNewAddress = true;
    }

    this.calculateQuantityAndTotal();
  },
  watch: {
    newAddress: {
      handler: function handler(newValue) {
        if (newValue.state) {
          this.cities = this.statesCities[newValue.state];
        }
      },
      deep: true
    },
    selectedAddress: function selectedAddress(newValue) {
      if (newValue) {
        this.newAddress = {
          full_name: "",
          phone_number: "",
          state: "",
          city: "",
          postal_code: "",
          street_name: ""
        };
        this.isNewAddress = false;
      }
    }
  },
  methods: {
    calculateQuantityAndTotal: function calculateQuantityAndTotal() {
      var _this2 = this;

      this.totalItems = 0;
      this.subtotal = 0;
      this.products.forEach(function (product) {
        _this2.totalItems += product.quantity;
        _this2.subtotal += product.price * product.quantity;
      });
    },
    checkout: function checkout() {
      var _this3 = this;

      if (this.addresses.length > 0) {
        if (this.selectedAddress == null && this.isNewAddress == false) {
          this.isEmptyShippingSection = true;
          return;
        }
      }

      this.isEmptyShippingSection = false;
      var checkoutInformation = {
        email: this.contactInformation,
        isNewAddress: this.isNewAddress,
        full_name: this.isNewAddress ? this.newAddress.full_name : this.selectedAddress.full_name,
        phone_number: this.isNewAddress ? Number(this.newAddress.phone_number) : this.selectedAddress.phone_number,
        state: this.isNewAddress ? this.newAddress.state : this.selectedAddress.state,
        city: this.isNewAddress ? this.newAddress.city : this.selectedAddress.city,
        postal_code: this.isNewAddress ? this.newAddress.postal_code : this.selectedAddress.postal_code,
        street_name: this.isNewAddress ? this.newAddress.street_name : this.selectedAddress.street_name
      };
      this.$inertia.post("/user/checkout/validate_checkout_information", checkoutInformation, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this3.$swal.fire({
            title: "Redirecting to payment page",
            html: "please wait for a moment...",
            didOpen: function didOpen() {
              _this3.$swal.showLoading();
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
          });

          _this3.isDisabledButton = true;
          checkoutInformation.cartIds = [];

          _this3.products.forEach(function (product) {
            checkoutInformation.cartIds.push(product.id);
          });

          axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/checkout/confirm_order", checkoutInformation).then(function (res) {
            window.location.href = res.data;
          })["catch"](function () {
            Swal.fire({
              icon: "error",
              title: "Failed",
              text: "Something went wrong! Please try again"
            });
          });
          ;
        }
      });
    },
    removeProduct: function removeProduct(productId) {
      var _this4 = this;

      var cartSliderStore = (0,_Stores_CartSliderStore__WEBPACK_IMPORTED_MODULE_0__.useCartSliderStore)();
      var result = cartSliderStore.removeProduct(productId);

      if (result) {
        this.products.forEach(function (product, key) {
          if (product.id == productId) {
            _this4.products.splice(key, 1);

            _this4.calculateQuantityAndTotal();
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Checkout.vue?vue&type=template&id=631b1751":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Checkout.vue?vue&type=template&id=631b1751 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container p-12 mx-auto"
};
var _hoisted_2 = {
  key: 0,
  "class": "flex items-center justify-center h-64"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-xl text-blue-500 font-semibold"
}, " No products to checkout here : ( ", -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "flex flex-col space-y-8 divide-y divide-gray-300 md:w-2/4"
};
var _hoisted_6 = {
  "class": "flex flex-col"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "mb-4 font-semibold md:text-lg text-heading"
}, " Contact Information ", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "flex flex-col"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "pt-4 mb-4 font-semibold md:text-lg text-heading"
}, " Shipping Information ", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "w-full max-w-md"
};
var _hoisted_11 = {
  "class": "space-y-2 mb-10"
};
var _hoisted_12 = {
  "class": "flex w-full items-center justify-between"
};
var _hoisted_13 = {
  "class": "flex items-center"
};
var _hoisted_14 = {
  "class": "text-sm"
};
var _hoisted_15 = {
  "class": "shrink-0 text-white"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "h-6 w-6",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "12",
  fill: "#fff",
  "fill-opacity": "0.2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M7 13l3 3 7-7",
  stroke: "#fff",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})], -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_16];
var _hoisted_18 = {
  key: 0,
  "class": "text-red-600 text-sm"
};
var _hoisted_19 = {
  key: 0,
  "class": "flex justify-between"
};
var _hoisted_20 = {
  "class": "justify-center w-full mx-auto"
};
var _hoisted_21 = {
  "class": "flex items-center mb-4 justify-between space-x-1.5"
};
var _hoisted_22 = ["value"];
var _hoisted_23 = {
  key: 1,
  value: "",
  selected: ""
};
var _hoisted_24 = {
  "class": "flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5"
};
var _hoisted_25 = {
  "class": "border rounded-md md:pt-0 2xl:p-6"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-lg font-semibold"
}, "Order Summary", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "mt-8"
};
var _hoisted_28 = {
  "class": "flex flex-col space-y-6"
};
var _hoisted_29 = {
  "class": "flex space-x-4"
};
var _hoisted_30 = ["src"];
var _hoisted_31 = {
  "class": "text-md font-semibold"
};
var _hoisted_32 = {
  key: 0
};
var _hoisted_33 = {
  "class": "text-gray-800"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-blue-600"
}, "quantity : ", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-blue-600"
}, "price : ", -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "flex mt-8"
};
var _hoisted_37 = {
  "class": "text-xl font-semibold"
};
var _hoisted_38 = {
  "class": "flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
};
var _hoisted_39 = {
  "class": "ml-2"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Shipping Tax : "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ml-2"
}, "2.00MYR")], -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
};
var _hoisted_42 = {
  "class": "ml-2"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-4 text-red-600"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" For user information, all of this products are not exists in real world and the money you will be pay will be used for our server maintenance. Basically, you only need to pay "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-blue-500 font-semibold"
}, "5.00MYR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". Thank you. ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_FormKit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormKit");

  var _component_RadioGroupLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupLabel");

  var _component_RadioGroupDescription = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupDescription");

  var _component_RadioGroupOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupOption");

  var _component_RadioGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroup");

  var _component_XCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XCircleIcon");

  var _component_TrashIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TrashIcon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Checkout"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.products.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormKit, {
    key: 1,
    type: "form",
    actions: false,
    "form-class": "flex flex-col justify-center w-full px-0 mx-auto md:flex-row",
    onSubmit: $options.checkout,
    "messages-class": "$reset hidden",
    "input-errors": {
      email: _ctx.$page.props.errors.email,
      full_name: _ctx.$page.props.errors.full_name ? _ctx.$page.props.errors.full_name : '',
      phone_number: _ctx.$page.props.errors.phone_number ? _ctx.$page.props.errors.phone_number : '',
      state: _ctx.$page.props.errors.state ? _ctx.$page.props.errors.state : '',
      city: _ctx.$page.props.errors.city ? _ctx.$page.props.errors.city : '',
      postal_code: _ctx.$page.props.errors.postal_code ? _ctx.$page.props.errors.postal_code : '',
      street_name: _ctx.$page.props.errors.street_name ? _ctx.$page.props.errors.street_name : ''
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" contact "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "email",
        label: "Email address",
        type: "email",
        validation: "required|email",
        modelValue: $data.contactInformation,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.contactInformation = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" shipping "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroup, {
        modelValue: $data.selectedAddress,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.selectedAddress = $event;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupLabel, {
            "class": "sr-only"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Server size")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.addresses, function (address) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RadioGroupOption, {
              as: "template",
              key: address.id,
              value: address
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                var active = _ref.active,
                    checked = _ref.checked;
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([[active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300' : '', checked ? 'bg-indigo-600 bg-opacity-75 text-white ' : 'bg-white '], "relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"])
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupLabel, {
                  as: "p",
                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([checked ? 'text-white' : 'text-gray-900', "font-medium"])
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(address.full_name) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(address.phone_number) + ") ", 1
                    /* TEXT */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupDescription, {
                  as: "span",
                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([checked ? 'text-sky-100' : 'text-gray-500', "inline"])
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(address.street_name), 1
                    /* TEXT */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["class"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, _hoisted_17, 512
                /* NEED_PATCH */
                ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, checked]])])], 2
                /* CLASS */
                )];
              }),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["value"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), $data.isEmptyShippingSection ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_18, " Please select your shipping address ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.addresses.length !== 0]]), $props.addresses.length < 5 && $props.addresses.length !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          $data.isNewAddress = true;
          $data.selectedAddress = null;
          $data.isEmptyShippingSection = false;
        }),
        "class": "text-blue-500"
      }, " add address "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_XCircleIcon, {
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $data.isNewAddress = false;
        }),
        "class": "h-5 w-5 text-red-500 self-center"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isNewAddress]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "full_name",
        label: "Full name",
        type: "text",
        validation: $data.isNewAddress ? 'required|length:5,30' : 'length:5,30',
        placeholder: "Enter your full name",
        "inner-class": "mb-4",
        modelValue: $data.newAddress.full_name,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.newAddress.full_name = $event;
        })
      }, null, 8
      /* PROPS */
      , ["validation", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "phone_number",
        label: "Phone number",
        type: "number",
        validation: $data.isNewAddress ? 'required|number' : '',
        placeholder: "60178891233",
        "inner-class": "mb-4",
        modelValue: $data.newAddress.phone_number,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.newAddress.phone_number = $event;
        })
      }, null, 8
      /* PROPS */
      , ["validation", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "state",
        label: "State",
        type: "select",
        options: $props.states,
        validation: $data.isNewAddress ? 'required' : '',
        placeholder: "Select state",
        "inner-class": "mb-4",
        modelValue: $data.newAddress.state,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.newAddress.state = $event;
        })
      }, null, 8
      /* PROPS */
      , ["options", "validation", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "city",
        label: "City",
        type: "select",
        "outer-class": "flex-1",
        validation: $data.isNewAddress ? 'required' : '',
        modelValue: $data.newAddress.city,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.newAddress.city = $event;
        }),
        placeholder: "Select city"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$data.cities.length !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: 0
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.cities, function (city) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
              key: city,
              value: city
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(city), 9
            /* TEXT, PROPS */
            , _hoisted_22);
          }), 128
          /* KEYED_FRAGMENT */
          )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", _hoisted_23, " Select city "))];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["validation", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "postal_code",
        label: "Postal code",
        type: "number",
        "outer-class": "flex-1",
        validation: $data.isNewAddress ? 'required|length:5,5' : '',
        placeholder: "Enter postal code",
        modelValue: $data.newAddress.postal_code,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.newAddress.postal_code = $event;
        })
      }, null, 8
      /* PROPS */
      , ["validation", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "street_name",
        label: "Street name",
        type: "text",
        validation: $data.isNewAddress ? 'required' : '',
        placeholder: "Enter your street name",
        "inner-class": "mb-4",
        modelValue: $data.newAddress.street_name,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $data.newAddress.street_name = $event;
        })
      }, null, 8
      /* PROPS */
      , ["validation", "modelValue"])], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isNewAddress]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.products, function (product) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: product.id,
          "class": "flex justify-between"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: product.imageUrl ? product.imageUrl.url : 'https://picsum.photos/200/300?random=' + product.id,
          alt: "image",
          "class": "w-24 h-30 object-contain"
        }, null, 8
        /* PROPS */
        , _hoisted_30)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 1
        /* TEXT */
        ), product.variantName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.variantName), 1
        /* TEXT */
        )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.quantity), 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + "MYR ", 1
        /* TEXT */
        )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TrashIcon, {
          onClick: function onClick($event) {
            return $options.removeProduct(product.id);
          },
          "class": "h-5 w-5 cursor-pointer"
        }, null, 8
        /* PROPS */
        , ["onClick"])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_37, " Total items : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.totalItems), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Subtotal : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subtotal) + "MYR", 1
      /* TEXT */
      )]), _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Total : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.subtotal + 2.0) + "MYR", 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        disabled: $data.isDisabledButton,
        type: "submit",
        label: "Confirm order",
        "input-class": $data.isDisabledButton ? 'cursor-not-allowed w-full mt-4 py-3.5' : 'w-full mt-4 py-3.5'
      }, null, 8
      /* PROPS */
      , ["disabled", "input-class"]), _hoisted_43])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onSubmit", "input-errors"]))])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/User/Checkout.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/User/Checkout.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkout_vue_vue_type_template_id_631b1751__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=631b1751 */ "./resources/js/Pages/User/Checkout.vue?vue&type=template&id=631b1751");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js */ "./resources/js/Pages/User/Checkout.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_amrilazim_Herd_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_amrilazim_Herd_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Checkout_vue_vue_type_template_id_631b1751__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/User/Checkout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/User/Checkout.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/User/Checkout.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Checkout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Checkout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/User/Checkout.vue?vue&type=template&id=631b1751":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/User/Checkout.vue?vue&type=template&id=631b1751 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_template_id_631b1751__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_template_id_631b1751__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Checkout.vue?vue&type=template&id=631b1751 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/User/Checkout.vue?vue&type=template&id=631b1751");


/***/ })

}]);