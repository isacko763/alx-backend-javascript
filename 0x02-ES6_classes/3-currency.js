/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_code"] }] */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

