Exercices sur React réalisé en 2018

# Exercices React

Il s’agit d’une application reactJS composée de 3 pages :

1. Une page /music

2. Une page /prime

3. Une page /graph

## Page /music
Cette page est composée d’une liste de musique sous forme de tableau, d’un lecteur audio et
d’une tableau affichant une playlist.

Le tableau de musique est composé de 3 colonnes :

• Le titre de la musique

• Bouton action : lecture de la musique (play)

• Bouton action : ajout à la playlist (+)

Le tableau playlist est composé de 3 colonnes :

• Le titre de la musique

• Bouton action : lecture du titre maintenant (play)

• Suppression de la playlist (x)

Tableau musique
Au clic sur le bouton « play » d’une musique, celle-ci est mise en première position de la playlist et
est lue tout de suite.

Au clic sur le bouton ajout à la playlist, la musique sélectionnée est placée en dernière position de
la playlist.

Tableau playlistAu clic sur le bouton play de la playlist, celle-ci est déplacée en première position de la playlist et
est lue tout de suite.

Au clic sur le bouton supprimer (x) celle-ci est supprimée de la playlist.

Remarque
• Lorsque qu’une musique est terminée, la suivante est lue automatiquement.

• Je ne noterai pas ta sélection musicale (chacun ses gouts), par contre choisi quand même des
musiques agréables à écouter :p 

## Page /prime@
L’objectif de cette page est de trouver le n-ième nombre premier.

Cette page est composée d’un input de type number, d’un bouton valider et une zone d’affichage
du résultat.

Par exemple : si je mets 10 dans l’input et je valide le nombre 29 s’affichera dans le résultat.

Remarque :
• Un historique des recherches pourra être un plus

## Page /graph
Nous voulons afficher de la data collectée sous forme de CSV dans un graph.

L’objectif est d’afficher les courbes de crédit, débit et balance en fonction du temps.
