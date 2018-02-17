import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteAllOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteSingeOption = (title) => {
        this.setState((prev) => ({
                options: prev.options.filter((optionTitle) => (
                    optionTitle !== title
                ))
                
            })
        );
    };

    handlePick = () => {
        const optionsLength = this.state.options.length;
        const randomNum = Math.floor(Math.random() * optionsLength);
        const option = this.state.options[randomNum];
        this.setState(() => (
            {selectedOption: option}
        ));
    };

    handleClearSelectedOption = () => {
        this.setState(() => (
            {selectedOption: undefined}
        ));
    };

    handleAddOptions = (option) => {
        if (!option) {
            return 'Enter valid value to add item;'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prev) => ({ options: prev.options.concat(option) }));
    };

    // Lifecycle methods
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}));
            }
        }catch(e) {
            // Do nothing
        }

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options', options);
        }
    }

    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const actionTitle = "What should I do?"
        const addOptionsTitle = "Add Option";
        const addOptionsPlaceHolder = "Add Options Here...";
        return (
            <div>
                <Header subtitle={subtitle} />
                    <div className="container">
                    <Action
                        title={actionTitle}
                        hasOptions={this.state.options.length > 0}
                        onClickHandler={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            removeAllOptionsHandler={this.handleDeleteAllOptions}
                            removeSingleOptionHandler={this.handleDeleteSingeOption}
                        />
                        <AddOption
                            title={addOptionsTitle}
                            addHandler={this.handleAddOptions}
                            placeholder={addOptionsPlaceHolder}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    clearSelected  = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};
