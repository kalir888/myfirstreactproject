import React from "react";

const Invention = ({inventor,invented}) => {
    return (
        <div>
            <h1>{inventor} invented the {invented}</h1>
        </div>
    )
}

export default Invention;