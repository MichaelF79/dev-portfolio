"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileLink = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProfileLink = _styledComponents["default"].li(_templateObject());

exports.ProfileLink = ProfileLink;