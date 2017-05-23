/**
 * Created by igor on 23/05/17.
 */

import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOpened: 'none',
            currentValue: ['none', 'none', 'none']
        };
    }

    handleSubmitClick() {

    }

    handleButtonClick(newOpened) {
        if(this.state.currentOpened === newOpened) {
            this.setState({
                currentOpened: 'none',
                currentValue: this.state.currentValue
            })
        }
        else {
            this.setState({
                currentOpened: newOpened,
                currentValue: this.state.currentValue
            })
        }
    }

}

export default Body;