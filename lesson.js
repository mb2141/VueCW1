var app = new Vue({
    el: '#app',
    data: {
        webname: "After school clubs", // Website name

        subject: subject, // Subject array

        cart: [], //Cart Array
        ShowSubject: true,
        Order: {
            name: '',
            phone: '',
        } // User info array
    },

    methods: {
        addToCart: function (subject) {
            this.cart.push(subject.id); // Places id in Cart Array
        },

        ShowBasket() {
            this.ShowSubject = this.ShowSubject ? false : true; // Allows the array length on the basket button
        },

        alert() {
            alert("Order Completed");//The alert box that trigger when clicking Submit order
        },

        CanAddToCart(subject) {
            return subject.space > this.CartCount(subject.id);//Allows the user to keep adding until no stock available
        },

        CartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) { //Allow the button the button to 
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
            window.location.reload()// Refreshes the website
        },

        isLetter(e) { //Doesnt allow numbers to be inputed
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },

        isNumber(e) { // Doesnt allow text to be inputted
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[0-9]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input number
        },


    },

    computed: {

},

});