import angular from 'angular';
import homePageTemplate from './home-page.template.html';

export const homePageModule = angular.module('home-page.component', []);

homePageModule.component('homePage', {
  template: homePageTemplate
});
