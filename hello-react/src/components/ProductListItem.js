import React from 'react';
import PropTypes from 'prop-types';


/*
const ProductListItem = (props) => (
    <div style={{padding: 10, borderColor: 'purple', borderWidth: 2, borderStyle: 'solid', margin: 1}}>
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>
    </div>
);
*/

class ProductListItem extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount', this.props)
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        /*product: PropTypes.shape({
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }).isRequired*/
    };

    static defaultProps = {
        title: 'Some great title here...'
    };

    handleAddToCartClick = (e) => {
        this.props.onAddToCartClick(this.props.title);
    };


    render() {
        console.log('render', this.props.title);

        let {title: productTitle, price, onAddToCartClick} = this.props;
        return (
            <div style={{padding: 10, borderColor: 'purple', borderWidth: 2, borderStyle: 'solid', margin: 1}}>
                <h1>{productTitle}</h1>
                <h3>{price}</h3>
                <button onClick={this.handleAddToCartClick}>Add To Cart</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps, this.props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, this.props, nextState);
        return nextProps.title !== this.props.title;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
}

export default ProductListItem;