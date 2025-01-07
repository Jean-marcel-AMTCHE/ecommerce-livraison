Feature: Calcul des frais de livraison

  Scenario: Livraison standard pour une distance inférieure à 10 km
    Given une commande de 100$
    And une distance de livraison de 5 km
    And un client non premium
    When je calcule les frais de livraison
    Then les frais de livraison devraient être de 7$

  Scenario: Livraison gratuite pour membre premium avec commande > 150$
    Given une commande de 200$
    And une distance de livraison de 60 km
    And un client premium
    When je calcule les frais de livraison
    Then les frais de livraison devraient être de 0$

  Scenario: Frais additionnels pour client non premium
    Given une commande de 100$
    And une distance de livraison de 5 km
    And un client non premium
    When je calcule les frais de livraison
    Then les frais de livraison devraient être de 7$
