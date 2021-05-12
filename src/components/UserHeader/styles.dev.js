"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewResumeLink = exports.Image = exports.Header = exports.HeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 15px;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 640px) {\n    display: ", ";\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var isHome = _ref.isHome;
  return !isHome ? 'none' : 'flex';
});

exports.HeaderContainer = HeaderContainer;

var Header = _styledComponents["default"].div(_templateObject2());

exports.Header = Header;

var Image = _styledComponents["default"].img(_templateObject3());

exports.Image = Image;

var ViewResumeLink = _styledComponents["default"].a(_templateObject4());

exports.ViewResumeLink = ViewResumeLink;