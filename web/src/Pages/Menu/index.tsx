import React from 'react';
import {Link} from 'react-router-dom';

function Scheduling() {

    return (
        <div className="page-primary">
            <h1>Agendamento</h1>
            <div className="conteiner">
                <Link to="/list">Lista</Link>
                <Link to="/scheduling">Agendamenttos</Link>
            </div>
        </div>
    )
}

export default Scheduling;