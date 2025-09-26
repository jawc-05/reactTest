import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({nameUser}) => {
    const[repos, setRepos] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${nameUser}/repos`)
        .then(response => response.json())
        .then(responseJson => {
            setTimeout(() => {
                setIsLoading(false);
                setRepos(responseJson);
            }, 3000);
        })
    }, [nameUser]);
    
    return (
        <div className="container">
            {isLoading ? (
                <h1>Carregando...</h1>
            ):(
                <ul className={styles.list}>
                    {repos.map(({id, name, language, html_url})=>(
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listItemName} >
                                <b>Nome: </b>
                                {name} 
                            </div>
                            <div className={styles.listItemLanguage} >
                                <b>Linguagem: </b> 
                                {language}
                            </div>
                            <a className={styles.listItemLink} target="_blank"  href={html_url}>Visitar no github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;