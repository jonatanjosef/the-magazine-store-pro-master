const ProductPageComponent = {

  template: `
    <div class="row">
      <product
        v-for="product in categoryFilterProducts"
        v-bind:item="product"
        v-bind:key="product._id"
      ></product>
      <search></search>
    </div>
  `,

  created() {
    http.get('/rest/products').then((response) => {
      this.products = response.data.slice(0,3);
    }).catch((error) => {
      console.error(error);
    })
  },

  data() {
    return {
      products: []
    }
  },

  computed: {
    categoryFilterProducts: function(){
      return this.products.filter((product)=>{
        if(!this.$route.params.category){
          return true;
        }
        for(let category of product.categoies){
          if(category.name == this.$route.params.category){
            return true;
          }
        }
      })
    }
  }
}