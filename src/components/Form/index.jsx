import { useState, useEffect, use } from "react";

const Form= () => {
    const [height, setHeight] = useState(null); 
    const [weight, setWeight] = useState(null); 
    const [imc, setImc] = useState(null);

    useEffect(() => {
        console.log("O componente foi montado")

        return () => {
            console.log("O componente foi desmontado")
        }
    }, []);

    const changeHeight = (evento) => {

        setHeight(lastState => {
            console.log(lastState)

            return evento.target.value
        })

        setWeight(lastState => {
            console.log(lastState)

            return evento.target.value
                })

    }

    const renderizaResultado = () => {
        const calc = (height) / (weight);

        if (calc < 18.5) {
            return <p>Abaixo do peso</p>
        } if (calc >= 18.5 && calc < 24.9) {
            return <p>Peso normal</p>
        } if (calc >= 25 && calc < 29.9) {
            return <p>Sobrepeso</p>
        } if (calc >= 30 && calc < 34.9) {
            return <p>Obesidade grau 1</p>
        } if (calc >= 35 && calc < 39.9) {
            return <p>Obesidade grau 2</p>
        } if (calc >= 40) {
            return <p>Obesidade grau 3</p>
        }
    }


    return(
        <form>
            <input type="number" placeholder="Sua altura: " onChange={e => changeHeight(e)}/> <br />
            <input type="number"  placeholder="Seu peso: " onChange={e => changeWeight}/>
            {renderizaResultado()}
        </form>
    )
}

export default Form;