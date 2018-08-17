import React from 'react';
import Inventory from './Inventory';
//import './App.css';
import Header from './Header';
import Fish from './Fish';
import samplefish from './samplefish';
import Order from './Order';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fishes: JSON.parse(localStorage.getItem('fishes')) || {},
            order: JSON.parse(localStorage.getItem('order')) || {}
        };
    }

    addFish = fish => {
        //take a copy of the existing state
        const fishes = {
            ...this.state.fishes
        };
        // add our new fish to the fish variable
        fishes[`fish ${Date.now()}`] = fish;
        // set the new fish object to state
        localStorage.setItem('fishes', JSON.stringify(fishes));
        this.setState({
            fishes
        });
    };
    listFish = () => {
        this.setState({
            fishes: samplefish
        });
    };
    addToOrder = key => {
        //take a copy of the existing state
        const order = {
            ...this.state.order
        };
        // Either add fish to order or update number in order
        order[key] = order[key] + 1 || 1;
        this.setState({
            order
        });
    };
    removeFromOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. remove that itemf from order
        delete order[key];
        // 3. Call setState to update our state object
        this.setState({ order });
    };
    render() {
        return (
            <div className="container">
                <Header header="The First Real Ract" />
                <div className="row">
                    <div className="col">
                        <Inventory
                            addFish={this.addFish}
                            listFish={this.listFish}
                            fishes={this.state.fishes}
                        />
                    </div>

                    <div className="col">
                        <Order
                            order={this.state.order}
                            fishes={this.state.fishes}
                            removeFromOrder={this.removeFromOrder}
                        />
                    </div>
                </div>
                <div
                    className="mapfishes mt-3
                "
                >
                    <h3 className="text-center mt-3 mb-3 "> Fishes</h3>
                    <div className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                details={this.state.fishes[key]}
                                index={key}
                                addToOrder={this.addToOrder}
                                removeFromOrder={this.removeFromOrder}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
