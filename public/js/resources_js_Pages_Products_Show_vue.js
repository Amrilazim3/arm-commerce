"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Products_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Show.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Show.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/StarIcon.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js");
/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-carousel */ "./node_modules/vue3-carousel/dist/carousel.es.js");
/* harmony import */ var vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-carousel/dist/carousel.css */ "./node_modules/vue3-carousel/dist/carousel.css");
/* harmony import */ var _Stores_CartSliderStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Stores/CartSliderStore */ "./resources/js/Stores/CartSliderStore.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StarIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__["default"],
    RadioGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.RadioGroup,
    RadioGroupLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.RadioGroupLabel,
    RadioGroupOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.RadioGroupOption,
    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_0__.Carousel,
    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_0__.Slide,
    Navigation: vue3_carousel__WEBPACK_IMPORTED_MODULE_0__.Navigation
  },
  props: {
    productData: Object
  },
  data: function data() {
    return {
      product: this.productData,
      displayedPrice: this.productData.price,
      reviews: {
        href: "#",
        average: 5,
        totalCount: 117
      },
      selectedOptions: [],
      isDisableButton: false,
      quantity: 1,
      maxQuantity: this.productData.stock,
      currentSlide: 0
    };
  },
  watch: {
    selectedOptions: {
      handler: function handler(newArr) {
        this.validateVariantion();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    if (this.product.images.length == 0) {
      for (var i = 0; i < 5; i++) {
        this.product.images.push("https://picsum.photos/250/250?random=" + Math.random());
      }
    }

    if (this.product.options.length > 0) {
      this.isDisableButton = true;
    }
  },
  methods: {
    slideTo: function slideTo(val) {
      this.currentSlide = val;
    },
    addToCart: function addToCart() {
      var _this = this;

      if (this.$page.props.auth.isLoggedIn && this.$page.props.auth.user.isAdmin) {
        return;
      }

      var data = {};
      data.quantity = this.quantity;
      var variant = this.selectedOptions.join(" / ");
      data.variant = variant;
      data.price = this.displayedPrice;
      this.$inertia.post("/user/products/".concat(this.product.slug, "/cart"), data, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          if (_this.$page.props.auth.isLoggedIn) {
            _this.$swal.fire("Success", "Product has been added to the cart", "success");

            var cartSliderStore = (0,_Stores_CartSliderStore__WEBPACK_IMPORTED_MODULE_2__.useCartSliderStore)();
            cartSliderStore.getCartProducts();
          }
        },
        onError: function onError() {
          if (_this.$page.props.auth.isLoggedIn) {
            _this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! Please try again"
            });
          }
        }
      });
    },
    buyProduct: function buyProduct() {
      console.log("buy product");
    },
    validateVariantion: function validateVariantion() {
      var _this2 = this;

      var joinedOption = this.selectedOptions.join(" / ");
      var variantExists = false;
      this.product.variants.forEach(function (variant) {
        if (variant.name == joinedOption) {
          variantExists = true;
          _this2.maxQuantity = variant.stock;
          _this2.displayedPrice = variant.price;

          if (variant.image_url) {
            _this2.product.images.map(function (image, key) {
              if (image == variant.image_url) {
                _this2.currentSlide = key;
              }
            });
          }
        }
      });

      if (variantExists) {
        this.isDisableButton = false;
      }

      if (!variantExists) {
        this.isDisableButton = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Show.vue?vue&type=template&id=440cda0f":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Show.vue?vue&type=template&id=440cda0f ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white"
};
var _hoisted_2 = {
  "class": "pt-16"
};
var _hoisted_3 = {
  "aria-label": "Breadcrumb"
};
var _hoisted_4 = {
  role: "list",
  "class": "mx-auto flex justify-between max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
};
var _hoisted_5 = {
  "class": "flex items-center space-x-2"
};
var _hoisted_6 = {
  "class": "flex items-center"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "16",
  height: "20",
  viewBox: "0 0 16 20",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "class": "h-5 w-4 text-gray-300"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"
})], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "text-sm"
};
var _hoisted_9 = {
  "class": "mx-auto mt-6 max-w-2xl bg-gray-100 p-6 rounded-sm sm:px-6 lg:max-w-7xl lg:px-8 space-y-3"
};
var _hoisted_10 = {
  "class": "carousel__item"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = ["onClick"];
var _hoisted_13 = ["src"];
var _hoisted_14 = {
  "class": "mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
};
var _hoisted_15 = {
  "class": "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
};
var _hoisted_16 = {
  "class": "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
};
var _hoisted_17 = {
  "class": "mt-4 lg:row-span-3 lg:mt-0"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "sr-only"
}, "Product information", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "text-3xl tracking-tight text-gray-900"
};
var _hoisted_20 = {
  "class": "mt-6"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "sr-only"
}, "Reviews", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "flex items-center"
};
var _hoisted_23 = {
  "class": "flex items-center"
};
var _hoisted_24 = {
  "class": "sr-only"
};
var _hoisted_25 = ["href"];
var _hoisted_26 = {
  "class": "mt-10"
};
var _hoisted_27 = {
  "class": "flex items-center justify-between"
};
var _hoisted_28 = {
  "class": "text-sm font-medium text-gray-900"
};
var _hoisted_29 = {
  "class": "grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
};
var _hoisted_30 = {
  "class": "mt-10"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center justify-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-sm font-medium text-gray-900"
}, " Quantity ")], -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "text-sm"
};
var _hoisted_33 = {
  "class": "flex space-x-3"
};
var _hoisted_34 = ["disabled"];
var _hoisted_35 = ["disabled"];
var _hoisted_36 = {
  key: 0,
  "class": "mt-4 text-sm text-red-500"
};
var _hoisted_37 = {
  "class": "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "sr-only"
}, "Description", -1
/* HOISTED */
);

var _hoisted_39 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Slide");

  var _component_Navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navigation");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

  var _component_StarIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StarIcon");

  var _component_RadioGroupLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupLabel");

  var _component_RadioGroupOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroupOption");

  var _component_RadioGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioGroup");

  var _component_vue_number_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-number-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: $data.product.name
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: 'https://arm-commerce.com/category/' + $data.product.category.slug,
    "class": "mr-2 text-sm font-medium text-gray-900"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.category.name), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: 'https://arm-commerce.com/products/' + $data.product.slug,
    "aria-current": "page",
    "class": "font-medium text-gray-500 hover:text-gray-600"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.name), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]), _ctx.$page.props.auth.isLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [_ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: 'https://arm-commerce.com/admin/products/' + $data.product.slug + '/edit',
    "class": "text-indigo-500 text-md font-semibold"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" media "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carousel, {
    id: "gallery",
    "items-to-show": 1,
    "wrap-around": false,
    modelValue: $data.currentSlide,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.currentSlide = $event;
    })
  }, {
    addons: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navigation)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.images, function (slide) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: slide
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: slide,
              alt: "",
              "class": "w-80 h-80 object-contain"
            }, null, 8
            /* PROPS */
            , _hoisted_11)])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carousel, {
    id: "thumbnails",
    "items-to-show": 4,
    "wrap-around": true,
    modelValue: $data.currentSlide,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.currentSlide = $event;
    }),
    ref: "carousel"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.images, function (slide, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: slide
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              "class": "carousel__item",
              onClick: function onClick($event) {
                return $options.slideTo(key);
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: slide,
              alt: "",
              "class": "w-44 h-44 object-cover"
            }, null, 8
            /* PROPS */
            , _hoisted_13)], 8
            /* PROPS */
            , _hoisted_12)];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.displayedPrice) + " MYR ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Reviews "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)([0, 1, 2, 3, 4], function (rating) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StarIcon, {
      key: rating,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']),
      "aria-hidden": "true"
    }, null, 8
    /* PROPS */
    , ["class"]);
  }), 64
  /* STABLE_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.reviews.average) + " out of 5 stars ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.reviews.href,
    "class": "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.reviews.totalCount) + " reviews", 9
  /* TEXT, PROPS */
  , _hoisted_25)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" available options "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.options, function (option, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: option,
      "class": "mt-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroup, {
      modelValue: $data.selectedOptions[key],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.selectedOptions[key] = $event;
      },
      "class": "mt-4"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupLabel, {
          "class": "sr-only"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Choose a " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 1
            /* TEXT */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(option.values, function (value) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RadioGroupOption, {
            as: "template",
            key: value,
            value: value
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
              var active = _ref.active,
                  checked = _ref.checked;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'ring-2 ring-indigo-500' : '', 'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'])
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioGroupLabel, {
                as: "span"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value), 1
                  /* TEXT */
                  )];
                }),
                _: 2
                /* DYNAMIC */

              }, 1024
              /* DYNAMIC_SLOTS */
              ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']),
                "aria-hidden": "true"
              }, null, 2
              /* CLASS */
              )], 2
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
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["modelValue", "onUpdate:modelValue"])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" quantities "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_number_input, {
    modelValue: $data.quantity,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.quantity = $event;
    }),
    min: 1,
    max: $data.maxQuantity,
    inline: "",
    center: "",
    controls: "",
    rounded: "",
    "class": "mt-4"
  }, null, 8
  /* PROPS */
  , ["modelValue", "max"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.maxQuantity) + " stock available ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addToCart && $options.addToCart.apply($options, arguments);
    }, ["prevent"])),
    disabled: $data.isDisableButton,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2", $data.isDisableButton ? 'cursor-not-allowed bg-gray-500 text-white' : 'hover:bg-gray-300 bg-gray-200 focus:ring-gray-500 text-black'])
  }, " Add to cart ", 10
  /* CLASS, PROPS */
  , _hoisted_34), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.buyProduct && $options.buyProduct.apply($options, arguments);
    }, ["prevent"])),
    disabled: $data.isDisableButton,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2", $data.isDisableButton ? 'cursor-not-allowed bg-gray-500' : 'focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700'])
  }, " Buy now ", 10
  /* CLASS, PROPS */
  , _hoisted_35)]), _ctx.$page.props.auth.isLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [_ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_36, " Above button not working with admin. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Description and details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $data.product.description,
    "class": "space-y-6 prose max-w-max"
  }, null, 8
  /* PROPS */
  , _hoisted_39)])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Products/Show.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Products/Show.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_440cda0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=440cda0f */ "./resources/js/Pages/Products/Show.vue?vue&type=template&id=440cda0f");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/Pages/Products/Show.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_440cda0f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Products/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Products/Show.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Products/Show.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Products/Show.vue?vue&type=template&id=440cda0f":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Products/Show.vue?vue&type=template&id=440cda0f ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_440cda0f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_440cda0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=440cda0f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Show.vue?vue&type=template&id=440cda0f");


/***/ })

}]);