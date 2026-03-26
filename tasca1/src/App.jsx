import { useState } from 'react'
import Exercici1 from './components/tasca1/exercici1'
import Exercici2 from './components/tasca1/exercici2'
import Exercici3 from './components/tasca1/exercici3'
import Exercici4 from './components/tasca2/exercici4'
import Exercici5 from './components/tasca2/exercici5'
import Menu from './components/menu'
import Exercici6 from './components/tasca3/exercici6'


function App() {

  const [tascaSeleccionada, setTascaSeleccionada] = useState("tasca 1")

  function getTascaComponent(){
    switch (tascaSeleccionada) {
      case "Tasca 1":
        return Exercici1
      case "Tasca 2":
        return Exercici2
      case "Tasca 3":
        return Exercici3
      case "Tasca 4":
        return Exercici4
      case "Tasca 5":
        return Exercici5
      case "Tasca 6":
        return Exercici6
      default: return null

    }
  }
  const Component = getTascaComponent();

  return (
    <div>
      <Menu canviarTasca={setTascaSeleccionada} />
      
      <div className="contingut">
        {getTascaComponent()} 
      </div>
      
      {Component && <Component />}
    </div>
  )
}

export default App