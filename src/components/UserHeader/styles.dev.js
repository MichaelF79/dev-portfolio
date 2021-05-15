"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.Header = exports.HeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 150px;\n  margin-right: 2.5rem;\n  border-radius: 50%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);

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

var Image = _styledComponents["default"].img(_templateObject3()); // export const ViewResumeLink = styled.a`
//   display: flex;
//   text-decoration: none;
//   padding: 0.75rem 1.5rem;
//   border-radius: 15px;
//   font-weight: bold;
//   align-items: center;
//   margin-top: 3rem;
//   border: 2px solid #0f62fe;
//   background-color: #0f62fe;
//   transition: background-color 250ms ease;
//   &:hover {
//     background-color: #004cdb;
//   }
//   svg {
//     fill: white;
//     margin-left: 8px;
//   }
// `;


exports.Image = Image;