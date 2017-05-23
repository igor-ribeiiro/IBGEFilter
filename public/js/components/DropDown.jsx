/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';

class DropDown extends React.Component {
    constructor() {
        super();
        this.setState({
            opened: false
        })
    }
    handleClick() {
        this.setState({
            opened: !this.state.opened
        })
    }
    render() {
        if(this.state.opened) {
            return (
                <div>
                    <span onClick={() => this.handleClick()}>Opções de Filtro...</span>
                    <FilterOptions/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <span onClick={() => this.handleClick()}>Opções de Filtro...</span>
                </div>
            )
        }
    }
}

export default DropDown;