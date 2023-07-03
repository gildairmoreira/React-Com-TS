import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";

jest.mock('../state/hook/useListaDeParticipantes', () =>
{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe("quando não existem participantes suficientes", () =>
{
    test("a brincadeira não pode ser iniciada", () =>
    {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe("quando existem participantes suficientes", () =>
{
    test("a brincadeira pode ser iniciada", () =>
    {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
})