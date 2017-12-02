import React from 'react';


function renderList(iterable) {
    let fruitsMarkup = iterable.map(f => <li>{f}</li>)
    return fruitsMarkup;
}

function Fruits() {
    return (
        <ul>
            {renderList(['Apple', 'Banana', 'Chikko', 'Citrus'])}
        </ul>
    )
}

export default Fruits;