'use strict';

(function(){
    class IndecisionApp extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                options:[]
            }
            this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
            this.handleAddOptions = this.handleAddOptions.bind(this);
            this.handlePick = this.handlePick.bind(this);
        }
    
        handleDeleteAllOptions(){
            this.setState(() => {
                return {
                    options:[]
                };
            });
        }
    
        handlePick(){
            const optionsLength = this.state.options.length;
            const randomNum = Math.floor(Math.random() * optionsLength);
            const option = this.state.options[randomNum];
            alert(option);
        }
    
        handleAddOptions(option){
            if(!option){
                return 'Enter valid value to add item;'
            }else if(this.state.options.indexOf(option) > -1){
                return 'This option already exists';
            }
            this.setState((prev) => {
                return {
                    options: prev.options.concat(option)
                };
            });
        }
    
        render(){
            const title = "Indecision App";
            const subtitle = "Put your life in the hands of a computer";
            const actionTitle = "What should I do?"
            const optionsTitle = "Options Available";
            const addOptionsTitle = "Add Option";
            const addOptionsPlaceHolder = "Add Options Here...";
            return ( 
                <div>
                    <Header title={title} subtitle={subtitle}/>
                    <Action 
                        title={actionTitle} 
                        hasOptions={this.state.options.length > 0}
                        onClickHandler={this.handlePick}
                        />
                    <Options 
                        title={optionsTitle} 
                        options={this.state.options}
                        removeAllOptionsHandler = {this.handleDeleteAllOptions}
                    />
                    <AddOption 
                        title={addOptionsTitle} 
                        addHandler = {this.handleAddOptions}
                        placeholder={addOptionsPlaceHolder} 
                    />
                </div>
            );
        }
    }
    
    class Header extends React.Component{
        render(){
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            );
        }
    }
    
    class Action extends React.Component{
    
        render(){
            return  (
                <div>
                    <button 
                        disabled={!this.props.hasOptions}
                        onClick={this.props.onClickHandler}
                    >{this.props.title}</button>
                </div>
            );
        }
    }
    
    class Options extends React.Component {
        render(){
            return (
                <div>
                    <button onClick={this.props.removeAllOptionsHandler}>Remove All</button>
                    <h3>{this.props.title}</h3>
                    <ol>
                    {
                        this.props.options.map((option, index) => 
                            <Option key={index} title={option} />
                        )
                    }
                    </ol>
                </div>
            );
        }
    }
    
    class Option extends React.Component {
        render() {
            return (
                <div>
                    <li>{this.props.title}</li>
                </div>
            );
        }
    }
    
    class AddOption extends React.Component {
        constructor(props){
            super(props);
            this.handleOption = this.handleOption.bind(this);
            this.state = {
                error: undefined
            }
        }
        handleOption(event){
            event.preventDefault();
            const option = event.target.elements.option.value.trim();
            event.target.elements.option.value = '';
            const error = this.props.addHandler(option);
            this.setState(() => {
                return {error};
            });
        }
        render(){
            return (
                <div>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                    <form onSubmit={this.handleOption}>
                        <input type="text" name="option" placeholder={this.props.placeholder} />
                        <button>{this.props.title}</button>
                    </form>
                </div>
            );
        }
    }
    
    
    ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
}())
