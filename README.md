# Poudlard Academy

Mini-projet TypeScript composé de 6 exercices : un référentiel générique de sorciers et de sorts, avec des types utilitaires, des décorateurs de méthode et des type guards.

## Prérequis

- Node.js 22 ou plus récent

## Installation

```bash
npm install
```

## Commandes

```bash
npm start
npm run typecheck
npm run build
```

- `npm start` exécute le projet.
- `npm run typecheck` vérifie le typage sans générer de fichiers.
- `npm run build` compile le projet dans `dist/`.

## Exercices réalisés

1. Enregistrer un sorcier sans fournir d'identifiant (`NewWizard`).
2. Filtrer les sorciers par maison (`findByHouse`).
3. Gérer uniquement les événements de lancement de sorts (`Extract`).
4. Valider la puissance d'un sort avec un décorateur de méthode.
5. Mettre en cache les résultats d'une méthode avec un décorateur.
6. Renforcer les type guards (`isHouse`, `isWizard`).

## Structure

```
src/
  types.ts        types du domaine
  repository.ts   référentiel générique, sorciers et sorts
  decorators.ts   décorateurs ValidateSpellPower et Cache
  main.ts         tests des 6 exercices
```

## Auteur

safae elbrahmi