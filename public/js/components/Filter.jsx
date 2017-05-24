/**
 * Created by luiscm on 24/05/17.
 */

import React from 'react';
import _Filter from './_Components/_Filter.jsx';

class Filter extends _Filter {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state);
        return (
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
        );
    }
}

export default Filter;
