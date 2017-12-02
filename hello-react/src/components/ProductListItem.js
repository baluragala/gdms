import React from 'react';


/*
const ProductListItem = (props) => (
    <div style={{padding: 10, borderColor: 'purple', borderWidth: 2, borderStyle: 'solid', margin: 1}}>
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>
    </div>
);
*/

class ProductListItem extends React.Component {
    render() {
        let {title: productTitle, price} = this.props;
        return (
            <div style={{padding: 10, borderColor: 'purple', borderWidth: 2, borderStyle: 'solid', margin: 1}}>
                <h1>{productTitle}</h1>
                <h3>{price}</h3>
            </div>
        )
    }
}

export default ProductListItem;