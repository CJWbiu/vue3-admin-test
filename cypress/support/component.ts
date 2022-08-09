import './commands';
import { mount } from 'cypress/vue';

Cypress.Commands.add('mount', (...args) => {
  return mount(...args).then(wrapper => {
    return cy.wrap(wrapper).as('vue');
  });
});
