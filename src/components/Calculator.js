import { useEffect } from 'react'

const Calculator = ( { bill, setBill, tip, setTip, people, setPeople, setTipamount, setTotalpp, tipamount, totalpp } ) => {
    
    
    useEffect(() => {
        let calculatedTipPP = ((bill * (tip / 100)/ people))
        let calculatedTotalPP = (((tip / 100) + 1) * bill) / people
        setTipamount(calculatedTipPP.toFixed(2));
        setTotalpp(calculatedTotalPP.toFixed(2));
    }, [bill, tip, people, setTipamount, setTotalpp]);

    const handleClick = () => {
        setBill('')
        setPeople('')
        setTip('')
        setTipamount(0)
        setTotalpp(0)
    }
    return (
        <div className="calculator">
            <div className="calculator-info">
                <div className="tip-amount">
                    <span>Tip Amount </span>
                    <span id="tipAmountLabel">€ { bill && tip && people && tipamount}</span> 
                    <span>/ person</span> 
                </div>
                <div>
                    <span>Total </span>
                    <span id="totalLabel">€ { bill && tip && people && totalpp }</span>
                    <span>/ person</span>
                </div>
            </div>
            <button onClick={handleClick} type="button" className="btn-reset">Reset</button>
        </div>
    )
}

export default Calculator
