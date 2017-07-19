import angular from 'angular';
import contactsListTemplate from './contacts-list.template.html';

export const contactsListModule = angular.module('contacts-list.component', []);

contactsListModule.component('contactsList', {
  template: contactsListTemplate
});
