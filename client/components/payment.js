const PaymentComponent = {

    props: ['item'],

    template: `
        <div>
            <form>
            Betala med Faktura <input type="radio" id="faktura" value="faktura" v-model="faktura">
            <br/>
            Betala med Kort <input type="radio" id="kort" value="kort" v-model="kort">
        </form>

    </div>
`

}