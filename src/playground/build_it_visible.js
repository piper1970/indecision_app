'use strict';

(function(){
    let isVisible = false;

    const toggleVisibility = () => {
        isVisible = !isVisible;
        render();
    };

    const render = () => {
        const appRoot = document.getElementById('app');
        const template = (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={toggleVisibility}>{(
                    isVisible? 'Hide Details':'Show Details'
                )}</button>
                {isVisible && (
                    <p>This is the message</p>
                )}
            </div>
        );
        ReactDOM.render(template, appRoot);
    };

    render();

}());