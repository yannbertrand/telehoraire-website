<script setup lang="ts">
defineProps<{
  categories: string[];
}>();

function getCategoryClass(category: string) {
  return `category--${category.replaceAll(/ /g, '-').toLowerCase()}`;
}
</script>

<template>
  <div class="categories">
    <span
      v-for="category of categories"
      :key="category"
      class="category"
      :class="getCategoryClass(category)"
      v-html="category"
    ></span>
  </div>
</template>

<style>
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pico-grid-column-gap);
}

.category {
  background-color: var(--pico-secondary-background);
  border-radius: var(--pico-border-radius);
  color: var(--pico-secondary-inverse);
  display: inline-block;
  font-size: calc(var(--pico-font-size) * 0.7);
  padding: calc(var(--pico-spacing) / 4) calc(var(--pico-spacing));
}

/**
 * Prompted to ChatGPT, see details lower
 */
.category--magazine {
  background-color: var(--pico-color-blue-100);
  color: #000;
}

.category--jeunesse {
  background-color: var(--pico-color-green-200);
  color: #000;
}

.category--information {
  background-color: var(--pico-color-grey-200);
  color: #000;
}

.category--services {
  background-color: var(--pico-color-indigo-150);
  color: #000;
}

.category--télé-achat {
  background-color: var(--pico-color-yellow-200);
  color: #000;
}

.category--série {
  background-color: var(--pico-color-pink-100);
  color: #000;
}

.category--drame {
  background-color: var(--pico-color-red-150);
  color: #000;
}

.category--art-de-vivre {
  background-color: var(--pico-color-fuchsia-100);
  color: #000;
}

.category--gastronomie {
  background-color: var(--pico-color-amber-150);
  color: #000;
}

.category--divertissement {
  background-color: var(--pico-color-violet-150);
  color: #000;
}

.category--jeu {
  background-color: var(--pico-color-lime-200);
  color: #000;
}

.category--journal {
  background-color: var(--pico-color-slate-200);
  color: #000;
}

.category--météo {
  background-color: var(--pico-color-cyan-150);
  color: #000;
}

.category--action {
  background-color: var(--pico-color-yellow-100);
  color: #000;
}

.category--suspense {
  background-color: var(--pico-color-purple-200);
  color: #fff;
}

.category--espionnage {
  background-color: var(--pico-color-indigo-300);
  color: #fff;
}

.category--programme {
  background-color: var(--pico-color-grey-150);
  color: #000;
}

.category--téléréalité {
  background-color: var(--pico-color-fuchsia-250);
  color: #fff;
}

.category--loterie {
  background-color: var(--pico-color-green-300);
  color: #000;
}

.category--humour {
  background-color: var(--pico-color-pink-100);
  color: #000;
}

.category--policier {
  background-color: var(--pico-color-blue-200);
  color: #000;
}

.category--programme-indéterminé {
  background-color: var(--pico-color-grey-300);
  color: #000;
}

.category--documentaire {
  background-color: var(--pico-color-blue-150);
  color: #000;
}

.category--société {
  background-color: var(--pico-color-violet-300);
  color: #000;
}

.category--téléfilm {
  background-color: var(--pico-color-red-200);
  color: #000;
}

.category--culture {
  background-color: var(--pico-color-indigo-200);
  color: #000;
}

.category--sport {
  background-color: var(--pico-color-amber-200);
  color: #000;
}

.category--consommation {
  background-color: var(--pico-color-green-250);
  color: #000;
}

.category--musique {
  background-color: var(--pico-color-indigo-150);
  color: #fff;
}

.category--histoire {
  background-color: var(--pico-color-purple-300);
  color: #fff;
}

.category--politique {
  background-color: var(--pico-color-slate-300);
  color: #000;
}

.category--nature {
  background-color: var(--pico-color-jade-300);
  color: #000;
}

.category--découvertes {
  background-color: var(--pico-color-cyan-300);
  color: #000;
}

.category--fiction {
  background-color: var(--pico-color-fuchsia-200);
  color: #000;
}

.category--talk-show {
  background-color: var(--pico-color-blue-250);
  color: #000;
}

.category--justice {
  background-color: var(--pico-color-red-300);
  color: #000;
}

.category--religions {
  background-color: var(--pico-color-purple-250);
  color: #000;
}

.category--dessin-animé {
  background-color: var(--pico-color-yellow-100);
  color: #000;
}

.category--animation {
  background-color: var(--pico-color-orange-200);
  color: #000;
}

.category--multisports {
  background-color: var(--pico-color-amber-300);
  color: #000;
}

.category--football {
  background-color: var(--pico-color-green-350);
  color: #000;
}

.category--western {
  background-color: var(--pico-color-brown-200);
  color: #000;
}

.category--cinéma {
  background-color: var(--pico-color-purple-200);
  color: #fff;
}

.category--film {
  background-color: var(--pico-color-red-250);
  color: #000;
}

.category--court-métrage {
  background-color: var(--pico-color-indigo-250);
  color: #000;
}

.category--musicale {
  background-color: var(--pico-color-indigo-400);
  color: #fff;
}

.category--spectacle {
  background-color: var(--pico-color-pink-250);
  color: #000;
}

.category--variétés {
  background-color: var(--pico-color-lime-250);
  color: #000;
}

.category--rugby {
  background-color: var(--pico-color-green-450);
  color: #000;
}

.category--loisirs {
  background-color: var(--pico-color-yellow-250);
  color: #000;
}

.category--ballet {
  background-color: var(--pico-color-fuchsia-300);
  color: #000;
}

.category--ballet-classique {
  background-color: var(--pico-color-indigo-300);
  color: #fff;
}

.category--comédie-dramatique {
  background-color: var(--pico-color-red-300);
  color: #000;
}

.category--comédie {
  background-color: var(--pico-color-orange-150);
  color: #000;
}

.category--science-fiction {
  background-color: var(--pico-color-indigo-400);
  color: #fff;
}

.category--animalier {
  background-color: var(--pico-color-jade-150);
  color: #000;
}

.category--fantastique {
  background-color: var(--pico-color-purple-450);
  color: #fff;
}
/**
 * Prompt to GPT-4o (2024/10/01):
voici des couleurs dans le fichier .json joint, il s'y trouve des objets de couleur où sont contenues des variantes avec une valeur hexadécimale de couleur. Chacune d'entre elles sont disponibles sous forme de variable CSS au format --pico-color-${couleur}-${variante}.

j'ai également des catégories de programme TV : ["Magazine","Jeunesse","Information","Services","Télé-achat","Série","Drame","Art de vivre","Gastronomie","Divertissement","Jeu","Journal","Météo","Action","Suspense","Espionnage","Programme","Téléréalité","Loterie","Humour","Policier","Programme indéterminé","Documentaire","Société","Téléfilm","Culture","Sport","Consommation","Musique","Histoire","Politique","Nature","Découvertes","Fiction","Talk show","Justice","Religions","Dessin animé","Animation","Multisports","Football","Western","Cinéma","Film","Court métrage","Musicale","Spectacle","Variétés","Rugby","Loisirs","Ballet","Ballet classique","Comédie dramatique","Comédie","Science-fiction","Animalier","Fantastique","Golf","Interview","Comédie musicale","Voile","Pornographie","Sciences et technique","Santé","Civilisations","Jardinage","Education","Economie","Autre","Beaux-arts","Pop & Rock","Fitness","Classique","Emploi","Automobilisme","Motocyclisme","Clips","Mode","Débat parlementaire","Débat","One man show","Ballet contemporain","Opéra","Rock-pop","Théâtre","Futsal","Spéciale","Sports fun","Cyclisme","VTT","Fléchettes","MMA","Hippisme","Biographie","Fin","Rallye","Formule 1","Formule 2","Horreur","Doc Histoire","Mag Société","Doc Société","Doc Sciences","Doc Cinéma"]. Les noms de ces catégories sont mis en minuscule et les espaces remplacés par des tirets. Des classes CSS sont crées avec ces noms préfixées par .category--${categorie}.

Je cherche à appliquer pour ces classes CSS de catégories un fond de couleur une variable CSS adaptée et une couleur de texte noire au blanche pour que le contraste soit le meilleur.

Le résultat attendu est sous cette forme :
.category--action {
  background-color: var(--pico-color-yellow-100);
  color: #000;
}

Si des noms de catégories sont proches, des couleurs similaires peuvent être utilisées.

Fais le pour toutes les catégories disponibles.
 */
</style>
