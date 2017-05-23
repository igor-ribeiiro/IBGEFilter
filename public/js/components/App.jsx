import React from 'react';

import BodyRender from './BodyRender.jsx';
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
                <BodyRender />
            </div>
        )
    }
}

export default App;