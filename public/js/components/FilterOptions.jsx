/**
 * Created by igor on 23/05/17.
 */

import React from 'react';

class FilterOptions extends React.Component {
    constructor() {
        super();
    }
    getFilterOptions() {
        return (
            <ul>
                <li>Idade</li>
                <li>Sexo</li>
                <li>Nacionalidade</li>
                <li>Renda</li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.getFilterOptions()}
            </div>
        )
    }
}

export default FilterOptions;