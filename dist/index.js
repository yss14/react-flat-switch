'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    perspective: 300
  },
  switch: {
    background: 'transparent',
    transition: '0.5s ease',
    border: 'none',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
    position: 'relative',
    textTransform: 'uppercase',
    fontSize: 15,
    letterSpacing: 1.2,
    outline: 'none',
    cursor: 'pointer'
  },
  side: {
    display: 'block',
    lineHeight: 'initial',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: '#fff',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    borderRadius: 4
  },
  front: {
    zIndex: 2,
    transform: 'rotate3d(0, 0, 0, 0)'
  },
  back: {
    transform: 'rotate3d(1, 0, 0, 180deg)'
  }
};

var FlatSwitch = function (_React$Component) {
  _inherits(FlatSwitch, _React$Component);

  function FlatSwitch(props) {
    _classCallCheck(this, FlatSwitch);

    var _this = _possibleConstructorReturn(this, (FlatSwitch.__proto__ || Object.getPrototypeOf(FlatSwitch)).call(this, props));

    _this.state = {};

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  _createClass(FlatSwitch, [{
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.setState({
        mouseDown: true,
        mouseUp: false
      });
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      var enabled = !this.props.enabled;
      this.props.onSwitch(enabled);
      this.setState({
        mouseDown: false,
        mouseUp: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          mouseDown = _state.mouseDown,
          rotateX = _state.rotateX;
      var _props = this.props,
          enabled = _props.enabled,
          hideBoxShadow = _props.hideBoxShadow,
          width = _props.width,
          height = _props.height;


      var sideStyles = Object.assign({}, styles.side, { lineHeight: height + 'px' });

      var switchStyles = _extends({}, styles.switch, {
        width: width,
        height: height
      });

      if (mouseDown) {
        switchStyles.transform = 'rotate3d(1, 0, 0, ' + (enabled ? 180 : 0) + 'deg) scale(1.2)';
        if (!hideBoxShadow) switchStyles.boxShadow = '0px ' + (enabled ? 32 : -32) + 'px 56px rgba(0,0,0,.1)';
      } else {
        switchStyles.transform = 'rotate3d(1, 0, 0, ' + (enabled ? 180 : 0) + 'deg)';
        if (!hideBoxShadow) switchStyles.boxShadow = '0px ' + (enabled ? 2 : -2) + 'px 4px rgba(0,0,0,.1)';
      }

      return _react2.default.createElement(
        'div',
        { style: styles.container, className: this.props.className },
        _react2.default.createElement(
          'button',
          {
            style: switchStyles,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp },
          _react2.default.createElement(
            'span',
            { style: _extends({}, sideStyles, styles.front, this.props.enabledStyles) },
            this.props.enableText
          ),
          _react2.default.createElement(
            'span',
            { style: _extends({}, sideStyles, styles.back, this.props.disabledStyles) },
            this.props.disableText
          )
        )
      );
    }
  }]);

  return FlatSwitch;
}(_react2.default.Component);

FlatSwitch.propTypes = {
  enabled: _react2.default.PropTypes.bool.isRequired,
  enableText: _react2.default.PropTypes.string,
  disableText: _react2.default.PropTypes.string,
  onSwitch: _react2.default.PropTypes.func,
  hideBoxShadow: _react2.default.PropTypes.bool,
  width: _react2.default.PropTypes.oneOfType(['string', 'number']),
  height: _react2.default.PropTypes.oneOfType(['string', 'number']),
  className: _react2.default.PropTypes.string,
  enabledStyles: _react2.default.PropTypes.object,
  disabledStyles: _react2.default.PropTypes.object
};

FlatSwitch.defaultProps = {
  enabled: true,
  enabledText: 'enable',
  disabledText: 'disable',
  hideBoxShadow: false,
  width: 150,
  height: 40
};

exports.default = FlatSwitch;
