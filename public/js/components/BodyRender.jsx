/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';
import Body from './Body.jsx';
import ResultsTable from './ResultsTable.jsx'

class BodyRender extends Body {
    constructor(props) {
        super(props);
    }

    getOptions(itens) {
        let options =[];
        for(let i in itens) {
            if(itens.hasOwnProperty(i)) {
                /*
                 Fazer a lógica da request
                 */
                let aux = [];
                for(let j = 0; j <= i; j ++) {
                    aux.push(j.toString());
                }
                let current = [];

                for(let j in aux) {
                    if(aux.hasOwnProperty(j)) {
                        current.push(
                            <option defaultValue={aux[j]} key={aux[j]}>
                                {aux[j]}
                            </option>
                        );
                    }
                }
                options.push(
                    <select className="custom-select" key={itens[i].filter}
                    onChange = {this.handleInputChange} name={itens[i].filter}>
                        <option defaultChecked>{itens[i].filter}</option>
                        {current}
                    </select>
                );
            }
        }
        return options;
    }

    getList() {
        const itens = [{
            text: 'Selecione o gênero',
            filter: 'genero'
        }, {
            text: 'Selecione a faixa etária',
            filter: 'idade'
        }, {
            text: 'Selecione a família',
            filter: 'familia'
        }, {
            text: "Selecione a fecundidade",
            filter: 'fecundidade'
        }, {
            text: "Selecione a nupicialidade",
            filter: "nupicialidade"
        }, {
            text: "Selecione o rendimento",
            filter: "rendimento"
        }];

        const spamStyle = {marginRight: '10px'};
        let list = [];
        const options = this.getOptions(itens);

        for (let i in itens) {
            if (itens.hasOwnProperty(i)) {
                list.push(
                    <div style={{marginBottom: "30px"}}
                         key={itens[i].filter}>
                        <span style={spamStyle}>{itens[i].text}</span>
                            {options[i]}
                    </div>
                );
            }
        }
        return list;
    };


    render() {
        return (
            <div>
                {this.getList()}
                <button className="btn" onClick={this.handleSubmitClick}> Consultar </button>
                <ResultsTable ShowTable = {this.state.ShowTable} value={this.state}/>
            </div>
        )

    }
}


export default BodyRender;