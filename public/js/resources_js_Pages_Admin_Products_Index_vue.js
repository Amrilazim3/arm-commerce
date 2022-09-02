"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Products_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_SideNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Shared/SideNav.vue */ "./resources/js/Shared/SideNav.vue");
/* harmony import */ var _Shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/Pagination.vue */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/menu/menu.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/SearchIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/SwitchVerticalIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/PlusCircleIcon.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    products: Object,
    requests: Object
  },
  components: {
    SideNav: _Shared_SideNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pagination: _Shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SwitchVerticalIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuButton,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuItems,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuItem,
    SearchIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__["default"],
    PlusCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      params: {
        created_at: this.requests.created_at,
        stock: this.requests.stock,
        search: this.requests.search
      }
    };
  },
  watch: {
    params: {
      handler: function handler() {
        this.searchInput();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      return _this.$refs.search.focus();
    });
  },
  methods: {
    sortByCreated: function sortByCreated(option) {
      this.params.created_at = option;
      var holder = this.params.stock;
      this.params.stock = null;
      var params = this.params;
      params = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pickBy)(params);
      this.$inertia.get(this.$page.url.includes("stock") ? this.$page.url.replace("stock=" + holder, "") : this.$page.url, params, {
        preserveState: true
      });
    },
    sortByStock: function sortByStock(option) {
      var holder = this.params.created_at;
      this.params.created_at = null;
      this.params.stock = option;
      var params = this.params;
      params = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pickBy)(params);
      this.$inertia.get(this.$page.url.includes("created_at") ? this.$page.url.replace("created_at=" + holder, "") : this.$page.url, params, {
        preserveState: true
      });
    },
    searchInput: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)(function () {
      var params = this.params;
      params = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pickBy)(params);
      this.$inertia.get("/admin/products/", params, {
        preserveScroll: true
      });
    }, 500),
    editProduct: function editProduct(slug) {
      this.$inertia.patch("/admin/products/" + slug);
    },
    deleteProduct: function deleteProduct(slug) {
      this.$inertia["delete"]("/admin/products/" + slug);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    links: Array
  },
  methods: {
    scrollToTop: function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SideNav.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SideNav.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuButton,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuItems,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.MenuItem,
    Disclosure: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.Disclosure,
    DisclosureButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.DisclosureButton,
    DisclosurePanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.DisclosurePanel
  },
  methods: {
    closeOther: function closeOther(except) {
      document.querySelectorAll('[id^="closure-"]').forEach(function (elem) {
        if (except !== elem.id && elem.getAttribute("aria-expanded") == "true") {
          elem.click();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Index.vue?vue&type=template&id=19783e60":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Index.vue?vue&type=template&id=19783e60 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "lg:flex"
};
var _hoisted_2 = {
  "class": "flex justify-between"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-xl font-semibold text-gray-900"
}, "Store", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "px-4 border border-transparent self-center py-2 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" add product ");

var _hoisted_6 = {
  key: 0,
  "class": "relative mt-3 mb-3 w-60 lg:mb-0 lg:w-96"
};
var _hoisted_7 = {
  "class": "absolute inset-y-0 left-0 flex items-center pl-2"
};
var _hoisted_8 = {
  key: 0,
  "class": "flex items-center justify-center w-full h-72"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-indigo-500 font-semibold text-xl"
}, " No result for this search. ", -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_9];
var _hoisted_11 = {
  key: 1,
  "class": "border rounded-md border-gray-400 w-full h-72 mt-6 grid place-items-center"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-xl font-bold text-gray-800 text-left mb-6"
}, " You don't have any product to see ", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-gray-400 text-left"
}, " You need some product in order to see it here ", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "mt-6 font-semibold px-3 py-2.5 bg-indigo-500 hover:bg-indigo-700 text-white text-sm border rounded-md"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create product now");

var _hoisted_16 = {
  key: 2,
  "class": "flex flex-col"
};
var _hoisted_17 = {
  "class": "overflow-x-auto sm:-mx-6 lg:-mx-8"
};
var _hoisted_18 = {
  "class": "inline-block min-w-full sm:px-6 lg:px-8"
};
var _hoisted_19 = {
  "class": "overflow-hidden"
};
var _hoisted_20 = {
  "class": "min-w-full"
};
var _hoisted_21 = {
  "class": "border-b"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " # ", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " Name ", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " Category ", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " Stock ", -1
/* HOISTED */
);

var _hoisted_26 = {
  scope: "col",
  "class": "flex justify-end px-6"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sort ");

var _hoisted_28 = {
  "class": "px-1 py-1"
};
var _hoisted_29 = {
  "class": "px-1 py-1"
};
var _hoisted_30 = {
  "class": "px-6 py-4 whitespace-normal text-sm font-medium text-gray-900"
};
var _hoisted_31 = {
  "class": "text-sm text-gray-900 px-6 py-4 whitespace-normal"
};
var _hoisted_32 = {
  "class": "text-sm text-gray-900 px-6 py-4 whitespace-normal"
};
var _hoisted_33 = {
  "class": "text-sm text-gray-900 px-6 py-4 whitespace-normal"
};
var _hoisted_34 = {
  "class": "flex justify-end space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap px-6 py-4"
};
var _hoisted_35 = ["onClick"];
var _hoisted_36 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_SideNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNav");

  var _component_PlusCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlusCircleIcon");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_SearchIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchIcon");

  var _component_SwitchVerticalIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SwitchVerticalIcon");

  var _component_MenuButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuButton");

  var _component_MenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItem");

  var _component_MenuItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItems");

  var _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");

  var _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Products"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNav), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-10 lg:pl-10 lg:pr-28 py-6 lg:flex-1", $props.products.data.length == 0 ? 'mb-20' : ''])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/admin/products/create",
    "class": "flex items-center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PlusCircleIcon, {
        "class": "h-4 w-4 mr-2 self-center"
      }), _hoisted_5];
    }),
    _: 1
    /* STABLE */

  })])]), _ctx.$page.url.includes('search') || $props.products.data.length !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchIcon, {
    "class": "h-5 w-5 font-thin text-gray-500"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control block w-full pl-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none",
    id: "search-input",
    placeholder: "Search product or category",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.params.search = $event;
    }),
    ref: "search"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.params.search]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.products.data.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [_ctx.$page.url.includes('search') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, _hoisted_10)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_12, _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/admin/products/create"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  })])])]))], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu, {
    as: "div",
    "class": "lg:absolute inline-block text-left"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuButton, {
        "class": "flex px-6 pt-2.5 pb-2 bg-gray-200 text-gray-900 font-medium text-sm leading-normal rounded border hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-300 transition duration-150 ease-in-out align-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SwitchVerticalIcon, {
            "class": "ml-2 h-4 w-4 self-center",
            "aria-hidden": "true"
          })];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItems, {
            "class": "absolute font-normal text-sm right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                  var active = _ref.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active || _ctx.$page.url.includes('created_at=asc') ? 'bg-indigo-200 text-gray-800' : 'hover:bg-indigo-200', 'group flex w-full items-center rounded-md px-2 py-2']),
                    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                      return $options.sortByCreated('asc');
                    }, ["prevent"]))
                  }, " Created (oldest first) ", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                  var active = _ref2.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active || _ctx.$page.url.includes('created_at=desc') ? 'bg-indigo-200 text-gray-800' : 'hover:bg-indigo-200', 'group flex w-full items-center rounded-md px-2 py-2']),
                    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                      return $options.sortByCreated('desc');
                    }, ["prevent"]))
                  }, " Created (newest first) ", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                  var active = _ref3.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active || _ctx.$page.url.includes('stock=asc') ? 'bg-indigo-200 text-gray-800' : 'hover:bg-indigo-200', 'group flex w-full items-center rounded-md px-2 py-2']),
                    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                      return $options.sortByStock('asc');
                    }, ["prevent"]))
                  }, " Low stock ", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
                  var active = _ref4.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active || _ctx.$page.url.includes('stock=desc') ? 'bg-indigo-200 text-gray-800' : 'hover:bg-indigo-200', 'group flex w-full items-center rounded-md px-2 py-2']),
                    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                      return $options.sortByStock('desc');
                    }, ["prevent"]))
                  }, " High stock ", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.products.data, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: product.id,
      "class": "border-b"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: product.slug,
      "class": "hover:font-semibold hover:text-indigo-600"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.category.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.stock), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "text-indigo-600 hover:text-indigo-900 text-right text-sm font-medium",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.editProduct(product.slug);
      }, ["prevent"])
    }, " Edit ", 8
    /* PROPS */
    , _hoisted_35), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "text-red-500 hover:text-red-600 text-right text-sm font-medium",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.deleteProduct(product.slug);
      }, ["prevent"])
    }, " Delete ", 8
    /* PROPS */
    , _hoisted_36)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Pagination, {
    "class": "flex justify-end",
    links: $props.products.links
  }, null, 8
  /* PROPS */
  , ["links"])]))], 2
  /* CLASS */
  )])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "flex flex-wrap mt-8 cursor-pointer"
};
var _hoisted_3 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return $props.links.length > 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.links, function (link, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: key
    }, [link.url === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      "class": "mr-1 mb-1 px-4 py-3 text-sm cursor-not-allowed leading-4 text-gray-400 border rounded",
      innerHTML: link.label
    }, null, 8
    /* PROPS */
    , _hoisted_3)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-indigo-200 focus:border-primary focus:text-primary", {
        'bg-indigo-200': link.active
      }]),
      href: link.url,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.scrollToTop, ["prevent"]),
      innerHTML: link.label
    }, null, 8
    /* PROPS */
    , ["class", "href", "onClick", "innerHTML"]))], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SideNav.vue?vue&type=template&id=62e76da0":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SideNav.vue?vue&type=template&id=62e76da0 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "lg:hidden px-10 py-6 flex space-x-3"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Admin Account ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" My Account ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Password ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Addresses ");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Password ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Products ");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" My Purchase ");

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Store ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Product ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All ");

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To Pay ");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To Ship ");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To Receive ");

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Completed ");

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancelled ");

var _hoisted_19 = {
  "class": "inline-grid w-32"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Admin Account", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Password ");

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "My Account", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ");

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Addresses ");

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Password ");

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Products", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Store ");

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Product ");

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "My purchase", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All ");

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To Pay ");

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To Ship ");

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To Receive ");

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Completed ");

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancelled ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MenuButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuButton");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_MenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItem");

  var _component_MenuItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItems");

  var _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");

  var _component_DisclosureButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisclosureButton");

  var _component_DisclosurePanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisclosurePanel");

  var _component_Disclosure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Disclosure");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" sm screen "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu, {
    as: "div"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuButton, {
        key: 0,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out", _ctx.$page.component.includes('Admin/Account') ? 'bg-indigo-300' : ''])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_2];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuButton, {
        key: 1,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out", _ctx.$page.component.includes('User/Account') ? 'bg-indigo-300' : ''])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_3];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class"]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" drop down content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItems, {
            "class": "focus:outline-none absolute z-10 mt-2 w-40 p-2 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                key: 0
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/admin/account/profile",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'Admin/Account/Profile' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_4];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/admin/account/password/change",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'Admin/Account/ChangePassword' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_5];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              })], 64
              /* STABLE_FRAGMENT */
              )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                key: 1
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/account/profile",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Account/Profile' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_6];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/account/addresses",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Account/Addresses' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_7];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/account/password/change",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Account/ChangePassword' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_8];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              })], 64
              /* STABLE_FRAGMENT */
              ))];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu, {
    as: "div"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuButton, {
        key: 0,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out", _ctx.$page.component.includes('Admin/Products') ? 'bg-indigo-300' : ''])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_9];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuButton, {
        key: 1,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out", _ctx.$page.component.includes('User/Purchase') ? 'bg-indigo-300' : ''])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_10];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class"]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" drop down content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItems, {
            "class": "focus:outline-none absolute z-10 mt-2 w-40 p-2 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                key: 0
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/admin/products",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'Admin/Products/Index' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_11];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/admin/products/create",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'Admin/Products/Create' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_12];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              })], 64
              /* STABLE_FRAGMENT */
              )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                key: 1
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/purchase",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Purchase/Index' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_13];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/purchase/to-pay",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Purchase/ToPay' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_14];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/purchase/to-ship",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Purchase/ToShip' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_15];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/purchase/to-receive",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Purchase/ToReceive' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_16];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/purchase/completed",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Purchase/Completed' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_17];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                    href: "/user/purchase/cancelled",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-gray-100 text-gray-900', _ctx.$page.component == 'User/Purchase/Cancelled' ? 'bg-violet-500 text-gray-100' : ''])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_18];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              })], 64
              /* STABLE_FRAGMENT */
              ))];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" large screen "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["hidden lg:flex pt-20 justify-end w-2/12", _ctx.$page.component.includes('Admin/Products/Create') ? 'absolute' : 'h-full'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Disclosure, {
    key: 0,
    defaultOpen: _ctx.$page.component.includes('Admin/Account'),
    as: "div"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var open = _ref.open;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosureButton, {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-left text-md font-medium text-indigo-600 hover:text-indigo-700", open ? 'pl-2' : '']),
        id: "closure-one",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $options.closeOther('closure-one');
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_20];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-out",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosurePanel, {
            as: "ul",
            "class": "pl-2 pt-2 pb-2 text-sm text-indigo-500"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/admin/account/profile",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'Admin/Account/Profile' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_21];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/admin/account/password/change",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'Admin/Account/ChangePassword' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_22];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["defaultOpen"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Disclosure, {
    key: 1,
    defaultOpen: _ctx.$page.component.includes('User/Account'),
    as: "div"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
      var open = _ref2.open;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosureButton, {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-left text-md font-medium text-indigo-600 hover:text-indigo-700", open ? 'pl-2' : '']),
        id: "closure-one",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $options.closeOther('closure-one');
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_23];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-out",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosurePanel, {
            as: "ul",
            "class": "pl-2 pt-2 pb-2 text-sm text-indigo-500"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/account/profile",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Account/Profile' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_24];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/account/addresses",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Account/Addresses' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_25];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/account/password/change",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Account/ChangePassword' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_26];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["defaultOpen"])), _ctx.$page.props.auth.user.isAdmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Disclosure, {
    key: 2,
    defaultOpen: _ctx.$page.component.includes('Admin/Products'),
    as: "div"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
      var open = _ref3.open;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosureButton, {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-left text-md font-medium text-indigo-600 hover:text-indigo-700", open ? 'pl-2' : '']),
        id: "closure-two",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $options.closeOther('closure-two');
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_27];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-out",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosurePanel, {
            as: "ul",
            "class": "pl-2 pt-2 pb-2 text-sm text-indigo-500"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/admin/products",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'Admin/Products/Index' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_28];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/admin/products/create",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'Admin/Products/Create' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_29];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["defaultOpen"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Disclosure, {
    key: 3,
    defaultOpen: _ctx.$page.component.includes('User/Purchase'),
    as: "div"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
      var open = _ref4.open;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosureButton, {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-left text-md font-medium text-indigo-600 hover:text-indigo-700", open ? 'pl-2' : '']),
        id: "closure-two",
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $options.closeOther('closure-two');
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_30];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-out",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosurePanel, {
            as: "ul",
            "class": "pl-2 pt-2 pb-2 text-sm text-indigo-500"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/purchase",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Purchase/Index' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_31];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/purchase/to-pay",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Purchase/ToPay' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_32];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/purchase/to-ship",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Purchase/ToShip' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_33];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/purchase/to-receive",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Purchase/ToReceive' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_34];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/purchase/completed",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Purchase/Completed' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_35];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
                href: "/user/purchase/cancelled",
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$page.component == 'User/Purchase/Cancelled' ? 'font-bold' : '')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_36];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["class"])])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["defaultOpen"]))])], 2
  /* CLASS */
  )], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Admin/Products/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Admin/Products/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_19783e60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=19783e60 */ "./resources/js/Pages/Admin/Products/Index.vue?vue&type=template&id=19783e60");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Products/Index.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_19783e60__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Products/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/SideNav.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/SideNav.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNav_vue_vue_type_template_id_62e76da0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNav.vue?vue&type=template&id=62e76da0 */ "./resources/js/Shared/SideNav.vue?vue&type=template&id=62e76da0");
/* harmony import */ var _SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav.vue?vue&type=script&lang=js */ "./resources/js/Shared/SideNav.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SideNav_vue_vue_type_template_id_62e76da0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/SideNav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Products/Index.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Products/Index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/SideNav.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/SideNav.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SideNav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Products/Index.vue?vue&type=template&id=19783e60":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Products/Index.vue?vue&type=template&id=19783e60 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_19783e60__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_19783e60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=19783e60 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Index.vue?vue&type=template&id=19783e60");


/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");


/***/ }),

/***/ "./resources/js/Shared/SideNav.vue?vue&type=template&id=62e76da0":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/SideNav.vue?vue&type=template&id=62e76da0 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_template_id_62e76da0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideNav_vue_vue_type_template_id_62e76da0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideNav.vue?vue&type=template&id=62e76da0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SideNav.vue?vue&type=template&id=62e76da0");


/***/ })

}]);