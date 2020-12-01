import React from 'react';
import {Link} from 'react-router-dom';

function Scheduling() {

    return (
        <div className="page-primary">
            <h1>Agendamento</h1>
            <div className="conteiner">
                <form >
                    <input type="text" placeholder="Nome do Paciente"/>
                    <input type="text" placeholder="Nome do Médico"/>
                    <input type="text" placeholder="Especialidade"/>
                    <input type="text" placeholder="Data Consulta"/>
                    <input type="text" placeholder="Horário da consulta"/>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">Voltar ao Menu</Link>
            </div>
        </div>
    )
}

export default Scheduling;