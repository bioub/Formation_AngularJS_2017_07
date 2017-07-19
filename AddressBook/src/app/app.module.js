import angular from 'angular';
import uiRouter from '@uirouter/angularjs'
import './app.style.css';

import { contactsModule } from './contacts/contacts.module';
import { topBarModule } from './top-bar/top-bar.component';
import { homePageModule } from './home-page/home-page.component';

const appModule = angular.module('app.module', [
  contactsModule.name,
  topBarModule.name,
  homePageModule.name,
  uiRouter
]);

appModule.config(['$stateProvider', function($stateProvider) {

  $stateProvider.state({
    name: 'home-page',
    url: '/',
    component: 'homePage'
  });




}]);