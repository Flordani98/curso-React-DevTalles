import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

    //manera tradicional de crear una funcion:
    // function handleAdd() { console.log('+1')}

    const [ counter, setCounter ] = useState( value ); //valor inicial del hook

    //cuando cambia el estado, el componente se vuelve a renderizar
    
    const handleAdd = () =>{
        setCounter( counter + 1);
        //otra manera de obtener el valor actual del counter:
        // setCounter( (c) => c + 1)
    }

    const handleSubstract = () =>{
        setCounter( counter -1);
    }

    const handleReset = () =>{
        setCounter( value );
    }
    
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd } >
            {/* si la función que quiero invocar solo necesita lo que me retorna el onClick en el mismo orden no hace falta especificarlo
            de esta manera: onClick={ (event) => handleAdd(event)} simplemente dejo la referencia de la función: onClick={handleAdd} y se pasan
            automaticamente los argumentos en el orden que son enviados*/}
                +1
            </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 1
}

//Los hooks son funciones