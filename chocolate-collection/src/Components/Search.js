import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <a className="btn btn-outline-success my-2 my-sm-0" type="button">
                    Search
                </a>
            </div>
        )
    }
}

export default Search;