import { useNavigate } from "react-router-dom"
import { listaParticipantesState } from "../state/atom"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

const Rodape = () =>
{
    const participantes = useListaDeParticipantes()

    //const navegarPara = useNavigate()

    return (<footer>
        <button disabled={participantes.length < 3}>Iniciar Brincadeira</button>
    </footer>)
}

export default Rodape