"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _decamelize = _interopRequireDefault(require("decamelize"));

var _helpers = require("../../utils/helpers");

var _reactIcons = require("react-icons");

var Fi = _interopRequireWildcard(require("react-icons/fi"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function convertFormat(name, options) {
  //FORMAT REFERENCE https://github.com/tailwindlabs/heroicons
  if (options.outputFormat === "react") return name;
  var separator = "-"; //Remove react icon prefixes/identifiers Fi

  name = name.replace(/^(Fi)(.*$)/, "$2"); //Separate letters followed by numbers (decamelize defaults to omitting separation of letter followed by number)

  name = name.replace(/([a-z])([0-9])/i, "$1".concat(separator, "$2"));
  return (0, _decamelize["default"])(name, separator);
}

function _default(provider) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var icons = Object.keys(Fi).map(function (name) {
      var Icon = Fi[name];
      return {
        provider: provider,
        name: convertFormat(name, options),
        component: function component() {
          return /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
            value: {
              size: "20px"
            }
          }, /*#__PURE__*/_react["default"].createElement(Icon, null));
        },
        tags: (0, _helpers.createTags)(name, convertFormat)
      };
    });
    return icons;
  };
}