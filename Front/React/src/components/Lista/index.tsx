import React from "react";
import './style.scss';

function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'typescript',
        tempo: '01:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '03:00:00'
    }]
    return(
        <aside className= "listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item,index) => (
                    
                ))}
            </ul>
        </aside>
    )
}

export default Lista;