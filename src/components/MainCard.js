import { useState } from 'react'
import Bill from './Bill'
import Calculator from './Calculator'

const MainCard = ( ) => {
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState('')
    let [tipamount, setTipamount] = useState(0)
    let [totalpp, setTotalpp] = useState(0)

    return (
        <div className="main-card">
            <Bill bill={bill} setBill={setBill} tip={tip} setTip={setTip} people={people} setPeople={setPeople}/>
            <Calculator bill={bill} setBill={setBill} tip={tip} setTip={setTip} tipamount={tipamount} setTipamount={setTipamount} totalpp={totalpp} setTotalpp={setTotalpp} people={people} setPeople={setPeople} />
        </div>
    )
}

export default MainCard
