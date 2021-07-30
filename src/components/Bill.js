const Bill = ( { total, setTotal, people, setPeople } ) => {
    return (
        <div className="bill-container">
            <form>
                <div className="bill">
                    <label htmlFor="Bill">Bill</label>
                    <input name="Bill" id="Bill" value={total} onChange={(e) => setTotal(e.target.value)}/>
                </div>
                
                <div className="tip">
                    <h5>Select Tip %</h5>
                    <div className="options">
                        <button>5%</button>
                        <button>10%</button>
                        <button>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <input name="CustomTip" id="CustomTip" />
                    </div>
                </div>
                <div className="people">
                    <label htmlFor="">Number of People</label>
                    <input name="PeopleCount" id="People" value={people} onChange={(e) => setPeople(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default Bill
