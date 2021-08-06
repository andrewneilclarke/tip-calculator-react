import { useState } from 'react'

const Button = ( { text } ) => {
    const [dots, setdot] = useState({dot1: true, dot2: false});

    const handleClick = () => {
        setdot(prevState => ({dot1: !prevState.dot1,
            dot2: !prevState.dot2}) 
            )
            console.log(dots.dot1, dots.dot2)
    }

    return (
        <div className="dotted-button">
            <button className="btn" onClick={handleClick}>
                {text}
            </button>
            <div className="dots">
            <span className="dot dot1" style={{ backgroundColor: dots.dot2 && '#48c7b1'}}></span>
            <span className="dot dot2" style={{ backgroundColor: dots.dot1 && '#48c7b1'}}></span>
            </div>
        </div>
    )
}

export default Button
