/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import DropDown from './DropDown.jsx";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idade:
        }
    }

    handleSubmitClick() {

    }

    render() {
        return (
            <div>
                <DropDown texto="Selecione o gênero" filtro="gênero"/>
                <DropDown texto="Selecione a idade" filtro="idade"/>
                <DropDown texto="Selecione a classe social" filtro="classe social"/>

                <button className="btn" onClick={()=>this.handleSubmitClick()}> Consultar </button>
            </div>
        )

    }
}

export default Body;