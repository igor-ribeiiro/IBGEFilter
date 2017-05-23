import React from 'react';

import DropDown from './DropDown.jsx';
import Heading from './Heading.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{
                width: '65%',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <Heading />
                <DropDown />
            </div>
        )
    }
}

export default App;