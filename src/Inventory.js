import React from 'react';
import AddFishForm from './AddFishForm';
import PropTypes from 'prop-types';

class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,

        listFish: PropTypes.func
    };

    render() {
        return (
            <div>
                <h2>Inventory</h2>

                <AddFishForm addFish={this.props.addFish} />
                <button className="btn btn-primary" onClick={this.props.listFish}>
                    add just fishes from samplefish
                </button>
            </div>
        );
    }
}

export default Inventory;
