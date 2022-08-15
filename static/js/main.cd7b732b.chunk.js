(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2-wKu",total:"Cart_total__1w97A",actions:"Cart_actions__3WncQ","button--alt":"Cart_button--alt__3d55m",button:"Cart_button__JvGTp",order:"Cart_order__3sRsZ",title:"Cart_title__3z01q",connection:"Cart_connection__1fMpM","order-img":"Cart_order-img__1da0-"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2Boql",summary:"CartItem_summary__1Uz65",price:"CartItem_price__1nJUR",amount:"CartItem_amount__3z5vr",actions:"CartItem_actions__1UYpx"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__2Y4eH",icon:"HeaderCartButton_icon__qYPag",badge:"HeaderCartButton_badge__2wiY3",bump:"HeaderCartButton_bump__5wp-J"}},function(e,t,n){e.exports={meal:"MealItem_meal__18kJ1",name:"MealItem_name__3tc5d",description:"MealItem_description__tOiWc",price:"MealItem_price__88ScP"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3alzi",modal:"Modal_modal__3iGNa","slide-down":"Modal_slide-down__2E6hA"}},function(e,t,n){e.exports={header:"Header_header__2au0n","main-image":"Header_main-image__RVi21"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__12csO","meals-appear":"AvailableMeals_meals-appear__lXEzv"}},function(e,t,n){e.exports={form:"MealItemForm_form__vrp_e"}},function(e,t,n){e.exports={input:"Input_input__6jrnU"}},function(e,t,n){e.exports={card:"Card_card__l1j8j"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__aS1K6"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(14),c=n.n(a),i=(n(28),n(3)),r=n(1),o=n.n(r),s=n(12),l=n.n(s),m=n.p+"static/media/meals.2971f633.jpg",d=n(0),u=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=o.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(e){}}),b=n(7),O=n.n(b),p=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(j).items,s=o.reduce((function(e,t){return e+t.amount}),0);Object(r.useEffect)((function(){if(0!==o.length){var e=setTimeout((function(){return c(!0)}),300);return function(){c(!1),clearTimeout(e)}}}),[s]);var l="".concat(O.a.button," ").concat(a&&O.a.bump);return Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:O.a.icon,children:Object(d.jsx)(u,{})}),Object(d.jsx)("span",{children:" Your Cart "}),Object(d.jsx)("span",{className:O.a.badge,children:s})]})},x=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:l.a.header,children:[Object(d.jsx)("h1",{children:" RealVYA Meals"}),Object(d.jsx)(p,{onClick:e.onModalActive})]}),Object(d.jsx)("div",{className:l.a["main-image"],children:Object(d.jsx)("img",{src:m,alt:"A table full of food"})})]})},_=n(15),h=n.n(_),f=n(8),v=n.n(f),g=n(16),C=n.n(g),A=n(4),N=n(17),y=n.n(N),I=o.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:y.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(A.a)({ref:t},e.input))]})})),k=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(d.jsxs)("form",{className:C.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?o(!0):(e.onAddToCart(c),console.log("Submitted"))},children:[Object(d.jsx)(I,{ref:t,label:"Amount",input:{id:"amount_".concat(e.id),type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add "}),c&&Object(d.jsx)("div",{children:" Please enter a valid amount (1-5). "})]})},M=function(e){var t=Object(r.useContext)(j),n="$".concat(e.price.toFixed(2));return console.log("ID",e.id),Object(d.jsxs)("li",{className:v.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:v.a.name,children:e.name}),Object(d.jsx)("div",{className:v.a.description,children:e.description}),Object(d.jsx)("div",{className:v.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(k,{id:e.id,onAddToCart:function(a){console.log("item price",n),t.addItem({id:e.id,name:e.name,price:e.price,amount:a})}})})]},e.id)},w=n(18),S=n.n(w),F=function(e){return Object(d.jsx)("div",{className:"".concat(e.className," ").concat(S.a.card),children:e.children})},R=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],D=function(){var e=R.map((function(e){return Object(d.jsx)(M,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return console.log(e),Object(d.jsx)("section",{className:h.a.meals,children:Object(d.jsx)(F,{children:Object(d.jsx)("ul",{children:e})})})},H=n(19),B=n.n(H),E=function(){return Object(d.jsxs)("section",{className:B.a.summary,children:[Object(d.jsx)("h2",{children:" Delicious Food! Delivered to You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},z=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{}),Object(d.jsx)(D,{})]})},J=n(11),Y=n.n(J),T=n(9),P=n.n(T),V=function(e){return Object(d.jsx)("div",{onClick:e.onClick,className:Y.a.backdrop})},q=function(e){return Object(d.jsx)("div",{className:Y.a.modal,children:Object(d.jsxs)("div",{className:Y.a.content,children:[" ",e.children]})})},U=function(e){return console.log(e.children),Object(d.jsxs)(d.Fragment,{children:[P.a.createPortal(Object(d.jsx)(V,{onClick:e.onClick}),document.getElementById("overlays")),P.a.createPortal(Object(d.jsx)(q,{children:e.children}),document.getElementById("overlay"))]})},G=n(2),W=n.n(G),$=n(5),K=n.n($),L=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:K.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:K.a.summary,children:[Object(d.jsx)("span",{className:K.a.price,children:t}),Object(d.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:K.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Q=function(e){var t=Object(r.useContext)(j),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1],s="$".concat(+t.totalAmount.toFixed(2)),l=0===t.items.length,m=function(e){t.removeItem(e)},u=function(e){t.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},b=Object(d.jsx)("ul",{className:W.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(L,{name:e.name,amount:e.amount,price:e.price,onRemove:m.bind(null,e.id),onAdd:u.bind(null,e)},e.id)}))});return Object(d.jsxs)(U,{onClick:e.onDiactivate,children:[!c&&Object(d.jsxs)(d.Fragment,{children:[b,Object(d.jsxs)("div",{className:W.a.total,children:[Object(d.jsx)("span",{children:" Total Amount"}),Object(d.jsxs)("span",{children:[" ",s]})," "]}),Object(d.jsxs)("div",{className:W.a.actions,children:[Object(d.jsx)("button",{onClick:e.onDiactivate,className:W.a["button--alt"],children:"Close"}),!l&&Object(d.jsx)("button",{onClick:function(){o(!0),t.clearItems()},className:W.a.button,children:"Order"})]})]}),c&&Object(d.jsxs)("div",{className:W.a.order,children:[Object(d.jsx)("div",{className:W.a.title,children:" Thanks for ordering!"}),Object(d.jsxs)("div",{className:W.a.connection,children:["We will connect you as soon as possible! You can clarify or change your order by calling ",Object(d.jsx)("span",{children:"+38(063)-777-77-77"})," ."]}),Object(d.jsx)("div",{className:W.a["order-img"],children:Object(d.jsx)("img",{src:"https://i.gifer.com/origin/ca/cacaa11091931d565bfab63f4303f2b4.gif",alt:"Delivery man"})}),Object(d.jsx)("button",{onClick:e.onDiactivate,className:W.a["button--alt"],children:"Close"})]})]})},X=n(20),Z={};if(localStorage.getItem("cartFilling")){var ee=localStorage.getItem("cartFilling");Z=JSON.parse(ee)}else Z={items:[],totalAmount:0};var te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id}));return c>=0?(n=Object(X.a)(e.items))[c].amount+=t.item.amount:n=e.items.concat(t.item),{items:n,totalAmount:a}}if("REMOVE"===t.type){var i=e.totalAmount;return{items:e.items.map((function(e){return e.id!==t.id?e:(i-=e.price,Object(A.a)(Object(A.a)({},e),{},{amount:e.amount-1}))})).filter((function(e){return e.id!==t.id||!(e.amount<1)})),totalAmount:i}}if("CLEAR"===t.type)return{items:[],totalAmount:0}},ne=function(e){var t=Object(r.useReducer)(te,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount};console.log("lc",o),localStorage.setItem("cartFilling",JSON.stringify(o));var s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearItems:function(){c({type:"CLEAR"})}};return Object(d.jsx)(j.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ne,{children:[Object(d.jsx)(x,{onModalActive:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(z,{})}),n&&Object(d.jsx)(Q,{onDiactivate:function(){a(!1)}})]})};c.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.cd7b732b.chunk.js.map