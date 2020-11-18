var app = new Vue({
    el: '#app',
    data: {
        webname: "After school clubs",

        subject: subject,

        cart: [],
        ShowSubject: true,
        Order: {
            name: '',
            phone: '',
        }
    },

    methods: {
        addToCart: function (subject) {
            this.cart.push(subject.id);
        },
        ShowBasket() {
            this.ShowSubject = this.ShowSubject ? false : true;
        },

        alert() {
            alert("Order Completed");
        },

        CanAddToCart(subject) {
            return subject[1].space > this.CartCount(subject.id);
        },

        CartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) count++;
            }
            return count;
        },

        sort() {           

                            
        },

            


    },

    computed: {

    }

});
vm.greet() 