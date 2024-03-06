// Classes


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.salesTax = 0.05;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: R$${this.price.toFixed(2)}`);
        console.log(`Total price(with taxes): R$${this.calculateTotal().toFixed(2)}`);
    }

    calculateTotal(){
        return this.price + (this.price * this.salesTax);
    }
}

const product1 = new Product("T-shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();