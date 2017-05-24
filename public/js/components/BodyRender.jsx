/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import Body from './Body.jsx';
import ResultsTable from './ResultsTable.jsx'
import requestPropeties from './../requests/RequestProperties.jsx';
import Filter from './Filter.jsx';

class BodyRender extends Body {
    constructor(props) {
        super(props);
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

        // const spamStyle = {marginRight: '10px'};
        let list = [];
        // const options = this.getOptions(itens);
        //
        // for (let i in itens) {
        //     if (itens.hasOwnProperty(i)) {
        //         list.push(
        //             <div style={{marginBottom: "30px"}}
        //                  key={itens[i].filter}>
        //                 <span style={spamStyle}>{itens[i].text}</span>
        //                     {options[i]}
        //             </div>
        //         );
        //     }
        // }
        return list;
    };


    render() {
        return (
            <div>
                <Filter/>
                <button className="btn" onClick={this.handleSubmitClick}> Consultar </button>
                <ResultsTable ShowTable = {this.state.ShowTable} value={this.state}/>
            </div>
        )

    }
}


export default BodyRender;