/**
 * ==============================================================================
 * 7ROBOT ACADEMY - FORMATION CAO SOLIDWORKS
 * Structure de données du cours (Modules, Chapitres, Instructions pratiques)
 * Ton direct, simple et étudiant - Conçu pour les membres de 7Robot
 * ==============================================================================
 */

const COURSE_MODULES = [
  {
    id: "module-0",
    title: "Introduction : Bienvenue dans la CAO",
    shortTitle: "Intro : Interface & Souris",
    icon: "compass",
    description: "Prise en main de SolidWorks, repérage dans les menus et les 3 mouvements indispensables à la souris."
  },
  {
    id: "module-1",
    title: "Module 1 : Ta première pièce 3D (Le Cylindre)",
    shortTitle: "Mod 1 : Le Cylindre & Extrusion",
    icon: "cube",
    description: "Choisir un plan de travail, tracer un cercle coté et lui donner du volume avec l'extrusion."
  },
  {
    id: "module-2",
    title: "Module 2 : L'art de l'esquisse et des contraintes",
    shortTitle: "Mod 2 : Esquisse & Contraintes",
    icon: "pencil",
    description: "Pourquoi l'origine rouge est sacrée, les 4 contraintes reines et comment passer du bleu au noir."
  },
  {
    id: "module-3",
    title: "Module 3 : Les outils de modélisation avancés",
    shortTitle: "Mod 3 : Outils avancés",
    icon: "sparkles",
    description: "Révolution, répétition circulaire, balayage et symétrie à travers 4 exercices pratiques."
  },
  {
    id: "module-4",
    title: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    shortTitle: "Mod 4 : Boîtier Feetech & Assemblage",
    icon: "puzzle",
    description: "Glissière pour servomoteur Feetech, inserts laiton M3 (Ø4.6mm), couvercle fraisé et cinématique."
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
    title: "Bienvenue sur SolidWorks : L'interface et la souris",
    moduleTitle: "Introduction : Bienvenue dans la CAO",
    subtitle: "Prendre ses repères dans le logiciel et maîtriser les contrôles 3D",
    category: "Prise en main",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "Avant de dessiner, on repère où sont rangés les outils, comment naviguer dans l'espace 3D à la souris et comment SolidWorks fonctionne.",
    quickGoal: {
      concept: "On découvre l'écran de SolidWorks, les 3 zones principales et les mouvements de souris indispensables pour ne pas être perdu.",
      actions: [
        "Repérer le ruban d'outils en haut, l'arbre de création à gauche et la zone 3D au centre.",
        "Tester la rotation 3D avec la molette enfoncée et le recentrage avec la touche F.",
        "Comprendre la logique de base : on dessine d'abord à plat (Esquisse), puis on donne du volume (Fonction 3D)."
      ]
    },
    imageSrc: "assets/images/intro_interface_solidworks.jpg",
    placeholder: {
      title: "L'écran principal de SolidWorks",
      caption: "Le CommandManager en haut, l'arbre FeatureManager à gauche et l'espace 3D au centre.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "intro_interface_solidworks.jpg",
      svgType: "interface"
    },
    instructions: [
      {
        title: "1. Les 3 zones clés de l'écran",
        text: "Quand tu ouvres une pièce dans SolidWorks, tout s'organise autour de 3 espaces :",
        bullets: [
          "<strong>Le ruban d'outils en haut (CommandManager) :</strong> C'est ta boîte à outils. Les deux onglets que tu utiliseras 95% du temps sont <em>Esquisse</em> (pour dessiner en 2D) et <em>Fonctions</em> (pour transformer tes dessins en solides 3D).",
          "<strong>L'arbre de création à gauche (FeatureManager) :</strong> C'est l'historique de ta pièce. Tout ce que tu crées (plans, esquisses, trous, arrondis) s'empile ici du haut vers le bas. Tu peux double-cliquer sur n'importe quel élément pour modifier sa taille plus tard.",
          "<strong>La zone 3D au centre :</strong> C'est ton atelier virtuel où ta pièce prend vie."
        ]
      },
      {
        title: "2. Les 3 mouvements de souris indispensables",
        text: "Prends 30 secondes pour tester ces raccourcis avec ta souris :",
        bullets: [
          "<strong>Tourner autour de la pièce :</strong> Maintiens le <strong>clic molette enfoncé</strong> et bouge la souris.",
          "<strong>Zoomer / Dézoomer :</strong> Fais simplement rouler la molette.",
          "<strong>Déplacer la vue à plat (Pan) :</strong> Maintiens <kbd class='shortcut-key'>Ctrl</kbd> + clic molette enfoncé et bouge la souris.",
          "<strong>Pièce perdue hors de l'écran ?</strong> Appuie sur la touche <kbd class='shortcut-key'>F</kbd> du clavier : elle recentre instantanément tout ton modèle à l'écran !"
        ]
      },
      {
        title: "3. La règle d'or : Sauvegarder !",
        text: "SolidWorks est un gros logiciel de calcul :",
        bullets: [
          "Au club 7Robot, prends le réflexe automatique : <strong>presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> toutes les 5 minutes</strong> pour ne jamais perdre ton travail en cas de plantage !"
        ]
      }
    ],
    warnings: [
      {
        title: "Pense toujours à enregistrer régulièrement",
        text: "Pendant les nuits de rush avant la Coupe de France, un crash de PC arrive toujours au pire moment. <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> doit devenir un réflexe involontaire !"
      }
    ],
    tips: [
      {
        title: "Le raccourci magique : la touche S",
        text: "Appuie sur la touche <kbd class='shortcut-key'>S</kbd> n'importe où : une petite palette d'outils favoris apparaît pile sous ton curseur. Tu gagnes un temps fou !"
      },
      {
        title: "Se mettre bien en face : Ctrl + 8",
        text: "Pour regarder une face bien perpendiculairement sans galérer à la souris, clique dessus et appuie sur <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd>."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 1 : LE CYLINDRE
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // MODULE 1 : PRÉSENTATION & OBJECTIFS
  // --------------------------------------------------------------------------
  {
    id: "step-1-intro",
    moduleIndex: 1,
    isModuleIntro: true,
    stepNumber: "Intro",
    targetStepId: "step-1-1",
    targetStepNumber: "1.1",
    shortTitle: "Présentation & Objectifs",
    title: "Module 1 : Ta première pièce 3D (Le Cylindre)",
    moduleTitle: "Module 1 : Ta première pièce 3D (Le Cylindre)",
    subtitle: "Découvrir l'interface et créer une entretoise cylindrique réelle",
    category: "Présentation de module",
    duration: "20 min au total",
    difficulty: "Débutant",
    summary: "Introduction du Module 1 : Découvrir l'interface en créant une pièce très simple (un cylindre servant d'entretoise). Choisir un plan, tracer un cercle et lui donner du volume.",
    generalGoal: "L'objectif est de découvrir l'interface en créant une pièce très simple : un cylindre (qui servira d'entretoise). On va voir comment choisir un plan, faire un cercle et lui donner du volume avec une extrusion.",
    skills: [
      {
        title: "Choisir le bon plan de travail",
        desc: "Comprendre où poser sa feuille de dessin virtuelle parmi les 3 plans par défaut (Face, Dessus, Droite)."
      },
      {
        title: "Tracer et coter une esquisse 2D",
        desc: "Dessiner un cercle centré sur l'origine et fixer son diamètre précis de 30 mm avec la Cotation intelligente."
      },
      {
        title: "Donner du volume 3D (Extrusion)",
        desc: "Transformer une esquisse plane en solide réel de 50 mm de haut avec la fonction Bossage / Base extrudée."
      }
    ],
    expectedResult: {
      badge: "RÉSULTAT DU MODULE 1",
      title: "Entretoise cylindrique terminée (Ø30 mm × 50 mm)",
      description: "Une pièce mécanique simple, rigide et cotée au millimètre près, prête pour l'atelier ou l'impression 3D.",
      imageSrc: "assets/images/mod1_extrusion_bossage_cylindre.svg",
      placeholderText: "Aperçu du modèle 3D attendu : Le cylindre 3D ombré avec son esquisse cotée à Ø30 mm.",
      recommendedDimensions: "1920 x 1080 px"
    },
    instructions: [],
    objectives: [],
    quickGoal: {
      concept: "Découvrir l'interface en créant une entretoise cylindrique réelle de 50 mm.",
      actions: [
        "Choisir le plan de travail virtuel",
        "Tracer un cercle coté à 30 mm",
        "Extruder en volume 3D de 50 mm"
      ]
    },
    placeholder: {
      title: "Entretoise cylindrique terminée (Ø30 mm × 50 mm)",
      caption: "Une pièce mécanique simple, rigide et cotée au millimètre près.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod1_extrusion_bossage_cylindre.svg",
      svgType: "extrude"
    }
  },
  {
    id: "step-1-1",
    moduleIndex: 1,
    stepNumber: "1.1",
    title: "Choisir son plan de travail (Plan de Face)",
    moduleTitle: "Module 1 : Ta première pièce 3D (Le Cylindre)",
    subtitle: "Sélectionner la bonne feuille de papier virtuelle pour démarrer",
    category: "Positionnement",
    duration: "5 min",
    difficulty: "Débutant",
    summary: "Dans le vide 3D, on ne peut pas dessiner dans les airs. On choisit d'abord un plan (Face, Dessus ou Droite) pour poser notre feuille d'esquisse.",
    quickGoal: {
      concept: "On ouvre un nouveau document Pièce et on choisit le Plan de Face pour y poser notre toute première esquisse 2D.",
      actions: [
        "Créer une nouvelle pièce avec le raccourci Ctrl + N ➔ Pièce ➔ OK.",
        "Cliquer sur 'Plan de Face' dans l'arbre à gauche.",
        "Cliquer sur le bouton 'Esquisse' et appuyer sur Ctrl + 8 pour se mettre bien en face."
      ]
    },
    imageSrc: "assets/images/mod1_choix_plan_face.svg",
    placeholder: {
      title: "Sélection du Plan de Face",
      caption: "L'arbre à gauche avec les 3 plans par défaut et la mise en surbrillance du Plan de Face.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod1_choix_plan_face.svg",
      svgType: "plane"
    },
    instructions: [
      {
        title: "1. Ouvrir une nouvelle pièce",
        text: "C'est parti pour ta première création :",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> (ou clique sur la feuille blanche en haut à gauche).",
          "Sélectionne <strong>Pièce</strong> (le cube rouge) puis clique sur <strong>OK</strong>.",
          "Vérifie les unités tout en bas à droite de la fenêtre : tu dois voir <strong>MMGS</strong> (millimètre, gramme, seconde). Si ce n'est pas le cas, clique dessus et choisis MMGS."
        ]
      },
      {
        title: "2. Activer l'esquisse sur le Plan de Face",
        text: "Regarde l'arbre à gauche : SolidWorks te propose 3 plans par défaut (Face, Dessus, Droite) :",
        bullets: [
          "Fais un clic gauche sur <strong>Plan de Face</strong>.",
          "Une petite barre d'outils contextuelle apparaît : clique sur la toute première icône <strong>Esquisse</strong> (un crayon sur une feuille).",
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd> pour orienter la vue parfaitement à plat devant toi. Tu vois apparaître au centre deux flèches rouges : c'est <strong>l'origine (0,0,0)</strong> !"
        ]
      }
    ],
    warnings: [
      {
        title: "Vérifie toujours les unités MMGS",
        text: "Si tu es en pouces (IPS) par erreur, une pièce de 30 mm deviendra une pièce de 30 pouces (soit 76 cm !). Vérifie toujours 'MMGS' en bas à droite."
      }
    ],
    tips: [
      {
        title: "Comment savoir si on est bien dans une esquisse ?",
        text: "En haut à droite de la zone 3D, tu dois voir une icône avec une flèche bleue et une croix rouge. Tant que cette icône est là, tu es en train de dessiner dans ton esquisse !"
      }
    ]
  },
  {
    id: "step-1-2",
    moduleIndex: 1,
    stepNumber: "1.2",
    title: "Dessiner le cercle et le coter à 30 mm",
    moduleTitle: "Module 1 : Ta première pièce 3D (Le Cylindre)",
    subtitle: "Tracer une forme géométrique et lui donner sa taille exacte",
    category: "Esquisse 2D",
    duration: "7 min",
    difficulty: "Débutant",
    summary: "On trace un cercle centré sur le point rouge de l'origine et on utilise la Cotation intelligente pour lui donner un diamètre exact de 30 mm.",
    quickGoal: {
      concept: "On utilise l'outil Cercle en partant du centre rouge, puis on tape 30 mm avec l'outil Cotation intelligente.",
      actions: [
        "Prendre l'outil 'Cercle' dans le ruban Esquisse.",
        "Cliquer sur le point rouge de l'origine, étirer la souris et recliquer.",
        "Prendre 'Cotation intelligente' (touche D), cliquer sur le cercle et taper 30."
      ]
    },
    imageSrc: "assets/images/mod1_cercle_cote_30.svg",
    placeholder: {
      title: "Cercle coté à Ø30 mm sur l'origine",
      caption: "Cercle noir avec la cote de diamètre 30 mm et le symbole de coïncidence vert au centre.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod1_cercle_cote_30.svg",
      svgType: "sketch"
    },
    instructions: [
      {
        title: "1. Tracer le cercle sur l'origine",
        text: "Dans ton esquisse ouverte :",
        bullets: [
          "Dans l'onglet <em>Esquisse</em>, clique sur l'outil <strong>Cercle</strong>.",
          "Approche ton curseur du point rouge au centre : un petit point orange et un symbole jaune apparaissent. C'est l'aimantation automatique !",
          "Fais un clic gauche sur le point rouge, écarte ta souris : le cercle grandit. Fais un second clic pour poser le cercle à une taille quelconque (on règlera la taille juste après)."
        ]
      },
      {
        title: "2. Donner la taille exacte : la Cotation intelligente",
        text: "Sous SolidWorks, on ne cherche pas à viser la bonne taille à la main :",
        bullets: [
          "Clique sur l'outil <strong>Cotation intelligente</strong> (icône avec une règle double-flèche) ou appuie sur la touche <kbd class='shortcut-key'>D</kbd>.",
          "Clique sur le bord de ton cercle, puis clique un peu plus loin dans le vide pour déposer la cote.",
          "Une petite case s'ouvre : tape simplement <strong><code>30</code></strong> au clavier et appuie sur <kbd class='shortcut-key'>Entrée</kbd>.",
          "Regarde ton cercle : son contour bleu est devenu **noir** ! Cela signifie qu'il est verrouillé à 100%."
        ]
      }
    ],
    warnings: [
      {
        title: "Ne clique pas dans le vide pour démarrer le cercle",
        text: "Si tu ne cliques pas pile sur le point rouge de l'origine, ton cercle restera bleu parce que SolidWorks ne sait pas où il doit être placé dans l'espace !"
      }
    ],
    tips: [
      {
        title: "Raccourci cotation : touche D",
        text: "La touche <kbd class='shortcut-key'>D</kbd> active instantanément la cotation intelligente. C'est l'un des raccourcis les plus utilisés en CAO."
      }
    ]
  },
  {
    id: "step-1-3",
    moduleIndex: 1,
    stepNumber: "1.3",
    title: "Donner du volume : L'extrusion de 50 mm",
    moduleTitle: "Module 1 : Ta première pièce 3D (Le Cylindre)",
    subtitle: "Transformer un dessin 2D plat en un solide 3D manipulable",
    category: "Fonctions 3D",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "On étire notre cercle de 30 mm pour en faire un cylindre plein de 50 mm avec l'option Plan Milieu.",
    quickGoal: {
      concept: "On passe du dessin 2D au solide 3D grâce à la fonction Bossage extrudé, en étirant le cercle de 50 mm.",
      actions: [
        "Aller dans l'onglet 'Fonctions' et cliquer sur 'Bossage/Base extrudé'.",
        "Régler la profondeur sur 50 mm.",
        "Choisir la direction 'Plan Milieu' et valider avec la coche verte."
      ]
    },
    imageSrc: "assets/images/mod1_extrusion_bossage_cylindre.svg",
    placeholder: {
      title: "Extrusion du cylindre en Plan Milieu",
      caption: "Aperçu jaune 3D de l'extrusion de 50 mm symétrique par rapport au plan d'esquisse.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod1_extrusion_bossage_cylindre.svg",
      svgType: "extrude"
    },
    instructions: [
      {
        title: "1. Lancer l'extrusion bossage",
        text: "Ton cercle noir de 30 mm est prêt :",
        bullets: [
          "Bascule sur l'onglet <strong>Fonctions</strong> tout en haut à gauche du ruban.",
          "Clique sur la première icône : <strong>Bossage/Base extrudé</strong>.",
          "La vue 3D pivote automatiquement et un cylindre jaune translucide apparaît pour te montrer l'aperçu du résultat."
        ]
      },
      {
        title: "2. Régler les 50 mm et choisir 'Plan Milieu'",
        text: "Dans le panneau de configuration à gauche (PropertyManager) :",
        bullets: [
          "Dans le champ de profondeur, entre <strong><code>50.0 mm</code></strong>.",
          "Dans le menu déroulant qui indique par défaut <em>Borgne</em>, clique et choisis <strong>Plan Milieu</strong>.",
          "<strong>Pourquoi Plan Milieu ?</strong> Au lieu de pousser la matière d'un seul côté, SolidWorks étire 25 mm vers l'avant et 25 mm vers l'arrière. Ton cylindre reste parfaitement centré sur le Plan de Face, ce qui te simplifiera énormément la vie pour créer des symétries plus tard !",
          "Clique sur la <strong>coche verte (OK)</strong> tout en haut à gauche pour valider."
        ]
      },
      {
        title: "3. Admire ta première pièce 3D !",
        text: "Ton cylindre est créé :",
        bullets: [
          "Maintiens le clic molette et fais tourner la souris : tu peux observer ton solide sous tous les angles !",
          "Sauvegarde la pièce avec <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> sous le nom <code>Cylindre_Base.SLDPRT</code>."
        ]
      }
    ],
    warnings: [
      {
        title: "Pourquoi éviter le mode 'Borgne' quand on peut ?",
        text: "Le mode Borgne crée la pièce tout d'un côté. Si tu dois plus tard couper la pièce en deux ou faire une symétrie, tu n'auras aucun plan au milieu. Prends l'habitude du Plan Milieu pour toutes les pièces symétriques !"
      }
    ],
    tips: [
      {
        title: "Changer l'apparence des arêtes",
        text: "Dans la petite barre d'affichage au-dessus de la vue 3D, clique sur la sphère bleue : choisis <em>Images ombrées avec arêtes</em> pour que les contours ressortent nettement."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 2 : FOCUS SKETCH & CONTRAINTES
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // MODULE 2 : PRÉSENTATION & OBJECTIFS
  // --------------------------------------------------------------------------
  {
    id: "step-2-intro",
    moduleIndex: 2,
    isModuleIntro: true,
    stepNumber: "Intro",
    targetStepId: "step-2-1",
    targetStepNumber: "2.1",
    shortTitle: "Présentation & Objectifs",
    title: "Module 2 : L'art de l'esquisse et des contraintes",
    moduleTitle: "Module 2 : L'art de l'esquisse et des contraintes",
    subtitle: "Maîtriser la 2D pour concevoir des géométries solides sans erreurs",
    category: "Présentation de module",
    duration: "45 min au total",
    difficulty: "Intermédiaire",
    summary: "Introduction du Module 2 : Maîtriser la 2D (les esquisses), la base de tout. Utiliser les lignes de construction et les relations géométriques pour bien contraindre les pièces sans cotes inutiles.",
    generalGoal: "L'objectif est de maîtriser la 2D (les esquisses). C'est la base de tout ! On va apprendre à utiliser les lignes de construction et les relations géométriques pour bien contraindre les pièces sans avoir à mettre des cotes (dimensions) partout.",
    skills: [
      {
        title: "L'ancrage sur l'Origine rouge (0,0)",
        desc: "Comprendre pourquoi l'origine est sacrée et comment elle empêche ta pièce de dériver dans le vide."
      },
      {
        title: "Les 4 relations géométriques reines",
        desc: "Remplacer les cotes superflues par des contraintes intelligentes : Coïncidence, Concentricité, Tangence et Perpendicularité."
      },
      {
        title: "Passer du bleu au noir (Totalement contraint)",
        desc: "Le code couleur vital de SolidWorks : une esquisse bleue bouge et casse, une esquisse noire est indestructible."
      },
      {
        title: "Outils de productivité d'esquisse",
        desc: "Gagner du temps avec les lignes de construction, la Symétrie 2D, le Décalage d'entités et l'Ajustement rapide."
      }
    ],
    expectedResult: {
      badge: "RÉSULTAT DU MODULE 2",
      title: "Profil technique entièrement noir (100% contraint)",
      description: "Une esquisse paramétrique propre, robuste aux modifications d'échelle et sans sur-cotation jaune ou rouge.",
      imageSrc: "assets/images/mod2_bleu_vers_noir.svg",
      placeholderText: "Aperçu du modèle 3D attendu : Esquisse fermée aux traits noirs avec ses symboles de contraintes verts visibles.",
      recommendedDimensions: "1920 x 1080 px"
    },
    instructions: [],
    objectives: [],
    quickGoal: {
      concept: "Maîtriser les esquisses 2D pour verrouiller les pièces avec les contraintes géométriques.",
      actions: [
        "S'accrocher à l'Origine rouge",
        "Appliquer les 4 relations reines",
        "Passer tous les traits du bleu au noir",
        "Utiliser les outils symétrie et ajustement"
      ]
    },
    placeholder: {
      title: "Profil technique entièrement noir (100% contraint)",
      caption: "Une esquisse paramétrique propre, robuste aux modifications.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod2_bleu_vers_noir.svg",
      svgType: "sketch"
    }
  },
  {
    id: "step-2-1",
    moduleIndex: 2,
    stepNumber: "2.1",
    title: "L'origine rouge et les traits de construction",
    moduleTitle: "Module 2 : L'art de l'esquisse et des contraintes",
    subtitle: "Pourquoi il faut toujours accrocher ses dessins à l'origine",
    category: "Règles d'or",
    duration: "8 min",
    difficulty: "Intermédiaire",
    summary: "Comprendre pourquoi un dessin sans lien avec l'origine est la cause numéro 1 d'erreur en CAO, et comment les traits en pointillés servent de guides.",
    quickGoal: {
      concept: "On apprend à ancrer son dessin sur l'origine rouge et à tracer des lignes de construction (traits d'axe) pour structurer ses pièces.",
      actions: [
        "Comprendre le rôle de l'origine (0,0,0) : le point d'ancrage absolu de la pièce.",
        "Tracer une 'Ligne de construction' (en pointillé) pour créer un axe de référence.",
        "Distinguer un trait plein (qui crée de la matière) d'un trait pointillé (qui sert juste de guide virtuel)."
      ]
    },
    imageSrc: "assets/images/mod2_origine_lignes_construction.svg",
    placeholder: {
      title: "Origine rouge et Ligne de construction",
      caption: "Ligne de construction passant par l'origine rouge avec son symbole vert de coïncidence.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod2_origine_lignes_construction.svg",
      svgType: "sketch"
    },
    instructions: [
      {
        title: "1. Pourquoi l'origine est sacrée ?",
        text: "Dans SolidWorks, l'espace 3D est infini. Si tu dessines un rectangle n'importe où sans le rattacher au point rouge de l'origine :",
        bullets: [
          "Dès que tu modifieras une cote, le rectangle peut se déplacer n'importe où sur l'écran.",
          "Dans un assemblage, SolidWorks ne saura pas où placer la pièce.",
          "Les imprimantes 3D et découpeuses laser utilisent l'origine comme référence machine (X=0, Y=0)."
        ]
      },
      {
        title: "2. Les Lignes de construction (traits en pointillés)",
        text: "Ce sont tes lignes de brouillon :",
        bullets: [
          "Clique sur la petite flèche à côté de l'outil <strong>Ligne</strong> ➔ choisis <strong>Ligne de construction</strong>.",
          "Trace un trait : il apparaît en pointillés.",
          "Ce trait est invisible pour les fonctions 3D : il ne crée pas de matière. Il sert uniquement d'axe de symétrie, d'axe de rotation ou de repère pour placer d'autres formes."
        ]
      }
    ],
    warnings: [
      {
        title: "Ne laisse jamais une esquisse flotter sans origine",
        text: "Au club 7Robot, la règle est simple : au moins un point ou une ligne de ton esquisse doit être accroché à l'origine rouge !"
      }
    ],
    tips: [
      {
        title: "Transformer un trait normal en trait pointillé",
        text: "Clique sur n'importe quel trait de ton dessin et coche la case <em>Pour la construction</em> dans le panneau de gauche : il devient immédiatement en pointillés !"
      }
    ]
  },
  {
    id: "step-2-2",
    moduleIndex: 2,
    stepNumber: "2.2",
    title: "Les 4 relations géométriques indispensables",
    moduleTitle: "Module 2 : L'art de l'esquisse et des contraintes",
    subtitle: "Lier les formes entre elles sans taper 50 cotes au hasard",
    category: "Contraintes 2D",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Découvre les 4 relations reines de la robotique : Égalité, Tangence, Concentricité et Coïncidence.",
    quickGoal: {
      concept: "Plutôt que de coter chaque élément un par un, on apprend à lier les formes entre elles grâce aux relations géométriques automatiques.",
      actions: [
        "Sélectionner deux éléments avec la touche Ctrl enfoncée pour voir les relations possibles.",
        "Appliquer l'Égalité pour que plusieurs cercles aient la même taille en 1 clic.",
        "Appliquer la Concentricité pour aligner des perçages sur le même centre."
      ]
    },
    imageSrc: "assets/images/mod2_relations_geometriques.svg",
    placeholder: {
      title: "Les 4 relations reines de la robotique",
      caption: "Infographie illustrant l'Égalité, la Tangence, la Concentricité et la Coïncidence.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod2_relations_geometriques.svg",
      svgType: "relations"
    },
    instructions: [
      {
        title: "1. Comment ajouter une relation ?",
        text: "C'est la manipulation la plus courante sous SolidWorks :",
        bullets: [
          "Maintiens la touche <kbd class='shortcut-key'>Ctrl</kbd> enfoncée sur ton clavier.",
          "Clique sur le premier trait ou cercle, puis clique sur le second.",
          "Relâche <kbd class='shortcut-key'>Ctrl</kbd> : une petite fenêtre apparaît sous ta souris avec toutes les relations possibles entre ces deux éléments !"
        ]
      },
      {
        title: "2. Les 4 relations à retenir",
        text: "Voici les 4 incontournables :",
        bullets: [
          "<strong>Égalité :</strong> Donne exactement la même dimension à deux segments ou deux cercles. Si tu as 4 trous de vis, cote un seul cercle et mets les 3 autres en relation d'Égalité !",
          "<strong>Concentricité :</strong> Aligne deux cercles sur le même centre (parfait pour dessiner une rondelle ou un dégagement de vis).",
          "<strong>Tangence :</strong> Raccorde un cercle avec une ligne droite de façon fluide, sans angle vif.",
          "<strong>Coïncidence :</strong> Colle deux points ensemble ou plaque un point sur une ligne."
        ]
      }
    ],
    warnings: [
      {
        title: "Évite la relation 'Fixe'",
        text: "Il existe une icône en forme de petite ancre marine appelée 'Fixe'. Elle fige un trait n'importe où sans logique de cote. Au club 7Robot, on l'interdit : utilise toujours de vraies cotes et de vraies relations géométriques !"
      }
    ],
    tips: [
      {
        title: "Masquer les petits carrés verts",
        text: "Quand ton dessin se complexifie, les petits carrés verts de relations peuvent encombrer l'écran. Dans la barre haute, clique sur l'icône de l'œil ➔ décoche <em>Afficher les relations d'esquisse</em>."
      }
    ]
  },
  {
    id: "step-2-3",
    moduleIndex: 2,
    stepNumber: "2.3",
    title: "Passer du bleu au noir (Totalement contraint)",
    moduleTitle: "Module 2 : L'art de l'esquisse et des contraintes",
    subtitle: "Comprendre le code couleur et verrouiller son dessin",
    category: "Contrôle qualité",
    duration: "8 min",
    difficulty: "Intermédiaire",
    summary: "Le code couleur de SolidWorks te prévient des erreurs. Découvre pourquoi le noir est obligatoire avant toute extrusion chez 7Robot.",
    quickGoal: {
      concept: "Comprendre ce que veulent dire les couleurs sous SolidWorks et traquer les cotes manquantes avec le test de traction.",
      actions: [
        "Déchiffrer le code couleur : Bleu (pas fini), Noir (parfait), Rouge/Jaune (erreur).",
        "Regarder la barre d'état en bas à droite pour vérifier la mention 'Totalement contraint'.",
        "Faire le test de traction : attraper un point bleu à la souris et tirer dessus pour trouver la cote qui manque."
      ]
    },
    imageSrc: "assets/images/mod2_bleu_vers_noir.svg",
    placeholder: {
      title: "Comparatif : Esquisse bleue vs Esquisse noire",
      caption: "L'esquisse bleue peut se déformer à tout moment ; l'esquisse noire est verrouillée et prête pour la fabrication.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod2_bleu_vers_noir.svg",
      svgType: "status"
    },
    instructions: [
      {
        title: "1. La signification des couleurs",
        text: "Chaque trait communique son état par sa couleur :",
        bullets: [
          "🔵 <strong>BLEU (Sous-contraint) :</strong> Il manque des cotes ou des relations. Si tu touches la pièce par inadvertance, la forme va bouger ou changer de taille !",
          "⚫ <strong>NOIR (Totalement contraint) :</strong> Tout est verrouillé avec précision. C'est l'objectif obligatoire avant toute extrusion chez 7Robot.",
          "🔴 <strong>ROUGE / JAUNE (Conflit) :</strong> Deux cotes se contredisent (ex: forcer un trait à être horizontal et vertical en même temps). Supprime la dernière cote ajoutée pour régler le problème."
        ]
      },
      {
        title: "2. L'astuce du 'Test de traction'",
        text: "Tu as un trait bleu et tu ne sais pas quelle cote il manque ?",
        bullets: [
          "Quitte l'outil de cotation (<kbd class='shortcut-key'>Échap</kbd>).",
          "Fais un clic gauche maintenu sur un point bleu et <strong>tire dessus avec la souris</strong> !",
          "Si le point s'étire vers la droite, c'est qu'il te manque une cote de largeur. S'il monte, il manque une hauteur. S'il tourne, il manque un angle !"
        ]
      }
    ],
    warnings: [
      {
        title: "N'extrude jamais du bleu !",
        text: "Si tu extrudes une esquisse bleue, ta pièce risque de changer de taille lors de modifications futures sans que tu ne t'en rendes compte. Vise toujours le 100% noir !"
      }
    ],
    tips: [
      {
        title: "Vérifier la barre d'état en bas à droite",
        text: "Jette un œil tout en bas à droite de ta fenêtre : tu dois voir écrit en toutes lettres <strong>Totalement contraint</strong>."
      }
    ]
  },
  {
    id: "step-2-4",
    moduleIndex: 2,
    stepNumber: "2.4",
    title: "Outils pratiques : Couper au cutter, Décaler et Symétrie",
    moduleTitle: "Module 2 : L'art de l'esquisse et des contraintes",
    subtitle: "Multiplier sa vitesse de dessin avec 3 outils magiques",
    category: "Outils rapides",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Gagne du temps : coupe les traits en trop avec l'ajustement assisté (Power Trim), crée des parois régulières avec le décalage et duplique par symétrie.",
    quickGoal: {
      concept: "On utilise le Power Trim pour couper les traits en trop, le Décalage pour doubler une paroi et la Symétrie pour dessiner deux fois plus vite.",
      actions: [
        "Ajuster les entités (Power Trim) : glisser la souris clic gauche enfoncé pour couper les traits.",
        "Décaler les entités (Offset) : créer une paroi parallèle d'épaisseur constante (ex: 3 mm).",
        "Symétrie des entités (Mirror) : dupliquer la moitié d'une pièce par rapport à un axe central."
      ]
    },
    imageSrc: "assets/images/mod2_symetrie_decalage_ajustement.svg",
    placeholder: {
      title: "Boîte à outils 2D : Power Trim, Décalage et Symétrie",
      caption: "Schéma technique montrant le coup de cutter du Power Trim, le décalage de paroi et la symétrie miroir.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod2_symetrie_decalage_ajustement.svg",
      svgType: "tools"
    },
    instructions: [
      {
        title: "1. Ajuster les entités (Power Trim - Le coup de cutter)",
        text: "Quand deux traits se croisent et qu'un bout dépasse :",
        bullets: [
          "Clique sur l'outil <strong>Ajuster les entités</strong> (icône de ciseaux).",
          "Vérifie que l'option <em>Ajustement assisté (Power Trim)</em> est cochée à gauche.",
          "Maintiens le <strong>clic gauche enfoncé</strong> et fais glisser ton curseur à travers les bouts de traits à éliminer : une trace rouge les coupe instantanément comme un cutter !"
        ]
      },
      {
        title: "2. Décaler les entités (Créer une paroi d'épaisseur constante)",
        text: "Indispensable pour créer la coque d'un boîtier d'électronique en impression 3D :",
        bullets: [
          "Clique sur <strong>Décaler les entités</strong>.",
          "Clique sur ton contour existant et entre l'épaisseur voulue (ex: <code>3.0 mm</code>).",
          "Coche <em>Inverser</em> si le décalage part du mauvais côté."
        ]
      },
      {
        title: "3. Symétrie d'entités (Le miroir)",
        text: "Un châssis de robot est presque toujours symétrique :",
        bullets: [
          "Trace un trait d'axe vertical en pointillé passant par l'origine.",
          "Dessine uniquement la moitié gauche de ta pièce.",
          "Clique sur <strong>Symétrie des entités</strong>, sélectionne tes traits à gauche, puis choisis ton trait d'axe : la moitié droite se génère automatiquement !"
        ]
      }
    ],
    warnings: [
      {
        title: "Coup de cutter trop loin ?",
        text: "Si tu coupes un trait par mégarde avec le Power Trim, relâche la souris et fais immédiatement <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>Z</kbd>."
      }
    ],
    tips: [
      {
        title: "Vérifie les traits noirs après le cutter",
        text: "En coupant un bout de trait, tu peux parfois supprimer le point sur lequel reposait une cote. Jette toujours un œil rapide pour t'assurer que tout reste noir."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // MODULE 3 : LES OUTILS DE MODÉLISATION AVANCÉS
  // --------------------------------------------------------------------------
  {
    id: "step-3-intro",
    moduleIndex: 3,
    isModuleIntro: true,
    stepNumber: "Intro",
    targetStepId: "step-3-1",
    targetStepNumber: "3.1",
    shortTitle: "Module 3 : Objectifs",
    title: "Module 3 : Objectifs",
    moduleTitle: "Module 3 : Les outils de modélisation avancés",
    subtitle: "Découvrir des outils 3D puissants qui font gagner un temps fou",
    category: "Présentation de module",
    duration: "35 min",
    difficulty: "Intermédiaire",
    summary: "Découvrir des outils 3D puissants qui font gagner un temps fou. À travers 4 petits exercices rapides : Révolution, Répétition circulaire, Balayage et Symétrie.",
    goldenRule: "Pour chaque exercice de ce module, il faudra impérativement créer un nouveau fichier Pièce !",
    generalGoal: "Découvrir des outils 3D puissants qui font gagner un temps fou. À travers 4 petits exercices rapides, nous allons aborder 4 fonctions indispensables : l'outil Révolution, la Répétition circulaire, le Balayage et la Symétrie.",
    skills: [
      {
        title: "L'outil Révolution",
        desc: "Créer une pièce ronde (poulie de transmission) en dessinant uniquement son demi-profil."
      },
      {
        title: "La Répétition circulaire",
        desc: "Percer les trous d'un moyeu et les dupliquer en couronne régulière autour d'un axe."
      },
      {
        title: "Le Balayage",
        desc: "Modéliser un passage de câble tubulaire en faisant glisser une forme le long d'une courbe."
      },
      {
        title: "La Symétrie",
        desc: "Ne dessiner que la moitié d'un objet (pince de robot) et laisser SolidWorks faire le reste."
      }
    ],
    expectedResult: {
      badge: "RÉSULTAT DU MODULE 3",
      title: "Aperçu des 4 pièces finales (Poulie, Moyeu 6 trous, Passage de câble, Pince)",
      description: "Les 4 pièces mécaniques complètes modélisées au cours des 4 exercices de modélisation avancée.",
      imageSrc: "assets/images/mod3_apercu_4_pieces.png",
      placeholderText: "Illustration : Aperçu des 4 pièces finales (Poulie, Moyeu 6 trous, Passage de câble, Pince)",
      recommendedDimensions: "1920 x 1080 px"
    },
    instructions: [],
    objectives: [],
    quickGoal: {
      concept: "Découvrir des outils 3D puissants qui font gagner un temps fou.",
      actions: [
        "L'outil Révolution (poulie de transmission)",
        "La Répétition circulaire (moyeu à 6 trous)",
        "Le Balayage (passage de câble tubulaire)",
        "La Symétrie (pince de préhension)"
      ]
    },
    placeholder: {
      title: "Aperçu des 4 pièces finales",
      caption: "Poulie de transmission, moyeu percé, passage de câble et pince symétrique.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod3_apercu_4_pieces.png",
      imageSrc: "assets/images/mod3_apercu_4_pieces.png",
      svgType: "assembly"
    }
  },

  // --------------------------------------------------------------------------
  // 3.1 L'OUTIL RÉVOLUTION : MODÉLISER UNE POULIE DE TRANSMISSION
  // --------------------------------------------------------------------------
  {
    id: "step-3-1",
    moduleIndex: 3,
    stepNumber: "3.1",
    title: "3.1 L'outil Révolution : Modéliser une poulie de transmission",
    moduleTitle: "Module 3 : Les outils de modélisation avancés",
    subtitle: "Créer une pièce ronde en dessinant uniquement son profil",
    category: "Révolution 3D",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "Créer une pièce ronde en dessinant uniquement son profil.",
    imageSrc: "assets/img_solidworks/3.1.6.png",
    quickGoal: {
      concept: "Créer une pièce ronde en dessinant uniquement son profil.",
      actions: [
        "Nouveau fichier Pièce et Plan de face",
        "Ligne de construction horizontale (axe de rotation)",
        "Demi-profil fermé avec gorge de courroie",
        "Cotation intelligente des diamètres sous l'axe",
        "Bossage/Base avec révolution validé à 360°"
      ]
    },
    instructions: [
      {
        title: "1. Nouveau fichier",
        text: "Crée une nouvelle Pièce. Choisis le Plan de face et ouvre une Esquisse.",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ sélectionne <strong>Pièce</strong> ➔ clique sur <strong>OK</strong>.",
          "Dans l'arbre FeatureManager à gauche, clique sur <strong>Plan de face</strong>, puis clique sur l'outil <strong>Esquisse</strong> (<kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd> pour te mettre perpendiculaire au plan).",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.1.1.png', 'Sélection du Plan de face')"><img src="assets/img_solidworks/3.1.1.png" alt="Sélection du Plan de face" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Sélection du Plan de face et ouverture de l'esquisse</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "2. L'axe",
        text: "Trace une Ligne de construction horizontale partant de l'origine (elle servira d'axe de rotation).",
        bullets: [
          "Prends l'outil <strong>Ligne de construction</strong> (clique sur la petite flèche noire à côté de l'icône Ligne).",
          "Trace une ligne horizontale en partant exactement de l'origine rouge (0,0).",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.1.2.png', 'Ligne de construction horizontale')"><img src="assets/img_solidworks/3.1.2.png" alt="Ligne de construction horizontale" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Ligne de construction horizontale tracée depuis l'origine</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "3. Le profil",
        text: "Au-dessus de l'axe, dessine la moitié du profil d'une poulie (un contour fermé avec le creux pour la courroie).",
        bullets: [
          "Au-dessus de l'axe, dessine la moitié du profil d'une poulie avec l'outil Ligne classique (un contour fermé avec le creux en demi-cercle pour la courroie).",
          "Assure-toi que les extrémités du profil touchent bien la ligne de construction pour former une zone fermée grisée.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.1.3.png', 'Demi-profil fermé de la poulie')"><img src="assets/img_solidworks/3.1.3.png" alt="Demi-profil fermé de la poulie" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Demi-profil fermé de la poulie avec la gorge au-dessus de l'axe</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "4. Cotation intelligente",
        text: "Clique sur un trait horizontal du profil, puis sur la ligne de construction. Déplace la souris en dessous de l'axe : SolidWorks propose automatiquement de coter le diamètre ! Répète pour les autres diamètres.",
        bullets: [
          "Clique sur un trait horizontal du profil, puis sur la ligne de construction.",
          "Déplace la souris en dessous de l'axe : SolidWorks propose automatiquement de coter le diamètre réel ! Applique les cotes (30 mm de largeur, 30 mm de hauteur, rayon R10 mm) jusqu'à ce que tout soit noir.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.1.4.png', 'Cotation intelligente du profil')"><img src="assets/img_solidworks/3.1.4.png" alt="Cotation intelligente du profil" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Cotation intelligente : 30 mm, 30 mm et rayon R10 mm</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "5. Révolution",
        text: "Quitte l'esquisse. Va dans Fonctions > Bossage/Base avec révolution. Sélectionne la ligne de construction comme axe. Valide à 360°.",
        bullets: [
          "Quitte l'esquisse ou rends-toi dans l'onglet <strong>Fonctions</strong> > <strong>Bossage/Base avec révolution</strong>.",
          "Sélectionne la ligne de construction comme <strong>Axe de révolution</strong> (Line1). Vérifie l'angle à <strong>360.00deg</strong> et valide avec la coche verte.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.1.5.png', 'Révolution volumique 360°')"><img src="assets/img_solidworks/3.1.5.png" alt="Révolution volumique 360°" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Paramétrage du Bossage/Base avec révolution à 360°</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      }
    ],
    warnings: [
      {
        title: "Ferme bien le profil sur l'axe",
        text: "Assure-toi que les traits d'extrémité touchent exactement la ligne de construction. Le contour doit former une zone fermée grisée."
      }
    ],
    tips: [
      {
        title: "Coter directement le diamètre",
        text: "En cliquant sur l'arête puis sur l'axe, glisse la souris en dessous : la cote se transforme automatiquement en diamètre réel !"
      }
    ],
    placeholder: {
      title: "Poulie de transmission en 3D",
      caption: "Pièce mécanique obtenue par révolution à 360°.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "3.1.6.png",
      imageSrc: "assets/img_solidworks/3.1.6.png",
      svgType: "revolution"
    }
  },

  // --------------------------------------------------------------------------
  // 3.2 LA RÉPÉTITION CIRCULAIRE : PERCER LES TROUS D'UN MOYEU
  // --------------------------------------------------------------------------
  {
    id: "step-3-2",
    moduleIndex: 3,
    stepNumber: "3.2",
    title: "3.2 La Répétition Circulaire : Percer les trous d'un moyeu",
    moduleTitle: "Module 3 : Les outils de modélisation avancés",
    subtitle: "Percer un trou et le dupliquer en couronne régulière autour d'un axe",
    category: "Répétitions 3D",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "Percer un trou et le dupliquer en couronne régulière autour d'un axe.",
    imageSrc: "assets/img_solidworks/3.2.6.png",
    quickGoal: {
      concept: "Percer un trou et le dupliquer en couronne régulière autour d'un axe.",
      actions: [
        "Nouveau fichier et cylindre de base Ø50x10mm",
        "Esquisse du perçage excentré sur la face",
        "Enlèvement de matière extrudé À travers tout",
        "Sélection de l'outil Répétition circulaire",
        "Paramétrage 6 occurrences sur 360° espacement constant"
      ]
    },
    instructions: [
      {
        title: "1. Nouveau fichier & Cylindre de base",
        text: "Crée une nouvelle Pièce. (Astuce : modélise un cylindre basique de 50mm de diamètre et 10mm d'épaisseur pour servir de base à cet exercice).",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ Pièce ➔ OK.",
          "Sur le Plan de dessus, trace un cercle de Ø50 mm à l'origine et fais un Bossage extrudé de 10 mm.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.2.1.png', 'Cylindre de base')"><img src="assets/img_solidworks/3.2.1.png" alt="Cylindre de base" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Cylindre de base de 50 mm de diamètre et 10 mm d'épaisseur</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "2. Le perçage",
        text: "Sur la face supérieure du cylindre, ouvre une esquisse. Dessine un petit cercle excentré (cote-le verticalement par rapport à l'origine).",
        bullets: [
          "Sur la face supérieure du cylindre, ouvre une esquisse (<kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd>).",
          "Dessine un petit cercle excentré de Ø6.00 mm et cote son centre à 18.00 mm verticalement par rapport à l'origine.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.2.2.png', 'Esquisse du perçage')"><img src="assets/img_solidworks/3.2.2.png" alt="Esquisse du perçage" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Esquisse du trou de perçage Ø6 mm coté à 18 mm</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "3. Enlèvement de matière",
        text: "Fais un 'Enlèvement de matière extrudé' avec la condition 'À travers tout'.",
        bullets: [
          "Dans l'onglet Fonctions, clique sur <strong>Enlèvement de matière extrudé</strong>.",
          "Choisis la condition <strong>'À travers tout'</strong> et valide avec la coche verte.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.2.3.png', 'Enlèvement de matière')"><img src="assets/img_solidworks/3.2.3.png" alt="Enlèvement de matière" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Enlèvement de matière extrudé 'À travers tout'</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "4. Répétition circulaire & Paramétrage",
        text: "Dans l'onglet Fonctions, clique sur la flèche sous Répétition linéaire > Répétition circulaire. Renseigne la direction, l'angle, le nombre et la fonction à répéter.",
        bullets: [
          "Dans l'onglet <strong>Fonctions</strong>, clique sur la flèche sous Répétition linéaire > <strong>Répétition circulaire</strong>.",
          "<strong>Direction 1 :</strong> Clique sur l'arête circulaire du cylindre extérieur (Edge<1>).",
          "<strong>Angle :</strong> 360° avec <strong>'Espacement constant' (Equal spacing)</strong> coché.",
          "<strong>Nombre :</strong> 6 occurrences.",
          "<strong>Fonctions à répéter :</strong> Sélectionne Cut-Extrude1 et valide.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.2.4.png', 'Répétition circulaire')"><img src="assets/img_solidworks/3.2.4.png" alt="Répétition circulaire" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Configuration de la répétition circulaire : 6 trous à 360°</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      }
    ],
    warnings: [
      {
        title: "Coche bien 'Espacement constant'",
        text: "L'option Espacement constant répartit automatiquement les 6 trous sur toute la circonférence de 360°."
      }
    ],
    tips: [
      {
        title: "Modifier le nombre de trous",
        text: "Tu peux changer le nombre de trous à tout moment en double-cliquant sur la répétition dans l'arbre !"
      }
    ],
    placeholder: {
      title: "Moyeu à 6 perçages réguliers",
      caption: "Répétition circulaire à espacement constant sur 360°.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "3.2.6.png",
      imageSrc: "assets/img_solidworks/3.2.6.png",
      svgType: "pattern"
    }
  },

  // --------------------------------------------------------------------------
  // 3.3 LE BALAYAGE : MODÉLISER UN PASSAGE DE CÂBLE TUBULAIRE
  // --------------------------------------------------------------------------
  {
    id: "step-3-3",
    moduleIndex: 3,
    stepNumber: "3.3",
    title: "3.3 Le Balayage : Modéliser un passage de câble tubulaire",
    moduleTitle: "Module 3 : Les outils de modélisation avancés",
    subtitle: "Faire glisser une forme le long d'une courbe",
    category: "Volumes complexes",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Faire glisser une forme le long d'une courbe.",
    imageSrc: "assets/img_solidworks/3.3.5.png",
    quickGoal: {
      concept: "Faire glisser une forme le long d'une courbe.",
      actions: [
        "Nouveau fichier et principe des deux esquisses perpendiculaires",
        "Esquisse 1 (Plan de dessus) : trajectoire Spline sinueuse",
        "Esquisse 2 (Plan de face) : profil cercle centré sur le départ",
        "Bossage/Base balayé (profil + trajectoire) et validation"
      ]
    },
    instructions: [
      {
        title: "1. Nouveau fichier & Deux plans perpendiculaires",
        text: "Crée une nouvelle Pièce. Le balayage a besoin de DEUX esquisses séparées sur deux plans perpendiculaires.",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ Pièce ➔ OK.",
          "Le balayage a besoin de <strong>DEUX esquisses séparées</strong> sur deux plans perpendiculaires (une trajectoire et un profil).",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.3.1.png', 'Deux plans perpendiculaires')"><img src="assets/img_solidworks/3.3.1.png" alt="Deux plans perpendiculaires" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Préparation des deux plans perpendiculaires (Front Plane & Top Plane)</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "2. La trajectoire (Esquisse 1)",
        text: "Sur le Plan de dessus, trace une courbe sinueuse avec l'outil Spline, partant de l'origine. Quitte l'esquisse.",
        bullets: [
          "Sur le <strong>Plan de dessus</strong>, trace une courbe sinueuse avec l'outil <strong>Spline</strong>, partant de l'origine.",
          "Quitte l'esquisse en cliquant sur l'icône de sortie en haut à droite (flèche bleue).",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.3.2.png', 'Trajectoire Spline')"><img src="assets/img_solidworks/3.3.2.png" alt="Trajectoire Spline" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Tracé de la courbe Spline sinueuse sur le Plan de dessus</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "3. Le profil (Esquisse 2)",
        text: "Choisis le Plan de face (il est perpendiculaire au début de ta courbe). Ouvre une esquisse. Dessine un petit cercle centré sur le point de départ de ta spline. Quitte l'esquisse.",
        bullets: [
          "Choisis le <strong>Plan de face</strong> (il est perpendiculaire au début de ta courbe). Ouvre une esquisse.",
          "Dessine un petit cercle centré sur le point de départ de ta spline. Quitte l'esquisse.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.3.3.png', 'Profil cercle perpendiculaire')"><img src="assets/img_solidworks/3.3.3.png" alt="Profil cercle perpendiculaire" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Cercle perpendiculaire centré sur le départ de la spline</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "4. Balayage volumique",
        text: "Va dans Fonctions > Bossage/Base balayé. Profil (case bleue) : Sélectionne le cercle. Trajectoire (case rose) : Sélectionne la courbe spline. Valide.",
        bullets: [
          "Va dans <strong>Fonctions</strong> > <strong>Bossage/Base balayé</strong>.",
          "<strong>Profil (case bleue) :</strong> Sélectionne le cercle (Sketch3).",
          "<strong>Trajectoire (case rose) :</strong> Sélectionne la courbe spline (Sketch2). Valide avec la coche verte.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.3.4.png', 'Bossage balayé')"><img src="assets/img_solidworks/3.3.4.png" alt="Bossage balayé" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Configuration du Bossage balayé (profil + trajectoire)</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      }
    ],
    warnings: [
      {
        title: "Évite les rayons de courbure trop serrés",
        text: "Si la Spline tourne avec un virage trop aigu par rapport au diamètre du cercle, le solide ne pourra pas se créer."
      }
    ],
    tips: [
      {
        title: "Deux esquisses obligatoires",
        text: "Pense bien à quitter la première esquisse avant de créer la deuxième esquisse sur l'autre plan !"
      }
    ],
    placeholder: {
      title: "Passage de câble tubulaire balayé",
      caption: "Profil circulaire étiré le long d'une courbe Spline.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "3.3.5.png",
      imageSrc: "assets/img_solidworks/3.3.5.png",
      svgType: "sweep"
    }
  },

  // --------------------------------------------------------------------------
  // 3.4 LA SYMÉTRIE : MODÉLISER UNE PINCE DE PRÉHENSION
  // --------------------------------------------------------------------------
  {
    id: "step-3-4",
    moduleIndex: 3,
    stepNumber: "3.4",
    title: "3.4 La Symétrie : Modéliser une pince de préhension",
    moduleTitle: "Module 3 : Les outils de modélisation avancés",
    subtitle: "Ne dessiner que la moitié d'un objet et laisser SolidWorks faire le reste",
    category: "Symétrie 3D",
    duration: "9 min",
    difficulty: "Intermédiaire",
    summary: "Ne dessiner que la moitié d'un objet et laisser SolidWorks faire le reste.",
    imageSrc: "assets/img_solidworks/3.4.4.png",
    quickGoal: {
      concept: "Ne dessiner que la moitié d'un objet et laisser SolidWorks faire le reste.",
      actions: [
        "Nouveau fichier Pièce",
        "Dessiner et extruder la demi-pince avec face médiane plane",
        "Sélectionner la face plane centrale en plan de symétrie",
        "Sélectionner le corps et cocher 'Fusionner les corps'",
        "Valider et passer au grand projet réel du Module 4"
      ]
    },
    instructions: [
      {
        title: "1. Nouveau fichier",
        text: "Crée une nouvelle Pièce.",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ sélectionne <strong>Pièce</strong> ➔ clique sur <strong>OK</strong>.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.4.1.png', 'Nouveau fichier Pièce')"><img src="assets/img_solidworks/3.4.1.png" alt="Nouveau fichier Pièce" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Création d'une nouvelle pièce vierge</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "2. La moitié de la pince",
        text: "Sur le Plan de face, dessine et extrude uniquement le demi-corps de la pince avec un doigt de préhension d'un côté. Attention : assure-toi d'avoir une face bien plate pile au milieu de ta pièce qui servira de plan miroir !",
        bullets: [
          "Sur le <strong>Plan de face</strong>, dessine et extrude uniquement le demi-corps de la pince avec un doigt de préhension d'un côté.",
          "Attention : assure-toi d'avoir une face bien plate pile au milieu de ta pièce qui servira de plan miroir !",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.4.2.png', 'Demi-corps extrudé')"><img src="assets/img_solidworks/3.4.2.png" alt="Demi-corps extrudé" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Demi-corps avec doigt de serrage et face plane médiane</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`
        ]
      },
      {
        title: "3. Symétrie",
        text: "Dans l'onglet Fonctions, clique sur Symétrie.",
        bullets: [
          "Dans l'onglet <strong>Fonctions</strong>, clique sur <strong>Symétrie</strong>.",
          "<strong>Plan de symétrie :</strong> Sélectionne la face plane centrale de ta demi-pince (Face<1>).",
          "<strong>Corps à symétriser :</strong> Déplie le menu 'Corps à symétriser' et clique sur ta pièce (Boss-Extrude1).",
          "Coche bien <strong>'Fusionner les corps' (Merge solids)</strong> pour n'avoir qu'un seul objet solide à la fin. Valide.",
          `<div class="cad-image-card my-4 group cursor-pointer" onclick="window.__showImageModal('assets/img_solidworks/3.4.3.png', 'Symétrie de corps')"><img src="assets/img_solidworks/3.4.3.png" alt="Symétrie de corps" class="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" /><div class="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs"><div class="flex items-center space-x-2 text-slate-300 min-w-0"><span class="w-2 h-2 rounded-full bg-[#ff7d00] shrink-0"></span><span class="font-medium text-white truncate">Configuration de la symétrie : corps Boss-Extrude1 et fusion activée</span></div><span class="font-mono text-[10px] text-slate-400 shrink-0">🔍 Cliquer pour agrandir</span></div></div>`,
          `<div class="my-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-orange-500/10 border-2 border-[#ff7d00] shadow-xl glow-7robot text-center"><div class="inline-flex p-3.5 bg-[#ff7d00] text-white rounded-2xl shadow-lg mb-3"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">🎉 Module 3 validé avec succès !</h3><p class="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">Bravo ! Tu as maîtrisé les 4 outils de modélisation avancés (Révolution, Répétition circulaire, Balayage et Symétrie). Tu as toutes les clés en main pour attaquer le grand projet du Module 4 : la conception complète du boîtier Feetech !</p></div>`
        ]
      }
    ],
    warnings: [
      {
        title: "Coche toujours 'Fusionner les corps'",
        text: "Sans cette case cochée, la pièce sera constituée de deux corps disjoints au lieu d'un solide unique."
      }
    ],
    tips: [
      {
        title: "Symétrie de corps vs de fonctions",
        text: "La symétrie de corps est beaucoup plus stable et évite les erreurs de dépendances géométriques."
      }
    ],
    placeholder: {
      title: "Pince de préhension complète symétrisée",
      caption: "Résultat final de la fonction Symétrie avec corps fusionnés.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "3.4.4.png",
      imageSrc: "assets/img_solidworks/3.4.4.png",
      svgType: "mirror"
    }
  },
  // MODULE 4 : PROJET RÉEL - LE BOÎTIER FEETECH
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // MODULE 4 : PRÉSENTATION & OBJECTIFS
  // --------------------------------------------------------------------------
  {
    id: "step-4-intro",
    moduleIndex: 4,
    isModuleIntro: true,
    stepNumber: "Intro",
    targetStepId: "step-4-1",
    targetStepNumber: "4.1",
    shortTitle: "Présentation & Objectifs",
    title: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    moduleTitle: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    subtitle: "Concevoir un sous-ensemble mécanique complet pour les robots de compétition",
    category: "Présentation de module",
    duration: "1h30 au total",
    difficulty: "Synthèse",
    summary: "Introduction du Module 4 : Concevoir un sous-ensemble mécanique complet. Modéliser sur mesure le boîtier du servomoteur Feetech et son couvercle, puis passer en Assemblage pour lier les pièces avec contraintes et vérifier l'emboîtement.",
    generalGoal: "L'objectif est de concevoir un sous-ensemble mécanique complet. On va d'abord modéliser sur mesure le boîtier de notre servomoteur Feetech, puis son couvercle. Ensuite, on passera au mode 'Assemblage' pour lier ces deux pièces avec les bonnes contraintes (coïncidence, concentricité) et vérifier que tout s'emboîte parfaitement.",
    skills: [
      {
        title: "Modélisation du boîtier sur mesure",
        desc: "Créer la glissière d'accueil du servomoteur avec les tolérances d'impression 3D (+0.4 mm de jeu FDM)."
      },
      {
        title: "Inserts laiton à chaud & vis fraisées FHC",
        desc: "Préparer 4 puits de Ø4.6 mm pour inserts filetés M3 et concevoir le couvercle avec chanfreins à 45°."
      },
      {
        title: "L'art de l'Assemblage mécanique",
        desc: "Importer les composants, fixer le bâti et contraindre les pièces en Coïncidence et Concentricité."
      },
      {
        title: "Contrôle cinématique & détection des collisions",
        desc: "Faire pivoter le palonnier à la souris et vérifier que le mécanisme ne frotte nulle part avant fabrication."
      }
    ],
    expectedResult: {
      badge: "RÉSULTAT DU MODULE 4",
      title: "Boîtier Feetech complet monté avec servo et visserie",
      description: "Un actionneur mécatronique réel, fonctionnel, vérifié sans interférence et prêt pour la Coupe de France !",
      imageSrc: "assets/images/boitier_feetech_assembly.png",
      placeholderText: "Aperçu du modèle 3D attendu : L'assemblage 3D complet avec le servo inséré, le couvercle vissé et les inserts visibles.",
      recommendedDimensions: "1920 x 1080 px"
    },
    instructions: [],
    objectives: [],
    quickGoal: {
      concept: "Concevoir le boîtier servo, le couvercle et assembler le tout avec validation cinématique.",
      actions: [
        "Modéliser le boîtier avec glissière (+0.4mm) et puits d'inserts (Ø4.6mm)",
        "Créer le couvercle avec trous Ø3.2mm et chanfreins 45°",
        "Assembler avec contraintes de Coïncidence et Concentricité",
        "Tester la rotation du palonnier et traquer les collisions"
      ]
    },
    placeholder: {
      title: "Boîtier Feetech complet monté avec servo et visserie",
      caption: "Actionneur mécatronique complet prêt pour la Coupe de France.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "boitier_feetech_assembly.png",
      svgType: "assembly"
    }
  },
  {
    id: "step-4-1",
    moduleIndex: 4,
    stepNumber: "4.1",
    title: "Le Défi Mécanique 7Robot & Téléchargement du Pack Feetech",
    moduleTitle: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    subtitle: "Pourquoi on fabrique ce boîtier et téléchargement des fichiers 3D",
    category: "Projet Mécatronique",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Découvre le vrai problème des servomoteurs Feetech en compétition et la solution adoptée par 7Robot : la glissière avec inserts laiton M3 et couvercle vissé.",
    quickGoal: {
      concept: "Comprendre pourquoi on fabrique ce boîtier carré (les vis M3 ne passent pas dans le servo !) et télécharger les fichiers CAO officiels du club.",
      actions: [
        "Télécharger le pack ZIP 'fichier a prendre.zip' avec le bouton bleu ci-dessous.",
        "Extraire les fichiers dans ton dossier de travail (le servo Feetech et son palonnier disque en métal).",
        "Comprendre le montage 7Robot : le servo va glisser dans un boîtier imprimé en 3D, retenu par un couvercle vissé dans 4 inserts laiton M3."
      ]
    },
    downloadZip: {
      fileName: "fichier a prendre.zip",
      filePath: "pieces_solidworks/fichier%20a%20prendre.zip",
      description: "Pack officiel 7Robot contenant le sous-assemblage du Feetech (fichier a prendre.SLDASM), le servo (Feetech STS2032 20g.SLDPRT) et son palonnier disque en métal (disque_metal_pour_teste.SLDPRT)."
    },
    imageSrc: "assets/images/boitier_feetech_assembly.png",
    placeholder: {
      title: "Assemblage final du Boîtier Feetech avec Couvercle vissé",
      caption: "Capture d'écran SolidWorks réelle : le boîtier carré imprimé en 3D, le servo Feetech coulissé et le couvercle vissé.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "boitier_feetech_assembly.png",
      svgType: "assembly"
    },
    instructions: [
      {
        title: "1. Le problème des vis M3 sur les servomoteurs Feetech",
        text: "En robotique de compétition (Coupe de France / Eurobot), le club utilise des servomoteurs intelligents Feetech partout pour les pinces et les bras :",
        bullets: [
          "<strong>Le piège :</strong> Les trous situés sur les oreilles de fixation du Feetech sont trop petits (environ 2.2 mm). <strong>Les vis standard M3 utilisées partout dans le club ne passent pas à travers !</strong>",
          "<strong>Ce qu'il ne faut SURTOUT PAS faire :</strong> Forcer une vis M3 à la main ou repercer les pattes au foret fragilise le plastique du servo, fausse l'alignement et casse la patte au premier choc en match.",
          "De plus, le plastique ne supporte pas d'être vissé et dévissé 10 fois pendant les phases de test."
        ]
      },
      {
        title: "2. La solution d'ingénierie 7Robot : La glissière + Inserts",
        text: "Pour avoir un montage robuste, standardisé et démontable en 30 secondes en tournoi :",
        bullets: [
          "<strong>Le Boîtier carré :</strong> Une pièce imprimée en 3D avec deux rainures où le servomoteur <strong>coulisse par ses oreilles</strong>, sans aucune vis dans le servo !",
          "<strong>4 Inserts filetés en laiton M3 :</strong> Le boîtier a 4 trous de <strong>diamètre Ø 4.60 mm et profondeur ≥ 5.0 mm</strong> où l'on fait fondre des inserts laiton au fer à souder.",
          "<strong>Le Couvercle vissé :</strong> Une plaque avec 4 trous de <strong>Ø 3.20 mm chanfreinés à 45° sur 1.75 mm</strong> pour vis à tête fraisée FHC M3 qui vient bloquer le tout."
        ]
      },
      {
        title: "3. La méthode Top-Down (Conception dans l'assemblage)",
        text: "Au lieu de modéliser le boîtier à l'aveugle dans son coin :",
        bullets: [
          "On ouvre d'abord un <strong>Assemblage</strong>, on y pose le Feetech en premier, et on crée le boîtier et le couvercle <strong>directement autour de lui</strong> !",
          "Ainsi, les dimensions s'adaptent au dixième de millimètre sans avoir à mesurer au pied à coulisse."
        ]
      }
    ],
    warnings: [
      {
        title: "Ne modifie jamais le fichier 3D du servomoteur !",
        text: "Ne tente pas d'éditer la pièce Feetech pour agrandir ses trous. En ingénierie, on conçoit la pièce d'adaptation pour épouser le composant du commerce, et non l'inverse !"
      }
    ],
    tips: [
      {
        title: "Dossier de travail",
        text: "Dézippe le fichier <code>fichier a prendre.zip</code> dans ton dossier de travail pour que toutes tes futures pièces soient rangées au même endroit."
      }
    ]
  },
  {
    id: "step-4-2",
    moduleIndex: 4,
    stepNumber: "4.2",
    title: "Ouvrir l'assemblage et poser le Feetech en premier (f)",
    moduleTitle: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    subtitle: "Ancrer le servomoteur sur l'origine comme référence absolue",
    category: "Assemblage",
    duration: "8 min",
    difficulty: "Intermédiaire",
    summary: "On crée un nouvel assemblage et on insère le sous-assemblage du Feetech en pièce maîtresse fixe (f) alignée sur l'origine.",
    quickGoal: {
      concept: "On crée notre fichier d'Assemblage et on ancre le Feetech directement sur l'origine absolue grâce à la coche verte.",
      actions: [
        "Créer un nouvel Assemblage (Ctrl + N ➔ Assemblage ➔ OK) et l'enregistrer sous 'Assemblage_Boitier_Feetech.SLDASM'.",
        "Insérer le fichier 'fichier a prendre.SLDASM' issu du pack ZIP.",
        "Cliquer sur la coche verte (OK) en haut à gauche pour le verrouiller sur l'origine (symbole Fixe '(f)')."
      ]
    },
    imageSrc: "assets/images/boitier_feetech_assembly.png",
    placeholder: {
      title: "Arbre d'assemblage avec Feetech fixé sur l'origine (f)",
      caption: "Le servomoteur est inséré en premier et verrouillé sur le repère d'assemblage.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "boitier_feetech_assembly.png",
      svgType: "anchor"
    },
    instructions: [
      {
        title: "1. Créer le document d'assemblage",
        text: "Pour réunir plusieurs pièces ensemble :",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ choisis <strong>Assemblage</strong> (icône avec deux cubes imbriqués) ➔ clique sur <strong>OK</strong>.",
          "Enregistre tout de suite avec <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>S</kbd> sous le nom <code>Assemblage_Boitier_Feetech.SLDASM</code> dans ton dossier."
        ]
      },
      {
        title: "2. Insérer le Feetech avec le clic sur la coche verte",
        text: "Dans le panneau de gauche :",
        bullets: [
          "Clique sur <strong>Parcourir...</strong> et sélectionne <code>fichier a prendre.SLDASM</code> extrait du ZIP.",
          "<strong>Le réflexe d'expert :</strong> Ne clique PAS dans la zone 3D ! Clique directement sur la <strong>coche verte (OK)</strong> tout en haut à gauche.",
          "SolidWorks fait coïncider l'origine du Feetech avec l'origine de l'assemblage.",
          "Regarde l'arbre à gauche : le nom est précédé du symbole <strong><code>(f)</code></strong> (Fixe). Le servo est ancré, c'est notre référence stable !"
        ]
      }
    ],
    warnings: [
      {
        title: "Ne libère pas la première pièce",
        text: "Si la première pièce flotte librement (symbole '-'), tout ton mécanisme bougera dans le vide quand tu essaieras de manipuler les pièces. Conserve toujours le statut Fixe <code>(f)</code> !"
      }
    ],
    tips: [
      {
        title: "Vue isométrique instantanée",
        text: "Appuie sur <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>7</kbd> pour afficher ton servomoteur en perspective isométrique."
      }
    ]
  },
  {
    id: "step-4-3",
    moduleIndex: 4,
    stepNumber: "4.3",
    title: "Créer le Boîtier dans l'assemblage (Glissière & Inserts Ø4.6mm)",
    moduleTitle: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    subtitle: "L'outil 'Nouvelle pièce' en contexte pour dessiner autour du servo",
    category: "Conception en contexte",
    duration: "18 min",
    difficulty: "Avancé",
    summary: "Utilise la commande 'Nouvelle pièce' directement dans l'assemblage pour modéliser le boîtier carré 44x44 mm, ses rainures de glissière et les 4 puits d'inserts laiton Ø4.6 mm x prof. ≥5 mm.",
    quickGoal: {
      concept: "On utilise la fonction 'Nouvelle pièce' pour dessiner le boîtier carré directement autour du servomoteur Feetech en transparence.",
      actions: [
        "Cliquer sur la flèche sous 'Insérer des composants' ➔ 'Nouvelle pièce' ➔ cliquer sur le Plan de Dessus.",
        "Dessiner le carré de 44x44 mm et extruder sur 28 mm de haut.",
        "Évider la chambre avec +0.4 mm de jeu FDM pour que les oreilles coulissent sans coincer.",
        "Percer les 4 trous d'inserts laiton aux coins : diamètre Ø 4.60 mm et profondeur 5.5 mm."
      ]
    },
    imageSrc: "assets/images/mod4_boitier_inserts_schema.svg",
    placeholder: {
      title: "Plan technique du Boîtier à glissière et inserts",
      caption: "Vue en coupe de la liaison vissée M3 et vue éclatée montrant le coulissement du Feetech dans le boîtier.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod4_boitier_inserts_schema.svg",
      svgType: "drill"
    },
    instructions: [
      {
        title: "1. Lancer l'outil 'Nouvelle pièce' en contexte",
        text: "Dans ton assemblage :",
        bullets: [
          "Dans l'onglet <strong>Assemblage</strong>, repère le bouton <em>Insérer des composants</em>.",
          "Clique sur la <strong>petite flèche noire juste en dessous</strong> ➔ clique sur <strong>Nouvelle pièce</strong>.",
          "Ton curseur affiche une petite coche verte : clique sur le <strong>Plan de Dessus de l'assemblage</strong>.",
          "Regarde l'écran : le Feetech devient <strong>semi-transparent</strong> et une icône violette apparaît en haut à droite. Tu es en mode <strong>Édition du composant</strong> !"
        ]
      },
      {
        title: "2. Le corps carré extérieur (44 x 44 mm)",
        text: "Dessinons le bloc brut :",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd> (vue normale).",
          "Trace un <strong>Rectangle par son centre</strong> sur l'origine de <code>44.0 mm x 44.0 mm</code>.",
          "Va dans Fonctions ➔ <strong>Bossage/Base extrudé</strong> ➔ donne une hauteur de <code>28.0 mm</code> vers le haut ➔ valide."
        ]
      },
      {
        title: "3. La cavité de glissière pour les oreilles du Feetech",
        text: "Sur la face supérieure du bloc :",
        bullets: [
          "Ouvre une nouvelle esquisse sur la face du dessus.",
          "Comme tu vois le Feetech en transparence à travers la pièce, utilise <strong>Décaler les entités</strong> avec <strong><code>0.4 mm</code></strong> vers l'extérieur pour prévoir le jeu de glissement de l'imprimante 3D.",
          "Dessine également les rainures latérales correspondant au passage des oreilles.",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ profondeur de <code>25.0 mm</code> (ce qui laisse un fond solide de 3 mm) ➔ valide."
        ]
      },
      {
        title: "4. Les 4 logements d'inserts laiton M3 (Cote stricte Ø 4.60 mm)",
        text: "Pour que les inserts chauffés au fer à souder tiennent parfaitement :",
        bullets: [
          "Sur la face supérieure, ouvre une esquisse.",
          "Trace <strong>4 cercles</strong> aux 4 coins (carré centré de <code>36.0 mm x 36.0 mm</code>).",
          "Mets une relation d'<strong>Égalité</strong> entre les 4 cercles et cote le diamètre à <strong>exactement <code>4.60 mm</code></strong>.",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ profondeur borgne de <strong><code>5.5 mm</code></strong> (au moins 5.0 mm) ➔ valide."
        ]
      },
      {
        title: "5. Quitter l'édition et sauvegarder la pièce",
        text: "Pour terminer le boîtier :",
        bullets: [
          "Clique sur l'icône de sortie en haut à droite de la zone 3D (ou reclique sur <em>Éditer le composant</em>).",
          "Dans l'arbre à gauche, fais un clic droit sur la nouvelle pièce ➔ <strong>Enregistrer la pièce (dans un fichier externe)</strong> ➔ nomme-la <code>Boitier_Feetech.SLDPRT</code>."
        ]
      }
    ],
    warnings: [
      {
        title: "Pourquoi exactement Ø 4.6 mm et prof. ≥ 5.0 mm ?",
        text: "L'insert laiton M3 fait environ 4.3 mm extérieur. À 4.6 mm, il rentre droit à froid sans forcer. Dès qu'on le chauffe au fer à 220°C, le plastique fond dans ses crans. La profondeur de 5.5 mm évite que la vis M3 ne vienne taper au fond et arracher l'insert !"
      }
    ],
    tips: [
      {
        title: "Bascule rapide dans la pièce",
        text: "Pour rééditer ton boîtier à tout moment dans l'assemblage, fais un clic droit dessus dans la vue 3D ➔ clique sur l'icône <em>Éditer la pièce</em>."
      }
    ]
  },
  {
    id: "step-4-4",
    moduleIndex: 4,
    stepNumber: "4.4",
    title: "Créer le Couvercle fraisé sur le boîtier (Vis Ø3.2mm chanfrein 45°)",
    moduleTitle: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    subtitle: "Deuxième pièce en contexte : trous de vis M3 et fraisage pour têtes affleurantes",
    category: "Conception en contexte",
    duration: "15 min",
    difficulty: "Avancé",
    summary: "Clique sur la flèche sous 'Insérer des composants' ➔ 'Nouvelle pièce' et clique directement sur la face supérieure du boîtier pour concevoir le couvercle avec trous Ø3.2 mm et chanfreins 45° x 1.75 mm.",
    quickGoal: {
      concept: "On modélise le couvercle directement sur la face du boîtier, avec les trous de passage pour les vis M3 et leurs chanfreins pour noyer les têtes coniques.",
      actions: [
        "Flèche sous 'Insérer des composants' ➔ 'Nouvelle pièce' ➔ cliquer sur la face supérieure du boîtier.",
        "Convertir les arêtes extérieures pour reprendre le contour carré de 44x44 mm, puis extruder 3.5 mm vers le haut.",
        "Percer le trou central de Ø 16 mm pour laisser passer l'arbre rotatif sans frottement.",
        "Percer 4 trous de Ø 3.20 mm alignés sur les inserts et ajouter le chanfrein 45° x 1.75 mm."
      ]
    },
    imageSrc: "assets/images/mod4_boitier_inserts_schema.svg",
    placeholder: {
      title: "Coupe de la liaison vissée : Trou Ø3.2mm et Chanfrein 45° x 1.75mm",
      caption: "Gros plan sur le fraisage conique garantissant que la vis FHC M3 affleure parfaitement sans dépasser.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod4_boitier_inserts_schema.svg",
      svgType: "chamfer"
    },
    instructions: [
      {
        title: "1. Poser le couvercle sur le sommet du boîtier",
        text: "Toujours dans l'assemblage :",
        bullets: [
          "Clique sur la flèche sous <em>Insérer des composants</em> ➔ choisis <strong>Nouvelle pièce</strong>.",
          "Clique directement sur la <strong>face supérieure de ton boîtier</strong> : l'esquisse est immédiatement posée au bon endroit !",
          "Clique sur <strong>Convertir les entités</strong> et sélectionne les 4 arêtes extérieures du boîtier : le carré de 44x44 mm se dessine tout seul !",
          "Fonctions ➔ <strong>Bossage/Base extrudé</strong> ➔ épaisseur de <code>3.5 mm</code> vers le haut ➔ valide."
        ]
      },
      {
        title: "2. Le trou central pour le palonnier rotatif",
        text: "Le disque en métal tourne au centre :",
        bullets: [
          "Sur la face supérieure du couvercle, ouvre une esquisse.",
          "Trace un cercle centré sur l'axe du Feetech de diamètre <strong><code>16.0 mm</code></strong>.",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ <em>À travers tout</em> ➔ valide."
        ]
      },
      {
        title: "3. Les 4 trous de vis M3 (Cote stricte Ø 3.20 mm)",
        text: "Ces trous doivent être pile en face des inserts du boîtier :",
        bullets: [
          "Ouvre une esquisse sur la face du couvercle.",
          "Trace 4 cercles en appliquant une relation de <strong>Concentricité</strong> avec les trous d'inserts du boîtier situés juste en dessous.",
          "Mets la relation <strong>Égalité</strong> sur les 4 cercles et cote le diamètre à <strong>exactement <code>3.20 mm</code></strong> (taille standard pour laisser passer une vis M3 sans coincer).",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ <em>À travers tout</em> ➔ valide."
        ]
      },
      {
        title: "4. Les 4 chanfreins de fraisage (45° x 1.75 mm)",
        text: "Pour que les têtes de vis coniques ne dépassent pas :",
        bullets: [
          "Dans l'onglet Fonctions, clique sur la flèche sous <em>Congé</em> ➔ choisis <strong>Chanfrein</strong>.",
          "Sélectionne les 4 arêtes circulaires du dessus de tes trous de Ø 3.2 mm.",
          "Règle : Distance = <strong><code>1.75 mm</code></strong> et Angle = <strong><code>45°</code></strong> ➔ valide.",
          "Quitte le mode édition et enregistre en externe sous <code>Couvercle_Feetech.SLDPRT</code>."
        ]
      }
    ],
    warnings: [
      {
        title: "Pourquoi 1.75 mm de chanfrein ?",
        text: "Une tête de vis FHC M3 fait environ 6 mm de diamètre au sommet. Avec un chanfrein de 1.75 mm à 45°, le cône s'évase jusqu'à 6.7 mm : la tête de vis s'enfonce très légèrement sous la surface (0.2 mm) pour ne jamais accrocher les autres pièces du robot !"
      }
    ],
    tips: [
      {
        title: "L'associativité magique",
        text: "Si tu élargis ton boîtier de 44 à 48 mm plus tard, ton couvercle et ses trous de vis s'adapteront automatiquement sans que tu n'aies rien à redessiner !"
      }
    ]
  },
  {
    id: "step-4-5",
    moduleIndex: 4,
    stepNumber: "4.5",
    title: "Test cinématique de rotation et collisions",
    moduleTitle: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    subtitle: "Vérifier à la souris que le palonnier tourne librement et traquer les collisions",
    category: "Contrôle qualité",
    duration: "10 min",
    difficulty: "Avancé",
    summary: "Active le sous-assemblage en mode Flexible, fais tourner le palonnier métallique à la souris et lance la détection d'interférences pour valider le montage.",
    quickGoal: {
      concept: "On passe le servo en mode Flexible pour tester la rotation libre du disque en métal et on utilise l'outil de collision de SolidWorks pour valider la pièce.",
      actions: [
        "Faire un clic droit sur le Feetech dans l'arbre ➔ Propriétés ➔ cocher 'Flexible'.",
        "Attraper le disque en métal à la souris et le faire tourner à 360° sans bloquer.",
        "Onglet 'Évaluer' ➔ 'Détection d'interférences' ➔ 'Calculer' pour vérifier que rien ne frotte."
      ]
    },
    imageSrc: "assets/images/kinematics_robot_arm.gif",
    placeholder: {
      title: "Animation GIF : Rotation cinématique du palonnier",
      caption: "Vérification de la rotation libre du disque métallique sans aucune collision sur le couvercle.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "kinematics_robot_arm.gif",
      svgType: "kinematics"
    },
    instructions: [
      {
        title: "1. Activer le sous-assemblage en mode 'Flexible'",
        text: "Par défaut, SolidWorks fige les mouvements internes d'un sous-assemblage :",
        bullets: [
          "Fais un clic droit sur <code>fichier a prendre<1></code> dans l'arbre à gauche.",
          "Clique sur <strong>Propriétés du composant</strong>.",
          "En bas à droite, coche <strong>Résoudre comme : Flexible</strong> ➔ valide par OK.",
          "Désormais, le palonnier disque en métal peut tourner librement autour de l'axe !"
        ]
      },
      {
        title: "2. Le test de rotation à la souris",
        text: "Prends ta souris :",
        bullets: [
          "Fais un clic gauche maintenu sur le disque métallique (`disque_metal_pour_teste.SLDPRT`) et bouge la souris : le disque tourne à 360° en direct !",
          "Vérifie qu'il y a un petit espace visible (au moins <code>0.5 mm</code>) entre le dessous du disque et le dessus du couvercle pour éviter tout frottement plastique."
        ]
      },
      {
        title: "3. Détection d'interférences (Le juge de paix)",
        text: "Avant de lancer l'impression 3D au club :",
        bullets: [
          "Va dans l'onglet <strong>Évaluer</strong> tout en haut.",
          "Clique sur <strong>Détection d'interférences</strong> ➔ clique sur <strong>Calculer</strong>.",
          "Si deux pièces se rentrent dedans, le volume en conflit s'allume en rouge vif !",
          "Si le résultat affiche <strong>'Aucune interférence'</strong>, ta conception est 100% validée !"
        ]
      }
    ],
    warnings: [
      {
        title: "Attention aux tolérances d'impression 3D",
        text: "Une imprimante 3D dépose du fil plastique chaud qui s'écrase légèrement (+0.15 mm). Conserve toujours entre 0.3 et 0.5 mm de jeu sur la glissière pour que le servo glisse comme dans du beurre !"
      }
    ],
    tips: [
      {
        title: "La Dynamique physique",
        text: "Dans le menu <em>Déplacer le composant</em>, tu peux cocher <strong>Dynamique physique</strong> : SolidWorks arrêtera le disque automatiquement s'il heurte un obstacle !"
      }
    ]
  },
  {
    id: "step-4-6",
    moduleIndex: 4,
    stepNumber: "4.6",
    title: "Fiche d'atelier (Inserts à 220°C & Vis M3) & Fin de formation",
    moduleTitle: "Module 4 : Le projet réel : Boîtier Feetech & Assemblage",
    subtitle: "Les conseils pratiques de fabrication FDM et validation de la certification",
    category: "Atelier & Certification",
    duration: "8 min",
    difficulty: "Synthèse",
    summary: "Fiche pratique d'atelier pour souder les inserts laiton M3 au fer, choisir la visserie FHC et célébrer la validation de la formation 7Robot !",
    quickGoal: {
      concept: "Toutes les astuces concrètes de l'atelier pour insérer les inserts laiton au fer à souder à 220°C, visser le couvercle et valider ta formation.",
      actions: [
        "Régler le fer à souder entre 220°C et 230°C pour enfoncer les inserts M3 bien droit sans brûler le plastique.",
        "Choisir 4 vis FHC M3 de 8 ou 10 mm pour un vissage parfaitement affleurant.",
        "Vérifier la checklist finale d'homologation interne du club 7Robot."
      ]
    },
    imageSrc: "assets/images/certification_7robot_cad.svg",
    placeholder: {
      title: "Attestation officielle : 7Robot CAD Certified",
      caption: "Badge officiel attestant de ta maîtrise de la chaîne de conception sous SolidWorks.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "certification_7robot_cad.svg",
      svgType: "trophy"
    },
    instructions: [
      {
        title: "1. Comment poser les inserts laiton M3 au fer à souder",
        text: "Pour transformer tes trous imprimés en solides filetages métalliques :",
        bullets: [
          "🌡️ <strong>Température :</strong> Règle la station de soudage de l'atelier sur <strong>220°C - 230°C</strong> (température idéale pour fondre localement le PLA sans cramer le plastique).",
          "📐 <strong>Mise en place :</strong> Pose l'insert laiton M3 bien vertical sur l'entrée du trou de Ø 4.60 mm.",
          "🔥 <strong>Chauffe :</strong> Pose la panne plate du fer sur l'insert avec une légère pression vers le bas : en 3 secondes, le plastique ramollit et l'insert s'enfonce tout seul.",
          "🛑 <strong>Arrêt :</strong> Retire le fer dès que l'insert affleure à environ 0.2 mm sous la surface.",
          "❄️ <strong>Refroidissement :</strong> Plaque immédiatement un réglet métallique froid dessus pendant 5 secondes pour qu'il refroidisse parfaitement plat !"
        ]
      },
      {
        title: "2. Choix de la visserie",
        text: "Pour fermer le couvercle :",
        bullets: [
          "🔩 <strong>Type de vis :</strong> 4x Vis FHC M3 (tête fraisée 90°, clé Allen 2 mm).",
          "📏 <strong>Longueur :</strong> <code>M3 x 8 mm</code> ou <code>M3 x 10 mm</code> (3.5 mm de couvercle + 4 mm d'insert fileté + 1 mm de marge au fond).",
          "✨ <strong>Résultat :</strong> Les têtes de vis sont 100% affleurantes grâce au chanfrein de 45° x 1.75 mm !"
        ]
      },
      {
        title: "3. La checklist finale d'homologation 7Robot",
        text: "Avant d'imprimer une pièce au local :",
        bullets: [
          "☑️ Toutes les esquisses sont noires (Totalement contraintes).",
          "☑️ Le boîtier a bien le symbole Fixe (f) dans l'arbre.",
          "☑️ Trous d'inserts à Ø 4.60 mm prof. ≥ 5.0 mm et trous de couvercle à Ø 3.20 mm chanfreinés à 45°.",
          "☑️ Glissière avec 0.4 mm de jeu FDM.",
          "☑️ Zéro collision dans la détection d'interférences."
        ]
      },
      {
        title: "4. Message de l'équipe 7Robot aux nouveaux concepteurs",
        text: "<div class='my-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-orange-500/10 border-2 border-[#ff7d00] shadow-lg glow-7robot text-center'><div class='inline-flex p-3 bg-[#ff7d00] text-white rounded-2xl shadow-md mb-2'><svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'/></svg></div><h3 class='text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight'>⚔️ Tu es maintenant prêt à modéliser des actionneurs pour les robots de combat !!!</h3><p class='text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed'>Tu possèdes désormais toutes les clés techniques nécessaires : esquisses contraintes, fonctions volumiques avancées, conception en contexte dans l'assemblage, tolérances d'inserts FDM et validation cinématique pour la Coupe de France et Eurobot.</p></div>"
      }
    ],
    warnings: [
      {
        title: "Ne serre pas les vis comme un sauvage !",
        text: "Les inserts tiennent très bien, mais si tu serres trop fort, tu risques d'arracher le plastique chaud. Serre fermement au contact, sans forcer avec une grande rallonge !"
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

// Assurer la rétrocompatibilité des objectifs pour toutes les étapes
COURSE_STEPS.forEach(step => {
  if (!step.objectives && step.quickGoal && step.quickGoal.actions) {
    step.objectives = step.quickGoal.actions;
  }
});

// Rendre accessible globalement
window.COURSE_MODULES = COURSE_MODULES;
window.COURSE_STEPS = COURSE_STEPS;
