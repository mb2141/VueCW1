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
            return subject.space > this.CartCount(subject.id);
        },

        CartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) count++;
            }
            return count;
        },

        RemoveSubject: function (subject) { // Remove basket function
            
            const index = this.cart.indexOf(subject);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },

        reloadPage() {
            window.location.reload()
        },

        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },

        isNumber(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[0-9]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },


    },



    computed: {

},

});