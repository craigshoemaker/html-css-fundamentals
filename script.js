window.addEventListener('DOMContentLoaded', () => { 

    const inventory = {
        apple: { price: 12, qty: 0 },
        cherry: { price: 15, qty: 0 },
        strawberry: { price: 18, qty: 0 }
    };

    function sum() {
        let total = 0;
        const keys = Object.keys(inventory);
        keys.forEach(key => {
            total += inventory[key].price * inventory[key].qty;
        });
        return total;
    }

    const totalContainer = document.getElementById('total-container');

    function calculate(box) {
        let qty = 0;

        if(box.value.length > 0) {
            qty = parseInt(box.value);
        }

        inventory[box.id].qty = qty;

        let total = sum();
        totalContainer.innerHTML = `$${total}.00`;
    }
    
    const inputBoxes = document.querySelectorAll('#calculator input');
    const quantityBoxes = Array.from(inputBoxes);
    
    quantityBoxes.forEach(box => {
        box.addEventListener('change', () => { calculate(box) });
        box.addEventListener('keyup', () => { calculate(box) });
    });
});