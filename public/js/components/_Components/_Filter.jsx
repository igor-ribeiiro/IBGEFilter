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

        this.state = ({
            filter: 'populacao',
            options: getOptions()
        })
    }

    changeFiltersOptions(e) {
        const newFilter = e.target.value;
        this.setState({
            filter: newFilter
        })
    }

    filterOptionsFor(filter) {
        let options = this.state.options[filter];

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
                    Selecione a opção desejada: &nbsp;
                    <select>
                        {optionsList}
                    </select>
                </div>
            )
        } else {
            let generos = options.genero;
            let faixas = options.faixa;

            let genderList = [];
            let faixaList = [];

            for (let i in generos) {
                if (generos.hasOwnProperty(i)) {
                    genderList.push(
                        <option value={generos[i]} key={generos[i]}>{generos[i]}</option>
                    )
                }
            }

            for (let i in faixas) {
                if (faixas.hasOwnProperty(i)) {
                    faixaList.push(
                        <option value={faixas[i]} key={faixas[i]}>{faixas[i]}</option>
                    )
                }
            }

            return (
                <div>
                    <div style={{display: 'block'}}>
                        Selecione o gênero: &nbsp;
                        <select>
                            {genderList}
                        </select>
                    </div>

                    Selecione a faixa etária:&nbsp;
                    <select>
                        {faixaList}
                    </select>
                </div>
            )
        }
    }
}

export default _Filter;

