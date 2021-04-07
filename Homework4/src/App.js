import './App.css'
import Search from './components/Search'
import Dog from './components/Dog'
import './CSS/site.css'
import { useState } from 'react'

function App() {
  const [dog, setDog] = useState('')

  return (
    <div className="App">
      <header className="header">
        <h3>Find your favorite dog breed</h3>
        <Search onSubmit={setDog} />
        {dog && <Dog dog={dog} />}
      </header>
    </div>
  )
}

export default App
