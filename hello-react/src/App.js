import React from 'react';
import './App.css';
import TimedHeader from "./components/TimedHeader";
import Fruits from "./components/Fruits";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";


class App extends React.Component {

    getName() {
        return "James";
    }

    render() {
        let title = 'React';
        return (<div id="1" style={styles.main}>
                {/*<h1 id="head">Hello {title}</h1>
                <TimedHeader/>
                <Fruits/>*/}
                <AddProduct/>
               {/* <ProductList/>*/}
            </div>
        )
    }
}


const styles = {
    main: {color: 'purple', margin: 10}
};

export default App