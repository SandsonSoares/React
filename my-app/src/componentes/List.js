import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca = "Iphone" ano_lancamento = {2021} 
                /*Quando for passar uma propriedade que é um number, precisa passar entre chaves*/
                />
                <Item marca = "Sony" ano_lancamento= {2022} />
                <Item marca="Cup of World"  ano_lancamento = {2002}/>
                <Item/>
            </ul>
        </>
    )
}

export default List