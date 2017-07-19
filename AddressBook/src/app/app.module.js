import angular from 'angular';
import uiRouter from '@uirouter/angularjs'
import './app.style.css';

import { contactsModule } from './contacts/contacts.module';
import { topBarModule } from './top-bar/top-bar.component';

const appModule = angular.module('app.module', [
  contactsModule.name,
  topBarModule.name,
  uiRouter
]);