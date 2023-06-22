import {useState} from 'react'
import Fruit from './Fruit'
import FruitForm from './FruitForm'

const RenderList = () => {
    const [fruits, setFruits] = useState([])
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
    <p className="message"></p>
    <ul>
        {fruits.map((fruit)=> (
            <Fruit fruit={fruit} handleDelete={handleDelete} key={fruit.id}/>    
        ))}
    </ul>
    </>
  )
}

export default RenderList