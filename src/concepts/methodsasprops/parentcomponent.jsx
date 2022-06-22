import React from "react";
import ChildComponent from "./childcomponent";

function ParentComponent() {

    function greetParent(childName) {
        alert(`Hello ${parentName} from ${childName}`)
    }

    const [parentName] = React.useState('Parent');

    return(
        <div>
            <ChildComponent greetHandler={greetParent}/>
        </div>
    )
}

export default ParentComponent;

