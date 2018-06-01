Vue.component('home-page', HomePageComponent);
Vue.component('product-page', ProductPageComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('login-page', LoginPageComponent);
Vue.component('admin-page', AdminPageComponent);
Vue.component('order-list', OrderListComponent);
Vue.component('payment', PaymentComponent);
Vue.component('category', CategoryComponent);
Vue.component('search', SearchComponent);

Vue.component('meny', MenyComponent);
Vue.component('product-admin', ProductAdminComponent);
Vue.component('product', ProductComponent);
Vue.component('hello', HelloComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('login', LoginComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);

const http = axios; // using axios 3rd party XHR/REST lib

// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/products/:category?', component: ProductPageComponent },
    { path: '/cart-page', component: CartPageComponent },
    { path: '/login', component: LoginPageComponent },
    { path: '/admin', component: AdminPageComponent }
  ]
});

// the app
let app = new Vue({
  el: "#app",
  router // add the router to the app
});