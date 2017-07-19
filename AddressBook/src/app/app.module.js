import angular from 'angular';
import uiRouter from '@uirouter/angularjs'
import './app.style.css';

import { contactsModule } from './contacts/contacts.module';

const appModule = angular.module('app.module', [
  contactsModule.name,
  uiRouter
]);