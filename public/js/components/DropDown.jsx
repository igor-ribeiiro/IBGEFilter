/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false}
    }

    handleClick() {
        const newState = !this.state.opened;
        this.setState({
            opened: newState
        })
    }
    render() {
        if(this.state.opened) {
            return (
                <div>
                    <button onClick={() => this.handleClick()}>Opções de Filtro...</button>
                    <FilterOptions/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button onClick={() => this.handleClick()}>Opções de Filtro...</button>
                </div>
            )
        }
    }
}

export default DropDown;