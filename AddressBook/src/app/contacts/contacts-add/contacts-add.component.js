import angular from 'angular';
import contactsAddTemplate from './contacts-add.template.html';

export const contactsAddModule = angular.module('contacts-add.component', []);

contactsAddModule.component('contactsAdd', {
  template: contactsAddTemplate
});
