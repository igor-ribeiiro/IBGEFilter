import React from 'react';

import Body from './Body.jsx';
import Heading from './Heading.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="center">
                <Heading />
                <Body />
            </div>
        )
    }
}

export default App;