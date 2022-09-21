"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Products_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Edit.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Edit.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_SideNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Shared/SideNav.vue */ "./resources/js/Shared/SideNav.vue");
/* harmony import */ var _Shared_Tiptap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/Tiptap.vue */ "./resources/js/Shared/Tiptap.vue");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/TrashIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/UploadIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/PhotographIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/ReplyIcon.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SideNav: _Shared_SideNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Tiptap: _Shared_Tiptap_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TrashIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
    UploadIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
    PhotographIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_4__["default"],
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__["default"],
    ReplyIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    productData: Object,
    categories: Array,
    previewMediaUploadedData: Array,
    previewVariantsUploadedData: Array
  },
  data: function data() {
    return {
      isCustomCategory: false,
      isHasOptions: false,
      product: this.$inertia.form(this.productData),
      previewMediaUploaded: this.previewMediaUploadedData,
      previewVariantsUploaded: this.previewVariantsUploadedData
    };
  },
  mounted: function mounted() {
    var categoriesName = [];
    this.categories.forEach(function (el) {
      categoriesName.push(el.name);
    });

    if (!categoriesName.includes(this.product.category)) {
      this.isCustomCategory = true;
    }

    if (this.product.options.length > 0) {
      this.isHasOptions = true;
    }
  },
  methods: {
    closeCustomCategory: function closeCustomCategory() {
      this.isCustomCategory = false;
      this.product.category = "";
    },
    handleProductMediaUpload: function handleProductMediaUpload(event) {
      var _this = this;

      var uploadedMedia = event.target.files; // send data to the back end to be validate

      this.$inertia.post("temp/media", {
        media: uploadedMedia
      }, {
        preserveScroll: true,
        onSuccess: function onSuccess(response) {
          Object.entries(uploadedMedia).map(function (item, index) {
            _this.product.media.push(response.props.flash.success[index]);

            if (item[1].type == "video") {
              var reader = new FileReader();
              reader.readAsDataURL(item[1]);
              reader.addEventListener("load", function () {
                this.previewMediaUploaded.push([reader.result, item[1].type]);
              });
              return;
            }

            _this.previewMediaUploaded.push([URL.createObjectURL(item[1]), item[1].type]);
          });

          _this.$notify({
            group: "success",
            title: "Success",
            text: "File uploaded"
          }, 3500);
        },
        onError: function onError() {
          _this.$notify({
            group: "error",
            title: "Error",
            text: "Something went wrong, Please try again"
          }, 3500);
        }
      });
    },
    handleProductMediaRemove: function handleProductMediaRemove(index) {
      var _this2 = this;

      this.$inertia.patch("temp/media", {
        filePath: this.product.media[index]
      }, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this2.product.media.splice(index, 1);

          _this2.previewMediaUploaded.splice(index, 1);

          _this2.$notify({
            group: "success",
            title: "Success",
            text: "File removed"
          }, 3500);
        },
        onError: function onError() {
          _this2.$notify({
            group: "error",
            title: "Error",
            text: "Something went wrong, please try again"
          }, 3500);
        }
      });
    },
    editProduct: function editProduct() {
      var _this3 = this;

      this.product.put("/admin/products/productIdAtauProductslug", {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this3.$notify({
            group: "success",
            title: "Success",
            text: "Product successfully edited."
          }, 3500);
        },
        onError: function onError() {
          _this3.$notify({
            group: "error",
            title: "Error",
            text: "Product failed to be edited."
          }, 3500);
        }
      });
    },
    addOptionValueInput: function addOptionValueInput(objectKey, currentArrayKey) {
      if (currentArrayKey + 1 in this.product.options[objectKey].values == false) {
        this.product.options[objectKey].values.push("");
      }
    },
    removeOptionValueInput: function removeOptionValueInput(objectKey, currentArrayKey) {
      this.product.options[objectKey].values.splice(currentArrayKey, 1);
    },
    addNewOption: function addNewOption() {
      if (this.product.options.length <= 3) {
        this.product.options.push({
          name: "",
          values: [""],
          isSaved: false
        });
      }
    },
    removeOption: function removeOption(objectKey) {
      this.product.options.splice(objectKey, 1);
      this.generateVariants();
    },
    saveOption: function saveOption(objectKey) {
      this.product.options[objectKey].isSaved = true;
      this.generateVariants();
    },
    generateVariants: function generateVariants() {
      var options = this.product.options;
      var generatedOptionsValues = [];

      var _loop = function _loop(i) {
        generatedOptionsValues.push([]);
        options[i].values.map(function (value) {
          value !== "" ? generatedOptionsValues[i].push(value) : null;
        });
      };

      for (var i = 0; i < options.length; i++) {
        _loop(i);
      }

      var variantsCombined = [];
      var temp = [];

      var _loop2 = function _loop2(_i) {
        if (variantsCombined.length == 0 && _i == 0) {
          generatedOptionsValues[_i].map(function (d) {
            return variantsCombined.push(d);
          });
        }

        if (_i !== 0) {
          variantsCombined.flatMap(function (d) {
            generatedOptionsValues[_i].map(function (v) {
              temp.push(d + " / " + v);
            });
          });
          variantsCombined = temp;
          temp = [];
        }
      };

      for (var _i = 0; _i < generatedOptionsValues.length; _i++) {
        _loop2(_i);
      }

      var variants = this.product.variants;

      if (variants.length == 0) {
        variantsCombined.map(function (v) {
          variants.push({
            name: v,
            filePath: null,
            stock: null,
            price: null,
            isDelete: false
          });
        });
      }

      if (variants.length !== 0) {
        for (var _i2 = 0; _i2 < variantsCombined.length; _i2++) {
          if (variants[_i2] !== undefined) {
            if (variants[_i2].name !== variantsCombined[_i2]) {
              if (variants[_i2].filePath) {
                this.$inertia.patch("temp/media", {
                  filePath: variants[_i2].filePath
                }, {
                  preserveScroll: true
                });
                this.previewVariantsUploaded[_i2] = undefined;
              }

              variants[_i2] = {
                name: variantsCombined[_i2],
                filePath: null,
                stock: null,
                price: null,
                isDelete: false
              };
            }
          } else {
            variants.push({
              name: variantsCombined[_i2],
              filePath: null,
              stock: null,
              price: null,
              isDelete: false
            });
          }
        }

        if (variants.length > variantsCombined.length) {
          var gap = variants.length - variantsCombined.length;

          while (gap !== 0) {
            variants.pop();
            gap--;
          }
        }
      }
    },
    deleteVariant: function deleteVariant(element) {
      var _this4 = this;

      var variant = this.product.variants[element];
      var options = variant.name.split(" / ");
      variant.isDelete = true;
      options.map(function (v, k) {
        var hasOtherVariant = false;

        _this4.product.variants.forEach(function (el) {
          if (!el.isDelete) {
            if (el.name.includes(v) && el.name.includes(" / ")) {
              hasOtherVariant = true;
            }
          }
        });

        if (!hasOtherVariant) {
          var optionValues = _this4.product.options[k].values;
          optionValues.map(function (optV, optVK) {
            if (optV === v) {
              optionValues.splice(optVK, 1);

              _this4.generateVariants();
            }

            if (optionValues.length === 1 && optionValues.includes("")) {
              _this4.removeOption(k);
            }
          });
        }
      });
    },
    unDeleteVariant: function unDeleteVariant(element) {
      this.product.variants[element].isDelete = false;
    },
    handleVariantMediaUpload: function handleVariantMediaUpload(event, key) {
      var _this5 = this;

      var uploadedVariantMedia = event.target.files[0];
      this.$inertia.post("temp/media", {
        variant: uploadedVariantMedia
      }, {
        preserveScroll: true,
        onSuccess: function onSuccess(response) {
          _this5.previewVariantsUploaded[key] = URL.createObjectURL(uploadedVariantMedia);
          _this5.product.variants[key].filePath = response.props.flash.success;

          _this5.$notify({
            group: "success",
            title: "Success",
            text: "Highlight image uploaded"
          }, 3500);
        },
        onError: function onError() {
          _this5.$notify({
            group: "error",
            title: "Error",
            text: "Something went wrong, Please try again"
          }, 3500);
        }
      });
    },
    removeVariantMediaPreview: function removeVariantMediaPreview(key) {
      var _this6 = this;

      this.$inertia.patch("temp/media", {
        filePath: this.product.variants[key].filePath
      }, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this6.previewVariantsUploaded[key] = undefined;
          _this6.product.variants[key].filePath = null;

          _this6.$notify({
            group: "success",
            title: "Success",
            text: "Highlight image removed"
          }, 3500);
        },
        onError: function onError() {
          _this6.$notify({
            group: "error",
            title: "Error",
            text: "Something went wrong, please try again"
          }, 3500);
        }
      });
    },
    editOption: function editOption(objectKey) {
      this.product.options[objectKey].isSaved = false;
    },
    uniqueOptionName: function uniqueOptionName(node) {
      var counter = 0;
      var options = this.product.options;

      for (var i = 0; i < 3; i++) {
        if (options[i] !== undefined) {
          if (options[i].name.toLowerCase() == node.value.toLowerCase()) {
            counter++;
          }
        }
      }

      if (counter >= 2) {
        counter = 0;
        return false;
      }
    },
    uniqueOptionValues: function uniqueOptionValues(node, key) {
      var counter = 0;
      var values = this.product.options[key].values;
      values.forEach(function (el) {
        if (el.toLowerCase() === node.value.toLowerCase()) {
          counter++;
        }
      });

      if (counter >= 2) {
        counter = 0;
        return false;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/starter-kit */ "./node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js");
/* harmony import */ var _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-placeholder */ "./node_modules/@tiptap/extension-placeholder/dist/tiptap-extension-placeholder.esm.js");
/* harmony import */ var _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/vue-3 */ "./node_modules/@tiptap/vue-3/dist/tiptap-vue-3.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    EditorContent: _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_2__.EditorContent,
    FloatingMenu: _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_2__.FloatingMenu
  },
  props: {
    modelValue: {
      type: String,
      "default": ""
    }
  },
  emits: ["update:modelValue"],
  data: function data() {
    return {
      editor: null
    };
  },
  watch: {
    modelValue: function modelValue(value) {
      // HTML
      var isSame = this.editor.getHTML() === value; // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.editor = new _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_2__.Editor({
      extensions: [_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_0__["default"], _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_1__["default"].configure({
        placeholder: "Write a detail about your product...",
        showOnlyWhenEditable: true
      })],
      editorProps: {
        attributes: {
          "class": "form-control prose prose-sm block w-full h-52 overflow-y-scroll px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
        }
      },
      content: this.modelValue,
      onUpdate: function onUpdate() {
        _this.$emit("update:modelValue", _this.editor.getHTML());
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Edit.vue?vue&type=template&id=6090e87c":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Edit.vue?vue&type=template&id=6090e87c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "flex-1"
};
var _hoisted_3 = {
  "class": "container max-w-xl mx-auto my-10"
};
var _hoisted_4 = {
  "class": "text-xl font-semibold mb-6 text-gray-900"
};
var _hoisted_5 = {
  "class": "space-y-8 sm:space-y-5"
};
var _hoisted_6 = {
  "class": "w-full"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "font-semibold text-sm inline-block mb-1 text-gray-700"
}, "Description", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "w-1/2"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: ""
}, " Select category ", -1
/* HOISTED */
);

var _hoisted_10 = {
  key: 0,
  "class": "w-1/2"
};
var _hoisted_11 = {
  "class": "w-full flex space-x-3"
};
var _hoisted_12 = {
  "class": "pt-8"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "product-media",
  "class": "font-semibold text-sm inline-block mb-1 text-gray-700"
}, "Media", -1
/* HOISTED */
);

var _hoisted_14 = {
  "for": "product-media",
  "class": "flex flex-col cursor-pointer w-full bg-white py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center"
}, " Upload product images / videos ", -1
/* HOISTED */
);

var _hoisted_16 = {
  key: 0,
  "class": "mt-4 bg-white py-4 px-2 max-h-64 border rounded-md overflow-y-scroll"
};
var _hoisted_17 = ["src"];
var _hoisted_18 = ["src", "alt"];
var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
  "class": "pt-8"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "product-options",
  "class": "font-semibold text-sm inline-block mb-2 text-gray-700"
}, "Options", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "px-6"
};
var _hoisted_23 = {
  key: 0,
  "class": "flex justify-between"
};
var _hoisted_24 = {
  "class": "mt-2.5"
};
var _hoisted_25 = {
  "class": "text-base font-semibold"
};
var _hoisted_26 = {
  "class": "flex flex-wrap text-gray-600 text-sm"
};
var _hoisted_27 = {
  key: 0,
  "class": "border border-gray-300 rounded-md mb-1 mr-1.5 px-3 py-1 bg-indigo-200"
};
var _hoisted_28 = {
  key: 1
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "font-semibold text-sm inline-block mb-1 text-gray-700"
}, "Variants", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "flex flex-col border rounded border-gray-300"
};
var _hoisted_31 = {
  "class": "overflow-x-scroll"
};
var _hoisted_32 = {
  "class": "inline-block min-w-full"
};
var _hoisted_33 = {
  "class": "overflow-hidden"
};
var _hoisted_34 = {
  "class": "min-w-full"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "bg-white border-b"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "whitespace-nowrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " # "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " highlight image "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " stock "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-sm font-medium text-gray-900 px-6 py-4 text-left"
}, " price ")])], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
};
var _hoisted_37 = {
  "class": "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
};
var _hoisted_38 = {
  key: 0,
  "class": "flex flex-col"
};
var _hoisted_39 = {
  key: 0,
  "class": "relative"
};
var _hoisted_40 = ["src"];
var _hoisted_41 = {
  key: 1,
  "class": "cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
};
var _hoisted_42 = ["onChange"];
var _hoisted_43 = {
  "class": "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
};
var _hoisted_44 = {
  "class": "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
};
var _hoisted_45 = {
  "class": "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_SideNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNav");

  var _component_FormKit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormKit");

  var _component_Tiptap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tiptap");

  var _component_UploadIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UploadIcon");

  var _component_TrashIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TrashIcon");

  var _component_PhotographIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PhotographIcon");

  var _component_XIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XIcon");

  var _component_ReplyIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ReplyIcon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: $data.product.name + ' Edit'
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNav), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.name) + " Edit ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
    type: "form",
    "form-class": "p-3 sm:p-5 lg:p-6 bg-white border border-gray-300 rounded-md shadow-md space-y-3",
    "messages-class": "$reset pt-5",
    "submit-label": "Save",
    "submit-attrs": {
      outerClass: '$reset',
      wrapperClass: '$reset mt-6 flex justify-end'
    },
    disabled: $data.product.processing,
    onSubmit: $options.editProduct,
    "input-errors": {
      product_name: $data.product.errors.name ? $data.product.errors.name : '',
      description: $data.product.errors.description ? $data.product.errors.description : '',
      category: $data.product.errors.category ? $data.product.errors.category : '',
      stock: $data.product.errors.stock ? $data.product.errors.stock : '',
      price: $data.product.errors.price ? $data.product.errors.price : '',
      media: $data.product.errors.media ? $data.product.errors.media : ''
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        type: "text",
        name: "product_name",
        label: "Name",
        placeholder: "Heavy skipping rope",
        validation: "required",
        "validation-label": "Name",
        modelValue: $data.product.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.product.name = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tiptap, {
        modelValue: $data.product.description,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.product.description = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" just to use the validation for the description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "description",
        type: "text",
        validation: "required|length:100",
        "wrapper-class": "hidden",
        modelValue: $data.product.description,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.product.description = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        label: "Category",
        type: "select",
        validation: "required",
        modelValue: $data.product.category,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.product.category = $event;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_9, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.categories, function (category) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
              key: category.id
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 1
            /* TEXT */
            );
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        type: "button",
        "input-class": "$reset border-transparent text-sm font-medium text-blue-500 bg-white hover:underline",
        label: "custom category",
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $data.isCustomCategory = true;
        })
      })]), $data.isCustomCategory ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        type: "text",
        name: "category",
        label: "Custom category",
        "inner-class": "flex",
        suffixIcon: "close",
        "suffixIcon-class": "ml-2.5 self-center h-4 w-4 cursor-pointer",
        onSuffixIconClick: $options.closeCustomCategory,
        placeholder: "Lifestyle",
        validation: "required",
        "validation-label": "Custom category",
        modelValue: $data.product.category,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.product.category = $event;
        })
      }, null, 8
      /* PROPS */
      , ["onSuffixIconClick", "modelValue"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        type: "number",
        name: "stock",
        label: "Stock",
        "outer-class": "flex-1",
        placeholder: "500",
        validation: "required|number",
        "validation-label": "Product stock",
        modelValue: $data.product.stock,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.product.stock = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        type: "number",
        step: "any",
        name: "price",
        label: "Price",
        placeholder: "100",
        "outer-class": "flex-1",
        validation: "required|number",
        "validation-label": "Product price",
        modelValue: $data.product.price,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.product.price = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" handle image upload interaction method "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        multiple: "",
        type: "file",
        id: "product-media",
        name: "product-media",
        accept: "image/*,video/*",
        "class": "hidden",
        onChange: _cache[8] || (_cache[8] = function ($event) {
          return $options.handleProductMediaUpload($event);
        })
      }, null, 32
      /* HYDRATE_EVENTS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_UploadIcon, {
        "class": "h-6 self-center"
      }), _hoisted_15]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" catch error for media "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        name: "media",
        type: "text",
        validation: "required",
        "wrapper-class": "hidden",
        modelValue: $data.product.media,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $data.product.media = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), $data.previewMediaUploaded.length !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.previewMediaUploaded, function (media, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          "class": "flex w-full justify-between mb-2 bg-gray-50 border rounded-md border-gray-300 py-2 space-x-2 divide-x divide-gray-300"
        }, [media[1].includes('video') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("video", {
          key: 0,
          src: media[0],
          controls: "",
          "class": "pl-6 object-contain w-full h-52"
        }, null, 8
        /* PROPS */
        , _hoisted_17)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: 1,
          src: media[0],
          alt: index,
          "class": "pl-6 object-contain w-full h-52"
        }, null, 8
        /* PROPS */
        , _hoisted_18)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "px-3 hover:text-red-500",
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.handleProductMediaRemove(index);
          }, ["prevent"])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TrashIcon, {
          "class": "h-5 w-5"
        })], 8
        /* PROPS */
        , _hoisted_19)]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
        type: "checkbox",
        label: "This product has options, like size or color",
        "outer-class": "max-w-max",
        "input-class": "$reset border-gray-300 focus:ring-indigo-500 formkit-input rounded text-indigo-600",
        modelValue: $data.isHasOptions,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $data.isHasOptions = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.options, function (element, elementKey) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: elementKey,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['border-t mt-4', $data.isHasOptions ? 'block' : 'hidden'])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [element.isSaved ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.name), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(element.values, function (value) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: value
          }, [value !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value), 1
          /* TEXT */
          )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
          /* STABLE_FRAGMENT */
          );
        }), 128
        /* KEYED_FRAGMENT */
        ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
          type: "button",
          label: "Edit",
          "input-class": "$reset ml-2.5 bg-white px-3 py-1.5 border border-gray-400 rounded-md text-sm hover:bg-gray-100",
          "outer-class": "self-center",
          onClick: function onClick($event) {
            return $options.editOption(elementKey);
          }
        }, null, 8
        /* PROPS */
        , ["onClick"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormKit, {
          key: 1,
          type: "form",
          onSubmit: function onSubmit($event) {
            return $options.saveOption(elementKey);
          },
          "submit-attrs": {
            inputClass: '$reset mt-4 bg-white px-3 py-1.5 border border-gray-400 rounded-md font-semibold hover:bg-gray-100'
          },
          "submit-label": "Done"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" option name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
              label: "Option name",
              type: "text",
              validation: [['required'], ['uniqueOptionName']],
              "validation-rules": {
                uniqueOptionName: $options.uniqueOptionName
              },
              "validation-messages": {
                uniqueOptionName: function uniqueOptionName(node) {
                  return "".concat(node.node.value, " has already been taken.");
                }
              },
              delay: 150,
              placeholder: "Enter option name",
              suffixIcon: "trash",
              "wrapper-class": "mt-4",
              "inner-class": "flex",
              "suffixIcon-class": "self-center pl-2 cursor-pointer w-7",
              onSuffixIconClick: function onSuffixIconClick($event) {
                return $options.removeOption(elementKey);
              },
              modelValue: element.name,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return element.name = $event;
              }
            }, null, 8
            /* PROPS */
            , ["validation-rules", "validation-messages", "onSuffixIconClick", "modelValue", "onUpdate:modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" option values "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(element.values, function (value, key) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                key: key
              }, [key == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormKit, {
                key: 0,
                label: "Option values",
                type: "text",
                "validation-label": "Option value",
                validation: [['required'], ['uniqueOptionValues', elementKey]],
                "validation-rules": {
                  uniqueOptionValues: $options.uniqueOptionValues
                },
                "validation-messages": {
                  uniqueOptionValues: function uniqueOptionValues(node) {
                    return "".concat(node.node.value, " has already been taken.");
                  }
                },
                delay: 150,
                placeholder: "Enter option value",
                suffixIcon: element.values.length !== 1 ? 'trash' : '',
                "wrapper-class": "mt-4",
                "inner-class": "flex",
                "suffixIcon-class": "self-center pl-2 cursor-pointer w-7",
                modelValue: element.values[key],
                "onUpdate:modelValue": function onUpdateModelValue($event) {
                  return element.values[key] = $event;
                },
                onKeyup: function onKeyup($event) {
                  return $options.addOptionValueInput(elementKey, key);
                },
                onSuffixIconClick: function onSuffixIconClick($event) {
                  return $options.removeOptionValueInput(elementKey, key);
                }
              }, null, 8
              /* PROPS */
              , ["validation", "validation-rules", "validation-messages", "suffixIcon", "modelValue", "onUpdate:modelValue", "onKeyup", "onSuffixIconClick"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormKit, {
                key: 1,
                type: "text",
                "validation-label": "Option value",
                validation: [[element.values.length - 1 !== key ? 'required' : ''], ['uniqueOptionValues', elementKey]],
                "validation-rules": {
                  uniqueOptionValues: $options.uniqueOptionValues
                },
                "validation-messages": {
                  uniqueOptionValues: function uniqueOptionValues(node) {
                    return "".concat(node.node.value, " has already been taken.");
                  }
                },
                delay: 150,
                placeholder: "Add another value",
                suffixIcon: "trash",
                "wrapper-class": "mt-1",
                "inner-class": "flex",
                "suffixIcon-class": "self-center pl-2 cursor-pointer w-7",
                modelValue: element.values[key],
                "onUpdate:modelValue": function onUpdateModelValue($event) {
                  return element.values[key] = $event;
                },
                onKeyup: function onKeyup($event) {
                  return $options.addOptionValueInput(elementKey, key);
                },
                onSuffixIconClick: function onSuffixIconClick($event) {
                  return $options.removeOptionValueInput(elementKey, key);
                }
              }, null, 8
              /* PROPS */
              , ["validation", "validation-rules", "validation-messages", "modelValue", "onUpdate:modelValue", "onKeyup", "onSuffixIconClick"]))], 64
              /* STABLE_FRAGMENT */
              );
            }), 128
            /* KEYED_FRAGMENT */
            ))];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["onSubmit", "submit-attrs"]))])], 2
        /* CLASS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" add another option button "), $data.isHasOptions && $data.product.options.length < 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormKit, {
        key: 0,
        type: "button",
        "outer-class": "mt-6 border-t border-gray-300",
        "input-class": "$reset flex py-2 border-transparent text-sm font-medium text-blue-500 bg-white",
        prefixIcon: "add",
        "prefixIcon-class": "self-center mr-2.5 w-4 h-4",
        label: "add another option",
        onClick: $options.addNewOption
      }, null, 8
      /* PROPS */
      , ["onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.product.variants.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.variants, function (variant, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: variant,
          "class": "bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(key + 1), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, [variant.isDelete ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PhotographIcon, {
          "class": "h-8 self-center"
        })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: 1
        }, [$data.previewVariantsUploaded[key] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: $data.previewVariantsUploaded[key],
          alt: "preview highlight image",
          "class": "h-10 w-10 rounded object-cover mx-auto"
        }, null, 8
        /* PROPS */
        , _hoisted_40), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_XIcon, {
          "class": "absolute top-0 right-5 h-4 w-4 cursor-pointer text-gray-800 p-0.5 bg-gray-300 rounded-full",
          onClick: function onClick($event) {
            return $options.removeVariantMediaPreview(key);
          }
        }, null, 8
        /* PROPS */
        , ["onClick"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "file",
          accept: "image/*",
          "class": "hidden",
          onChange: function onChange($event) {
            return $options.handleVariantMediaUpload($event, key);
          }
        }, null, 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_42), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PhotographIcon, {
          "class": "h-8 self-center"
        })]))], 2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['text-sm  px-6 py-4 whitespace-nowrap', variant.isDelete ? 'line-through text-gray-700' : 'text-gray-900'])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(variant.name), 3
        /* TEXT, CLASS */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
          type: "number",
          validation: variant.isDelete ? '' : 'required|number|min:0',
          disabled: variant.isDelete,
          "validation-label": function validationLabel() {
            var position = key + 1;
            return 'Stock variant ' + position;
          },
          "input-class": "$reset appearance-none block border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 formkit-input placeholder-gray-400 px-3 py-2 rounded-md shadow-sm sm:text-sm w-32",
          placeholder: "0",
          modelValue: variant.stock,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return variant.stock = $event;
          }
        }, null, 8
        /* PROPS */
        , ["validation", "disabled", "validation-label", "modelValue", "onUpdate:modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormKit, {
          type: "number",
          step: "any",
          validation: variant.isDelete ? '' : 'required|number|min:0',
          disabled: variant.isDelete,
          "validation-label": function validationLabel() {
            var position = key + 1;
            return 'Price variant ' + position;
          },
          "input-class": "$reset appearance-none block border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 formkit-input placeholder-gray-400 px-3 py-2 rounded-md shadow-sm sm:text-sm w-32",
          placeholder: "0.00",
          modelValue: variant.price,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return variant.price = $event;
          }
        }, null, 8
        /* PROPS */
        , ["validation", "disabled", "validation-label", "modelValue", "onUpdate:modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, [variant.isDelete ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ReplyIcon, {
          key: 0,
          "class": "h-5 w-5 cursor-pointer",
          onClick: function onClick($event) {
            return $options.unDeleteVariant(key);
          }
        }, null, 8
        /* PROPS */
        , ["onClick"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TrashIcon, {
          key: 1,
          "class": "h-5 w-5 cursor-pointer",
          onClick: function onClick($event) {
            return $options.deleteVariant(key);
          }
        }, null, 8
        /* PROPS */
        , ["onClick"]))])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["disabled", "onSubmit", "input-errors"])])])])], 64
  /* STABLE_FRAGMENT */
  );
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
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["hidden lg:flex pt-20 justify-end w-2/12", _ctx.$page.component.includes('Admin/Products/Create') || _ctx.$page.component.includes('Admin/Products/Edit') ? 'absolute' : 'h-full'])
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=template&id=20c568f8":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=template&id=20c568f8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FloatingMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FloatingMenu");

  var _component_EditorContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditorContent");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$data.editor ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FloatingMenu, {
    key: 0,
    editor: $data.editor,
    "tippy-options": {
      duration: 50
    },
    "class": "border rounded-md px-2 py-0.5 border-gray-800 text-indigo-500 bg-white space-x-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Bullet List "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $data.editor.chain().focus().toggleBulletList().run();
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-0.5 border rounded-md hover:border-gray-600", {
          'bg-gray-600 text-white': $data.editor.isActive('bulletList')
        }])
      }, " Bullet List ", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Ordered List "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $data.editor.chain().focus().toggleOrderedList().run();
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-0.5 border rounded-md hover:border-gray-600", {
          'bg-gray-600 text-white': $data.editor.isActive('orderedList')
        }])
      }, " Ordered List ", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Bold "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $data.editor.chain().focus().toggleBold().run();
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-0.5 border rounded-md hover:border-gray-600", {
          'bg-gray-600 text-white': $data.editor.isActive('bold')
        }])
      }, " Bold ", 2
      /* CLASS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["editor"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EditorContent, {
    editor: $data.editor
  }, null, 8
  /* PROPS */
  , ["editor"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.ProseMirror p.is-editor-empty:first-child::before {\r\n    content: attr(data-placeholder);\r\n    float: left;\r\n    color: #adb5bd;\r\n    pointer-events: none;\r\n    height: 0;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_style_index_0_id_20c568f8_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_style_index_0_id_20c568f8_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_style_index_0_id_20c568f8_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Admin/Products/Edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Admin/Products/Edit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_6090e87c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6090e87c */ "./resources/js/Pages/Admin/Products/Edit.vue?vue&type=template&id=6090e87c");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Products/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_6090e87c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Products/Edit.vue"]])
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

/***/ "./resources/js/Shared/Tiptap.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Tiptap.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tiptap_vue_vue_type_template_id_20c568f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tiptap.vue?vue&type=template&id=20c568f8 */ "./resources/js/Shared/Tiptap.vue?vue&type=template&id=20c568f8");
/* harmony import */ var _Tiptap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiptap.vue?vue&type=script&lang=js */ "./resources/js/Shared/Tiptap.vue?vue&type=script&lang=js");
/* harmony import */ var _Tiptap_vue_vue_type_style_index_0_id_20c568f8_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css */ "./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css");
/* harmony import */ var C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_arm_commerce_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Tiptap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tiptap_vue_vue_type_template_id_20c568f8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Tiptap.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Products/Edit.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Products/Edit.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Edit.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Shared/Tiptap.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Tiptap.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tiptap.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Products/Edit.vue?vue&type=template&id=6090e87c":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Products/Edit.vue?vue&type=template&id=6090e87c ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_6090e87c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_6090e87c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=6090e87c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Products/Edit.vue?vue&type=template&id=6090e87c");


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


/***/ }),

/***/ "./resources/js/Shared/Tiptap.vue?vue&type=template&id=20c568f8":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Tiptap.vue?vue&type=template&id=20c568f8 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_template_id_20c568f8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_template_id_20c568f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tiptap.vue?vue&type=template&id=20c568f8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=template&id=20c568f8");


/***/ }),

/***/ "./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tiptap_vue_vue_type_style_index_0_id_20c568f8_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Tiptap.vue?vue&type=style&index=0&id=20c568f8&lang=css");


/***/ })

}]);