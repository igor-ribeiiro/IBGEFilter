/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';
import Body from './Body.jsx';
import getOptions from './GetOptions.jsx';

class BodyRender extends Body {
    constructor(props) {
        super(props);
    }

    getList() {
        const itens = [{
            text: 'Selecione o gênero',
            filter: 'Gênero'
        }, {
            text: 'Selecione a faixa etária',
            filter: 'Idade'
        }, {
            text: 'Selecione a família',
            filter: 'Família'
        }, {
            text: "Selecione a fecundidade",
            filter: 'Fecundidade'
        }, {
            text: "Selecione a nupicialidade",
            filter: "Nupicialidade"
        }, {
            text: "Selecione o rendimento",
            filter: "Rendimento"
        }];

        const spamStyle = {marginRight: '10px'};
        let list = [];
        const options = getOptions(itens);

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
        const list = this.getList();
        return (
            <div>
                {list}
                <button className="btn" onClick={()=>this.handleSubmitClick()}> Consultar </button>
            </div>
        )

    }
}


export default BodyRender;