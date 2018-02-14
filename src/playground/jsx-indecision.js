'use strict';

(function() {
    console.log('App.js is running...');

    const app = {
        title: 'Indecision App',
        subtitle: 'Put your life in the hands of a computer',
        options: []
    };

    const addOptionHandler = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value;

        if(option.trim()){
            app.options.push(option);
            event.target.elements.option.value = '';
            renderIndecisionApp();
        }
    };

    const removeButtonHandler = () => {
        app.options = [];
        renderIndecisionApp();
    }
    const onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum];
        alert(option);
    }
    const renderIndecisionApp = () => {
        const appRoot = document.getElementById('app');
        const template = (
            <div>
                <h1>{app.title}</h1>
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{(app.options && app.options.length > 0)?'Here are your options':'No options'}</p>
                <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
                <button onClick={removeButtonHandler}>Remove all options</button>
                <ol>
                {
                    app.options.map( (option, index) => <li key={index}>{option}</li>)
                }
                </ol>
                <form onSubmit={addOptionHandler}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
        ReactDOM.render(template, appRoot);
    };

    renderIndecisionApp();
}());
