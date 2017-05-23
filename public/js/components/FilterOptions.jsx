/**
 * Created by igor on 23/05/17.
 */

import React from 'react';

class FilterOptions extends React.Component {
    constructor(props) {
        const list = (
            <ul>
                <li>Idade</li>
                <li>Sexo</li>
                <li>Nacionalidade</li>
                <li>Renda</li>
            </ul>
        );
        super(props);
        this.state = {
            list: list
        }
    }


    render() {
        return (
            <div className="dropDown"
                 style={{visibility: this.props.opened ? 'visible' : 'hidden'}}>
                {this.state.list}
            </div>
        )
    }
}

export default FilterOptions;