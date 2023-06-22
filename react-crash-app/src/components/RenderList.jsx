import {useState} from 'react'

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
  return (
    <ul>
        {fruits.map((fruit)=> (
            <li key={fruit.id}>{fruit.nom} <button onClick={() => handleDelete(fruit.id)}>Delete</button></li>
        ))}
    </ul>
  )
}

export default RenderList