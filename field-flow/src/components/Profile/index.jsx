import styles from './Profile.module.css';

const Profile = ({ nameUser, brand }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nameUser}.png`}/>
            <h1 className={styles.name}>
                {nameUser}
            </h1>
            <h2 className={styles.brand}>{brand}</h2>
        </header>
    )
}

export default Profile;