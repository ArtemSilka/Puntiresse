import React from 'react'
import PinIndexItem from './pin_index_item';
import create from '../create_button';

class PinIndex extends React.Component {
    constructor(props) {
        super(props);

        this.removeLoader = this.removeLoader.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllPins()
    }

    removeLoader() {
        setTimeout(function () {
            $('#loader').removeClass('loader-container');
        }, 1000);
        setTimeout(function () {
            $('#spinner').removeClass('lds-grid');
        }, 1001);
        
    }

    render() {
        const { pins } = this.props;
        const allPins = pins.map(pin => (
            <PinIndexItem key={pin.id} pin={pin} />
        ))
        
        return (
            <div>
                <div id ="loader" className="loader-container">
                    <div id="spinner" class="lds-grid">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {create()}
                <div className="pin-index-container">
                    {allPins}
                    {this.removeLoader()}
                </div>
            </div>
        )
    }
}

export default PinIndex;
