const Fruit = ({fruit, handleDelete}) => {
  return (
    <li key={fruit.id}>{fruit.nom} <button onClick={() => handleDelete(fruit.id)}>Delete</button></li>
  )
}

export default Fruit