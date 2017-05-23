/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOpened: 'none'
        };
    }

    handleSubmitClick() {

    }

    handleButtonClick(newOpened) {
        if(this.state.currentOpened === newOpened) {
            this.setState({
                currentOpened: 'none'
            })
        }
        else {
            this.setState({
                currentOpened: newOpened
            });
        }
    }

    getList() {
        const itens = [{
            text: 'Selecione o gênero',
            filter: 'gênero'
        }, {
            text: 'Selecione a idade',
            filter: 'idade'
        },{
            text: 'Selecione a classe social',
            filter: 'classe social'
        }];

        const spamStyle = {marginRight: '10px'};
        let list =[];

        for(let i in itens) {
            if(itens.hasOwnProperty(i)) {
                list.push(
                        <div style={{marginBottom:"30px"}}
                             key = {itens[i].filter}>
                            <span style= {spamStyle}>{itens[i].text}</span>
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
    }

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

export default Body;