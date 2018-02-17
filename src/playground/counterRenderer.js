'use strict';

(function(){
    class Counter  extends React.Component{
        constructor(props){
            super(props);
            this.plusOneID = 22;
            this.resetID = 11;
            this.minusOneID = 33;
            this.addOne = this.addOne.bind(this);
            this.subtractOne = this.subtractOne.bind(this);
            this.resetCount = this.resetCount.bind(this);
            this.state = {
                count: 0,
            };
        }

        // Lifecycle methods
        componentDidMount(){
            const countString = localStorage.getItem('count');
            const count = parseInt(countString, 10);
            if(!isNaN(count)){
                this.setState(() => ({ count }));
            }
        }
        componentDidUpdate(prevProps, prevState){
            if(prevState.count !== this.state.count){
                localStorage.setItem('count', this.state.count);
            }
        }

        addOne(){
            this.setState((prev) => ({count: prev.count + 1}));
        }
        subtractOne(){
            this.setState((prev) => {
                return {
                    count: prev.count - 1
                };
            });
        }
        resetCount(){
            this.setState(() => {
                return {
                    count: 0
                };
            });
        }
        render(){
            return (
                <div>
                <h1>Count: {this.state.count}</h1>
                <button id={this.plusOneID} className="button" onClick={this.addOne}>+1</button>
                <button id={this.minusOneID} className="button" onClick={this.subtractOne}>-1</button>
                <button id={this.resetID} className="button" onClick={this.resetCount}>Reset</button>
            </div>
            );
        }
    }
    
    ReactDOM.render(<Counter />, document.getElementById('app')); 
}())

