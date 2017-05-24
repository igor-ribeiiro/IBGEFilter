/**
 * Created by igor on 23/05/17.
 */


import React from 'react';
import requestTableData from './../requests/RequestDataTable.jsx';

class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    getTableData() {
        const aux = requestTableData(this.props);
        let data =[];

        for(let i in aux) {
            if(aux.hasOwnProperty(i)) {
                data.push(
                    <tr key = {aux[i].estado}>
                        <td>{aux[i].estado}</td>
                        <td>{aux[i].valor}</td>
                    </tr>
                );
            }
        }

        return data;
    }

    render() {
        const tableData = this.getTableData();
        return (
            <table style = {{
                visibility: this.props.ShowTable ? "visible" : "hidden"
            }} className="resultTable table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>População</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        )

    }
}


export default ResultsTable;