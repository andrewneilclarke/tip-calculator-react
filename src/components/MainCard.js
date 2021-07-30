import Bill from './Bill'
import Calculator from './Calculator'

const MainCard = ( { total, setTotal, people, setPeople } ) => {

    return (
        <div className="main-card">
            <Bill total={total} setTotal={setTotal} people={people} setPeople={setPeople}/>
            <Calculator />
        </div>
    )
}

export default MainCard
