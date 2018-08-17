import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
    static propTypes = {
        addFish: PropTypes.func
    };
    state = {
        inputValue1: '',
        inputValue2: '',
        inputValue3: ''
    };
    /*   myInput = React.createRef(); */
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.state.inputValue1,
            price: this.state.inputValue2,
            status: this.state.inputValue3
        };
        console.log(fish);
        this.props.addFish(fish);
        event.currentTarget.reset();
    };
    render() {
        return (
            <div>
                <form className="form-addfish" onSubmit={this.createFish}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="inputValue1"
                            type="text"
                            value={this.state.inputValue1}
                            placeholder="input1"
                            ref={this.myInput1}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="inputValue2"
                            type="text"
                            value={this.state.inputValue2}
                            placeholder="input2"
                            ref={this.myInput2}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="inputValue3"
                            type="text"
                            value={this.state.inputValue3}
                            placeholder="input3"
                            ref={this.myInput3}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-secondary" placeholder="add me" type="submit">
                            add Fish
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddFishForm;
