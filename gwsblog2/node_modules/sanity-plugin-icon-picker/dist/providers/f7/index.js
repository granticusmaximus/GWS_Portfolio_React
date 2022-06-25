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

var _framework7Icons = _interopRequireDefault(require("framework7-icons"));

var F7 = _interopRequireWildcard(require("framework7-icons/react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function convertFormat(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  var separator = "_"; //Separate letters followed by numbers (decamelize defaults to omitting separation of letter followed by number)

  name = name.replace(/([a-z])([0-9])/i, "$1".concat(separator, "$2"));
  return (0, _decamelize["default"])(name, separator);
}

var iconStyle = {
  width: "20px",
  height: "20px",
  fontSize: "20px"
};

function _default(provider) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(F7).map(function (name) {
      var icon = convertFormat(name, {});
      return {
        provider: provider,
        name: convertFormat(name, options),
        component: function component() {
          return (
            /*#__PURE__*/
            //Cannot simply generate the F7 SVG components here yet because of a bug: https://github.com/framework7io/framework7-icons/issues/34
            _react["default"].createElement("i", {
              className: _framework7Icons["default"]["f7-icons"],
              style: iconStyle
            }, icon)
          );
        },
        tags: (0, _helpers.createTags)(name, convertFormat)
      };
    });
  };
}