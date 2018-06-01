const LoginPageComponent = {

  template: `
  <div>
    <login class="row"></login>
    <registration class="row"></registration>
    </div>
  </div>
  `,
  created() {
      http.get('/rest/products').then((response) => {
        this.products = response.data;
      }).catch((error) => {
        console.error(error);
      });
  },

  data() {
    return {
      products: []
    }
  }
}
