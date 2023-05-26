const Formulario = () =>
{
    return (
        <form>
            <input type="text" placeholder="insira os nomes dos participante" />
            <button disabled={true}>Adicionar</button>
        </form>
    )
}

export default Formulario