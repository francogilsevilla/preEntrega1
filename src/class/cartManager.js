import fs from "fs";

class CartManager {
  constructor(path) {
    this.path = path;
    this.carts = [];
  }

  getCarts() {
    try {
        if (!this.carts.length) {
            const fileContent = fs.readFileSync(this.path, 'utf8');
            if (fileContent.trim() !== '') {
                this.carts = JSON.parse(fileContent);
            }
        }
    } catch (error) {
        console.error('Error al leer o parsear el archivo:', error);
    }
    return this.carts;
}


  addCart() {
    try {
      console.log(this.path);
      let cart = new Cart();
      if (this.carts.length === 0) {
        cart.id = 1;
      } else {
        cart.id = this.carts[this.carts.length - 1].id + 1;
      }

      this.carts.push(cart);
      fs.writeFileSync(this.path, JSON.stringify(this.carts));
      return cart;
    } catch (error) {
      console.error('Error al escribir en el archivo:', error);
    }
  }


    getProducts(id){
        let cart = this.carts.find(element => element.id == id);
        console.log(cart);
        return cart.products;
    }

    addProduct(cartId, productId){
        let newCart = this.carts[this.carts.findIndex(elemente => element.id == cartId)]
        if(!newCart){
            return "El carrito no existe"
        }if(!newCart.products.find(element => element.product == productId)){
            newCart.products.push({"product":productId, "quantity": 1})
        }else{
            newCart.products[newCart.products.findIndex(element => element.product == productId)]. quantity +=1
        }

        this.carts[this.carts.findIndex(element => element.id == cartId)] = newCart;
        fs.writeFileSync(this.path,JSON.stringify(this.carts));
        return this.carts[this.carts.findIndex(element => element.id == cartId)]
    }
}

class Cart {
    constructor(){
        this.prouducts = [];
    }
}

export default CartManager;