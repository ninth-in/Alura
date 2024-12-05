import React from 'react'
import './style.scss'

class Button extends React.Component <{ texto: string }> {
    render(): React.ReactNode {
        return(
            <button className='botao' >
                {this.props.texto}
            </button>
        )
    }
}

export default Button;