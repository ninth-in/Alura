import { Itarefa } from "./tarefas"

export interface Props extends Itarefa{
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
  }