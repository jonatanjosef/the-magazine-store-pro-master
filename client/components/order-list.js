const OrderListComponent = {
    template: `
    <div class="card-body">
        <h2>Skapa en produkt</h2>
            <form @submit.prevent="submit">
                <label>Namn</br>
                    <input type="text" v-model="name" :disabled="loading" required/>
                </label>
                <label>TEST</br>
                    <input type="text" v-model="description" :disabled="loading" />
                </label>
                <label>TEST</br>
                    <input type="text" v-model="price" :disabled="loading" />
                </label>
                <button type="submit" :disabled="loading">Spara</button>
            <span v-if="message">{{message}}</span>
        </form>
    </div>
    `,
    data() {
        return {
            name: '',
            description: '',
            price: 0,
            vat: 0.25,
            artnr: '',
            message: '',
            loading: false
        };
    },

    methods: {
        submit() { // save a product
            this.loading = true;
            http.post('/rest/products', {
                name: this.name,
                description: this.description,
                price: this.price,
                vat: this.vat,
                artnr: this.artnr
            }).then(response => {
                console.log(response);
                this.loading = false;
                if (response.data.name) {
                    this.message = 'Product saved';
                } else {
                    this.message = 'Not saved';
                }
            }).catch(error => {
                this.loading = false;
                this.message = 'Not saved';
            });
        }
    },
}