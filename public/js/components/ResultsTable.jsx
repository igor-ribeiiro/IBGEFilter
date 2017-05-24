/**
 * Created by igor on 23/05/17.
 */


import React from 'react';

class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    getTableData() {
        const aux = this.props.table;
        console.log(aux);
        let data =[];

        for(let i in aux) {
            if(aux.hasOwnProperty(i)) {
                data.push(
                    <tr key = {aux[i].estado}>
                        <td>{aux[i].estado}</td>
                        <td>{aux[i].value}</td>
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