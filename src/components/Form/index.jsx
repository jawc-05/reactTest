import { useState, useEffect, use } from "react";

const Form= () => {
    const [height, setHeight] = useState(null); 
    const [weight, setWeight] = useState(null); 
    const [imc, setImc] = useState(null);

    useEffect(() => {
        if (weight > 0 && height > 0) {
            const calcIMC = weight / (height * height);
            setImc(calcIMC.toFixed(2));
        } else {
            setImc(null);
        }
    }, [weight, height]);

    const changeHeight = (evento) => {
        setHeight(parseFloat(evento.target.value))
        };

    const changeWeight = (evento) => {
        setWeight(parseFloat(evento.target.value))
    };

    const renderizaResultado = () => {
        if (imc == null){
            return <p>Preencha sua altura (m) e peso (kg) para calcular o IMC.</p>
        }


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
            <label>Altura (m): </label>
            <input type="number" step="0.01" placeholder="Ex: 1.85" onChange={changeHeight}/>

            <label>Peso (kg): </label>
            <input type="number" step="0.1" placeholder="Ex: 80" onChange={changeWeight}/>
            {renderizaResultado()}
        </form>
    )
}

export default Form;