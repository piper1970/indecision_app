'use strict';

(function(){

    class VisibilityToggle extends React.Component{
        constructor(props){
            super(props);
            this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
            this.state = {
                isVisible:false
            };
        }
        handleToggleVisibility(){
            this.setState((prev) => {
                return {
                    isVisible: !prev.isVisible
                };
            });
        }
        render(){
            return (
                <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{(
                    this.state.isVisible? 'Hide Details':'Show Details'
                )}</button>
                {this.state.isVisible && (
                    <p>Eat at Al's!!</p>
                )}
            </div>
            );
        }
    }

    ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

}());