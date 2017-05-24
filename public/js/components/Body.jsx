/**
 * Created by igor on 23/05/17.
 */

import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowTable: false
        };

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleSubmitClick(e) {
        e.preventDefault;
        this.setState({
            ShowTable: true
        });
    }
}

export default Body;