const Calculator = () => {
    return (
        <div className="calculator">
            <div className="calculator-info">
                <div>
                <span>Tip Amount</span>
                <span id="tipAmountLabel">€0</span>
                <span>/ person</span>
                </div>
                <div>
                <span>Total</span>
                <span id="totalLabel">€0</span>
                <span>/ person</span>
                </div>
                </div>
                 <button type="button" class="btn-reset">Reset</button>
            </div>

    )
}

export default Calculator
