import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Box, Container, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import http from '../../../http'
import ITag from '../../../interfaces/ITag'

const FormularioPrato = () =>
{
    const [ nomePrato, setNomePrato ] = useState('')
    const [ descricao, setDescricao ] = useState('')
    const [ tag, setTag ] = useState('')

    const [ tags, setTags ] = useState<ITag[]>([])

    useEffect(() =>
    {
        http.get<{ tags: ITag[] }>('tags/')
            .then(resposta => setTags(resposta.data.tags))
    }, [])


    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) =>
    {
        evento.preventDefault()
    }

    return (
        <Box>
            <Container maxWidth="lg" sx={{ mt: 1 }}>
                <Paper sx={{ padding: 2 }}>
                    {/* Conteudo da Pagina */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", flexGrow: 1 }}>
                        <Typography component="h1" variant='h6'>Formulário de Pratos</Typography>
                        <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                            <TextField
                                value={nomePrato}
                                onChange={evento => setNomePrato(evento.target.value)}
                                id="standard-basic"
                                label="Nome do Prato"
                                variant="standard"
                                fullWidth
                                required
                                margin='dense' />
                            <TextField
                                value={descricao}
                                onChange={evento => setDescricao(evento.target.value)}
                                id="standard-basic"
                                label="Descrição do Prato"
                                variant="standard"
                                fullWidth
                                required
                                margin='dense' />

                            <FormControl margin='dense' fullWidth>
                                <InputLabel id="select-tag">Tag</InputLabel>
                                <Select labelId='select-tag' value={tag} onChange={evento => setTag(evento.target.value)}>
                                    {tags.map(tag => <MenuItem key={tag.id} value={tag.id}>
                                        {tag.value}
                                    </MenuItem>)}
                                </Select>
                            </FormControl>

                            <Button sx={{ marginTop: 1 }} type='submit' fullWidth variant="outlined">Salvar</Button>
                        </Box>
                    </Box>

                </Paper>
            </Container>
        </Box >
    )
}

export default FormularioPrato