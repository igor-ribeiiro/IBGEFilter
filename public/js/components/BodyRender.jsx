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