'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    var IndecisionApp = function (_React$Component) {
        _inherits(IndecisionApp, _React$Component);

        function IndecisionApp(props) {
            _classCallCheck(this, IndecisionApp);

            var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

            _this.state = {
                options: []
            };
            _this.handleDeleteAllOptions = _this.handleDeleteAllOptions.bind(_this);
            _this.handleAddOptions = _this.handleAddOptions.bind(_this);
            _this.handlePick = _this.handlePick.bind(_this);
            return _this;
        }

        _createClass(IndecisionApp, [{
            key: 'handleDeleteAllOptions',
            value: function handleDeleteAllOptions() {
                this.setState(function () {
                    return {
                        options: []
                    };
                });
            }
        }, {
            key: 'handlePick',
            value: function handlePick() {
                var optionsLength = this.state.options.length;
                var randomNum = Math.floor(Math.random() * optionsLength);
                var option = this.state.options[randomNum];
                alert(option);
            }
        }, {
            key: 'handleAddOptions',
            value: function handleAddOptions(option) {
                if (!option) {
                    return 'Enter valid value to add item;';
                } else if (this.state.options.indexOf(option) > -1) {
                    return 'This option already exists';
                }
                this.setState(function (prev) {
                    return {
                        options: prev.options.concat(option)
                    };
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var title = "Indecision App";
                var subtitle = "Put your life in the hands of a computer";
                var actionTitle = "What should I do?";
                var optionsTitle = "Options Available";
                var addOptionsTitle = "Add Option";
                var addOptionsPlaceHolder = "Add Options Here...";
                return React.createElement(
                    'div',
                    null,
                    React.createElement(Header, { title: title, subtitle: subtitle }),
                    React.createElement(Action, {
                        title: actionTitle,
                        hasOptions: this.state.options.length > 0,
                        onClickHandler: this.handlePick
                    }),
                    React.createElement(Options, {
                        title: optionsTitle,
                        options: this.state.options,
                        removeAllOptionsHandler: this.handleDeleteAllOptions
                    }),
                    React.createElement(AddOption, {
                        title: addOptionsTitle,
                        addHandler: this.handleAddOptions,
                        placeholder: addOptionsPlaceHolder
                    })
                );
            }
        }]);

        return IndecisionApp;
    }(React.Component);

    var Header = function Header(props) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                props.title
            ),
            React.createElement(
                'h2',
                null,
                props.subtitle
            )
        );
    };

    var Action = function Action(props) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                {
                    disabled: !props.hasOptions,
                    onClick: props.onClickHandler },
                props.title
            )
        );
    };

    var Options = function Options(props) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: props.removeAllOptionsHandler },
                'Remove All'
            ),
            React.createElement(
                'h3',
                null,
                props.title
            ),
            React.createElement(
                'ol',
                null,
                props.options.map(function (option, index) {
                    return React.createElement(Option, { key: index, title: option });
                })
            )
        );
    };

    var Option = function Option(props) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'li',
                null,
                props.title
            )
        );
    };

    var AddOption = function (_React$Component2) {
        _inherits(AddOption, _React$Component2);

        function AddOption(props) {
            _classCallCheck(this, AddOption);

            var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

            _this2.handleOption = _this2.handleOption.bind(_this2);
            _this2.state = {
                error: undefined
            };
            return _this2;
        }

        _createClass(AddOption, [{
            key: 'handleOption',
            value: function handleOption(event) {
                event.preventDefault();
                var option = event.target.elements.option.value.trim();
                event.target.elements.option.value = '';
                var error = this.props.addHandler(option);
                this.setState(function () {
                    return { error: error };
                });
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(
                    'div',
                    null,
                    this.state.error && React.createElement(
                        'p',
                        { className: 'error' },
                        this.state.error
                    ),
                    React.createElement(
                        'form',
                        { onSubmit: this.handleOption },
                        React.createElement('input', { type: 'text', name: 'option', placeholder: this.props.placeholder }),
                        React.createElement(
                            'button',
                            null,
                            this.props.title
                        )
                    )
                );
            }
        }]);

        return AddOption;
    }(React.Component);

    ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
})();
