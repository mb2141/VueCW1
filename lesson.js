var app = new Vue({
    el: '#app',
    data: {
        webname: "After school clubs",

        subject: [{
                id: 1,
                image: "",
                name: "English",
                location: "Dartford",
                price: 10.00,
                space: 5,
            },

            {
                id: 1,
                image: "",
                name: "Math",
                location: "bexleyheath",
                price: 10.00,
                space: 5,
            }
        ],
        cart: [],
        ShowSubject: true,
        Order: {
            Name:'',
            Phone: 0,
        }
    },

    methods: {
        addToCart: function () {
            this.cart.push(this.subject.id)
        },
        ShowBasket(){
            this.ShowSubject = this.ShowSubject ? false : true;
        }
    },

    computed: {
        CartItemCount: function () {
            return this.cart.length || '';
        },
        CanAddToCart: function () {
            return this.subject[0].space > this.CartItemCount;
            
        }
    }
})