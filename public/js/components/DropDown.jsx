/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
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
                    <div className="btn dropDown">
                        <span>{this.props.texto}</span>
                        <button onClick={() => this.handleClick()}>{this.props.filtro}</button>
                        <FilterOptions/>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="btn dropDown">
                        <span>{this.props.texto}</span>
                        <button onClick={() => this.handleClick()}>{this.props.filtro}</button>
                    </div>
                </div>
            )
        }
    }
}

export default DropDown;