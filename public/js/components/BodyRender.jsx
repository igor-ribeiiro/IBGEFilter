/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';
import Body from './Body.jsx';

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

        for (let i in itens) {
            if (itens.hasOwnProperty(i)) {
                list.push(
                    <div style={{marginBottom: "30px"}}
                         key={itens[i].filter}>
                        <span style={spamStyle}>{itens[i].text}</span>
                        <div className="dropDownButton dropdown">
                            <button onClick={() => this.handleButtonClick(itens[i].filter)}
                                    className="btn">{itens[i].filter} &nbsp; <i className="fa fa-angle-down">
                            </i></button>
                            <FilterOptions filter={itens[i].filter}
                                           opened={this.state.currentOpened === itens[i].filter}/>
                        </div>
                    </div>
                );
            }
        }
        return list;
    };


    render() {
        const list = this.getList(this.state, this.handleButtonClick);
        return (
            <div>
                {list}
                <button className="btn" onClick={()=>this.handleSubmitClick()}> Consultar </button>
            </div>
        )

    }
}


export default BodyRender;