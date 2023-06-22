import { useState } from "react"

const FruitForm = ({handleAdd}) => {

    const [fruitInput, setFruitInput] = useState("")

    const handleSubmit = (e) => {
        document.querySelector('.message').textContent = ""
        e.preventDefault()
        if(fruitInput == ''){
          document.querySelector('.message').textContent = "Enter a fruit..."
        } else {
          const madate = new Date().getTime()
          const fruitToAdd = {id:madate, nom:fruitInput}
          handleAdd(fruitToAdd)
          setFruitInput("")
          console.log('fruit added...', madate);
        }
    }
    const handleChange = (e) => {
        setFruitInput(e.target.value)
        console.log(e.target.value);
    }
  return (
    <form action="submit">
        <input type="text" name="fruit" id="fruit" placeholder='Add a fruit' onChange={handleChange} value={fruitInput}/>
        <button onClick={handleSubmit}>Add Fruit</button>
    </form>
  )
}
export default FruitForm