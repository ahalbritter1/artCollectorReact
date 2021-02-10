import React from 'react';
import { PureComponent } from 'react';

// Create/export a component called Title which uses this static HTML as the template:

class Title extends PureComponent {
    render() {
        return <div id="title">
            <h1>
                The Art Collector
   </h1>
            <h5>
                Search the Harvard Art Museums' Private Collections
   </h5>
        </div>
    }
}


export default Title;