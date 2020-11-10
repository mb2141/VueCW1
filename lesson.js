var app = new Vue({
    el: '#app',
    data: {
        webname: "After school clubs",

        subject: [{
                id: 1,
                image: "",
                name: "Foundation English",
                location: "Dartford",
                price: 1.50,
                space: 5,
            },

            {
                id: 2,
                image: "",
                name: "Foundation Math",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 3,
                image: "",
                name: "Foundation Biology",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 4,
                image: "",
                name: "Foundation Physics",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 5,
                image: "",
                name: "Foundation Chemistry",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 6,
                image: "",
                name: "Higher Maths",
                location: "Welling",
                price: 2.00,
                space: 5,
            },
            {
                id: 7,
                image: "",
                name: "Higher English",
                location: "Dartford",
                price: 2.00,
                space: 5,
            },
            {
                id: 8,
                image: "",
                name: "Ethics & Philosophy",
                location: "Erith",
                price: 2.00,
                space: 5,
            },
            {
                id: 9,
                image: "",
                name: "Business studdies",
                location: "Erith",
                price: 2.00,
                space: 5,
            },
            {
                id: 10,
                image: "",
                name: "Computer Science",
                location: "Erith",
                price: 2.00,
                space: 5,
            },
        ],
        cart: [],
        ShowSubject: true,
        Order: {
            name: '',
            phone: '',
        }
    },

    methods: {
        addToCart: function () {
            this.cart.push(this.subject.id)
        },
        ShowBasket() {
            this.ShowSubject = this.ShowSubject ? false : true;
        },

        alert() {
            alert("Order Completed");
        }
    },

    computed: {
        CartItemCount: function () {
            return this.cart.length || '';
        },
        CanAddToCart: function () {
            return this.subject[0].space > this.CartItemCount;
        },
    }

})