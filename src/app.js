'use strict';

class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const actionTitle = "What should I do?"
        const optionsTitle = "Options Available";
        const addOptionsTitle = "Add Option";
        const addOptionsPlaceHolder = "Add Options Here...";
        const options = ['Thing 1', 'Thing 2', 'Thing 4'];
        return ( 
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action title={actionTitle} />
                <Options title={optionsTitle} options={options} />
                <AddOption title={addOptionsTitle} placeholder={addOptionsPlaceHolder} />
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
                <button>{this.props.title}</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        const title1 = "Options 1";
        const title2 = "Options 2";
        return (
            <div>
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
    render(){
        return (
            <div>
                <input type="text" placeholder={this.props.placeholder} />
                <button>{this.props.title}</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));