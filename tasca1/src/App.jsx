import { useState } from 'react'
import Exercici1 from './components/tasca1/exercici1'
import Exercici2 from './components/tasca1/exercici2'
import Exercici3 from './components/tasca1/exercici3'
import Exercici4 from './components/tasca2/exercici4'
import Exercici5 from './components/tasca2/exercici5'
import Menu from './components/menu'


function App() {

  const [tascaSeleccionada, setTascaSeleccionada] = useState("tasca 1")

  function getTascaComponent(){
    switch (tascaSeleccionada) {
      case "tasca 1":
        return Exercici1
      case "tasca 2":
        return Exercici2
      case "tasca 3":
        return Exercici3
      case "tasca 4":
        return Exercici4
      case "tasca 5":
        return Exercici5
      default: return null

    }
  }
  const Component = getTascaComponent();

  return (
    <div>
      <Menu canviarTasca={setTascaSeleccionada} />
      
      <Component />
    </div>
  )
}

export default App