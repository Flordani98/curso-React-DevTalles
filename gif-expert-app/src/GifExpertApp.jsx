import { useState } from "react";
import {AddCategory} from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Tokio' ]);

  const onAddCategory = () => {

    // console.log("valorant")
      // setCategories( categories.push("Japann") ); //hay que evitar usar el push ya que al utilizarlo estariamos mutando el objeto
      //y react trata de evitar las mutaciones, trata de NO mutar el estado, entonces para este caso debemos crear un nuevo arreglo

      //destructuración de las categorias
      setCategories( [...categories, "Japan"]) //con el operador spread realizo una copia del arreglo, y le agreglo el nuevo elemento
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      {/* input */}
        <AddCategory/>
      {/* listado de gif */}
      <button onClick={ onAddCategory } >Agregar</button>
      <ol>
          { categories.map( category => {
              return <li key={ category }> { category } </li>
          })
           }
      </ol>
            {/* gif item */}
    </>
  )
}

