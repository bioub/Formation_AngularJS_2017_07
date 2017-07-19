import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { contactsListModule } from './contacts-list/contacts-list.component';
import { contactsAddModule } from './contacts-add/contacts-add.component';

export const contactsModule = angular.module('contacts.module', [
  contactsListModule.name,
  contactsAddModule.name,
  uiRouter
]);

contactsModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state({
    name: 'contacts-list',
    url: '/contacts/list',
    component: 'contactsList'
  });

  $stateProvider.state({
    name: 'contacts-add',
    url: '/contacts/add',
    component: 'contactsAdd'
  });

  /*
  1 - Ajouter un bouton supprimer sur chaque ligne de ContactList
  sur le ng-click, appeler une fonction de ContactListCtrl qui va
  envoyer la requete du type
  DELETE http://localhost:3000/contacts/3
  (où 3 est l'id du contact à supprimer)
   */

  $stateProvider.state({
    name: 'contacts-show',
    url: '/contacts/:id',
    template: '<h2>Détail du contact</h2>',
  });

  /*
  2 - Créer le composant contactShow et l'enregistrer dans contacts.module
  Remplacer ci dessus template par ce nouveau composant
  Injecter le $state au controlleur de ce composant
  L'id devient accessible via $state.params.id
  Envoyer la requete GET http://localhost:3000/contacts/3
  (où 3 est l'id du contact à afficher)
  Et développer le template
   */

}]);