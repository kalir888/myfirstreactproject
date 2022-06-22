import React from "react";

//way one to destructure props

/* const Hero = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hello {name} your favourite hero is {heroName}
            </h1>
        </div>
    )
} */

//way two to destructure props

/* const Hero = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} your favourite hero is {heroName}
            </h1>
        </div>
    )
} */

// in class components how to destructure props

class Hero extends React.Component {
    render() {
        const {name, heroName} = this.props
        /* const {state1, state2} = this.state */
        return (
            <h1>
                Hello {name} your favourite hero is {heroName}
            </h1>
        )
    }
}

export default Hero;