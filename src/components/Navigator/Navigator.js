import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './Navigator.css';

class Navigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Navigator">
                <Button>List</Button>
                <Button>Status</Button>
            </div>
        );
    }
}

export default Navigator;
