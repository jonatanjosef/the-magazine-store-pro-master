const MenyComponent = {
    template: `
    <ul class="nav">
        <li class="nav-item">
        <router-link class="nav-link" to="/">Hem</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/products">Produkter</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/cart-page">Cart</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>

        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Kategorier
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <category class="dropdown-item"
                v-for="product in categories"
                v-bind:item="product"
                v-bind:key="product._id"
            ></category>
        </div>
        </li>

    </ul>
 `,
 data() {
     return{
         categories: []
        };
    },
        async created() {
            let categories = await http.get('/rest/categories');
            if(categories.data){
                this.categories = categories.data;
            }
    }
}