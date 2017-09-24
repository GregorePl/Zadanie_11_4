function Phone(brand, price, color, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.weight = weight;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", price is " + this.price + " and the weight is " + this.weight + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", 162);
var SamsungGalaxyS6 = new Phone("Samsung", 3000, "black", 150)
var OnePlusOne = new Phone("OnePlus", 1500, "white", 170);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
