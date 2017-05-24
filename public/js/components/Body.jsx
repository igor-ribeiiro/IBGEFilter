/**
 * Created by igor on 23/05/17.
 */

import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genero: 'none',
            idade: 'none',
            familia: 'none',
            fecundidade: 'none',
            nupicialidade: 'none',
            rendimento: 'none',
            ShowTable: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        if(name === value) {
            this.setState({
                [name]: 'none'
            })
        }
        else {
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmitClick(e) {
        e.preventDefault;
        let show = true;

        const current = this.state;
        for(let i in current) {
            if(current.hasOwnProperty(i)) {
                if(current[i] === false || current[i] === true) continue;
                if(current[i] === 'none') {
                    show = false;
                    break;
                }
            }
        }

        this.setState({
            ShowTable: true
        });
    }
}

export default Body;