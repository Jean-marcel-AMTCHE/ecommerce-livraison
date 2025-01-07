const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { calculerLivraison } = require('../../livraison');

let montantCommande, distance, estPremium, fraisLivraison;

Given('une commande de {int}$', function (montant) {
  montantCommande = montant;
});

Given('une distance de livraison de {int} km', function (dist) {
  distance = dist;
});

Given('un client premium', function () {
  estPremium = true;
});

Given('un client non premium', function () {
  estPremium = false;
});

When('je calcule les frais de livraison', function () {
  fraisLivraison = calculerLivraison(distance, montantCommande, estPremium);
});

Then('les frais de livraison devraient être de {int}$', function (fraisAttendus) {
  expect(fraisLivraison).to.equal(fraisAttendus);
});
