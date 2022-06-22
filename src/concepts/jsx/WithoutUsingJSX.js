import React from "react";

const Namaste = () => {
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Have a nice day'));
}

export default Namaste;