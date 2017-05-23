/**
 * Created by igor on 23/05/17.
 */

import React from 'react';
import FilterOptions from './FilterOptions.jsx';

import Body from './Body.jsx';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
    }

    handleClick() {
        const newState = !this.state.opened;
        this.setState({
            opened: newState
        });
    }

    render() {

        return (
            <div style={{marginBottom:"30px"}}>
                <span style= {spamStyle}>{this.props.texto}</span>
                <div className="dropDownButton dropdown">
                    <button onClick={() => this.handleClick()} className="btn">{this.props.filtro}</button>
                    <FilterOptions filter={this.props.filter} opened={this.state.opened}/>
                </div>
            </div>
            )
        }
}

export default DropDown;
