"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIcons = getIcons;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _providers = _interopRequireDefault(require("../providers"));

var _helpers = require("./helpers");

function getFiltered(icons, _ref) {
  var _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? [] : _ref$filter;
  if (!filter.length) return icons;
  var filtered = icons.filter(function (_ref2) {
    var tags = _ref2.tags;
    return filter.some(function () {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return tags.some(function (t) {
        if ((0, _typeof2["default"])(f) === "object") return f.test(t);
        return f.toLowerCase() === t.toLowerCase();
      });
    });
  });
  return filtered;
}

function getIcons() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var providers = (0, _helpers.getAcceptedProviders)(options.providers);
  var icons = [];

  if (providers) {
    providers.forEach(function (provider) {
      if (_providers["default"][provider]) icons = [].concat((0, _toConsumableArray2["default"])(icons), (0, _toConsumableArray2["default"])(_providers["default"][provider](options)));
    });
  }

  if (!icons.length) {
    Object.values(_providers["default"]).forEach(function (providerIcons) {
      icons = [].concat((0, _toConsumableArray2["default"])(icons), (0, _toConsumableArray2["default"])(providerIcons(options)));
    });
  }

  return getFiltered(icons, options);
}