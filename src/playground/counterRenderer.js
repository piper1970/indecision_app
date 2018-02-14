
    let count = 0;
    const plusOneID = 1234;
    const minusOneID = 5678;
    const resetID = 9012;
    const addOne = () => {
        count++;
        renderCounterApp();
    };
    const subtractOne = () => {
        count--;
        renderCounterApp();
    };
    const resetCount = () => {
        count = 0;
        renderCounterApp();
    }

    

    const renderCounterApp = () => {
        const templateTwo = (
            <div>
                <h1>Count: {count}</h1>
                <button id={plusOneID} className="button" onClick={addOne}>+1</button>
                <button id={minusOneID} className="button" onClick={subtractOne}>-1</button>
                <button id={resetID} className="button" onClick={resetCount}>Reset</button>
            </div>
        );

        ReactDOM.render(templateTwo, appRoot);
    };

    // renderCounterApp();