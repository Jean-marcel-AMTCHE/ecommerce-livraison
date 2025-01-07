
const { calculerLivraison } = require('./livraison');

describe('Calcul des frais de livraison', () => {
  test('Distance inférieure à 10 km', () => {
    expect(calculerLivraison(5, 100, false)).toBe(7);
});

test('Distance entre 10 km et 50 km', () => {
  expect(calculerLivraison(30, 100, false)).toBe(12);
});

test('Distance supérieure à 50 km', () => {
  expect(calculerLivraison(60, 100, false)).toBe(22);
});

test('Livraison gratuite pour membre premium avec commande > 150$', () => {
  expect(calculerLivraison(60, 200, true)).toBe(0);
});

test('Frais additionnels pour non-premium', () => {
  expect(calculerLivraison(5, 100, false)).toBe(7);
});

test('Pas de frais additionnels pour premium', () => {
  expect(calculerLivraison(5, 100, true)).toBe(5);
});
});
