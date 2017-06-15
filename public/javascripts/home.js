webpackJsonp([0],{

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
    _reactDom2.default.render(_react2.default.createElement(Login, null), document.getElementById('js_login'));
};

var _react = __webpack_require__(50);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(49);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            username: '',
            password: '',
            status: true,
            error: null
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'goHome',
        value: function goHome() {
            var _state = this.state,
                username = _state.username,
                password = _state.password;

            fetch('/home/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + username + '&password=' + password
            }).then(function (data) {
                return data.json();
            }).then(function (json) {
                return console.log(json);
            });
        }
    }, {
        key: 'setUsername',
        value: function setUsername(e) {
            var username = e.target.value;
            this.setState({ username: username });
        }
    }, {
        key: 'setPassword',
        value: function setPassword(e) {
            var password = e.target.value;
            this.setState({ password: password });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                username = _state2.username,
                password = _state2.password,
                status = _state2.status,
                error = _state2.error;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u7BA1\u7406\u5458'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement('input', { type: 'text', value: username, placeholder: '\u7528\u6237\u540D', onChange: this.setUsername.bind(this) })
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement('input', { type: 'password', value: password, placeholder: '\u5BC6\u7801', onChange: this.setPassword.bind(this) })
                ),
                error && _react2.default.createElement(
                    'p',
                    { className: 'error' },
                    '\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: this.goHome.bind(this) },
                        status ? '登录' : '登录中'
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(83);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _login2.default)();

/***/ })

},[84]);