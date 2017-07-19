import angular from 'angular';
// import angularResource from 'angular-resource';
import contactsListTemplate from './contacts-list.template.html';
import { contactServiceModule } from '../../services/contact.service';

export const contactsListModule = angular.module('contacts-list.component', [
  // angularResource,
  contactServiceModule.name,
]);


class ContactListCtrl {
  constructor(contactService) {
    this.contacts = [];

    contactService.getAll()
      .then(res => {
        this.contacts = res.data;
      });
  }
}
ContactListCtrl.$inject = ['contactService'];


/*
class ContactListCtrl {
  constructor($resource) {
    const User = $resource('https://jsonplaceholder.typicode.com/users/:userId', {userId:'@id'});

    this.contacts = User.query();
  }
}
ContactListCtrl.$inject = ['$resource'];
*/


contactsListModule.component('contactsList', {
  controller: ContactListCtrl,
  template: contactsListTemplate
});
