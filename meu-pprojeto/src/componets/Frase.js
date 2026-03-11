import styles from './Frase.Module.CSS'

function Frase(){
    
    return(
        <div>
            <p className={styles.frseContent}>Este é um componente com uma frase!</p>
        </div>
    );

};

export default Frase;