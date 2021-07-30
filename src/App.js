import Header from './components/Header'
import MainCard from './components/MainCard';
import { useState } from 'react'

function App() {

  const [total, setTotal] = useState('');
  const [people, setPeople] = useState('')

  return (
    <div className="app-container">
        <Header />
        <MainCard total={total} setTotal={setTotal} people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
