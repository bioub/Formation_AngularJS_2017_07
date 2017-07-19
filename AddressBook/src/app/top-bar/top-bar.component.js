import angular from 'angular';
import topBarTemplate from './top-bar.template.html';

export const topBarModule = angular.module('top-bar.component', []);

topBarModule.component('topBar', {
  template: topBarTemplate
});
