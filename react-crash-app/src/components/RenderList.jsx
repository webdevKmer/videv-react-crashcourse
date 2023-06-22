import {useState} from 'react'
import Fruit from './Fruit'
import FruitForm from './FruitForm'

const RenderList = () => {
    const [fruits, setFruits] = useState([
        {id: 2, nom: 'patate'},
        {id: 1, nom: 'banane'},
        {id: 3, nom: 'mangue'},
        {id: 4, nom: 'goyave'},
    ])
    const handleDelete = (id) => {
        let newFruits = [...fruits]
        setFruits(newFruits.filter((fruit) => fruit.id != id))
    }
    const handleAdd = (newFruit) => {
        setFruits([...fruits, newFruit])
    }
  return (
    <>
    <FruitForm handleAdd={handleAdd}/>
    <ul>
        {fruits.map((fruit)=> (
            <Fruit fruit={fruit} handleDelete={handleDelete} key={fruit.id}/>    
        ))}
    </ul>
    </>
  )
}

export default RenderList