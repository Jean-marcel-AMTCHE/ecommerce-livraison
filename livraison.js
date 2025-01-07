
function calculerLivraison(distance, montantCommande, estPremium) {
    let frais = 0;
  
    if (distance < 10) {
      frais = 5;
    } else if (distance >= 10 && distance <= 50) {
      frais = 10;
    } else {
      frais = 20;
    }
  
    if (estPremium && montantCommande > 150) {
      return 0;
    }
  
    if (!estPremium) {
      frais += 2;
    }
  
    return frais;
  }
  
  module.exports = { calculerLivraison };
  