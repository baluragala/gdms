import React from 'react'
import './BrandDetail.css'

class BrandDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        fetch('http://localhost:4000/brands/' + this.props.match.params.bid)
            .then(r => r.json())
            .then(brandInfo => this.setState({brandInfo}))
    }

    handleClick = () => {
        this.props.history.go(-5);
    };

    handleClickHome = () => {
        this.props.history.push("/home")
    };

    render() {
        let {brandInfo} = this.state;
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: 70}}>Detail for {this.props.match.params.bid}</h1>
                {this.state.brandInfo &&
                <div className="brand-info">
                    <section>
                        <header><h1>{brandInfo.name}</h1></header>
                        <p className="brand-desc">{brandInfo.desc}</p>
                    </section>
                    <button onClick={this.handleClick}>Back</button>
                    <button onClick={this.handleClickHome}>Home</button>
                </div>
                }
            </div>
        )
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default BrandDetail;