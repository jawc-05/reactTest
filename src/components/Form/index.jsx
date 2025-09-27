import { useState, useEffect, use } from "react";

const Form= () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

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

    /*const renderizaResultado = () => {
        const soma = (materiaA) + (materiaB) + (materiaC);
        const media = soma / 3;
        if (media >= 7) {
            return(
            <p>Olá! {name} você foi aprovado com média {media}</p>
            )
        } else {
            return (
            <p>Olá! {name} você foi reprovado com média {media}</p>
        )
        }
    }*/


    return(
        <form>
            <input type="number" placeholder="Sua altura: " onChange={e => changeHeight(e)}/> <br />
            <input type="number"  placeholder="Seu peso: " onChange={e => changeWeight}/>
            {/*renderizaResultado()*/}
        </form>
    )
}

export default Form;