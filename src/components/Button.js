import { useEffect, useRef } from 'react'
import Home from './Home';
import MainCard from './MainCard';

const Button = ( { text } ) => {
    const dot = useRef(true);

    useEffect(() => {
        dot.current = !dot.current
    })

    return (
        <div className="dotted-button">
            <button className="btn">
                {text}
            </button>
            <div className="dots">
            <span className="dot dot1" style={{ backgroundColor: dot.current && '#48c7b1'}}></span>
            <span className="dot dot2" style={{ backgroundColor: !dot.current && '#48c7b1'}}></span>
            </div>
        </div>
    )
}

export default Button
