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

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA )
    }, [materiaA, materiaB, materiaC]);

    const changeHeight = (evento) => {

        setName(lastState => {
            console.log(lastState)

            return evento.target.value
        })

    }

    const renderizaResultado = () => {
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
    }


    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => <li key={item} >{item}</li>)}
            </ul>
            <input type="number" placeholder="Sua altura: " onChange={e => changeHeight(e)}/>
            <input type="number"  placeholder="Nota máteria A" onChange= {evento => setMateriaA(parseFloat(evento.target.value))} />
            <input type="number"  placeholder="Nota máteria B" onChange= {evento => setMateriaB(parseFloat(evento.target.value))}/>
            <input type="number"  placeholder="Nota máteria C" onChange= {evento => setMateriaC(parseFloat(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Form;