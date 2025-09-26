import { useState, useEffect, use } from "react";

const Form= () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("O componente foi montado")

        return () => {
            console.log("O componente foi desmontado")
        }
    }, []);
    
    useEffect(() => {
        console.log("O nome foi alterado")
    }, [name]);

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA )
    }, [materiaA, materiaB, materiaC]);

    const changeName = (evento) => {

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
            <input type="text" placeholder="Seu nome: " onChange={e => changeName(e)}/>
            <input type="number"  placeholder="Nota máteria A" onChange= {evento => setMateriaA(parseFloat(evento.target.value))} />
            <input type="number"  placeholder="Nota máteria B" onChange= {evento => setMateriaB(parseFloat(evento.target.value))}/>
            <input type="number"  placeholder="Nota máteria C" onChange= {evento => setMateriaC(parseFloat(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Form;