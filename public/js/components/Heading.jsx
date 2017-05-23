/**
 * Created by igor on 23/05/17.
 */

import React from 'react';

class Heading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 style ={{
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}> Senso do IBGE </h1>
                <h4 style={{
                    textAlign: 'center'
                }}> Dados sobre a população brasileira  de acordo com o senso realizado pelo IBGE no ano 2010</h4>
            </div>
        )
    }
}

export default Heading;