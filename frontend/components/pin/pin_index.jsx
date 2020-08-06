import React from 'react'
import PinIndexItem from './pin_index_item';
import create from '../create_button'

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllPins();
    }

    render() {
        const { pins } = this.props;
        const allPins = pins.map(pin => (
            <PinIndexItem key={pin.id} pin={pin} />
        ))

        return (
            <div>
                {create()}
                <div className="pin-index-container">
                    {allPins}
                </div>
            </div>
        )
    }
}

export default PinIndex;
