
import CharacterList from "./components/CharacterList";

import './components/app.scss'

function App(){
  return(
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4 title">Rick & Morty</h1>
      <CharacterList />
    </div>
  )
}

export default App;