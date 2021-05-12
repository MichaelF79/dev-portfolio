"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillContainer = exports.ProjectLinks = exports.ProjectImage = exports.ProjectTitle = exports.ProjectItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("@carbon/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1.2rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: medium;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProjectItem = _styledComponents["default"].li(_templateObject(), _colors.white);

exports.ProjectItem = ProjectItem;

var ProjectTitle = _styledComponents["default"].h4(_templateObject2());

exports.ProjectTitle = ProjectTitle;

var ProjectImage = _styledComponents["default"].img(_templateObject3());

exports.ProjectImage = ProjectImage;

var ProjectLinks = _styledComponents["default"].h5(_templateObject4());

exports.ProjectLinks = ProjectLinks;

var SkillContainer = _styledComponents["default"].div(_templateObject5());

exports.SkillContainer = SkillContainer;