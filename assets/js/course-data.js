/**
 * ==============================================================================
 * 7ROBOT ACADEMY - FORMATION CAO SOLIDWORKS
 * Structure de données du cours (Modules, Chapitres, Instructions, Astuces)
 * Version enrichie avec images réelles, GIFs animés et bannières "Nouveau Projet"
 * ==============================================================================
 */

const COURSE_MODULES = [
  {
    id: "module-0",
    title: "Introduction : Bienvenue dans la CAO",
    shortTitle: "Intro : Bases & Philosophie",
    icon: "compass",
    description: "Découverte de l'interface SolidWorks, philosophie de la modélisation paramétrique et règles d'ingénierie 7Robot."
  },
  {
    id: "module-1",
    title: "Module 1 : L'aspect global (Le Cylindre)",
    shortTitle: "Mod 1 : Le Cylindre & Extrusion",
    icon: "cube",
    description: "Prise en main des plans de référence, esquisse d'un cercle coté et première extrusion volumique 3D."
  },
  {
    id: "module-2",
    title: "Module 2 : Focus Sketch (L'art de l'esquisse et des contraintes)",
    shortTitle: "Mod 2 : L'art de l'esquisse",
    icon: "pencil",
    description: "L'origine absolue, les relations géométriques, passer du bleu au noir et les outils d'esquisse accélérateurs."
  },
  {
    id: "module-3",
    title: "Module 3 : Extrusions avancées et symétries",
    shortTitle: "Mod 3 : Fonctions 3D avancées",
    icon: "sparkles",
    description: "Balayage le long d'une courbe, révolution cylindrique et gain de temps grâce aux symétries et répétitions 3D."
  },
  {
    id: "module-4",
    title: "Module 4 : L'Assemblage et la mécanique (Le Servomoteur Feetech)",
    shortTitle: "Mod 4 : Assemblage & Servo Feetech",
    icon: "puzzle",
    description: "Conception descendante en assemblage (Top-Down) : insertion du Feetech en premier, création du boîtier à glissière et du couvercle fraisé directement dans l'assemblage, inserts laiton M3 (Ø4.6mm) et cinématique."
  }
];

const COURSE_STEPS = [
  // --------------------------------------------------------------------------
  // MODULE 0 : INTRODUCTION
  // --------------------------------------------------------------------------
  {
    id: "step-0-1",
    moduleIndex: 0,
    stepNumber: "0.1",
    title: "Présentation de l'interface SolidWorks & Philosophie paramétrique",
    moduleTitle: "Introduction : Bienvenue dans la CAO",
    subtitle: "Comprendre l'environnement de travail et le paradigme de conception paramétrique",
    category: "Fondations CAO",
    duration: "10 min",
    difficulty: "Débutant",
    summary: "Avant de tracer le moindre trait, découvrez l'agencement des menus, le FeatureManager et comment SolidWorks raisonne en 3D.",
    imageSrc: "assets/images/intro_interface_solidworks.jpg",
    objectives: [
      "Identifier les 4 zones maîtresses de l'écran SolidWorks",
      "Comprendre la hiérarchie fondamentale : Esquisse 2D ➔ Fonction 3D",
      "Appréhender la chronologie de l'arbre de création (FeatureManager)",
      "Adopter les bonnes pratiques de rigueur et de sauvegarde du club 7Robot"
    ],
    instructions: [
      {
        title: "1. Les 4 zones maîtresses de l'espace de travail",
        text: "Lorsque vous ouvrez un nouveau fichier Pièce (<code>.SLDPRT</code>), l'interface s'articule autour de 4 zones indispensables :",
        bullets: [
          "<strong>Le CommandManager (en haut) :</strong> Le ruban d'onglets dynamique. Les plus importants sont <em>Esquisse</em> (pour dessiner en 2D), <em>Fonctions</em> (pour extruder/couper en 3D) et <em>Évaluer</em> (pour mesurer et peser).",
          "<strong>L'Arbre de création FeatureManager (à gauche) :</strong> Le véritable journal de bord de votre pièce. Chaque plan, esquisse et fonction y est empilé chronologiquement du haut vers le bas.",
          "<strong>La Zone graphique (au centre) :</strong> L'univers 3D infini dans lequel vous modélisez. La navigation s'effectue entièrement à la souris.",
          "<strong>La Barre d'affichage visée haute (en haut de la zone 3D) :</strong> Permet d'ajuster instantanément la vue (Zoom au mieux [F], Vues standard [Espace], Mode ombré avec ou sans arêtes)."
        ]
      },
      {
        title: "2. Qu'est-ce que la modélisation paramétrique ?",
        text: "Contrairement à des logiciels de maillage artistique (comme Blender), SolidWorks est un modeleur <strong>paramétrique basé sur des fonctions</strong> :",
        bullets: [
          "<strong>Piloté par des cotes :</strong> Vous ne dessinez pas 'à peu près'. Vous appliquez une cote numérique (ex: 45.0 mm). Si demain vous modifiez cette valeur à 52.0 mm, toute la pièce s'adapte automatiquement sans avoir à tout redessiner.",
          "<strong>Historique chronologique :</strong> La pièce se construit étape par étape dans le temps. Une fonction B dépend souvent d'une fonction A. L'arbre FeatureManager permet de remonter dans le passé pour modifier la genèse de l'objet.",
          "<strong>Intégrité d'usinage :</strong> Chaque arête et face possède une équation mathématique exacte (NURBS / B-Rep), indispensable pour exporter vers la découpe laser (DXF) ou l'impression 3D (STL / STEP)."
        ]
      },
      {
        title: "3. La navigation à la souris (indispensable)",
        text: "Prenez 30 secondes pour mémoriser cette gestuelle vitale au club :",
        bullets: [
          "<strong>Faire pivoter la vue (Rotation 3D) :</strong> Maintenir le clic molette (bouton central) enfoncé et déplacer la souris.",
          "<strong>Zoomer / Dézoomer :</strong> Faire rouler la molette (vers l'avant ou l'arrière selon votre habitude).",
          "<strong>Glisser la vue (Translation / Pan) :</strong> Maintenir la touche <kbd class='shortcut-key'>Ctrl</kbd> + Clic molette enfoncé et déplacer la souris.",
          "<strong>Recentrer instantanément :</strong> Appuyer sur la touche <kbd class='shortcut-key'>F</kbd> (Fit to screen)."
        ]
      }
    ],
    placeholder: {
      title: "Vue d'ensemble de l'interface SolidWorks",
      caption: "Capture d'écran haute résolution montrant le CommandManager, le FeatureManager et la zone 3D.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "intro_interface_solidworks.jpg",
      svgType: "interface"
    },
    warnings: [
      {
        title: "Le piège du crash imprévu : Sauvegardez !",
        text: "SolidWorks est un logiciel puissant et exigeant en calcul. Lors de la Coupe de France de Robotique, un crash de PC à 2 heures de l'homologation peut coûter cher ! <strong>Appliquez le réflexe 7Robot : <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> toutes les 5 minutes</strong> !"
      }
    ],
    tips: [
      {
        title: "Le Menu Raccourcis ultra-rapide 'S'",
        text: "Appuyez sur la touche <kbd class='shortcut-key'>S</kbd> n'importe où sur l'écran : une mini-palette contextuelle surgit sous votre curseur avec vos outils favoris ! Personnalisable, c'est le raccourci le plus productif de SolidWorks."
      },
      {
        title: "La Vue Normale à l'esquisse",
        text: "Pour regarder une face bien en face (perpendiculairement) sans vous tordre le cou, sélectionnez la face ou l'esquisse et appuyez sur <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd>."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 1 : LE CYLINDRE
  // --------------------------------------------------------------------------
  {
    id: "step-1-1",
    moduleIndex: 1,
    stepNumber: "1.1",
    title: "Choix du plan de référence (Plan de Face)",
    moduleTitle: "Module 1 : L'aspect global (Le Cylindre)",
    subtitle: "Sélectionner le bon plan dans l'espace pour démarrer votre esquisse",
    category: "Positionnement spatial",
    duration: "6 min",
    difficulty: "Débutant",
    summary: "Tout objet commence par une esquisse 2D tracée sur un plan. Apprenez à choisir judicieusement le plan de référence pour anticiper l'impression 3D et l'assemblage.",
    newProjectBanner: {
      badge: "NOUVEAU DOCUMENT SOLIDWORKS",
      action: "Initialisation du premier projet",
      title: "Action requise : Ouvrir un Nouveau Projet Pièce",
      instructions: [
        "Lancez SolidWorks sur votre poste informatique.",
        "Cliquez sur <strong>Fichier ➔ Nouveau</strong> (ou raccourci clavier <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd>).",
        "Sélectionnez le modèle <strong>Pièce</strong> (icône cube rouge <code>.SLDPRT</code>) et validez par <strong>OK</strong>.",
        "<strong>Vérification vitale des unités :</strong> Regardez tout en bas à droite de votre écran SolidWorks. Assurez-vous que le système est réglé sur <strong>MMGS (millimètre, gramme, seconde)</strong> et non en pouces (IPS) !"
      ]
    },
    imageSrc: "assets/images/mod1_choix_plan_face.svg",
    objectives: [
      "Comprendre les 3 plans cartésiens de base (Face, Dessus, Droite)",
      "Sélectionner le Plan de Face et ouvrir une esquisse",
      "Orienter la vue perpendiculairement avec le raccourci Normal à"
    ],
    instructions: [
      {
        title: "1. Les 3 plans de référence par défaut",
        text: "Dans le FeatureManager (arbre de création à gauche), SolidWorks vous propose 3 plans invisibles par défaut :",
        bullets: [
          "<strong>Plan de face (Front Plane) :</strong> Idéal pour les pièces vues de l'avant (ex: bouclier avant du robot, platine capteurs).",
          "<strong>Plan de dessus (Top Plane) :</strong> Représente le 'sol' ou la table de jeu Eurobot. Parfait pour les plaques de châssis ou socles.",
          "<strong>Plan de droite (Right Plane) :</strong> Pour les vues latérales (ex: flasque de roue, support de chenille)."
        ]
      },
      {
        title: "2. Activer l'esquisse sur le Plan de Face",
        text: "Pour notre pièce d'apprentissage (un cylindre mécanique / axe de guidage) :",
        bullets: [
          "Faites un <strong>clic gauche</strong> sur <em>Plan de face</em> dans l'arbre de création à gauche.",
          "Dans la petite barre d'outils contextuelle qui apparaît, cliquez sur la première icône : <strong>Esquisse</strong> (crayon bleu sur fond blanc).",
          "Remarquez que la zone graphique bascule automatiquement face à vous (vue normale) et que deux flèches rouges perpendiculaires apparaissent au centre : c'est <strong>l'Origine (0,0,0)</strong> !",
          "Dans le coin supérieur droit de la zone graphique, vous devez apercevoir le symbole de sortie d'esquisse (coche bleue et croix rouge). Cela prouve que vous êtes bien 'en mode dessin'."
        ]
      }
    ],
    placeholder: {
      title: "Sélection du Plan de Face et repère 3D",
      caption: "Diagramme technique montrant les 3 plans cartésiens et la sélection du Plan de Face pour l'esquisse.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod1_choix_plan_face.svg",
      svgType: "sketch"
    },
    warnings: [
      {
        title: "Attention : Ne dessinez jamais 'dans le vide'",
        text: "Si vous tentez de tracer une ligne sans avoir sélectionné de plan au préalable, SolidWorks vous demandera 'Veuillez sélectionner un plan'. Prenez toujours l'habitude de cliquer sur le plan souhaité d'abord."
      }
    ],
    tips: [
      {
        title: "Anticiper l'impression 3D !",
        text: "Chez 7Robot, 80% des pièces sont imprimées en 3D (PLA / PETG). Choisissez toujours votre plan initial en pensant à la face qui reposera à plat sur le plateau d'impression (Bed). Cela évite les supports superflus !"
      }
    ]
  },
  {
    id: "step-1-2",
    moduleIndex: 1,
    stepNumber: "1.2",
    title: "Tracer un cercle et appliquer une cote intelligente",
    moduleTitle: "Module 1 : L'aspect global (Le Cylindre)",
    subtitle: "Dessiner la forme 2D de base et verrouiller ses dimensions géométriques",
    category: "Esquisse fondamentale",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "Apprenez à utiliser l'outil Cercle, à ancrer son centre sur l'origine du repère et à lui donner un diamètre exact avec la Cote Intelligente.",
    imageSrc: "assets/images/mod1_cercle_cote_30.svg",
    objectives: [
      "Sélectionner et tracer un cercle à partir de son centre",
      "Ancrer le centre du cercle rigoureusement sur l'origine (point rouge)",
      "Appliquer une Cote Intelligente (Smart Dimension) de 30 mm",
      "Vérifier que le cercle passe du bleu au noir (statut totalement contraint)"
    ],
    instructions: [
      {
        title: "1. Tracer le cercle de base",
        text: "Votre esquisse étant ouverte sur le Plan de Face :",
        bullets: [
          "Dans l'onglet <strong>Esquisse</strong> du CommandManager, cliquez sur l'outil <strong>Cercle</strong> (ou tapez <kbd class='shortcut-key'>S</kbd> puis cliquez sur le cercle).",
          "Approchez le curseur de l'origine rouge : un point orange apparaît et un petit carré jaune avec deux anneaux concentriques vous signale la coïncidence automatique.",
          "Faites un <strong>clic gauche sur l'origine</strong> pour placer le centre.",
          "Écartez la souris (sans maintenir le clic) pour donner un rayon approximatif, puis faites un <strong>second clic gauche</strong> pour valider la forme brute."
        ]
      },
      {
        title: "2. Cotation intelligente (Smart Dimension)",
        text: "Pour l'instant, le contour du cercle est bleu : sa taille n'est pas définie !",
        bullets: [
          "Cliquez sur l'outil <strong>Cotation intelligente</strong> (icône avec une flèche double cote) ou tapez la touche raccourci <kbd class='shortcut-key'>D</kbd>.",
          "Cliquez sur la circonférence de votre cercle, puis déplacez la souris vers l'extérieur et cliquez pour poser la cote.",
          "Une petite fenêtre de saisie 'Modifier' s'ouvre : saisissez <code>30</code> (mm) et appuyez sur la touche <kbd class='shortcut-key'>Entrée</kbd>.",
          "Observez : la circonférence du cercle devient immédiatement <strong>noire</strong>. Votre esquisse est parfaite !"
        ]
      }
    ],
    placeholder: {
      title: "Tracé du cercle coté à Ø30 mm sur l'origine",
      caption: "Cercle totalement contraint (noir) centré sur l'origine rouge avec boîte de dialogue Modifier.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod1_cercle_cote_30.svg",
      svgType: "dimension"
    },
    warnings: [
      {
        title: "Ne cotez jamais deux fois la même chose !",
        text: "Si vous tentez de réappliquer une seconde cote de diamètre sur le même cercle, SolidWorks affichera un message d'alerte : 'Rendre la cote pilotée ?'. Une géométrie ne peut pas avoir deux maîtres. Cliquez sur Annuler."
      }
    ],
    tips: [
      {
        title: "La roulette pour zoomer sur le curseur",
        text: "Dans SolidWorks, le zoom à la molette s'effectue exactement à l'endroit où se trouve la pointe de votre souris. Si votre cercle disparaît, pointez le centre de l'écran et appuyez sur <kbd class='shortcut-key'>F</kbd>."
      }
    ]
  },
  {
    id: "step-1-3",
    moduleIndex: 1,
    stepNumber: "1.3",
    title: "Première fonction 3D : L'extrusion simple (Bossage)",
    moduleTitle: "Module 1 : L'aspect global (Le Cylindre)",
    subtitle: "Donner du volume à votre esquisse 2D pour créer un solide tridimensionnel",
    category: "Modélisation 3D",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "Transformez votre cercle 2D en cylindre plein d'une longueur de 50 mm grâce à la fonction Bossage/Base extrudé.",
    imageSrc: "assets/images/mod1_extrusion_bossage_cylindre.svg",
    objectives: [
      "Bascule la vue vers l'onglet Fonctions",
      "Activer la fonction Bossage/Base extrudé(e)",
      "Comprendre la différence entre condition 'Borgne' et 'Plan Milieu'",
      "Valider et observer le résultat dans l'arbre FeatureManager"
    ],
    instructions: [
      {
        title: "1. Lancer l'extrusion volumique",
        text: "Votre cercle de 30 mm étant tracé et sélectionné :",
        bullets: [
          "Cliquez sur l'onglet <strong>Fonctions</strong> (tout à gauche du CommandManager).",
          "Cliquez sur la première fonction : <strong>Bossage/Base extrudé</strong>.",
          "La vue bascule instantanément en 3D isométrique et un aperçu jaune du cylindre apparaît."
        ]
      },
      {
        title: "2. Paramétrer la condition de fin et la longueur",
        text: "Dans le volet de gauche (PropertyManager) :",
        bullets: [
          "<strong>Direction 1 :</strong> Par défaut, la condition est sur <em>Borgne (Blind)</em>. Cela signifie que la matière pousse dans une seule direction.",
          "<strong>L'astuce 7Robot 'Plan Milieu' :</strong> Déroulez le menu et choisissez <strong>Plan Milieu (Mid Plane)</strong>. La matière sera répartie symétriquement : 25 mm vers l'avant et 25 mm vers l'arrière du plan initial !",
          "<strong>Profondeur (D1) :</strong> Indiquez <code>50 mm</code>.",
          "Cliquez sur la <strong>coche verte</strong> en haut à gauche (ou appuyez sur la touche <kbd class='shortcut-key'>Entrée</kbd>)."
        ]
      },
      {
        title: "3. Admirer votre première pièce 3D",
        text: "Félicitations ! Vous venez de concevoir votre premier cylindre 3D. Observez l'arbre à gauche : votre esquisse a été absorbée à l'intérieur de la fonction <code>Bossage-Extru.1</code> (cliquez sur la petite flèche à côté pour la retrouver)."
      }
    ],
    placeholder: {
      title: "Extrusion 3D du cylindre avec condition Plan Milieu",
      caption: "Cylindre extrudé à 50 mm avec conservation de la symétrie par rapport au plan d'origine.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod1_extrusion_bossage_cylindre.svg",
      svgType: "3d"
    },
    warnings: [
      {
        title: "Pourquoi éviter l'extrusion 'Borgne' quand c'est possible ?",
        text: "Si vous extrudez en 'Borgne', votre plan de face reste collé à une extrémité. En choisissant 'Plan Milieu', votre plan de face coupe la pièce pile au centre. C'est inestimable plus tard pour faire des perçages ou des symétries sans devoir recréer de plan auxiliaire !"
      }
    ],
    tips: [
      {
        title: "Modifier une cote en 2 clics",
        text: "Pour changer la longueur du cylindre sans rouvrir la fonction, <strong>double-cliquez simplement sur le cylindre dans la zone 3D</strong> : les cotes bleues s'affichent à l'écran ! Double-cliquez sur le 50, changez-le en 60, puis tapez <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>B</kbd> (Reconstruire)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 2 : FOCUS SKETCH
  // --------------------------------------------------------------------------
  {
    id: "step-2-1",
    moduleIndex: 2,
    stepNumber: "2.1",
    title: "L'importance vitale de l'origine et des lignes de construction",
    moduleTitle: "Module 2 : Focus Sketch (L'art de l'esquisse et des contraintes)",
    subtitle: "Ancrer son esquisse dans l'univers 3D et structurer avec des traits de construction",
    category: "Règles d'or de l'esquisse",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Découvrez pourquoi une esquisse flottante sans lien avec l'origine est la cause n°1 d'échec en CAO, et comment les lignes de construction structurent vos mécanismes.",
    newProjectBanner: {
      badge: "NOUVEAU PROJET PIÈCE",
      action: "Sauvegarde & Nouveau document",
      title: "Ok, maintenant enregistrez et ouvrez un NOUVEAU PROJET Pièce !",
      instructions: [
        "<strong>Sauvegarder le cylindre :</strong> Appuyez sur <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> et nommez votre fichier <code>01_Cylindre_Base.SLDPRT</code>.",
        "<strong>Fermer la pièce :</strong> Fermez l'onglet avec <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>W</kbd>.",
        "<strong>Ouvrir un nouveau projet :</strong> Pressez <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ Choisissez <strong>Pièce</strong> ➔ Cliquez sur <strong>OK</strong>.",
        "Nous repartons d'un espace de travail vierge pour explorer à fond la géométrie et les contraintes 2D !"
      ]
    },
    imageSrc: "assets/images/mod2_origine_lignes_construction.svg",
    objectives: [
      "Comprendre le rôle du point d'origine absolu (0,0,0)",
      "Tracer et utiliser une Ligne de construction (Centerline)",
      "Distinguer trait continu (matière) et trait d'axe (référence virtuelle)",
      "Convertir n'importe quelle entité en géométrie de construction"
    ],
    instructions: [
      {
        title: "1. Pourquoi l'origine est-elle sacrée ?",
        text: "Dans SolidWorks, l'espace est infini. Si vous tracez un rectangle au milieu de nulle part sans l'attacher à l'origine rouge :",
        bullets: [
          "L'esquisse peut glisser ou se téléporter dès que vous modifiez une cote.",
          "Dans un assemblage, SolidWorks ne saura pas où positionner la pièce automatiquement.",
          "Les machines de fabrication (découpeuse laser, imprimante 3D) utilisent l'origine comme référence machine X0/Y0/Z0."
        ]
      },
      {
        title: "2. Les Lignes de construction (Centerlines)",
        text: "Une ligne de construction est représentée par un <strong>trait mixte tireté</strong> (axe) :",
        bullets: [
          "Elle est <strong>invisible pour les fonctions 3D</strong> : elle ne créera pas de matière lors de l'extrusion.",
          "Elle sert de squelette géométrique : créer un axe de symétrie, relier deux centres de perçages, définir une direction d'effort ou matérialiser un entraxe moteur.",
          "Pour en tracer une : cliquez sur la petite flèche noire à côté de l'outil <em>Ligne</em> et choisissez <strong>Ligne de construction</strong>.",
          "Pour convertir un trait existant : sélectionnez le trait et cochez la case <strong>Pour la construction</strong> dans le panneau de gauche."
        ]
      }
    ],
    placeholder: {
      title: "Lignes de construction tiretées et ancrage d'entraxe",
      caption: "Diagramme illustrant l'entraxe de deux perçages reliés par une ligne de construction à l'origine.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod2_origine_lignes_construction.svg",
      svgType: "grid"
    },
    warnings: [
      {
        title: "Le piège de la boucle non fermée",
        text: "Si vous laissez par erreur un segment continu au lieu d'une ligne de construction à l'intérieur d'un contour, SolidWorks refusera d'extruder en disant 'L'esquisse contient des contours sécants ou ouverts'. Pensez à toujours basculer vos lignes d'aide en mode construction !"
      }
    ],
    tips: [
      {
        title: "Raccourci de bascule rapide",
        text: "Sélectionnez n'importe quel segment ou cercle et cliquez sur la mini-icône 'Pour la construction' qui apparaît immédiatement sous le curseur. Vous pouvez basculer d'avant en arrière en 1 clic !"
      }
    ]
  },
  {
    id: "step-2-2",
    moduleIndex: 2,
    stepNumber: "2.2",
    title: "Les relations géométriques : La vraie force du paramétrique",
    moduleTitle: "Module 2 : Focus Sketch (L'art de l'esquisse et des contraintes)",
    subtitle: "Remplacer des dizaines de cotes numériques par des contraintes logiques",
    category: "Contraintes géométriques",
    duration: "12 min",
    difficulty: "Intermédiaire",
    summary: "Apprenez à lier des entités entre elles grâce aux relations géométriques fondamentales : Tangence, Égalité, Alignement, Perpendicularité et Coïncidence.",
    imageSrc: "assets/images/mod2_relations_geometriques.svg",
    objectives: [
      "Maîtriser la sélection multiple avec la touche Ctrl",
      "Appliquer la relation d'Égalité pour uniformiser des diamètres",
      "Utiliser la Tangence pour concevoir des arrondis parfaits",
      "Aligner horizontalement ou verticalement des centres de perçages"
    ],
    instructions: [
      {
        title: "1. Comment ajouter une relation géométrique ?",
        text: "C'est la méthode reine de SolidWorks :",
        bullets: [
          "Maintenez la touche <kbd class='shortcut-key'>Ctrl</kbd> enfoncée sur votre clavier.",
          "Cliquez sur 2 entités (ex: un cercle et une ligne, ou deux cercles différents).",
          "Relâchez la touche <kbd class='shortcut-key'>Ctrl</kbd> : une mini-barre d'outils apparaît avec les relations possibles, également listées dans le panneau de gauche <em>Ajouter des relations</em>.",
          "Cliquez sur la relation souhaitée (ex: <em>Égalité</em> ou <em>Tangence</em>)."
        ]
      },
      {
        title: "2. Les relations incontournables en robotique",
        text: "Voici les relations que vous utiliserez quotidiennement au club :",
        bullets: [
          "<strong>Égalité (=) :</strong> Si vous avez 8 trous de fixation pour des vis M3, appliquez une relation d'égalité sur tous les cercles et ne cotez que le premier à 3.2 mm. Si vous devez passer en vis M4 (4.2 mm), vous ne modifiez qu'une seule cote et les 8 trous se mettent à jour !",
          "<strong>Tangence (⌒) :</strong> Raccorde parfaitement un arc de cercle avec une ligne droite sans cassure ni angle vif. Indispensable pour les lumières oblongues et bras robotisés.",
          "<strong>Horizontal / Vertical :</strong> Force deux points ou un segment à être parfaitement alignés sur les axes X ou Y du repère.",
          "<strong>Coïncidence :</strong> Fusionne deux points en un seul, ou plaque un point sur une droite.",
          "<strong>Colinéaire :</strong> Aligne deux segments de droite sur la même direction infinie."
        ]
      }
    ],
    placeholder: {
      title: "Les 4 relations géométriques reines de la robotique",
      caption: "Fiche technique récapitulative : Égalité, Tangence, Concentricité et Alignement.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod2_relations_geometriques.svg",
      svgType: "relations"
    },
    warnings: [
      {
        title: "Ne figez jamais avec la contrainte 'Fixe' !",
        text: "Il existe une relation en forme de petite ancre marine appelée 'Fixe'. Elle ancre brutalement une entité à sa position écran sans logique géométrique. C'est <strong>formellement déconseillé chez 7Robot</strong> : utilisez toujours des cotes et relations explicites par rapport à l'origine !"
      }
    ],
    tips: [
      {
        title: "Afficher ou masquer les symboles verts",
        text: "Lorsque votre esquisse se complexifie, les petits carrés verts de relations peuvent encombrer l'écran. Dans la barre de visée haute, cliquez sur l'icône 'Lunettes' (ou Œil) ➔ basculez <em>Afficher les relations d'esquisse</em>."
      }
    ]
  },
  {
    id: "step-2-3",
    moduleIndex: 2,
    stepNumber: "2.3",
    title: "Objectif : Passer du bleu au noir (Totalement contraint)",
    moduleTitle: "Module 2 : Focus Sketch (L'art de l'esquisse et des contraintes)",
    subtitle: "Comprendre le code couleur universel de SolidWorks et fiabiliser sa conception",
    category: "Contrôle qualité CAO",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Le code couleur de SolidWorks est votre meilleur ami. Apprenez à traquer les degrés de liberté résiduels pour atteindre le Graal de l'ingénieur : le statut Totalement contraint.",
    imageSrc: "assets/images/mod2_bleu_vers_noir.svg",
    objectives: [
      "Déchiffrer les 4 couleurs fondamentales (Bleu, Noir, Rouge, Jaune)",
      "Localiser l'indicateur d'état dans la barre d'état inférieure",
      "Utiliser la technique du 'test de traction' à la souris pour trouver les cotes manquantes",
      "Éviter et réparer les esquisses sur-contraintes"
    ],
    instructions: [
      {
        title: "1. La signification des couleurs d'esquisse",
        text: "Chaque trait ou point sur votre écran communique son état par sa couleur :",
        bullets: [
          "🔵 <strong>BLEU (Sous-contraint) :</strong> Il manque des cotes ou des relations géométriques. L'entité peut bouger ou changer de taille par inadvertance !",
          "⚫ <strong>NOIR (Totalement contraint) :</strong> La forme, la taille et la position dans l'espace sont verrouillées à 100% par des lois mathématiques. <strong>C'est l'objectif obligatoire avant toute extrusion chez 7Robot !</strong>",
          "🔴 <strong>ROUGE / JAUNE (Sur-contraint / Conflit) :</strong> Deux cotes ou relations se contredisent mathématiquement (ex: une ligne forcée horizontale et verticale en même temps). L'esquisse est en erreur.",
          "🟤 <strong>MARRON (Non résolu / Perte de référence) :</strong> Une arête liée à une pièce supprimée ne trouve plus son ancre."
        ]
      },
      {
        title: "2. L'astuce du 'Test de traction' (Drag test)",
        text: "Votre esquisse a des traits bleus mais vous ne savez pas quelle cote il manque ?",
        bullets: [
          "Appuyez sur <kbd class='shortcut-key'>Échap</kbd> pour désactiver tout outil de cotation.",
          "Attrapez un point bleu avec le <strong>clic gauche maintenu et secouez la souris</strong> !",
          "Ce qui bouge à l'écran vous montre exactement le degré de liberté manquant (ex: si le cercle grossit, il manque son diamètre ; s'il glisse latéralement, il manque sa distance en X par rapport à l'origine).",
          "Regardez tout en bas à droite de la fenêtre SolidWorks : le texte <em>Sous-contraint</em> doit se transformer en <strong>Totalement contraint</strong>."
        ]
      }
    ],
    placeholder: {
      title: "Comparatif visuel : Bleu (Danger) vs Noir (Totalement contraint)",
      caption: "Mise en regard des deux statuts d'esquisse et de leurs conséquences en atelier robotique.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod2_bleu_vers_noir.svg",
      svgType: "comparison"
    },
    warnings: [
      {
        title: "La règle d'or 7Robot : Aucune esquisse bleue !",
        text: "Une esquisse bleue est une bombe à retardement : un simple coup de molette ou un déplacement involontaire à la souris peut décaler l'entraxe d'un moteur de 3 mm sans que vous vous en rendiez compte. À l'usinage, les engrenages ne s'engrèneront pas ! Interdiction de valider une pièce avec des esquisses sous-contraintes."
      }
    ],
    tips: [
      {
        title: "Réparer une esquisse rouge en 2 secondes",
        text: "Si votre esquisse devient rouge/jaune après une nouvelle cote, appuyez immédiatement sur <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>Z</kbd> pour annuler la dernière action. Vous pouvez aussi cliquer sur le texte rouge en bas à droite pour lancer l'assistant <em>SketchXpert</em>."
      }
    ]
  },
    {
    id: "step-2-4",
    moduleIndex: 2,
    stepNumber: "2.4",
    title: "Outils pratiques : Symétrie d'entités, Décalage et Ajustement",
    moduleTitle: "Module 2 : Focus Sketch (L'art de l'esquisse et des contraintes)",
    subtitle: "Multiplier sa vitesse de modélisation grâce aux outils d'édition 2D",
    category: "Outils de productivité 2D",
    duration: "12 min",
    difficulty: "Intermédiaire",
    summary: "Ne dessinez jamais deux fois la même géométrie. Maîtrisez l'ajustement dynamique (Power Trim), le décalage pour parois constantes et la symétrie 2D.",
    imageSrc: "assets/images/mod2_symetrie_decalage_ajustement.svg",
    objectives: [
      "Couper les traits en trop en un geste avec Ajuster les entités (Power Trim)",
      "Créer un contour parallèle avec Décaler les entités (Offset)",
      "Effectuer une Symétrie d'entités (Mirror) par rapport à un axe de construction"
    ],
    instructions: [
      {
        title: "1. Ajuster les entités (Power Trim - Le coup de cutter magique)",
        text: "Pour éliminer les débordements de traits sécants en une seconde :",
        bullets: [
          "Cliquez sur l'outil <strong>Ajuster les entités</strong> (icône ciseaux) dans le CommandManager Esquisse.",
          "Vérifiez que l'option <strong>Ajustement assisté (Power Trim)</strong> est bien cochée dans le panneau de gauche.",
          "Maintenez le <strong>clic gauche enfoncé</strong> dans la zone graphique 3D et <strong>faites glisser votre curseur à travers les segments à couper</strong> : une ligne rouge de découpe suit la souris et supprime instantanément toute portion traversée !",
          "Relâchez le clic gauche une fois l'esquisse épurée."
        ]
      },
      {
        title: "2. Décaler les entités (Offset - Parois d'épaisseur constante)",
        text: "Idéal pour créer des parois de boîtiers électroniques ou des nervures d'épaisseur constante (ex: 2.5 mm pour impression 3D) :",
        bullets: [
          "Cliquez sur l'outil <strong>Décaler les entités</strong>.",
          "Sélectionnez le contour existant et entrez la distance souhaitée (ex: <code>3.0 mm</code>).",
          "Cochez <em>Inverser</em> si le décalage part vers l'extérieur au lieu de l'intérieur.",
          "Cochez <em>Sélectionner la chaîne</em> pour décaler tout le polygone d'un coup."
        ]
      },
      {
        title: "3. Symétrie d'entités (Mirror Entities)",
        text: "Un robot est généralement symétrique entre son côté gauche et son côté droit :",
        bullets: [
          "Tracez une <strong>Ligne de construction</strong> verticale passant par l'origine.",
          "Dessinez uniquement la moitié gauche de votre pièce (ex: découpe de fixation de roue, contours de châssis).",
          "Cliquez sur <strong>Symétrie des entités</strong> dans le CommandManager.",
          "Dans <em>Entités à copier</em>, sélectionnez vos traits.",
          "Dans <em>Symétrie par rapport à</em>, cliquez sur votre axe de construction central.",
          "Validez : la moitié droite se génère instantanément avec une relation de symétrie automatique !"
        ]
      }
    ],
    placeholder: {
      title: "Boîte à outils 2D : Power Trim, Décalage et Symétrie",
      caption: "Schéma technique des 3 fonctions reines d'accélération d'esquisse sous SolidWorks.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod2_symetrie_decalage_ajustement.svg",
      svgType: "tools"
    },
    warnings: [
      {
        title: "Attention aux relations perdues après ajustement",
        text: "Lorsque vous coupez un trait avec le Power Trim, vous risquez parfois de supprimer le point d'extrémité sur lequel reposait une cote ou une relation géométrique. Vérifiez toujours que vos traits restent noirs après vos coups de cutter !"
      }
    ],
    tips: [
      {
        title: "Ajustement accidentel ? Pas de panique !",
        text: "Si vous coupez un trait par mégarde, relâchez la souris et pressez immédiatement <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>Z</kbd>."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 3 : EXTRUSIONS AVANCÉES & SYMÉTRIES
  // --------------------------------------------------------------------------
  {
    id: "step-3-1",
    moduleIndex: 3,
    stepNumber: "3.1",
    title: "Balayage : Extrusion le long d'une courbe guide",
    moduleTitle: "Module 3 : Extrusions avancées et symétries",
    subtitle: "Faire voyager une section 2D le long d'une trajectoire tridimensionnelle",
    category: "Fonction volumique complexe",
    duration: "14 min",
    difficulty: "Avancé",
    summary: "Le balayage permet de modéliser des tuyaux, passe-câbles, joints d'étanchéité, clips souples et ressorts hélicoïdaux en combinant un profil et une trajectoire.",
    newProjectBanner: {
      badge: "NOUVEAU PROJET PIÈCE",
      action: "Sauvegarde & Nouveau document",
      title: "Ok, maintenant enregistrez et ouvrez un NOUVEAU PROJET Pièce !",
      instructions: [
        "<strong>Sauvegarder l'esquisse précédente :</strong> Appuyez sur <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> ➔ Nommez le fichier <code>02_Esquisse_Contraintes.SLDPRT</code>.",
        "<strong>Fermer la pièce :</strong> Appuyez sur <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>W</kbd>.",
        "<strong>Ouvrir un nouveau projet :</strong> Pressez <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ Sélectionnez <strong>Pièce</strong> ➔ <strong>OK</strong>.",
        "Nous attaquons les fonctions 3D volumiques avancées : balayage le long d'une trajectoire et révolution d'axe !"
      ]
    },
    imageSrc: "assets/images/sweep_helix.gif",
    objectives: [
      "Comprendre les 2 ingrédients du balayage : Profil fermé et Trajectoire",
      "Créer deux esquisses distinctes sur deux plans perpendiculaires",
      "Appliquer la relation de Perçage (Pierce) pour lier le profil à la courbe",
      "Générer la fonction Balayage (Bossage/Base balayé)"
    ],
    instructions: [
      {
        title: "1. Le principe du Balayage",
        text: "Une extrusion classique pousse un profil en ligne droite. Le <strong>Balayage (Sweep)</strong> pousse un profil le long d'une <strong>courbe quelconque</strong> (droite, arc, spline) :",
        bullets: [
          "<strong>Esquisse 1 (La Trajectoire) :</strong> Une courbe tracée sur un premier plan (ex: Plan de Face).",
          "<strong>Esquisse 2 (Le Profil) :</strong> La forme de la section (ex: un cercle de Ø 6 mm ou un hexagone) tracée sur un plan orthogonal (ex: Plan de Droite)."
        ]
      },
      {
        title: "2. La contrainte secrète : La relation de Perçage (Pierce)",
        text: "C'est l'erreur numéro 1 des débutants : le profil et la trajectoire doivent impérativement se toucher au point de départ !",
        bullets: [
          "Créez la trajectoire dans l'Esquisse 1 (ex: un arc ou une spline en S) et quittez l'esquisse.",
          "Ouvrez l'Esquisse 2 sur le plan perpendiculaire passant par le début de la courbe.",
          "Placez le centre de votre cercle sur le point de départ de la trajectoire.",
          "Sélectionnez le centre du cercle + la ligne de trajectoire avec <kbd class='shortcut-key'>Ctrl</kbd> enfoncé, puis choisissez la relation <strong>Perçage (Pierce)</strong>.",
          "Quittez l'esquisse."
        ]
      },
      {
        title: "3. Activer la fonction Bossage/Base balayé",
        text: "Dans l'onglet Fonctions :",
        bullets: [
          "Cliquez sur <strong>Bossage/Base balayé</strong>.",
          "Dans la première case bleue (Profil), sélectionnez l'Esquisse 2 (votre cercle).",
          "Dans la deuxième case rose (Trajectoire), sélectionnez l'Esquisse 1 (votre courbe).",
          "L'aperçu volumique 3D apparaît instantanément. Validez avec la coche verte !"
        ]
      }
    ],
    placeholder: {
      title: "Animation 3D : Balayage volumique d'une section sur trajectoire",
      caption: "GIF animé illustrant le balayage continu d'une courbe dans l'espace (hélicoïde / passe-câble).",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "sweep_helix.gif",
      svgType: "sweep"
    },
    warnings: [
      {
        title: "Rayon de courbure trop serré = Auto-intersection !",
        text: "Si votre profil fait 20 mm de diamètre et que votre trajectoire fait un virage serré avec un rayon de 5 mm, la matière va s'intersecter avec elle-même. SolidWorks refusera de calculer la fonction. Gardez toujours un rayon de courbure supérieur au rayon de votre profil !"
      }
    ],
    tips: [
      {
        title: "Profil circulaire instantané (SolidWorks 2016+)",
        text: "Dans la fonction Balayage, vous pouvez cocher <em>Profil circulaire</em> directement dans le PropertyManager : vous n'avez même plus besoin de dessiner l'esquisse du cercle, indiquez simplement son diamètre !"
      }
    ]
  },
  {
    id: "step-3-2",
    moduleIndex: 3,
    stepNumber: "3.2",
    title: "Révolution : Extrusion circulaire autour d'un axe",
    moduleTitle: "Module 3 : Extrusions avancées et symétries",
    subtitle: "Concevoir des pièces de révolution mécaniques (arbres, poulies, galets, entretoises)",
    category: "Fonction volumique de révolution",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Toute pièce présentant une symétrie axiale doit être modélisée en Révolution. Découvrez comment esquisser un demi-profil et faire tourner la matière à 360° en une seule opération.",
    imageSrc: "assets/images/mod3_revolution_axe_epaule.svg",
    objectives: [
      "Identifier quand utiliser la révolution plutôt que des extrusions empilées",
      "Tracer un demi-profil fermé adossé à un axe de construction",
      "Appliquer des cotes de diamètre directement en esquisse",
      "Générer la fonction Bossage/Base avec révolution"
    ],
    instructions: [
      {
        title: "1. Quand utiliser la Révolution ?",
        text: "En robotique, vous rencontrerez constamment des pièces cylindriques étagées :",
        bullets: [
          "Axes épaulés pour roulements à billes (type 608ZZ ou 688ZZ).",
          "Poulies crantées GT2 pour courroies de transmission.",
          "Galets de guidage pour tourelle ou ramasseur d'éléments de jeu.",
          "Entretoises hexagonales tournées."
        ]
      },
      {
        title: "2. Règle d'or : Dessiner uniquement le DEMI-PROFIL",
        text: "La fonction fait tourner la forme autour d'un axe à 360°. Il ne faut donc dessiner que la moitié de la coupe :",
        bullets: [
          "Ouvrez une esquisse sur le Plan de Face.",
          "Tracez une <strong>Ligne de construction</strong> horizontale sur l'origine : elle servira d'axe de rotation.",
          "Tracez le contour fermé de votre pièce au-dessus de l'axe (en forme d'escalier pour un axe à épaulements).",
          "<strong>L'astuce de cotation diamètre :</strong> Avec la Cote Intelligente, cliquez sur le segment supérieur, puis cliquez sur l'axe de construction, et <em>faites passer votre souris de l'autre côté de l'axe</em> : SolidWorks affiche automatiquement la cote en <strong>diamètre réel (Ø)</strong> plutôt qu'en rayon !"
        ]
      },
      {
        title: "3. Lancer la Révolution",
        text: "Basculez dans l'onglet Fonctions :",
        bullets: [
          "Cliquez sur <strong>Bossage/Base avec révolution</strong>.",
          "Si votre esquisse contient une ligne de construction, SolidWorks la sélectionne automatiquement comme <em>Axe de révolution</em>.",
          "Angle : laissez à <code>360.0°</code>.",
          "Validez avec la coche verte : votre axe mécanique étagé est terminé en une seule fonction propre !"
        ]
      }
    ],
    placeholder: {
      title: "Demi-profil d'axe épaulé et rotation 360°",
      caption: "Schéma technique montrant le demi-profil coté en diamètres avec la flèche de révolution à 360°.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod3_revolution_axe_epaule.svg",
      svgType: "revolution"
    },
    warnings: [
      {
        title: "Ne traversez jamais l'axe de révolution !",
        text: "Le profil doit être strictement situé d'un seul côté de l'axe de rotation. Si un trait traverse l'axe, la matière va s'intersecter sur elle-même au centre et provoquer une erreur géométrique fatale."
      }
    ],
    tips: [
      {
        title: "Gain de temps phénoménal",
        text: "Faire un axe étagé avec 4 extrusions successives prend 15 minutes et alourdit l'arbre avec 4 fonctions. Avec la Révolution, une seule esquisse suffit et modifier un diamètre de roulement se fait instantanément !"
      }
    ]
  },
  {
    id: "step-3-3",
    moduleIndex: 3,
    stepNumber: "3.3",
    title: "Gain de temps : Symétrie 3D et Répétitions",
    moduleTitle: "Module 3 : Extrusions avancées et symétries",
    subtitle: "Dupliquer des perçages, nervures et composants en quelques clics",
    category: "Multiplication volumique",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Pourquoi modéliser 6 trous de fixation un par un ? Utilisez la répétition circulaire et la symétrie 3D par rapport à un plan de référence.",
    imageSrc: "assets/images/mod3_repetition_circulaire_moyeu.svg",
    objectives: [
      "Appliquer une Symétrie volumique 3D (Mirror Feature)",
      "Créer une Répétition circulaire (Circular Pattern) pour jante ou moyeu",
      "Utiliser une Répétition linéaire pour connecteurs ou grilles d'aération"
    ],
    instructions: [
      {
        title: "1. La Symétrie de fonctions 3D",
        text: "Pour dupliquer des trous ou des découpes de l'autre côté d'une pièce :",
        bullets: [
          "Dans l'onglet Fonctions, cliquez sur <strong>Symétrie</strong>.",
          "<strong>Plan de symétrie :</strong> Choisissez l'un des plans de référence centraux (ex: Plan de Droite). C'est ici que l'extrusion 'Plan Milieu' vue au Module 1 prend tout son sens !",
          "<strong>Fonctions à dupliquer :</strong> Cliquez sur le trou ou le bossage à refléter dans la zone 3D ou dans l'arbre.",
          "Validez : la géométrie est parfaitement dupliquée et reste liée (toute modification du trou maître modifie le trou miroir)."
        ]
      },
      {
        title: "2. Répétition circulaire (Circular Pattern)",
        text: "Cas typique chez 7Robot : les 4 ou 6 vis de fixation d'un moteur brushless ou d'une roue motrice :",
        bullets: [
          "Créez un seul perçage à la distance voulue du centre.",
          "Cliquez sur la petite flèche sous <em>Répétition linéaire</em> et sélectionnez <strong>Répétition circulaire</strong>.",
          "<strong>Direction 1 :</strong> Cliquez sur une face cylindrique (ex: le bord extérieur de la pièce) : SolidWorks détecte l'axe central.",
          "<strong>Nombre d'occurrences :</strong> Entrez <code>4</code> ou <code>6</code>.",
          "Cochez impérativement la case <strong>Espacement constant</strong> et indiquez <code>360°</code>.",
          "Validez : vos trous sont répartis avec une précision angulaire mathématique parfaite."
        ]
      }
    ],
    placeholder: {
      title: "Répétition circulaire de 6 trous M3 sur un moyeu de roue",
      caption: "Génération automatique de 6 perçages équidistants autour d'un axe central.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod3_repetition_circulaire_moyeu.svg",
      svgType: "pattern"
    },
    warnings: [
      {
        title: "Attention aux fonctions absorbées",
        text: "Dans une répétition, veillez à bien sélectionner toutes les fonctions dépendantes (ex: si votre trou a un chanfrein d'entrée, sélectionnez le perçage ET le chanfrein, sinon les trous dupliqués n'auront pas de chanfrein)."
      }
    ],
    tips: [
      {
        title: "Ignorer des occurrences",
        text: "Dans le PropertyManager de la répétition circulaire ou linéaire, déroulez la section <em>Occurrences à omettre</em> : vous pouvez cliquer sur les petits points roses pour désactiver certains trous sans casser la répétition !"
      }
    ]
  },

  // --------------------------------------------------------------------------
      // --------------------------------------------------------------------------
  // MODULE 4 : ASSEMBLAGE & SERVOMOTEUR FEETECH (CONCEPTION EN CONTEXTE)
  // --------------------------------------------------------------------------
  {
    id: "step-4-1",
    moduleIndex: 4,
    stepNumber: "4.1",
    title: "Le Défi Mécanique 7Robot & Philosophie de Conception en Contexte",
    moduleTitle: "Module 4 : L'Assemblage et la mécanique (Le Servomoteur Feetech)",
    subtitle: "Pourquoi concevoir le boîtier directement dans l'assemblage autour du servo",
    category: "Architecture & Cahier des charges",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Découvrez le problème réel des vis M3 sur les servomoteurs Feetech et la méthode d'ingénierie 'Top-Down' : au lieu de modéliser le boîtier à l'aveugle dans une pièce isolée, nous ouvrons un assemblage avec le Feetech en premier, puis créons le boîtier et le couvercle directement autour de lui !",
    newProjectBanner: {
      badge: "TÉLÉCHARGEMENT & NOUVEAU PROJET ASSEMBLAGE",
      action: "Téléchargement du ZIP et ouverture de l'assemblage",
      title: "Ok, téléchargez le pack Feetech et ouvrez un NOUVEAU PROJET ASSEMBLAGE !",
      instructions: [
        "<strong>Sauvegarder vos pièces précédentes :</strong> Enregistrez vos pièces du Module 3 (<kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd>) puis fermez les onglets (<kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>W</kbd>).",
        "<strong>Télécharger le pack officiel :</strong> Cliquez sur le bouton bleu ci-dessous pour télécharger le fichier <code>fichier a prendre.zip</code>.",
        "<strong>Extraire l'archive :</strong> Décompressez le ZIP dans votre dossier de travail <code>Formation_SolidWorks/Module4_Boitier_Feetech/</code>.",
        "<strong>Créer le nouvel assemblage :</strong> Dans SolidWorks, faites <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ Choisissez <strong>Assemblage</strong> (icône deux cubes imbriqués <code>.SLDASM</code>) ➔ Cliquez sur <strong>OK</strong>."
      ]
    },
    downloadZip: {
      fileName: "fichier a prendre.zip",
      filePath: "pieces_solidworks/fichier%20a%20prendre.zip",
      description: "Pack officiel 7Robot contenant l'assemblage complet du servomoteur Feetech (fichier a prendre.SLDASM), le servo (Feetech STS2032 20g.SLDPRT) et son palonnier disque en métal (disque_metal_pour_teste.SLDPRT)."
    },
    imageSrc: "assets/images/boitier_feetech_assembly.png",
    objectives: [
      "Identifier la contrainte de fixation des servomoteurs Feetech avec visserie M3 standard",
      "Télécharger et extraire l'archive ZIP officielle du club 7Robot",
      "Comprendre la philosophie de Conception en Contexte (Top-Down Assembly Design)",
      "Mémoriser les dimensions critiques : Inserts laiton Ø4.6mm (prof. ≥5mm) et vis fraisée Ø3.2mm (chanfrein 45° x 1.75mm)"
    ],
    instructions: [
      {
        title: "1. La problématique mécanique des servomoteurs Feetech",
        text: "Dans les robots de la Coupe de France de Robotique, les servomoteurs intelligents Feetech (ex: STS2032 / STS3032 / SCS15) sont le standard du club pour actionner les mécanismes de match :",
        bullets: [
          "<strong>Le piège du vissage direct :</strong> Les trous situés sur les oreilles de fixation du Feetech ont un diamètre inférieur à 2.5 mm. <strong>Les vis standard M3 utilisées partout chez 7Robot ne passent pas à travers ces trous !</strong>",
          "<strong>L'erreur fatale à proscrire :</strong> Forcer une vis M3 à la main ou repercer les oreilles fragilise le servo, fausse l'alignement et provoque la casse irrémédiable de la patte lors des chocs de match.",
          "<strong>De plus, le plastique ne supporte pas les vissages répétés :</strong> Au bout de 2 ou 3 démontages lors des séances de test, le filetage plastique est arraché."
        ]
      },
      {
        title: "2. La solution d'ingénierie 7Robot : Glissière + Inserts laiton M3",
        text: "Pour résoudre ce problème de manière professionnelle et standardisée :",
        bullets: [
          "<strong>Le Boîtier carré (glissière) :</strong> Une pièce imprimée en 3D dans laquelle le servomoteur <strong>coulisse par ses oreilles latérales</strong> sans aucune vis traversante dans le servomoteur.",
          "<strong>4 Inserts filetés en laiton M3 :</strong> Le boîtier intègre 4 puits verticaux de <strong>diamètre Ø 4.60 mm et profondeur ≥ 5.0 mm</strong>, où l'on insère à chaud des inserts laiton moletés M3 au fer à souder.",
          "<strong>Le Couvercle de bridage :</strong> Une plaque supérieure dotée de 4 trous de <strong>Ø 3.20 mm avec chanfrein à 45° de 1.75 mm</strong> pour vis à tête fraisée (FHC M3), qui vient plaquer et verrouiller le servo.",
          "<strong>Résultat :</strong> Un servomoteur parfaitement rigide, démontable en 30 secondes en cas de panne en tournoi, et 100% compatible avec la visserie M3 du club !"
        ]
      },
      {
        title: "3. La méthode Top-Down (Conception en Contexte)",
        text: "Pourquoi ne pas modéliser le boîtier dans un fichier pièce séparé à l'aveugle ?",
        bullets: [
          "Si vous créez une pièce seule, vous devez mesurer au pied à coulisse chaque recoin du Feetech, avec un risque élevé d'erreur de cote de 0.5 mm qui ruinerait l'impression 3D.",
          "<strong>La méthode professionnelle SolidWorks :</strong> On ouvre l'assemblage, on y insère le Feetech en <strong>premier composant fixe</strong>, puis on utilise l'outil <strong>Nouvelle pièce</strong> directement dans l'assemblage pour esquisser le boîtier et le couvercle *autour* du servomoteur en s'appuyant directement sur sa géométrie réelle !"
        ]
      }
    ],
    placeholder: {
      title: "Assemblage final du Boîtier Feetech avec Couvercle vissé",
      caption: "Capture d'écran SolidWorks réelle : Boîtier carré imprimé en 3D, servomoteur Feetech coulissé et couvercle fraisé.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "boitier_feetech_assembly.png",
      svgType: "assembly"
    },
    warnings: [
      {
        title: "Ne modifiez jamais le fichier du servomoteur !",
        text: "Ne tentez jamais de repercer les trous d'oreilles dans le fichier <code>Feetech STS2032 20g.SLDPRT</code>. En ingénierie, on conçoit toujours l'environnement mécanique (le boîtier) pour épouser fidèlement le composant standard du commerce, et non l'inverse !"
      }
    ],
    tips: [
      {
        title: "Dossier de travail propre",
        text: "Placez toujours vos fichiers dans le <strong>même dossier Windows</strong> que les pièces du ZIP extrait. Cela évitera les références externes perdues lors de la réouverture de l'assemblage."
      }
    ]
  },
  {
    id: "step-4-2",
    moduleIndex: 4,
    stepNumber: "4.2",
    title: "Initialisation de l'Assemblage : Insérer le Feetech en Pièce Maîtresse Fixe (f)",
    moduleTitle: "Module 4 : L'Assemblage et la mécanique (Le Servomoteur Feetech)",
    subtitle: "Ancrer le servomoteur du ZIP sur l'origine pour servir de socle de référence",
    category: "Architecture d'assemblage",
    duration: "8 min",
    difficulty: "Intermédiaire",
    summary: "Dans votre nouvel assemblage vierge, insérez le sous-assemblage du Feetech comme tout premier composant. Ancrez-le rigoureusement sur l'origine absolue avec la coche verte pour obtenir le statut Fixe (f).",
    newProjectBanner: {
      badge: "INSERTION DU PREMIER COMPOSANT",
      action: "Insertion du Feetech dans Assemblage_Boitier_Feetech.SLDASM",
      title: "Ok, ouvrez l'assemblage et insérez le Feetech en premier !",
      instructions: [
        "Dans votre assemblage vierge, faites immédiatement <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> et enregistrez-le sous <code>Assemblage_Boitier_Feetech.SLDASM</code>.",
        "Le PropertyManager <em>Commencer l'assemblage</em> s'affiche automatiquement à gauche.",
        "Cliquez sur <strong>Parcourir...</strong> et sélectionnez le fichier <code>fichier a prendre.SLDASM</code> issu du pack ZIP.",
        "<strong>Le réflexe d'expert :</strong> Ne cliquez PAS dans la zone 3D pour déposer la pièce ! Cliquez directement sur la <strong>coche verte (OK)</strong> tout en haut à gauche.",
        "L'origine du Feetech coïncide instantanément avec l'origine de l'assemblage, et le composant devient Fixe <code>(f)</code> !"
      ]
    },
    imageSrc: "assets/images/boitier_feetech_assembly.png",
    objectives: [
      "Comprendre la règle de la première pièce maîtresse dans un assemblage SolidWorks",
      "Positionner automatiquement le Feetech sur l'origine (0,0,0) avec la coche verte",
      "Identifier le statut Fixe (f) dans l'arbre FeatureManager",
      "Préparer les plans de référence pour la conception en contexte"
    ],
    instructions: [
      {
        title: "1. Pourquoi insérer le Feetech en premier ?",
        text: "Dans un projet de support d'actionneur, le servomoteur est le cœur de la cinématique :",
        bullets: [
          "En insérant le Feetech en premier, il dicte l'orientation de l'arbre moteur, la position des connecteurs de câbles et la hauteur sous plafond du robot.",
          "Toutes les pièces que nous allons créer ensuite (Boîtier et Couvercle) s'appuieront sur ses dimensions réelles sans approximation."
        ]
      },
      {
        title: "2. Le clic magique sur la coche verte (OK)",
        text: "Cette astuce sépare les débutants des concepteurs confirmés :",
        bullets: [
          "Si vous cliquez dans la zone graphique 3D, le composant est posé à des coordonnées aléatoires (ex: X=124.5, Y=-43.2).",
          "En cliquant sur la <strong>coche verte (OK)</strong> dans le panneau de gauche, SolidWorks superpose automatiquement l'origine de la pièce et l'origine de l'assemblage (0,0,0), et aligne les plans Face, Dessus et Droite !",
          "Observez l'arbre FeatureManager à gauche : le nom <code>fichier a prendre<1></code> est précédé du symbole <strong><code>(f)</code></strong>. La pièce est <strong>Fixe</strong> et parfaitement ancrée."
        ]
      },
      {
        title: "3. Observer l'orientation du trièdre XYZ",
        text: "Prenez 30 secondes pour bien vous repérer dans l'espace :",
        bullets: [
          "Regardez le trièdre en bas à gauche : l'axe cannelé du servo avec son disque métallique doit pointer vers le haut.",
          "Les oreilles de fixation latérales sont horizontales, prêtes à être glissées dans les futures rainures du boîtier."
        ]
      }
    ],
    placeholder: {
      title: "Arbre d'assemblage avec Feetech fixé sur l'origine (f)",
      caption: "Le servomoteur est inséré en premier et verrouillé sur le repère mondial.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "boitier_feetech_assembly.png",
      svgType: "anchor"
    },
    warnings: [
      {
        title: "Ne libérez pas le Feetech (-)",
        text: "Si vous faites un clic droit et choisissez 'Libérer', le servomoteur flottera dans le vide et bougera dès que vous tenterez d'esquisser une ligne. Conservez toujours le statut Fixe <code>(f)</code> pour la pièce de référence !"
      }
    ],
    tips: [
      {
        title: "Raccourci vue isométrique",
        text: "Pressez <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>7</kbd> pour afficher instantanément la vue isométrique standard de votre servomoteur."
      }
    ]
  },
  {
    id: "step-4-3",
    moduleIndex: 4,
    stepNumber: "4.3",
    title: "Conception en Contexte du Boîtier : L'outil 'Nouvelle pièce' & Glissière",
    moduleTitle: "Module 4 : L'Assemblage et la mécanique (Le Servomoteur Feetech)",
    subtitle: "Créer le boîtier directement dans l'assemblage (Inserts Ø4.6mm x prof. ≥5mm)",
    category: "Conception descendante (Top-Down)",
    duration: "18 min",
    difficulty: "Avancé",
    summary: "Activez l'outil reine de SolidWorks : cliquez sur la flèche sous 'Insérer des composants' ➔ 'Nouvelle pièce'. Modélisez le boîtier carré directement autour du Feetech avec ses rainures de glissière et ses 4 logements d'inserts laiton Ø4.6mm x prof. ≥5mm.",
    newProjectBanner: {
      badge: "ACTION CLÉ : NOUVELLE PIÈCE EN CONTEXTE",
      action: "Flèche sous Insérer des composants ➔ Nouvelle pièce",
      title: "Ok, créez le Boîtier DIRECTEMENT dans l'assemblage !",
      instructions: [
        "Dans l'onglet <strong>Assemblage</strong> du CommandManager, repérez le bouton <strong>Insérer des composants</strong>.",
        "Cliquez sur la <strong>petite flèche noire juste en dessous du bouton</strong>.",
        "Dans le menu déroulant qui s'ouvre, cliquez sur <strong>Nouvelle pièce</strong>.",
        "Le pointeur de la souris se dote d'un petit symbole vert avec une face plane.",
        "Cliquez sur le <strong>Plan de Dessus de l'assemblage</strong> (ou sur la face inférieure du servo) pour déposer la pièce et démarrer l'esquisse en contexte !"
      ]
    },
    imageSrc: "assets/images/mod4_boitier_inserts_schema.svg",
    objectives: [
      "Utiliser la commande 'Nouvelle pièce' sous la flèche d'insertion",
      "Reconnaître l'environnement d'Édition du Composant (transparence, icône violette en haut à droite)",
      "Esquisser et extruder le corps carré (44 x 44 mm) autour du servomoteur",
      "Évider la chambre de glissière pour les oreilles du servo avec jeu fonctionnel FDM (+0.4 mm)",
      "Percer les 4 logements d'inserts laiton normalisés (Ø 4.60 mm, profondeur ≥ 5.0 mm)",
      "Enregistrer la pièce dans un fichier externe (Boitier_Feetech.SLDPRT)"
    ],
    instructions: [
      {
        title: "1. Reconnaître le mode 'Édition du composant'",
        text: "Dès que vous avez cliqué sur le plan de référence :",
        bullets: [
          "Le servomoteur Feetech devient <strong>semi-transparent</strong> dans la vue 3D : c'est le signal visuel que vous modélisez une nouvelle pièce tout en voyant l'assemblage en arrière-plan !",
          "Dans l'arbre FeatureManager à gauche, une nouvelle pièce apparaît en surbrillance bleue : <code>[Pièce1^Assemblage_Boitier_Feetech]</code>.",
          "Dans le coin supérieur droit de la zone graphique 3D, une icône violette <strong>'Sortir de l'édition du composant'</strong> est présente.",
          "Dans le CommandManager en haut, les onglets <strong>Esquisse</strong> et <strong>Fonctions</strong> de modélisation de pièce redeviennent disponibles !"
        ]
      },
      {
        title: "2. Le volume brut extérieur du boîtier carré",
        text: "Construisons l'enveloppe extérieure cubique :",
        bullets: [
          "Pressez <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd> pour vous placer vue normale à l'esquisse.",
          "Choisissez l'outil <strong>Rectangle par son centre</strong> : cliquez sur l'origine rouge et étirez.",
          "Avec la <strong>Cotation intelligente</strong>, entrez <code>44.0 mm</code> de largeur et appliquez une relation d'<strong>Égalité</strong> entre deux côtés adjacents pour obtenir un carré de 44 x 44 mm.",
          "Allez dans l'onglet Fonctions ➔ <strong>Bossage/Base extrudé</strong> ➔ Hauteur de <code>28.0 mm</code> (vers le haut, pour couvrir la hauteur du Feetech) ➔ Validez avec la coche verte."
        ]
      },
      {
        title: "3. La chambre de glissière intérieure (Évidement pour les oreilles)",
        text: "Le Feetech doit pouvoir coulisser librement par le haut dans le boîtier :",
        bullets: [
          "Sélectionnez la <strong>face supérieure</strong> du bloc cubique ➔ Ouvrez une nouvelle <strong>Esquisse</strong>.",
          "Comme le Feetech est visible en transparence, utilisez <strong>Décaler les entités</strong> en sélectionnant les contours extérieurs du corps du Feetech avec une distance de <strong><code>0.4 mm</code> vers l'extérieur</strong> (jeu indispensable pour que l'impression 3D ne serre pas trop fort).",
          "Dessinez également les deux dégagements latéraux rectangulaires où les oreilles de fixation du servo vont coulisser.",
          "Allez dans Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ Profondeur borgne de <code>25.0 mm</code> (ce qui laisse un fond solide de 3.0 mm au boîtier) ➔ Validez."
        ]
      },
      {
        title: "4. Les 4 logements d'inserts laiton M3 (Ø 4.60 mm x prof. ≥ 5.0 mm)",
        text: "Voici les cotes fondamentales exigées par les règles de conception 7Robot :",
        bullets: [
          "Sur la face supérieure du boîtier, ouvrez une nouvelle <strong>Esquisse</strong>.",
          "Tracez <strong>4 cercles</strong> aux 4 coins du boîtier, à l'extérieur de la cavité centrale.",
          "Sélectionnez les 4 cercles (<kbd class='shortcut-key'>Ctrl</kbd> maintenu) ➔ Appliquez la relation <strong>Égalité</strong>.",
          "Ajoutez une cote intelligente sur un cercle : entrez <strong>exactement <code>4.60 mm</code></strong>.",
          "Cotez l'entraxe des trous : carré centré de <code>36.0 mm x 36.0 mm</code>.",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ Condition : <strong>Borgne</strong> ➔ Profondeur : <strong><code>5.5 mm</code></strong> (au moins 5.0 mm) ➔ Validez."
        ]
      },
      {
        title: "5. Quitter l'édition et enregistrer en fichier externe",
        text: "Pour finaliser votre pièce et l'isoler sur votre disque dur :",
        bullets: [
          "Cliquez sur l'icône de sortie en haut à droite de l'écran 3D (ou recliquez sur <em>Éditer le composant</em> dans le bandeau Assemblage).",
          "Dans l'arbre FeatureManager, faites un <strong>clic droit sur <code>[Pièce1^...]</code></strong> ➔ Choisissez <strong>Enregistrer la pièce (dans un fichier externe)</strong>.",
          "Sélectionnez votre dossier de projet et nommez le fichier <code>Boitier_Feetech.SLDPRT</code> ➔ Validez.",
          "Votre boîtier est désormais un fichier pièce 3D autonome, directement prêt pour l'export STL !"
        ]
      }
    ],
    placeholder: {
      title: "Schéma technique : Boîtier à glissière et perçages d'inserts Ø4.6mm",
      caption: "Conception du boîtier en contexte avec rainures pour oreilles et puits d'inserts M3.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod4_boitier_inserts_schema.svg",
      svgType: "drill"
    },
    warnings: [
      {
        title: "Pourquoi Ø 4.6 mm et prof. ≥ 5.0 mm ?",
        text: "Un insert moleté laiton M3 a un diamètre extérieur de crantage de 4.2 à 4.4 mm. Le perçage à Ø 4.60 mm permet de positionner l'insert bien droit à froid sans forcer. Au contact du fer à souder chaud (220°C), le plastique fond et comble les crans. Une profondeur ≥ 5.0 mm évite que le bout de la vis M3 ne vienne buter au fond et décoller l'insert !"
      }
    ],
    tips: [
      {
        title: "Bascule rapide Éditer composant / Assemblage",
        text: "Pour entrer ou sortir du mode d'édition d'une pièce à tout moment, vous pouvez aussi simplement faire un <strong>clic droit sur la pièce dans la zone 3D ➔ Éditer la pièce</strong>."
      }
    ]
  },
  {
    id: "step-4-4",
    moduleIndex: 4,
    stepNumber: "4.4",
    title: "Conception en Contexte du Couvercle : Vissage & Chanfreins 45° x 1.75mm",
    moduleTitle: "Module 4 : L'Assemblage et la mécanique (Le Servomoteur Feetech)",
    subtitle: "Créer le couvercle sur la face supérieure du boîtier (Vis Ø3.2mm chanfrein 45°)",
    category: "Conception descendante (Top-Down)",
    duration: "15 min",
    difficulty: "Avancé",
    summary: "Deuxième application de la conception en contexte : cliquez à nouveau sur la flèche sous 'Insérer des composants' ➔ 'Nouvelle pièce' et sélectionnez directement la face supérieure du boîtier ! Modélisez le couvercle avec dégagement de moyeu, 4 trous Ø3.2mm et chanfreins coniques 45° x 1.75mm pour vis FHC M3 affleurantes.",
    newProjectBanner: {
      badge: "ACTION CLÉ : DEUXIÈME PIÈCE EN CONTEXTE",
      action: "Flèche sous Insérer des composants ➔ Nouvelle pièce (Couvercle)",
      title: "Ok, créez le Couvercle DIRECTEMENT sur la face supérieure du boîtier !",
      instructions: [
        "Allez dans l'onglet <strong>Assemblage</strong> ➔ Cliquez sur la <strong>petite flèche sous Insérer des composants</strong>.",
        "Cliquez sur <strong>Nouvelle pièce</strong>.",
        "Le curseur avec pointeur vert apparaît : cliquez directement sur la <strong>face supérieure plane de votre Boîtier</strong> !",
        "SolidWorks implante immédiatement l'esquisse de la nouvelle pièce sur le plan parfait.",
        "Vous êtes en mode Édition du composant pour concevoir le couvercle de fermeture."
      ]
    },
    imageSrc: "assets/images/mod4_boitier_inserts_schema.svg",
    objectives: [
      "Créer une seconde pièce en contexte en cliquant sur la face supérieure du boîtier",
      "Utiliser l'outil 'Convertir les entités' pour dupliquer le contour extérieur sans cotation",
      "Percer le dégagement central pour l'arbre cannelé et le disque métallique",
      "Percer les 4 trous de vis Ø 3.20 mm concentriques aux inserts du boîtier",
      "Appliquer les 4 chanfreins de fraisage (45° x 1.75 mm) pour vis à tête fraisée FHC M3",
      "Enregistrer la pièce en externe sous Couvercle_Feetech.SLDPRT"
    ],
    instructions: [
      {
        title: "1. La plaque du couvercle avec 'Convertir les entités'",
        text: "Comme nous sommes appuyés directement sur le boîtier :",
        bullets: [
          "Pressez <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd> (vue normale).",
          "Cliquez sur l'outil <strong>Convertir les entités</strong> dans l'onglet Esquisse.",
          "Sélectionnez les 4 arêtes extérieures carrées du boîtier sous-jacent ➔ Validez : le carré de 44 x 44 mm est instantanément projeté dans votre esquisse !",
          "Fonctions ➔ <strong>Bossage/Base extrudé</strong> ➔ Entrez une épaisseur de <code>3.5 mm</code> (assurez-vous que l'extrusion part vers le haut, à l'opposé du boîtier) ➔ Validez."
        ]
      },
      {
        title: "2. Le passage pour l'axe cannelé et le palonnier rotatif",
        text: "Le disque métallique (`disque_metal_pour_teste.SLDPRT`) doit tourner sans frotter sur le plastique :",
        bullets: [
          "Sélectionnez la <strong>face supérieure du couvercle</strong> ➔ Ouvrez une nouvelle <strong>Esquisse</strong>.",
          "Tracez un <strong>Cercle</strong> centré sur l'axe du servomoteur Feetech (survolez l'arête circulaire de l'axe pour faire apparaître son centre).",
          "Cotez le diamètre à <strong><code>16.0 mm</code></strong> (ce qui laisse un passage confortable pour le moyeu tournant).",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ Condition : <strong>À travers tout</strong> ➔ Validez."
        ]
      },
      {
        title: "3. Les 4 trous de passage de vis M3 (Cote stricte Ø 3.20 mm)",
        text: "Ces perçages doivent être parfaitement concentriques aux trous d'inserts du boîtier :",
        bullets: [
          "Toujours sur la face supérieure du couvercle, ouvrez une <strong>Esquisse</strong>.",
          "Tracez <strong>4 cercles</strong> au niveau des 4 coins.",
          "Appliquez une relation de <strong>Concentricité</strong> entre chaque cercle du couvercle et l'arête du trou d'insert du boîtier situé en dessous.",
          "Appliquez la relation <strong>Égalité</strong> entre les 4 cercles et cotez le diamètre à <strong>exactement <code>3.20 mm</code></strong> (en mécanique, le perçage lisse de passage d'une vis M3 est de Ø 3.2 mm pour un glissement sans frottement).",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ <strong>À travers tout</strong> ➔ Validez."
        ]
      },
      {
        title: "4. Les 4 chanfreins de fraisage coniques (45° x 1.75 mm)",
        text: "Pour noyer les têtes de vis coniques FHC M3 sous la surface :",
        bullets: [
          "Dans l'onglet Fonctions, cliquez sur la petite flèche sous <strong>Congé</strong> et sélectionnez <strong>Chanfrein</strong>.",
          "Sélectionnez les <strong>4 arêtes circulaires supérieures</strong> de vos trous de Ø 3.2 mm.",
          "Dans le panneau PropertyManager à gauche :",
          "➔ Type : <strong>Angle - Distance</strong>.",
          "➔ Distance : <strong><code>1.75 mm</code></strong>.",
          "➔ Angle : <strong><code>45°</code></strong>.",
          "Validez avec la coche verte : les 4 fraisages coniques sont créés, calibrés pour les vis FHC M3 normalisées !"
        ]
      },
      {
        title: "5. Quitter l'édition et enregistrer le Couvercle en externe",
        text: "Pour achever la modélisation :",
        bullets: [
          "Cliquez sur l'icône violette de sortie d'édition en haut à droite de la zone 3D.",
          "Dans l'arbre FeatureManager, faites un <strong>clic droit sur <code>[Pièce2^...]</code></strong> ➔ <strong>Enregistrer la pièce (dans un fichier externe)</strong>.",
          "Nommez le fichier <code>Couvercle_Feetech.SLDPRT</code> dans votre dossier de travail ➔ Validez.",
          "Sauvegardez l'ensemble avec <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> : votre assemblage mécatronique complet est achevé !"
        ]
      }
    ],
    placeholder: {
      title: "Coupe de la liaison vissée : Trou Ø3.2mm et Chanfrein 45° x 1.75mm",
      caption: "Détail du fraisage du couvercle garantissant l'affleurement parfait de la vis FHC M3.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "mod4_boitier_inserts_schema.svg",
      svgType: "chamfer"
    },
    warnings: [
      {
        title: "Pourquoi un chanfrein de 1.75 mm ?",
        text: "Une tête de vis fraisée standard FHC M3 (norme ISO 10642) a un diamètre extérieur maximal de 6.0 mm et un angle de cône de 90° (demi-angle 45°). Avec un perçage à Ø 3.2 mm et un chanfrein à 45° de 1.75 mm, le diamètre extérieur du cône atteint 3.2 + 2x1.75 = 6.7 mm : la tête de vis s'enfonce très légèrement sous la surface (0.2 mm de retrait), garantissant qu'aucune arête métallique ne dépassera !"
      }
    ],
    tips: [
      {
        title: "L'associativité magique de la conception en contexte",
        text: "Le gros avantage d'avoir conçu le couvercle en contexte : si un jour vous modifiez la largeur du boîtier de 44 à 48 mm, le couvercle et ses trous de vis s'élargiront automatiquement à 48 mm sans que vous n'ayez rien à redessiner !"
      }
    ]
  },
  {
    id: "step-4-5",
    moduleIndex: 4,
    stepNumber: "4.5",
    title: "Test Cinématique : Rotation du Palonnier Disque & Détection d'Interférences",
    moduleTitle: "Module 4 : L'Assemblage et la mécanique (Le Servomoteur Feetech)",
    subtitle: "Vérifier le mouvement à la souris et traquer les collisions avant impression 3D",
    category: "Validation cinématique & contrôle",
    duration: "10 min",
    difficulty: "Avancé",
    summary: "Passez le sous-assemblage Feetech en mode Flexible, animez le disque métallique à la souris pour tester sa rotation libre à 360°, et lancez la détection d'interférences dans l'onglet Évaluer pour garantir un montage sans collision.",
    imageSrc: "assets/images/kinematics_robot_arm.gif",
    objectives: [
      "Activer l'option 'Résoudre comme : Flexible' sur le sous-assemblage Feetech",
      "Tester la rotation manuelle du disque métallique (disque_metal_pour_teste.SLDPRT)",
      "Vérifier le jeu mécanique entre le couvercle et le palonnier tournant (≥ 0.5 mm)",
      "Lancer l'outil Détection d'interférences dans l'onglet Évaluer et analyser le résultat"
    ],
    instructions: [
      {
        title: "1. Activer le sous-assemblage en mode Flexible",
        text: "Dans SolidWorks, un sous-assemblage inséré est par défaut 'Rigide' (ses pièces internes sont figées) :",
        bullets: [
          "Dans l'arbre FeatureManager à gauche, faites un <strong>clic droit sur <code>fichier a prendre<1></code></strong>.",
          "Cliquez sur <strong>Propriétés du composant</strong> (icône boîte de dialogue).",
          "Dans la section <em>Résoudre comme</em> en bas à droite, cochez <strong>Flexible</strong> ➔ Validez par <strong>OK</strong>.",
          "Désormais, le palonnier disque en métal peut pivoter librement autour de l'axe du Feetech à l'intérieur de votre assemblage principal !"
        ]
      },
      {
        title: "2. Le test dynamique de rotation à la souris",
        text: "Vérifions la liberté de rotation sans contrainte superflue :",
        bullets: [
          "Faites un <strong>clic gauche maintenu sur le disque métallique</strong> (`disque_metal_pour_teste.SLDPRT`) et déplacez la souris : le disque tourne à 360° en direct sous vos yeux !",
          "Vérifiez visuellement qu'il existe un espace visible (jeu d'au moins <code>0.5 mm</code>) entre la face inférieure du disque métallique et la face supérieure du couvercle.",
          "Si le disque frotte contre le plastique du couvercle, éditez la hauteur de dégagement du boîtier ou l'épaisseur du couvercle."
        ]
      },
      {
        title: "3. Détection d'interférences (L'outil indispensable avant fabrication)",
        text: "Avant d'exporter les pièces en STL pour l'imprimante 3D du club :",
        bullets: [
          "Allez dans l'onglet <strong>Évaluer</strong> du CommandManager (en haut).",
          "Cliquez sur <strong>Détection d'interférences</strong>.",
          "Cliquez sur le bouton <strong>Calculer</strong>.",
          "SolidWorks passe au crible chaque facette géométrique : si deux pièces se chevauchent dans l'espace, le volume de collision s'affiche en <strong>rouge éclatant</strong> avec le volume exact en mm³ !",
          "Si le résultat indique <strong>'Aucune interférence'</strong>, votre ensemble mécatronique est 100% validé pour la production et le match Eurobot !"
        ]
      }
    ],
    placeholder: {
      title: "Animation GIF : Test cinématique de rotation et chaîne mécatronique",
      caption: "Vérification en direct de la libre rotation du palonnier et du comportement de l'assemblage.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "kinematics_robot_arm.gif",
      svgType: "kinematics"
    },
    warnings: [
      {
        title: "Jeu fonctionnel d'impression 3D FDM",
        text: "Rappelez-vous qu'en impression 3D fil fondu (PLA / PETG), le plastique chaud s'étale légèrement (+0.1 à +0.2 mm par face). Conservez toujours un jeu d'au moins 0.3 à 0.4 mm dans les rainures de glissière pour que le Feetech s'insère sans coincer !"
      }
    ],
    tips: [
      {
        title: "Activer la Dynamique physique",
        text: "Dans le menu <em>Déplacer le composant</em>, vous pouvez cocher <strong>Dynamique physique</strong> : SolidWorks arrêtera automatiquement la rotation dès qu'une pièce entre en collision avec une butée !"
      }
    ]
  },
  {
    id: "step-4-6",
    moduleIndex: 4,
    stepNumber: "4.6",
    title: "Bilan de Conception, Guide Atelier Inserts Chauds & Certification 7Robot",
    moduleTitle: "Module 4 : L'Assemblage et la mécanique (Le Servomoteur Feetech)",
    subtitle: "Les règles d'or de fabrication FDM du club et validation officielle du parcours",
    category: "Certification & Synthèse",
    duration: "8 min",
    difficulty: "Synthèse",
    summary: "Félicitations pour avoir mené à bien ce projet d'ingénierie mécatronique complet en conception descendante ! Consultez la fiche d'atelier 7Robot pour le montage des inserts à chaud et validez votre certification CAO.",
    imageSrc: "assets/images/certification_7robot_cad.svg",
    objectives: [
      "Maîtriser la méthode d'insertion des inserts laiton M3 au fer à souder à 220°C",
      "Choisir la visserie adaptée (FHC M3x8mm ou M3x10mm)",
      "Valider la checklist d'homologation CAO interne 7Robot",
      "Télécharger votre attestation officielle 7Robot CAD Certified"
    ],
    instructions: [
      {
        title: "1. Fiche technique d'atelier : L'insertion des inserts laiton M3 à chaud",
        text: "Pour transformer vos perçages imprimés Ø 4.60 mm x prof. ≥ 5.0 mm en filetages métalliques ultra-résistants :",
        bullets: [
          "🌡️ <strong>Température du fer :</strong> Réglez la station de soudage de l'atelier sur <strong>220°C - 230°C</strong> (température idéale pour fondre localement le PLA sans brûler le polymère).",
          "📐 <strong>Mise en place :</strong> Posez le boîtier à plat. Déposez l'insert laiton M3 à la main sur l'entrée du trou de Ø 4.60 mm en veillant à sa parfaite verticalité.",
          "🔥 <strong>Chauffe et enfoncement :</strong> Placez la panne plate ou l'embout spécial pour insert dans l'alésage de l'insert. Appliquez une légère pression verticale : laiton et plastique montent en température, l'insert s'enfonce en douceur.",
          "🛑 <strong>Arrêt à l'affleurement :</strong> Retirez le fer dès que l'insert arrive à environ 0.2 mm sous la surface supérieure.",
          "❄️ <strong>Refroidissement sous presse :</strong> Plaquez immédiatement une plaque métallique froide (ou un réglet) sur l'insert pendant 5 secondes : le laiton s'aligne rigoureusement à plat pendant que le plastique durcit."
        ]
      },
      {
        title: "2. Fiche visserie FHC M3 pour le couvercle",
        text: "Pour un montage mécanique parfait sans jeu ni arrachement :",
        bullets: [
          "🔩 <strong>Vis recommandées :</strong> 4x Vis FHC M3 (tête fraisée 90°, empreinte hexagonale 6 pans creux 2 mm).",
          "📏 <strong>Longueur de vis nominale :</strong> <code>M3 x 8 mm</code> ou <code>M3 x 10 mm</code> (3.5 mm de couvercle + 4 mm d'insert fileté + 1 mm de dégagement dans le fond borgne).",
          "✨ <strong>Résultat :</strong> Grâce au chanfrein de 45° x 1.75 mm réalisé au Step 4.4, les 4 têtes de vis sont 100% affleurantes !"
        ]
      },
      {
        title: "3. La checklist finale d'homologation CAO 7Robot",
        text: "Avant de partager vos fichiers sur le Drive ou le Git du club :",
        bullets: [
          "☑️ <strong>Arbre propre :</strong> Toutes les esquisses sont totalement contraintes (aucune couleur bleue).",
          "☑️ <strong>Pièce maîtresse ancrée :</strong> Le Feetech a bien le symbole <code>(f)</code> dans l'arbre d'assemblage.",
          "☑️ <strong>Conception en contexte :</strong> Le boîtier et le couvercle ont été créés via l'outil <em>Nouvelle pièce</em> et enregistrés en fichiers externes.",
          "☑️ <strong>Dimensions normalisées :</strong> Trous d'inserts à Ø 4.60 mm prof. ≥ 5.0 mm, trous de couvercle à Ø 3.20 mm avec chanfrein 45° x 1.75 mm.",
          "☑️ <strong>Zéro collision :</strong> La détection d'interférences retourne un résultat vierge."
        ]
      },
      {
        title: "4. Message de l'équipe 7Robot aux nouveaux concepteurs",
        text: "<div class='my-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-orange-500/10 border-2 border-[#ff7d00] shadow-lg glow-7robot text-center'><div class='inline-flex p-3 bg-[#ff7d00] text-white rounded-2xl shadow-md mb-2'><svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'/></svg></div><h3 class='text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight'>⚔️ Tu es maintenant prêt à modéliser des actionneurs pour les robots de combat !!!</h3><p class='text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed'>Tu possèdes désormais toutes les clés techniques nécessaires : esquisses contraintes, fonctions volumiques avancées, conception en contexte dans l'assemblage, tolérances d'inserts FDM et validation cinématique pour la Coupe de France et Eurobot.</p></div>"
      }
    ],
    placeholder: {
      title: "Attestation officielle : 7Robot CAD Certified",
      caption: "Félicitations ! Vous maîtrisez désormais la chaîne complète de conception mécanique sous SolidWorks.",
      recommendedDimensions: "1920 x 1080 px (Format 16:9)",
      imageFileName: "certification_7robot_cad.svg",
      svgType: "trophy"
    },
    warnings: [
      {
        title: "Ne serrez pas les vis FHC comme une brute !",
        text: "Les inserts laiton sont solidement ancrés dans le plastique, mais un couple de serrage excessif peut arracher l'insert hors de son puits thermoplastique. Serrez fermement au contact, sans forcer avec une grande rallonge !"
      }
    ],
    tips: [
      {
        title: "Prêt pour la Coupe de France et les combats de robots !",
        text: "Tu es maintenant prêt à modéliser des actionneurs pour les robots de combat !!! Rendez-vous au local 7Robot pour lancer l'impression 3D de ton boîtier et intégrer l'équipe de match !"
      }
    ]
  }
];

// Rendre accessible globalement
window.COURSE_MODULES = COURSE_MODULES;
window.COURSE_STEPS = COURSE_STEPS;
