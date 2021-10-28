const Bill = ({ bill, setBill, tip, setTip, people, setPeople }) => {
    const addFive = () => {
        setBill(+bill + +5)
    }
    const addTen = () => {
        setBill(+bill + +10)
    }
    return (
        <div className="form">
            <div className="bill">
                <label className="form-label" htmlFor="Bill">Bill Amount (€)</label>
                <input name="Bill" type="number" id="Bill" value={bill} onChange={(e) => setBill(e.target.value)} />
                <button onClick={addFive}>+5</button>
                <button onClick={addTen}>+10</button>
            </div>

            <div className="tip">
                <p className="form-label">Select Tip %</p>
                <div className="options">
                    <button onClick={() => setTip(5)}>5</button>
                    <button onClick={() => setTip(10)}>10</button>
                    <button onClick={() => setTip(15)}>15</button>
                    <button onClick={() => setTip(25)}>25</button>
                    <button onClick={() => setTip(50)}>50</button>
                    <input name="CustomTip" id="CustomTip" placeholder="custom" onChange={(e) => setTip(e.target.value)} />
                </div>
            </div>
            <div className="people">
                <label className="form-label" htmlFor="">Number of People</label>
                <input name="PeopleCount" id="People" value={people} onChange={(e) => setPeople(e.target.value)} />
            </div>
        </div>

    )
}

export default Bill
