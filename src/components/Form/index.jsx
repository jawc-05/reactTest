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


        const numericImc = parseFloat(imc);
        let classificacao = '';

        switch (true) {
            case (numericImc < 18.5):
                classificacao = 'Abaixo do peso';
                break;
            case (numericImc >= 18.5 && numericImc < 24.9):
                classificacao = 'Peso normal';
                break;
            case (numericImc >= 25 && numericImc < 29.9):
                classificacao = 'Sobrepeso';
                break;
            case (numericImc >= 30 && numericImc < 34.9):
                classificacao = 'Obesidade grau 1';
                break;
            case (numericImc >= 35 && numericImc < 39.9):
                classificacao = 'Obesidade grau 2 (Severa)';
                break;
            case (numericImc >= 40):
                classificacao = 'Obesidade grau 3 (Mórbida)';
                break;
            default:
                return <p>Valor de IMC inválido.</p>;
        }

        return (
            <p>
                Seu IMC: é de {imc} com base na tabela você está em {classificacao}
            </p>
        );
    }


    return(
        <form>
            <div className="form-item">
                <label >Altura (m): </label>
                <input type="number" step="0.01" placeholder="Ex: 1.85" onChange={changeHeight}/>
            </div>
                

            <div className="form-item">
                <label>Peso (kg): </label>
                <input type="number" step="0.1" placeholder="Ex: 80" onChange={changeWeight}/>
            </div>
            <div>
                {renderizaResultado()}
            </div>
        </form>
    )
}

export default Form;