/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import axios from 'axios';
import getOptions from '../../requests/GetOptions.jsx';


class _Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowTable: false,
            filter: {
                filter: 'populacao',
                value: '',
                genero: 'feminino',
                idade: '0 a 4 anos'
            }
        };

        this.results = {};

        this.options = getOptions();

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.changeFiltersOptions = this.changeFiltersOptions.bind(this);
        this.changeGenderOptions = this.changeGenderOptions.bind(this);
        this.changeAgeOptions = this.changeAgeOptions.bind(this);
        this.changeValueOptions = this.changeValueOptions.bind(this);
        this.filterOptionsFor = this.filterOptionsFor.bind(this);
    }

    filterOptionsFor(state) {
        let filter = state.filter;
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

    handleSubmitClick(e) {
        e.preventDefault;

        axios.post('/filter', this.state.filter)
            .then((res) => {
                this.setState({
                    ShowTable: true,
                    filter: this.state.filter,
                    results: res.data
                })
            })
    }

    changeFiltersOptions(e) {
        const newFilter = e.target.value;
        if(newFilter === 'populacao') {
            this.setState({
                ShowTable: this.state.ShowTable,
                filter: {
                    filter: newFilter,
                    genero: 'feminino',
                    idade: '0 a 4 anos'
                }
            });
        }
        else {
            this.setState({
                ShowTable: this.state.ShowTable,
                filter: {
                    filter: newFilter,
                    value: this.options[newFilter][0]
                }
            })
        }
    }

    changeGenderOptions(e) {
        this.setState({
            ShowTable: this.state.ShowTable,
            filter: {
                filter: this.state.filter.filter,
                genero: e.target.value,
                idade: this.state.filter.idade
            }
        })
    }

    changeAgeOptions(e) {
        this.setState({
            ShowTable: this.state.ShowTable,
            filter: {
                filter: this.state.filter.filter,
                genero: this.state.filter.genero,
                idade: e.target.value
            }
        })
    }

    changeValueOptions(e) {
        this.setState({
            ShowTable: this.state.ShowTable,
            filter: {
                filter: this.state.filter.filter,
                value: e.target.value
            }
        })
    }
}

export default _Body;