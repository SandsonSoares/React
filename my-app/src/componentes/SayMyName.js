import styles from './Frase.module.css'

function SayMyName(props){
    return(
        <div>
            <h2>Olá, {props.nome}! Seja Bem vindo(a).</h2>
            <div className = {styles.linha}>
                <p className = {styles.corpo} >Uau! você tem {props.idade} anos ? Nem parece! Parabêns</p>
            </div>
        </div>
    )
}

export default SayMyName