"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedProviders = getSelectedProviders;
exports.getAcceptedProviders = getAcceptedProviders;
exports.providerFromPrefix = providerFromPrefix;
exports.listToMatrix = listToMatrix;
exports.createTags = createTags;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _config = require("../config");

function getSelectedProviders() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [_config.PROVIDERS["default"].prefix].concat((0, _toConsumableArray2["default"])(getAcceptedProviders(options.providers)));
}

function getAcceptedProviders() {
  var providers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var filterOutDefault = function filterOutDefault(provider) {
    return provider.prefix !== "all-icons";
  };

  var mapPrefixes = function mapPrefixes(provider) {
    return provider.prefix;
  };

  var available = Object.values(_config.PROVIDERS).filter(filterOutDefault).map(mapPrefixes);
  var filtered = (0, _toConsumableArray2["default"])(providers).filter(function (e) {
    return this.indexOf(e) >= 0;
  }, available);
  if (!providers.length) return available;
  return filtered;
}

function providerFromPrefix(prefix) {
  return Object.values(_config.PROVIDERS).find(function (provider) {
    return provider.prefix === prefix;
  });
}

function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
      i,
      k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
} //Creates tags that can be applied to icon objects for subset filtering with support for adding both react names and default names


function createTags(name, formatFn) {
  var reactName = formatFn(name, {
    outputFormat: "react"
  });
  var defaultName = formatFn(name, {});
  return [reactName, defaultName];
}