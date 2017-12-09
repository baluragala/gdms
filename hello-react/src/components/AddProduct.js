import React from 'react';

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: 'SDCard'}
    }

    handleChange = (e) => {
        console.dir(e.target);
        this.setState({title: e.target.value})
    };

    componentWillMount() {
        console.log('componentWillMount', this.priceEle)
    }

    componentDidMount() {
        console.log('componentDidMount', this.priceEle);
        console.dir(this.priceEle)
    }

    handleSubmit = (e) => {
        console.log(this.priceEle.value);
        e.preventDefault();
    };

    change = () => {
        this.priceEle.value = 999;
    };

    render() {
        console.log('render');
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.title} onChange={this.handleChange}/>
                <input type="text" ref={ele => this.priceEle = ele}/>
                <button type="submit">Add</button>
                <button onClick={this.change}>Change</button>
            </form>
        )
    }
}

export default AddProduct;