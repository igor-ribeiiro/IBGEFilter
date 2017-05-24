/**
 * Created by luiscm on 24/05/17.
 */

import React from 'react';

class _Filter extends React.Component {
    constructor(props) {
        super(props);

        this.filterOptions = this.filterOptionsFor('populacao');

        this._options = this.getOptions();
    }

    changeFiltersOptions(item) {
        const newFilter = item.value;

        this.filterOptions = this.filterOptionsFor(newFilter);
    }

    filterOptionsFor(filter) {
        let options = this._options[filter];


        if (filter !== 'populacao') {
            let optionsList = [];

            for (let option in options) {
                if (options.hasOwnProperty(option)) {
                    optionsList.push(
                        <option value={option}>{option}</option>
                    )
                }
            }

            return (
                <div>
                    <a>Selecione a opção desejada: </a>
                    {optionsList}
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

    getOptions() {
        let options = {};

        /*
         * TODO: Make request for /filter to get options
         */

        return options;
    }
}

