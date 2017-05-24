/**
 * Created by igor on 23/05/17.
 */


import React from 'react';

class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style = {{
                visibility: this.props.ShowTable ? "visible" : "hidden"
            }} className="resultTable">

                ME MUDE
            </div>
        )

    }
}


export default ResultsTable;