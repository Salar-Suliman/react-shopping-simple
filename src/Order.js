import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    };
    orderRender = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvilable = fish.status === 'available';
        if (!isAvilable) {
            return <p key={key}>{fish ? fish.name : 'fish'}is not longer avilable</p>;
        }
        return (
            <p key={key}>
                {count} lbs {fish.name} {count * fish.price}
                <button
                    className={'btn btn-danger'}
                    onClick={() => this.props.removeFromOrder(key)}
                >
                    remove Fish
                </button>
            </p>
        );
    };

    render() {
        const total = Object.keys(this.props.order).reduce((prevtotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvilable = fish && fish.status === 'available';
            if (isAvilable) {
                return prevtotal + count * fish.price;
            }
            return prevtotal;
        }, 0);
        return (
            <div className="container">
                <h1>Your Order </h1>
                <ul>
                    {Object.keys(this.props.order).length ? (
                        <li>{Object.keys(this.props.order).map(this.orderRender)} </li>
                    ) : (
                        <p className="text-info"> Hallo from Salar!! your order is Empty</p>
                    )}
                </ul>
                <div>
                    <ul>
                        <li>Totaly : {total}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Order;
