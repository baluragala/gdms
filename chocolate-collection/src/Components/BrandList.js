import React from 'react'
import BrandCard from "./BrandCard";

class BrandList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {brands: []}
    }

    componentWillMount() {
        fetch('http://localhost:4000/brands')
            .then(response => response.json())
            .then(brands => this.setState({brands}))
    }

    render() {
        return (

            <div style={{marginTop: 20}}>
                <h1 style={{textAlign: 'center'}}>Brands Home</h1>
                <div className="row">
                    {this.state.brands.length !== 0 && this.state.brands
                        .map(brand => <BrandCard brandId={brand.id} image={brand.logo}
                                                 title={brand.name}/>)

                    }
                </div>
            </div>)
    }
}

export default BrandList;