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
        }, // User info array

        //Sort by array
        sortedBy: [
            "name",
            "location",
            "price",
        ],

        sortedByOption: "name", 
        orderBy: "ascending", // Automactic ascension 
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

        sortBy: function (array, param, order) { // Sort by function
            let filterA, filterB;
            return array.sort(function (a, b) {
                switch (param) {
                    case 'name':
                        filterA = a.name;
                        filterB = b.name;
                        break;
                    case 'location':
                        filterA = a.location;
                        filterB = b.location;
                        break;
                    case 'price':
                        filterA = a.price;
                        filterB = b.price;
                        break;
                }
                if (order == "ascending") { // if statement
                    return (filterA > filterB) ? 1 : -1;
                } else {
                    return (filterA < filterB) ? 1 : -1;
                }
            });
        },
    },

    computed: {

    },

    watch: {// listen to the component data and run whenever a particular property changes
        sortedByOption: function () {
            this.sortBy(this.subject, this.sortedByOption, this.orderBy);
        },// Reacts to the changes with the sortby function and sends chnages to the other functions

        orderBy: function () {
            this.sortBy(this.subject, this.sortedByOption, this.orderBy);
        }, // Reacts to the changes with the sortby function and sends chnages to the other functions

},

created: function () { // Starts the computed in the code byt eh response of the other functions
    axios.get('./subject.json')
        .then((response) => {
            this.subject = response.data.subject;
            this.sortBy(this.subject, this.sortedByOption, this.orderBy);
        });
}

});