import React from 'react';
import PropTypes from 'prop-types';

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.string
        }),
        addToOrder: PropTypes.func
    };
    render() {
        const { price, name, status } = this.props.details;

        const isAvilable = status === 'available';
        return (
            <div className="fish-card">
                <p className="">{` Name:${name} 
                Price: ${price} $`}</p>
                <button
                    className="btn btn-primary"
                    disabled={!isAvilable}
                    onClick={index => this.props.addToOrder(this.props.index)}
                >
                    {isAvilable ? 'ADD Fish' : 'sold out'}
                </button>
            </div>
        );
    }
}

export default Fish;
