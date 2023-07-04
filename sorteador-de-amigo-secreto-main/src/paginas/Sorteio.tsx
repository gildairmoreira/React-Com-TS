import { useState } from "react"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

const Sorteio = () =>
{

    const participantes = useListaDeParticipantes()
    const [ participanteDaVez, setParticipantedaVez ] = useState('')
    const sortear = (evento: React.FormEvent<HTMLFormElement>) =>
    {
        evento.preventDefault()

    }

    return (<section>
        <form onSubmit={sortear}>
            <select
                required
                name="participanteDaVez"
                id="participanteDaVez"
                placeholder="Selecione o seu nome"
                value={participanteDaVez}
                onChange={evento => setParticipantedaVez(evento.target.value)}
            >
                {participantes.map(participante => <option key={participante}>{participante}</option>)}
            </select>
            <button>Sortear</button>
        </form>
    </section>)
}

export default Sorteio