import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault() // Ajuda a comcluir oque precisa fazer com o componente
        console.log(`User: ${name} Senha: ${Password}`)

        console.log("Cadastrou o usuário")
    }

    const [name, setName] = useState() 
    const [Password, setPassword] = useState()
    return (    
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="senha" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form