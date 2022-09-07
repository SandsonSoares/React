
function Eventos({num}){
    function meuevento(){
        console.log('Opa, acionou o número ' + num)
    }

    return(
        <div>
            <p>Clique aqui para disparar um evento</p>
            <button onClick ={meuevento} >Ativar!</button>
        </div>
    )
}
export default Eventos