import React from 'react';

const style = {
    color: 'gold',
    fontSize: '1.5em'
};

const Status = (props) => {
    return (
        <div className="form-inline mt-2 mt-md-0">
            {props.isLoggedIn ?
                (<div className="form-inline mt-2 mt-md-0">
                        <label className="mx-3" style={style}> Hello, Bala </label>
                        <a to="/logout" className="mx-3" style={style}><span>Logout</span>
                        </a>
                    </div>
                )
                :
                <a to="/login" className="mx-3"><span style={{color: 'gold', fontSize: '1.5em'}}>Login</span></a>
            }
        </div>
    )
};

export default Status;