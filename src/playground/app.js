'use strict';

(function () {
    class IndecisionApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                options: []
            };
            this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
            this.handleAddOptions = this.handleAddOptions.bind(this);
            this.handlePick = this.handlePick.bind(this);
            this.handleDeleteSingeOption = this.handleDeleteSingeOption.bind(this);
        }

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

        handleDeleteAllOptions() {
            this.setState(() => ({ options: [] }));
        }

        handleDeleteSingeOption(title) {
            this.setState((prev) => ({
                    options: prev.options.filter((optionTitle) => (
                        optionTitle !== title
                    ))
                    
                })
            );
        }

        handlePick() {
            const optionsLength = this.state.options.length;
            const randomNum = Math.floor(Math.random() * optionsLength);
            const option = this.state.options[randomNum];
            alert(option);
        }

        handleAddOptions(option) {
            if (!option) {
                return 'Enter valid value to add item;'
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }
            this.setState((prev) => ({ options: prev.options.concat(option) }));
        }

        render() {
            const title = "Indecision App";
            const subtitle = "Put your life in the hands of a computer";
            const actionTitle = "What should I do?"
            const optionsTitle = "Options Available";
            const addOptionsTitle = "Add Option";
            const addOptionsPlaceHolder = "Add Options Here...";
            return (
                <div>
                    <Header subtitle={subtitle} />
                    <Action
                        title={actionTitle}
                        hasOptions={this.state.options.length > 0}
                        onClickHandler={this.handlePick}
                    />
                    <Options
                        title={optionsTitle}
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
            );
        }
    }

    IndecisionApp.defaultProps = {
        options: []
    };

    const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
    };

    Header.defaultProps = {
        title: "Indecision App"
    };

    const Action = (props) => {
        return (
            <div>
                <button
                    disabled={!props.hasOptions}
                    onClick={props.onClickHandler}>
                    {props.title}
                </button>
            </div>
        );
    };

    const Options = (props) => {
        return (
            <div>
                <button onClick={props.removeAllOptionsHandler}>Remove All</button>
                {(props.options.length === 0)?<h3>Please add an option</h3>:<h3>{props.title}</h3>}
                <ol>
                    {
                        props.options.map((option, index) => (
                            <Option
                                key={index}
                                title={option}
                                removeOptionHandler={props.removeSingleOptionHandler}
                            />
                        ))
                    }
                </ol>
            </div>
        );
    };

    const Option = (props) => {
        return (
            <div>
                <li>
                    {props.title}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            props.removeOptionHandler(props.title);
                        }}>
                        Remove
                    </button>
                </li>
            </div>
        );
    };

    class AddOption extends React.Component {
        constructor(props) {
            super(props);
            this.handleOption = this.handleOption.bind(this);
            this.state = ({
                error: undefined
            });
        }
        handleOption(event) {
            event.preventDefault();
            const option = event.target.elements.option.value.trim();
            const error = this.props.addHandler(option);
            this.setState(() => ({ error }));

            if(!error){
                event.target.elements.option.value = '';
            }
        }
        render() {
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

// import './utils.js';
// import { square, add } from './utils.js';
// (function(){
//     console.log('App.js is running');
//     console.log(square(4));
//     console.log(add(3, 6));
// }())

// import goobers, {add, square} from './utils.js';
// import isSenior, {isAdult, canDrink} from './person.js';
// const age = 66;
// const name = 'Geoff';

// console.log(goobers(7, 2));  //subtract of utils

// console.log(`${name} ${isAdult(age)?'is':'is not'} an adult`);
// console.log(`${name} ${canDrink(age)?'can':'cannot'} drink`);
// console.log(`${name} ${isSenior(age)? "is": "is not"} a senior`);


// const Layout= (props) => {
//     return (
//         <div>
//             <h1>Header</h1>
//                 {props.children}
//             <h1>Footer</h1>
//         </div>
//     );
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// );

// ReactDOM.render((
//     <Layout>
//         {template}
//     </Layout>), document.getElementById('app'));