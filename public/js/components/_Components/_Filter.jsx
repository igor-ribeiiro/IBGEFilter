/**
 * Created by luiscm on 24/05/17.
 */

import React from 'react';
import getOptions from './../../requests/GetOptions.jsx'


class _Filter extends React.Component {
    constructor(props) {
        super(props);
        this.changeFiltersOptions = this.changeFiltersOptions.bind(this);
        this.changeGenderOptions = this.changeGenderOptions.bind(this);
        this.changeAgeOptions = this.changeAgeOptions.bind(this);
        this.changeValueOptions = this.changeValueOptions.bind(this);
        this.filterOptionsFor = this.filterOptionsFor.bind(this);


        this.options = getOptions();
        this.state = ({
            filter: 'populacao',
            value: '',
            genero: 'feminino',
            idade: '0 a 4 anos'
        })
    }

    changeFiltersOptions(e) {
        const newFilter = e.target.value;
        if(newFilter === 'populacao') {
            this.setState({
                filter: newFilter,
                genero: 'feminino',
                idade: '0 a 4 anos'
            });
        }
        else {
            this.setState({
                filter: newFilter,
                value: this.options[newFilter][0]
            })
        }

    }
    changeGenderOptions(e) {
        this.setState({
            genero: e.target.value
        })
    }
    changeAgeOptions(e) {
        this.setState({
            idade: e.target.value
        })
    }
    changeValueOptions(e) {
        this.setState({
            value: e.target.value
        })
    }

    filterOptionsFor(filter) {
        let options = this.options[filter];

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
                    <select className="custom-select" onChange={this.changeValueOptions} name="valueOptions">
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
                        <select className="custom-select" onChange={this.changeGenderOptions} name="genero">
                            {genderList}
                        </select>
                    </div>

                    Selecione a faixa etária:&nbsp;
                    <select className="custom-select" onChange={this.changeAgeOptions} name="idade">
                        {faixaList}
                    </select>
                </div>
            )
        }
    }
}

export default _Filter;

