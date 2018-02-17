import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.addHandler(option);
        this.setState(() => ({ error }));

        if(!error){
            event.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form onSubmit={this.handleOption}>
                    <div className="add-option">
                        <input class="add-option__input" type="text" name="option" placeholder={this.props.placeholder} />
                        <button className="button">{this.props.title}</button>
                    </div>
                </form>
            </div>
        );
    }
}