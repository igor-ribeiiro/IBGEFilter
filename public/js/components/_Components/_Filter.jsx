/**
 * Created by luiscm on 24/05/17.
 */

import React from 'react';
import getOptions from './../../requests/GetOptions.jsx'


class _Filter extends React.Component {
    constructor(props) {
        super(props);
        this.changeFiltersOptions = this.changeFiltersOptions.bind(this);
        this.filterOptionsFor = this.filterOptionsFor.bind(this);

        this.options = getOptions();
        this.state = ({
            filter: 'populacao'
        })
    }

    changeFiltersOptions(e) {
        const newFilter = e.target.value;

        this.setState({
            filter: newFilter
        })
    }

    filterOptionsFor(filter) {
        let options = this.options[filter];
        if(options !== undefined) {
            if (filter !== 'populacao') {
                let optionsList = [];

                for (let i in options) {
                    if (options.hasOwnProperty(i)) {
                        optionsList.push(
                            <option value={options[i]} key={options[i]}>{options[i]}</option>
                        )
                    }
                }

                return (
                    <div>
                        Selecione a opção desejada:
                        <select>
                            {optionsList}
                        </select>
                    </div>
                )
            } else {
                let generos = options['genero'];
                let faixas = options['faixa'];

                let genderList = [];
                let faixaList = [];

                for (let genero in generos) {
                    if (generos.hasOwnProperty(genero)) {
                        genderList.push(
                            <option value={genero}>{genero}</option>
                        )
                    }
                }

                for (let faixa in faixas) {
                    if (faixas.hasOwnProperty(faixa)) {
                        faixaList.push(
                            <option value={faixa}>{faixa}</option>
                        )
                    }
                }

                return (
                    <div>
                        <a>Selecione o gênero:</a>
                        {genderList}

                        <a>Selecione a faixa etária:</a>
                        {faixaList}
                    </div>
                )
            }
        }
    }
}

export default _Filter;

