"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[252],{4252:(e,t,o)=>{o.r(t),o.d(t,{default:()=>W});var r=o(821),n={class:"bg-white"},a={class:"pt-16"},i={"aria-label":"Breadcrumb"},s={role:"list",class:"mx-auto flex justify-between max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"},l={class:"flex items-center space-x-2"},c={class:"flex items-center"},d=(0,r.createElementVNode)("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"h-5 w-4 text-gray-300"},[(0,r.createElementVNode)("path",{d:"M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"})],-1),u={class:"text-sm"},m={class:"mx-auto mt-6 max-w-2xl bg-gray-100 p-6 rounded-sm sm:px-6 lg:max-w-7xl lg:px-8 space-y-3"},p={class:"carousel__item"},g=["src"],h=["onClick"],f=["src"],x={class:"mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"},y={class:"lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"},v={class:"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"},V={class:"mt-4 lg:row-span-3 lg:mt-0"},N=(0,r.createElementVNode)("h2",{class:"sr-only"},"Product information",-1),k={class:"text-3xl tracking-tight text-gray-900"},b={class:"mt-6"},w=(0,r.createElementVNode)("h3",{class:"sr-only"},"Reviews",-1),E={class:"flex items-center"},C={class:"flex items-center"},B={class:"sr-only"},S=["href"],D={class:"mt-10"},L={class:"flex items-center justify-between"},$={class:"text-sm font-medium text-gray-900"},_={class:"grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"},O={class:"mt-10"},P=(0,r.createElementVNode)("div",{class:"flex items-center justify-between"},[(0,r.createElementVNode)("h3",{class:"text-sm font-medium text-gray-900"}," Quantity ")],-1),T={class:"text-sm"},j={class:"flex space-x-3"},I={key:0,class:"mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium bg-gray-400 text-black cursor-not-allowed"},R={key:0,class:"mt-4 text-sm text-red-500"},q={key:1,class:"mt-4 text-sm text-red-500"},F={key:0,class:"mt-4 text-sm text-red-500"},M={class:"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"},Q=(0,r.createElementVNode)("h3",{class:"sr-only"},"Description",-1),z=["innerHTML"];var A=o(8541),G=o(6201),U=o(7410),H=(o(3017),o(4268));const Z={components:{StarIcon:A.Z,RadioGroup:G.Ee,RadioGroupLabel:G.Nt,RadioGroupOption:G.$v,Carousel:U.lr,Slide:U.Mi,Navigation:U.W_},props:{productData:Object},data:function(){return{product:this.productData,displayedPrice:this.productData.price,reviews:{href:"#",average:5,totalCount:117},selectedOptions:[],isDisableButton:!1,isVariantNotExists:!1,quantity:1,maxQuantity:this.productData.stock,currentSlide:0}},watch:{selectedOptions:{handler:function(e){this.validateVariantion()},deep:!0}},mounted:function(){if(0==this.product.images.length)for(var e=0;e<5;e++)this.product.images.push("https://picsum.photos/250/250?random="+Math.random())},methods:{slideTo:function(e){this.currentSlide=e},addToCart:function(){var e=this;if(this.product.options.length===this.selectedOptions.length){if(!(this.isVariantNotExists||this.$page.props.auth.isLoggedIn&&this.$page.props.auth.user.isAdmin)){var t={};t.quantity=this.quantity;var o=this.selectedOptions.join(" / ");t.variant=o,t.price=this.displayedPrice,this.$inertia.post("/user/products/".concat(this.product.slug,"/cart"),t,{preserveScroll:!0,onSuccess:function(){if(e.maxQuantity-=e.quantity,e.$page.props.auth.isLoggedIn){var t=(0,H.R)();e.$swal.fire({icon:"success",title:"Success",text:"Product has been added to your cart",showCancelButton:!0,confirmButtonText:"view cart",cancelButtonText:"continue shopping"}).then((function(e){e.isConfirmed&&t.changeValue()})),t.getCartProducts()}},onError:function(){e.$page.props.auth.isLoggedIn&&e.$swal.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again"})}})}}else this.isDisableButton=!0},buyProduct:function(){var e=this;if(this.product.options.length===this.selectedOptions.length){if(!(this.isVariantNotExists||this.$page.props.auth.isLoggedIn&&this.$page.props.auth.user.isAdmin)){var t={};t.quantity=this.quantity;var o=this.selectedOptions.join(" / ");t.variant=o,t.price=this.displayedPrice,this.$inertia.post("/user/products/".concat(this.product.slug,"/buy"),t,{preserveScroll:!0,onSuccess:function(){(e.maxQuantity-=e.quantity,e.$page.props.auth.isLoggedIn)&&((0,H.R)().getCartProducts(),e.$inertia.get("/user/checkout"))},onError:function(){e.$page.props.auth.isLoggedIn&&e.$swal.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again"})}})}}else this.isDisableButton=!0},validateVariantion:function(){var e=this;this.product.options.length==this.selectedOptions.length&&(this.isDisableButton=!1);var t=this.selectedOptions.join(" / "),o=!1;this.product.variants.forEach((function(r){r.name==t&&(o=!0,e.maxQuantity=r.stock,e.displayedPrice=r.price,r.image_url&&e.product.images.map((function(t,o){t==r.image_url&&(e.currentSlide=o)})))})),o&&(this.isVariantNotExists=!1),o||(this.isVariantNotExists=!0)}}};const W=(0,o(3744).Z)(Z,[["render",function(e,t,o,A,G,U){var H=(0,r.resolveComponent)("Head"),Z=(0,r.resolveComponent)("Link"),W=(0,r.resolveComponent)("Slide"),Y=(0,r.resolveComponent)("Navigation"),J=(0,r.resolveComponent)("Carousel"),K=(0,r.resolveComponent)("StarIcon"),X=(0,r.resolveComponent)("RadioGroupLabel"),ee=(0,r.resolveComponent)("RadioGroupOption"),te=(0,r.resolveComponent)("RadioGroup"),oe=(0,r.resolveComponent)("vue-number-input");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(H,{title:G.product.name},null,8,["title"]),(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("nav",i,[(0,r.createElementVNode)("ol",s,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",c,[(0,r.createVNode)(Z,{href:"https://arm-commerce.amrilazim.com/products/categories/"+G.product.category.slug,class:"mr-2 text-sm font-medium text-gray-900"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(G.product.category.name),1)]})),_:1},8,["href"]),d]),(0,r.createElementVNode)("li",u,[(0,r.createVNode)(Z,{href:"https://arm-commerce.amrilazim.com/products/"+G.product.slug,"aria-current":"page",class:"font-medium text-gray-500 hover:text-gray-600"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(G.product.name),1)]})),_:1},8,["href"])])]),e.$page.props.auth.isLoggedIn?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[e.$page.props.auth.user.isAdmin?((0,r.openBlock)(),(0,r.createBlock)(Z,{key:0,href:"https://arm-commerce.amrilazim.com/admin/products/"+G.product.slug+"/edit",class:"text-indigo-500 text-md font-semibold"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Edit ")]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0)],64)):(0,r.createCommentVNode)("",!0)])]),(0,r.createElementVNode)("div",m,[(0,r.createVNode)(J,{id:"gallery","items-to-show":1,"wrap-around":!1,modelValue:G.currentSlide,"onUpdate:modelValue":t[0]||(t[0]=function(e){return G.currentSlide=e})},{addons:(0,r.withCtx)((function(){return[(0,r.createVNode)(Y)]})),default:(0,r.withCtx)((function(){return[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(G.product.images,(function(e){return(0,r.openBlock)(),(0,r.createBlock)(W,{key:e},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("img",{src:e,alt:"",class:"w-80 h-80 object-contain"},null,8,g)])]})),_:2},1024)})),128))]})),_:1},8,["modelValue"]),(0,r.createVNode)(J,{id:"thumbnails","items-to-show":4,"wrap-around":!0,modelValue:G.currentSlide,"onUpdate:modelValue":t[1]||(t[1]=function(e){return G.currentSlide=e}),ref:"carousel"},{default:(0,r.withCtx)((function(){return[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(G.product.images,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)(W,{key:e},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",{class:"carousel__item",onClick:function(e){return U.slideTo(t)}},[(0,r.createElementVNode)("img",{src:e,alt:"",class:"w-44 h-44 object-cover"},null,8,f)],8,h)]})),_:2},1024)})),128))]})),_:1},8,["modelValue"])]),(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("h1",v,(0,r.toDisplayString)(G.product.name),1)]),(0,r.createElementVNode)("div",V,[N,(0,r.createElementVNode)("p",k,(0,r.toDisplayString)(G.displayedPrice)+" MYR ",1),(0,r.createElementVNode)("div",b,[w,(0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("div",C,[((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)([0,1,2,3,4],(function(e){return(0,r.createVNode)(K,{key:e,class:(0,r.normalizeClass)([G.reviews.average>e?"text-gray-900":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])})),64))]),(0,r.createElementVNode)("p",B,(0,r.toDisplayString)(G.reviews.average)+" out of 5 stars ",1),(0,r.createElementVNode)("a",{href:G.reviews.href,class:"ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"},(0,r.toDisplayString)(G.reviews.totalCount)+" reviews",9,S)])]),(0,r.createElementVNode)("form",D,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(G.product.options,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:e,class:"mt-10"},[(0,r.createElementVNode)("div",L,[(0,r.createElementVNode)("h3",$,(0,r.toDisplayString)(e.name),1)]),(0,r.createVNode)(te,{modelValue:G.selectedOptions[t],"onUpdate:modelValue":function(e){return G.selectedOptions[t]=e},class:"mt-4"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(X,{class:"sr-only"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Choose a "+(0,r.toDisplayString)(e.name),1)]})),_:2},1024),(0,r.createElementVNode)("div",_,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.values,(function(e){return(0,r.openBlock)(),(0,r.createBlock)(ee,{as:"template",key:e,value:e},{default:(0,r.withCtx)((function(t){var o=t.active,n=t.checked;return[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)([o?"ring-2 ring-indigo-500":"","group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"])},[(0,r.createVNode)(X,{as:"span"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e),1)]})),_:2},1024),(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)([o?"border":"border-2",n?"border-indigo-500":"border-transparent","pointer-events-none absolute -inset-px rounded-md"]),"aria-hidden":"true"},null,2)],2)]})),_:2},1032,["value"])})),128))])]})),_:2},1032,["modelValue","onUpdate:modelValue"])])})),128)),(0,r.createElementVNode)("div",O,[P,(0,r.createVNode)(oe,{modelValue:G.quantity,"onUpdate:modelValue":t[2]||(t[2]=function(e){return G.quantity=e}),min:1,max:G.maxQuantity,inline:"",center:"",controls:"",rounded:"",class:"mt-4"},null,8,["modelValue","max"]),(0,r.createElementVNode)("p",T,(0,r.toDisplayString)(this.maxQuantity)+" stock available ",1)]),(0,r.createElementVNode)("div",j,[0==G.maxQuantity?((0,r.openBlock)(),(0,r.createElementBlock)("button",I," product out of stock ")):((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:1},[(0,r.createElementVNode)("button",{type:"submit",onClick:t[3]||(t[3]=(0,r.withModifiers)((function(){return U.addToCart&&U.addToCart.apply(U,arguments)}),["prevent"])),class:"mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium hover:bg-gray-300 bg-gray-200 focus:ring-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-offset-2"}," Add to cart "),(0,r.createElementVNode)("button",{type:"submit",onClick:t[4]||(t[4]=(0,r.withModifiers)((function(){return U.buyProduct&&U.buyProduct.apply(U,arguments)}),["prevent"])),class:"mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2"}," Buy now ")],64))]),G.isDisableButton?((0,r.openBlock)(),(0,r.createElementBlock)("p",R," Please select the available options above ")):(0,r.createCommentVNode)("",!0),G.isVariantNotExists?((0,r.openBlock)(),(0,r.createElementBlock)("p",q," The variant is not available ")):(0,r.createCommentVNode)("",!0),e.$page.props.auth.isLoggedIn?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:2},[e.$page.props.auth.user.isAdmin?((0,r.openBlock)(),(0,r.createElementBlock)("p",F," Above button not working with admin ")):(0,r.createCommentVNode)("",!0)],64)):(0,r.createCommentVNode)("",!0)])]),(0,r.createElementVNode)("div",M,[(0,r.createElementVNode)("div",null,[Q,(0,r.createElementVNode)("div",{innerHTML:G.product.description,class:"space-y-6 prose max-w-max"},null,8,z)])])])])])],64)}]])}}]);