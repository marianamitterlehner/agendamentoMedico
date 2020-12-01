import React from 'react';
import { Link } from 'react-router-dom';


function List() {

    return (
        <div className="page-primary">
            <h1>Lista</h1>
            <div className="conteiner-list">
                <table>
                    <tr className="list">
                        <td> Nome Do Paciente</td>
                        <td>Nome do Médico</td>
                        <td>Especialidade</td>
                        <td>Data Consulta</td>
                        <td>Horário da consulta</td>
                    </tr>
                    <tr>
                        <td> Nome Do Paciente</td>
                        <td>Nome do Médico</td>
                        <td>Especialidade</td>
                        <td>Data Consulta</td>
                        <td>Horário da consulta</td>
                    </tr>
                </table>

                
            </div>
            <Link to="/">Voltar ao Login</Link>
        </div>
    )
}

export default List;