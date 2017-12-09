import React from 'react';
import ProductListItem from "./ProductListItem";

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, title: 'computer', price: 800},
                {id: 2, title: 'mobile', price: 400},
              /*  {id: 3, title: 'micro-oven', price: 299},
                {id: 4, title: 'knife', price: 8}*/
            ],
            cart: []
        };
        this.addProduct()
    }

    manageCart = (productTitle) => {
        let {cart} = this.state;
        cart.push(productTitle);
        this.setState({cart})
    }

    renderProducts() {
        let {products} = this.state;
        let productsMarkup = products.map(p => (
            <ProductListItem title={p.title} price={p.price} onAddToCartClick={this.manageCart}/>
        ));

        return productsMarkup;
    }

    addProduct() {
        setTimeout(() => {
            let {products} = this.state;
            products[0].title = 'new computer';
            products.push({id: 5, title: 'mixer', price: 180});
            this.setState({products});
            //this.state.products = products;
            console.log(this.state);
        }, 5000)
    }

    handleClick(e) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <h2>Items in Cart:{this.state.cart.toString()}</h2>
                <button onClick={this.handleClick}>Add Product</button>
                {this.renderProducts()}
            </div>
        )
    }
}


export default ProductList;