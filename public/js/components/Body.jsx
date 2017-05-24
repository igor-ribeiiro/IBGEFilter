/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import _Body from './_Components/_Body.jsx';
import ResultsTable from './ResultsTable.jsx';

class Body extends _Body {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div>
                    Selecione o filtro: &nbsp;
                    <select className="custom-select" onChange={this.changeFiltersOptions} name="filter">
                        <option defaultChecked value="populacao">População</option>
                        <option value="familias">Famílias</option>
                        <option value="fecundidade">Fecundidade</option>
                        <option value="nupicialidade">Nupicialidade</option>
                        <option value="rendimento">Rendimento</option>
                    </select>

                    {this.filterOptionsFor(this.state.filter)}
                </div>

                <button className="btn" onClick={this.handleSubmitClick}> Consultar </button>
                <ResultsTable ShowTable = {this.state.ShowTable} table={this.state.results}/>
            </div>
        )

    }
}


export default Body;