const product = {
  prodNum: "H80P",
  prodName: "Pavan",
  model: "M78JK10",
  price:10000,
  getFinPrice: function (disc) {
    return (this.price - (this.price * (disc / 100)));
  }
};
console.log(product.getFinPrice(25));