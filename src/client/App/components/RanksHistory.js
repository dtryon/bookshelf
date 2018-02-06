import React, { Component } from 'react';

export default class RanksHistory extends Component {
    render() {
        return (
            <div>
                detail: { this.props.match.params.bookName }
            </div>
        );
    }
}
