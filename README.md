# 🤖 7Robot - Formation CAO SolidWorks (LMS Statique)

> **Plateforme web interactive et pas à pas de formation à la CAO sur SolidWorks**, conçue spécialement pour les membres de l'association de robotique **7Robot**.

Ce site statique a été développé avec une approche moderne, technique et responsive (Tailwind CSS, Vanilla JavaScript et HTML5), conçu pour être déployé gratuitement et en 30 secondes sur **GitHub Pages**.

---

## 🚀 Fonctionnalités clés

- 🧭 **Parcours pas à pas & Sommaire structuré :**
  - **Introduction :** Bienvenue dans la CAO & Philosophie paramétrique
  - **Module 1 :** L'aspect global (Le Cylindre & extrusion)
  - **Module 2 :** Focus Sketch (L'art de l'esquisse et des contraintes)
  - **Module 3 :** Extrusions avancées et symétries (Balayage, Révolution, Répétitions)
  - **Module 4 :** L'Assemblage et la mécanique (Le Servomoteur Feetech & Cinématique)
  - **Bilan & Certification :** Checklist d'homologation interne 7Robot

- 💾 **Persistance LocalStorage intégrée :**
  - Sauvegarde automatique des étapes validées par l'apprenant.
  - Calcul dynamique du pourcentage d'avancement global et par module.
  - Mémorisation de la dernière étape consultée lors du rafraîchissement de la page.
  - Option de réinitialisation de la progression en 1 clic.

- 🎨 **Design Technique & Dark Mode :**
  - Thème sombre d'ingénierie par défaut aux couleurs de **7Robot** (`#ff7d00`).
  - Bascule instantanée Sombre / Clair (mémorisée dans le navigateur).
  - Grille technique CAD Blueprint en arrière-plan.
  - Touches de raccourcis clavier tactiles `<kbd>`.

- 🖼️ **Encarts (Placeholders) d'illustrations & GIFs :**
  - Wireframes techniques CAD intégrés pour chaque étape.
  - Bouton interactif pour **tester en direct une capture d'écran locale ou un GIF** dans le navigateur sans toucher au code.
  - Guide complet des images dans `assets/images/README_IMAGES.md`.

- ⚠️ **Mise en forme pédagogique :**
  - **Blocs d'avertissement** (bordure ambre/rouge) : Pièges fréquents (esquisse bleue, perte de référence, jeux d'impression 3D).
  - **Blocs d'astuces** (bordure émeraude/cyan) : Raccourcis clavier majeurs (`S`, `Ctrl+8`, `F`, `D`, etc.).

- ⌨️ **Raccourcis clavier de navigation :**
  - `Flèche Droite (→)` : Étape suivante
  - `Flèche Gauche (←)` : Étape précédente
  - `Espace` : Marquer comme terminée / non terminée
  - `/` ou `Ctrl + K` : Focus rapide sur la recherche de chapitres

- 🖨️ **Export PDF / Cheat Sheet :**
  - Feuille de style d'impression optimisée pour imprimer une fiche mémo propre sans barre latérale.

---

## 📂 Structure du projet

```
Formation_solidworks/
├── index.html                   # Page principale de l'application LMS
├── pieces_solidworks/
│   └── fichier a prendre.zip   # Pack officiel 7Robot (Feetech STS2032, palonnier disque, SLDASM)
├── assets/
│   ├── css/
│   │   └── style.css            # Styles personnalisés, grille CAD et typographie
│   ├── js/
│   │   ├── course-data.js       # Base de données complète du cours (textes, étapes, astuces)
│   │   └── app.js               # Moteur LMS (navigation, LocalStorage, recherche, confettis)
│   └── images/
│       ├── logo_7robot.svg      # Logo officiel de l'association 7Robot
│       ├── boitier_feetech_assembly.png # Capture d'écran SolidWorks réelle du boîtier
│       └── README_IMAGES.md     # Guide des médias et cotes techniques
└── README.md                    # Documentation de déploiement et d'utilisation
```

---

## 💻 Comment lancer le site en local ?

### Méthode 1 : Double-clic direct
Double-cliquez simplement sur le fichier `index.html` pour l'ouvrir dans n'importe quel navigateur (Google Chrome, Firefox, Edge, Safari). Tout fonctionne hors-ligne !

### Méthode 2 : Avec une extension ou un serveur local
Si vous utilisez VS Code :
1. Installez l'extension **Live Server**.
2. Clic droit sur `index.html` ➔ **Open with Live Server**.

Ou via le terminal (si Python ou Node.js est installé) :
```bash
# Avec Python
python -m http.server 8000

# Ou avec npx
npx serve .
```

---

## 🌐 Déploiement gratuit sur GitHub Pages

Pour rendre la formation accessible à tous les membres du club en ligne via une URL `https://7robot.github.io/Formation_solidworks` :

1. **Créer un dépôt GitHub :**
   Créez un dépôt nommé par exemple `Formation_solidworks` sur l'organisation ou votre compte GitHub.
2. **Pousser les fichiers :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Formation SolidWorks 7Robot"
   git branch -M main
   git remote add origin https://github.com/<votre-user-ou-orga>/Formation_solidworks.git
   git push -u origin main
   ```
3. **Activer GitHub Pages :**
   - Sur GitHub, rendez-vous dans **Settings** ➔ **Pages**.
   - Dans **Source**, sélectionnez la branche `main` et le dossier `/ (root)`.
   - Cliquez sur **Save**.
   - En moins de 2 minutes, votre site est en ligne avec HTTPS gratuit !

---

## 👥 À propos de 7Robot
Association de robotique de l'ENSEEIHT (Toulouse) participant chaque année à la **Coupe de France de Robotique / Eurobot**.
Site web officiel : [7robot.fr](https://7robot.fr)
