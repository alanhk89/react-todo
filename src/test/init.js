const chai = require('chai');
const enzyme = require('enzyme');
const React = require('react');
const chaiEnzyme = require('chai-enzyme');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const jsdom = require('jsdom');
const ignoreStyles = require('ignore-styles');
ignoreStyles.default([
  ...ignoreStyles.DEFAULT_EXTENSIONS,
  '.eot',
  '.woff',
  '.woff2',
  '.ttf',
  '.ico',
]);

chai.use(sinonChai);
chai.use(chaiEnzyme());

chai.config.includeStack = true;

global.expect = chai.expect;

global.sinon = sinon;

global.shallow = enzyme.shallow;
global.mount = enzyme.mount;
global.render = enzyme.render;

global.React = React;

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.window.matchMedia =
  window.matchMedia ||
  (() => {
    return { matches: false, addListener: () => {}, removeListener: () => {} };
  });
global.window.location = {};
global.window.devicePixelRatio = 1;
