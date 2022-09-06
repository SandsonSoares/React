function Pessoa({nome, idade, profissao, imagem}){
    return(
        <div>
            <img scr={imagem} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p> 
            <p>Profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa