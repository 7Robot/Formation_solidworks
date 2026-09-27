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
    title: "Module 3 : Fonctions 3D avancées",
    shortTitle: "Mod 3 : Fonctions 3D avancées",
    icon: "sparkles",
    description: "Balayage le long d'une courbe, révolution cylindrique et répétition de perçages en cercle."
  },
  {
    id: "module-4",
    title: "Module 4 : Les outils de modélisation avancés",
    shortTitle: "Mod 4 : Outils avancés",
    icon: "sparkles",
    description: "Révolution, répétition circulaire, balayage et symétrie à travers 4 exercices pratiques."
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
  // MODULE 3 : FONCTIONS 3D AVANCÉES
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // MODULE 3 : PRÉSENTATION & OBJECTIFS
  // --------------------------------------------------------------------------
  {
    id: "step-3-intro",
    moduleIndex: 3,
    isModuleIntro: true,
    stepNumber: "Intro",
    targetStepId: "step-3-1",
    targetStepNumber: "3.1",
    shortTitle: "Présentation & Objectifs",
    title: "Module 3 : Fonctions 3D avancées",
    moduleTitle: "Module 3 : Fonctions 3D avancées",
    subtitle: "Balayage, révolution et répétitions pour modéliser 3x plus vite",
    category: "Présentation de module",
    duration: "40 min au total",
    difficulty: "Avancé",
    summary: "Introduction du Module 3 : Découvrir des outils 3D qui font gagner du temps : l'extrusion qui suit une courbe, l'extrusion circulaire et surtout les symétries pour ne pas redessiner deux fois la même chose.",
    generalGoal: "L'objectif est de découvrir des outils 3D qui font gagner du temps : l'extrusion qui suit une courbe, l'extrusion circulaire, et surtout les symétries pour ne pas avoir à dessiner deux fois la même chose.",
    skills: [
      {
        title: "Le Balayage volumique (Sweep)",
        desc: "Faire glisser un profil 2D le long d'un guide courbe pour créer des câbles, tubulures ou ressorts de robot."
      },
      {
        title: "La Révolution autour d'un axe",
        desc: "Créer un axe épaulé, une poulie ou une roue en faisant tourner un demi-profil autour d'un trait d'axe."
      },
      {
        title: "Répétitions circulaires et symétries 3D",
        desc: "Dupliquer des perçages réguliers ou des formes complexes en un clic pour diviser le temps de modélisation par 4."
      }
    ],
    expectedResult: {
      badge: "RÉSULTAT DU MODULE 3",
      title: "Moyeu mécanique percé & axe usiné complet",
      description: "Des volumes 3D complexes générés avec des fonctions paramétriques épurées et ultra faciles à éditer.",
      imageSrc: "assets/images/mod3_repetition_circulaire_moyeu.svg",
      placeholderText: "Aperçu du modèle 3D attendu : Le moyeu circulaire avec ses 6 perçages répétés et son axe de révolution.",
      recommendedDimensions: "1920 x 1080 px"
    },
    instructions: [],
    objectives: [],
    quickGoal: {
      concept: "Exploiter le balayage, la révolution et les répétitions pour accélérer la création 3D.",
      actions: [
        "Faire glisser une forme le long d'une courbe (Balayage)",
        "Tourner à 360° autour d'un axe (Révolution)",
        "Dupliquer 6 trous en cercle en un clic (Répétition)"
      ]
    },
    placeholder: {
      title: "Moyeu mécanique percé & axe usiné complet",
      caption: "Volumes complexes et répétitions circulaires.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod3_repetition_circulaire_moyeu.svg",
      svgType: "pattern"
    }
  },
  {
    id: "step-3-1",
    moduleIndex: 3,
    stepNumber: "3.1",
    title: "Le Balayage (Faire glisser une forme le long d'une courbe)",
    moduleTitle: "Module 3 : Fonctions 3D avancées",
    subtitle: "Modéliser des tuyaux, câbles, joints et ressorts",
    category: "Volumes complexes",
    duration: "12 min",
    difficulty: "Avancé",
    summary: "Alors qu'une extrusion pousse un profil tout droit, le balayage pousse une forme le long d'une courbe quelconque.",
    quickGoal: {
      concept: "On combine deux esquisses : une trajectoire (la courbe) et un profil (le cercle) pour générer un tube ou un câble 3D.",
      actions: [
        "Esquisse 1 sur le Plan de Face : dessiner la trajectoire courbée.",
        "Esquisse 2 sur le Plan de Droite : dessiner la section (ex: un cercle de 6 mm).",
        "Lancer la fonction 'Bossage/Base balayé' pour créer la matière."
      ]
    },
    imageSrc: "assets/images/sweep_helix.gif",
    placeholder: {
      title: "Animation : Balayage le long d'une courbe",
      caption: "GIF animé illustrant la progression d'une section guidée le long d'une trajectoire 3D.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "sweep_helix.gif",
      svgType: "sweep"
    },
    instructions: [
      {
        title: "1. Les deux ingrédients du balayage",
        text: "Pour réussir un balayage, il te faut obligatoirement 2 esquisses distinctes sur 2 plans perpendiculaires :",
        bullets: [
          "<strong>La Trajectoire (le chemin) :</strong> Dessinée par exemple sur le Plan de Face (une ligne droite raccordée à un arc de cercle).",
          "<strong>Le Profil (la forme) :</strong> Dessiné sur un plan orthogonal (ex: le Plan de Droite), par exemple un cercle de Ø 6 mm placé au bout du chemin."
        ]
      },
      {
        title: "2. Lancer la fonction Bossage balayé",
        text: "Une fois tes deux esquisses fermées :",
        bullets: [
          "Va dans l'onglet <strong>Fonctions</strong> ➔ clique sur <strong>Bossage/Base balayé</strong>.",
          "Dans la case bleue, sélectionne ton profil (le petit cercle).",
          "Dans la case rose, sélectionne ta trajectoire (la courbe).",
          "Valide avec la coche verte : ton tube 3D est créé !"
        ]
      }
    ],
    warnings: [
      {
        title: "Le profil doit toucher le chemin !",
        text: "Si ton cercle est dessiné dans le vide à 2 cm du début de ta courbe, SolidWorks affichera une erreur. Le centre du profil doit toucher le point de départ du chemin."
      }
    ],
    tips: [
      {
        title: "L'option 'Profil circulaire' en 1 clic",
        text: "Dans les versions récentes de SolidWorks, tu n'as même plus besoin de dessiner le petit cercle : dans la fonction Balayage, coche simplement <em>Profil circulaire</em> et tape le diamètre voulu !"
      }
    ]
  },
  {
    id: "step-3-2",
    moduleIndex: 3,
    stepNumber: "3.2",
    title: "La Révolution cylindrique (Tourner à 360°)",
    moduleTitle: "Module 3 : Fonctions 3D avancées",
    subtitle: "Créer des axes, roues et poulies en dessinant seulement une moitié",
    category: "Pièces de révolution",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Pour fabriquer une pièce ronde étagée (comme un axe moteur), on dessine la moitié de sa silhouette et on la fait pivoter à 360° autour d'un axe.",
    quickGoal: {
      concept: "On trace un trait d'axe vertical et le demi-profil d'un axe étagé, puis on fait tourner à 360° avec la fonction Révolution.",
      actions: [
        "Tracer un trait d'axe vertical en pointillé sur l'origine.",
        "Dessiner le demi-profil de l'axe à droite du trait.",
        "Coter les diamètres en traversant l'axe avec la souris.",
        "Lancer 'Bossage/Base avec révolution' pour créer la pièce."
      ]
    },
    imageSrc: "assets/images/mod3_revolution_axe_epaule.svg",
    placeholder: {
      title: "Révolution d'un axe épaulé à 360°",
      caption: "Demi-profil d'axe épaulé coté en diamètres tournant autour de son axe central.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod3_revolution_axe_epaule.svg",
      svgType: "revolve"
    },
    instructions: [
      {
        title: "1. Dessiner le demi-profil",
        text: "Sur le Plan de Face :",
        bullets: [
          "Trace d'abord une <strong>Ligne de construction</strong> verticale passant par l'origine.",
          "Dessine la moitié extérieure de ton axe avec des lignes normales (comme un escalier représentant les différents diamètres).",
          "Ferme bien le contour en le rattachant à l'axe vertical."
        ]
      },
      {
        title: "2. L'astuce de la cotation en diamètre",
        text: "Pour coter directement un diamètre sans devoir diviser par deux dans ta tête :",
        bullets: [
          "Prends la <strong>Cotation intelligente</strong>.",
          "Clique sur l'axe central en pointillé, puis sur le bord extérieur de ton profil.",
          "Fais glisser ta souris <strong>de l'autre côté de l'axe</strong> : SolidWorks bascule automatiquement la cote en diamètre complet (avec le symbole Ø) !"
        ]
      },
      {
        title: "3. Valider la révolution",
        text: "Fonctions ➔ <strong>Bossage/Base avec révolution</strong> ➔ choisis 360° et valide : ta pièce ronde est achevée."
      }
    ],
    warnings: [
      {
        title: "Ferme toujours le contour",
        text: "Si ton profil a un trou ou ne touche pas l'axe, SolidWorks te demandera si tu veux créer une surface creuse au lieu d'un solide plein. Vérifie que ton profil forme une boucle fermée."
      }
    ],
    tips: [
      {
        title: "Idéal pour les roues et poulies de robot",
        text: "Toutes les roues en aluminium et les poulies courroies crantées GT2 du robot de match sont créées avec cette fonction Révolution."
      }
    ]
  },
  {
    id: "step-3-3",
    moduleIndex: 3,
    stepNumber: "3.3",
    title: "La Répétition circulaire (Percer plusieurs trous en rond)",
    moduleTitle: "Module 3 : Fonctions 3D avancées",
    subtitle: "Répéter des perçages sur un moyeu sans les redessiner un par un",
    category: "Répétitions 3D",
    duration: "8 min",
    difficulty: "Intermédiaire",
    summary: "Sur un moyeu de roue ou une bride de robot, perce un seul trou de vis M3 et répète-le 4 ou 6 fois en cercle en deux clics.",
    quickGoal: {
      concept: "On perce un trou sur une pièce ronde, puis on utilise la Répétition circulaire pour le dupliquer à intervalles réguliers sur 360°.",
      actions: [
        "Percer un trou de vis sur la face plane d'un moyeu.",
        "Cliquer sur 'Répétition circulaire' dans le ruban Fonctions.",
        "Sélectionner l'arête ronde du moyeu comme axe, entrer 6 occurrences et valider."
      ]
    },
    imageSrc: "assets/images/mod3_repetition_circulaire_moyeu.svg",
    placeholder: {
      title: "Répétition circulaire de 6 trous M3",
      caption: "Moyeu de roue avec un trou d'origine répété 6 fois à espacement constant sur 360°.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod3_repetition_circulaire_moyeu.svg",
      svgType: "pattern"
    },
    instructions: [
      {
        title: "1. Percer le premier trou",
        text: "Sur la face avant de ta pièce cylindrique :",
        bullets: [
          "Ouvre une esquisse sur la face plane.",
          "Dessine un cercle de Ø 3.2 mm (passage vis M3) aligné verticalement avec le centre.",
          "Fonctions ➔ <strong>Enlèvement de matière extrudé</strong> ➔ choisis <em>À travers tout</em> et valide."
        ]
      },
      {
        title: "2. Lancer la répétition circulaire",
        text: "Pour dupliquer ce trou sur toute la circonférence :",
        bullets: [
          "Dans l'onglet Fonctions, clique sur la flèche sous <em>Répétition linéaire</em> et choisis <strong>Répétition circulaire</strong>.",
          "Dans la première case (Axe de répétition), clique sur le bord circulaire extérieur de ta pièce ronde.",
          "Coche la case <strong>Espacement constant</strong> et tape <strong><code>360°</code></strong>.",
          "Dans le nombre d'occurrences, tape par exemple <strong><code>6</code></strong>.",
          "Dans la case <em>Fonctions à répéter</em>, sélectionne ton enlèvement de matière.",
          "Valide : tes 6 trous sont parfaitement répartis en un quart de seconde !"
        ]
      }
    ],
    warnings: [
      {
        title: "Coche bien 'Espacement constant'",
        text: "Si tu oublies de cocher 'Espacement constant', SolidWorks espacera chaque trou de l'angle tapé au lieu de diviser les 360° automatiquement !"
      }
    ],
    tips: [
      {
        title: "Modifier le nombre de trous plus tard",
        text: "Si tu veux passer de 6 à 4 trous plus tard, fais un clic droit sur la fonction dans l'arbre à gauche ➔ <em>Éditer la fonction</em> ➔ change le chiffre !"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 4 : LES OUTILS DE MODÉLISATION AVANCÉS

  // --------------------------------------------------------------------------
  // MODULE 4 : LES OUTILS DE MODÉLISATION AVANCÉS
  // --------------------------------------------------------------------------
  {
    id: "step-4-intro",
    moduleIndex: 4,
    isModuleIntro: true,
    stepNumber: "Intro",
    targetStepId: "step-4-1",
    targetStepNumber: "4.1",
    shortTitle: "Module 4 : Objectifs",
    title: "Module 4 : Objectifs",
    moduleTitle: "Module 4 : Les outils de modélisation avancés",
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
      badge: "RÉSULTAT DU MODULE 4",
      title: "Aperçu des 4 pièces finales",
      description: "Poulie de transmission, moyeu à 6 perçages, passage de câble tubulaire et pince de robot symétrique.",
      imageSrc: "",
      placeholderText: "Illustration : Aperçu des 4 pièces finales (Poulie, Moyeu 6 trous, Passage de câble, Pince symétrique)",
      recommendedDimensions: "1920 x 1080 px"
    },
    instructions: [],
    objectives: [],
    quickGoal: {
      concept: "Découvrir des outils 3D puissants qui font gagner un temps fou.",
      actions: [
        "L'outil Révolution (poulie)",
        "La Répétition circulaire (moyeu)",
        "Le Balayage (passage de câble)",
        "La Symétrie (pince de préhension)"
      ]
    },
    placeholder: {
      title: "Aperçu des 4 pièces finales",
      caption: "Poulie de transmission, moyeu percé, passage de câble et pince symétrique.",
      recommendedDimensions: "1920 x 1080 px",
      imageFileName: "mod4_apercu_4_pieces.png",
      svgType: "assembly"
    }
  },

  // --------------------------------------------------------------------------
  // 4.1 L'OUTIL RÉVOLUTION : MODÉLISER UNE POULIE DE TRANSMISSION
  // --------------------------------------------------------------------------
  {
    id: "step-4-1",
    moduleIndex: 4,
    stepNumber: "4.1",
    title: "4.1 L'outil Révolution : Modéliser une poulie de transmission",
    moduleTitle: "Module 4 : Les outils de modélisation avancés",
    subtitle: "Créer une pièce ronde en dessinant uniquement son profil",
    category: "Révolution 3D",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "Créer une pièce ronde en dessinant uniquement son profil.",
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
          "Dans l'arbre FeatureManager à gauche, clique sur <strong>Plan de face</strong>, puis clique sur l'outil <strong>Esquisse</strong> (<kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd> pour vue normale).",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Sélection du Plan de face et ouverture de l'esquisse</div>"
        ]
      },
      {
        title: "2. L'axe",
        text: "Trace une Ligne de construction horizontale partant de l'origine (elle servira d'axe de rotation).",
        bullets: [
          "Prends l'outil <strong>Ligne de construction</strong> (clique sur la petite flèche à côté de l'outil Ligne).",
          "Trace une ligne horizontale partant exactement de l'origine rouge (0,0).",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Ligne de construction horizontale partant de l'origine</div>"
        ]
      },
      {
        title: "3. Le profil",
        text: "Au-dessus de l'axe, dessine la moitié du profil d'une poulie (un contour fermé avec le creux pour la courroie).",
        bullets: [
          "Au-dessus de l'axe, dessine la moitié du profil d'une poulie avec l'outil Ligne (un contour fermé avec le creux pour la courroie).",
          "Assure-toi que les extrémités du profil touchent bien la ligne de construction pour former une zone fermée.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Demi-profil fermé de la poulie au-dessus de l'axe</div>"
        ]
      },
      {
        title: "4. Cotation intelligente",
        text: "Clique sur un trait horizontal du profil, puis sur la ligne de construction. Déplace la souris en dessous de l'axe : SolidWorks propose automatiquement de coter le diamètre ! Répète pour les autres diamètres.",
        bullets: [
          "Clique sur un trait horizontal du profil, puis sur la ligne de construction.",
          "Déplace la souris en dessous de l'axe : SolidWorks propose automatiquement de coter le diamètre ! Répète pour les autres diamètres jusqu'à ce que tout soit noir.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Cotation du diamètre en déplaçant la souris sous l'axe</div>"
        ]
      },
      {
        title: "5. Révolution",
        text: "Quitte l'esquisse. Va dans Fonctions > Bossage/Base avec révolution. Sélectionne la ligne de construction comme axe. Valide à 360°.",
        bullets: [
          "Quitte l'esquisse. Va dans <strong>Fonctions</strong> > <strong>Bossage/Base avec révolution</strong>.",
          "Sélectionne la ligne de construction comme axe. Valide à <strong>360°</strong> avec la coche verte.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Bossage/Base avec révolution à 360° et poulie 3D obtenue</div>"
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
      imageFileName: "mod4_poulie_3d.png",
      svgType: "revolution"
    }
  },

  // --------------------------------------------------------------------------
  // 4.2 LA RÉPÉTITION CIRCULAIRE : PERCER LES TROUS D'UN MOYEU
  // --------------------------------------------------------------------------
  {
    id: "step-4-2",
    moduleIndex: 4,
    stepNumber: "4.2",
    title: "4.2 La Répétition Circulaire : Percer les trous d'un moyeu",
    moduleTitle: "Module 4 : Les outils de modélisation avancés",
    subtitle: "Percer un trou et le dupliquer en couronne régulière autour d'un axe",
    category: "Répétitions 3D",
    duration: "8 min",
    difficulty: "Débutant",
    summary: "Percer un trou et le dupliquer en couronne régulière autour d'un axe.",
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
        title: "1. Nouveau fichier",
        text: "Crée une nouvelle Pièce. (Astuce : modélise un cylindre basique de 50mm de diamètre et 10mm d'épaisseur pour servir de base à cet exercice).",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ Pièce ➔ OK.",
          "Astuce : modélise un cylindre basique de 50mm de diamètre et 10mm d'épaisseur pour servir de base à cet exercice (Plan de dessus ➔ Cercle Ø50 mm ➔ Bossage extrudé 10 mm).",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Cylindre de base de 50mm de diamètre et 10mm d'épaisseur</div>"
        ]
      },
      {
        title: "2. Le perçage",
        text: "Sur la face supérieure du cylindre, ouvre une esquisse. Dessine un petit cercle excentré (cote-le verticalement par rapport à l'origine).",
        bullets: [
          "Sur la face supérieure du cylindre, ouvre une esquisse (<kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>8</kbd>).",
          "Dessine un petit cercle excentré (cote-le verticalement par rapport à l'origine).",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Esquisse du cercle de perçage coté sur la face supérieure</div>"
        ]
      },
      {
        title: "3. Enlèvement de matière",
        text: "Fais un 'Enlèvement de matière extrudé' avec la condition 'À travers tout'.",
        bullets: [
          "Dans l'onglet Fonctions, clique sur <strong>Enlèvement de matière extrudé</strong>.",
          "Choisis la condition <strong>'À travers tout'</strong> et valide avec la coche verte.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Enlèvement de matière extrudé 'À travers tout'</div>"
        ]
      },
      {
        title: "4. Répétition",
        text: "Dans l'onglet Fonctions, clique sur la flèche sous Répétition linéaire > Répétition circulaire.",
        bullets: [
          "Dans l'onglet <strong>Fonctions</strong>, clique sur la flèche sous Répétition linéaire > <strong>Répétition circulaire</strong>.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Sélection de l'outil Répétition circulaire</div>"
        ]
      },
      {
        title: "5. Paramétrage",
        text: "Configure la direction, l'angle, le nombre et la fonction à répéter.",
        bullets: [
          "<strong>Direction 1 :</strong> Clique sur l'arête circulaire du cylindre extérieur.",
          "<strong>Angle :</strong> 360° avec 'Espacement constant' coché.",
          "<strong>Nombre :</strong> 6 occurrences.",
          "<strong>Fonctions à répéter :</strong> Sélectionne le trou que tu viens de percer. Valide.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Paramétrage à 6 occurrences avec espacement constant et résultat final</div>"
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
      imageFileName: "mod4_moyeu_trous.png",
      svgType: "pattern"
    }
  },

  // --------------------------------------------------------------------------
  // 4.3 LE BALAYAGE : MODÉLISER UN PASSAGE DE CÂBLE TUBULAIRE
  // --------------------------------------------------------------------------
  {
    id: "step-4-3",
    moduleIndex: 4,
    stepNumber: "4.3",
    title: "4.3 Le Balayage : Modéliser un passage de câble tubulaire",
    moduleTitle: "Module 4 : Les outils de modélisation avancés",
    subtitle: "Faire glisser une forme le long d'une courbe",
    category: "Volumes complexes",
    duration: "10 min",
    difficulty: "Intermédiaire",
    summary: "Faire glisser une forme le long d'une courbe.",
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
        title: "1. Nouveau fichier",
        text: "Crée une nouvelle Pièce. Le balayage a besoin de DEUX esquisses séparées sur deux plans perpendiculaires.",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ Pièce ➔ OK.",
          "Le balayage a besoin de <strong>DEUX esquisses séparées</strong> sur deux plans perpendiculaires (une trajectoire et un profil).",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Préparation des deux plans perpendiculaires (Dessus et Face)</div>"
        ]
      },
      {
        title: "2. La trajectoire (Esquisse 1)",
        text: "Sur le Plan de dessus, trace une courbe sinueuse avec l'outil Spline, partant de l'origine. Quitte l'esquisse.",
        bullets: [
          "Sur le <strong>Plan de dessus</strong>, trace une courbe sinueuse avec l'outil <strong>Spline</strong>, partant de l'origine.",
          "Quitte l'esquisse en cliquant sur l'icône de sortie en haut à droite.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Tracé de la courbe Spline sinueuse sur le Plan de dessus</div>"
        ]
      },
      {
        title: "3. Le profil (Esquisse 2)",
        text: "Choisis le Plan de face (il est perpendiculaire au début de ta courbe). Ouvre une esquisse. Dessine un petit cercle centré sur le point de départ de ta spline. Quitte l'esquisse.",
        bullets: [
          "Choisis le <strong>Plan de face</strong> (il est perpendiculaire au début de ta courbe). Ouvre une esquisse.",
          "Dessine un petit cercle centré sur le point de départ de ta spline. Quitte l'esquisse.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Cercle perpendiculaire centré sur le départ de la spline</div>"
        ]
      },
      {
        title: "4. Balayage",
        text: "Va dans Fonctions > Bossage/Base balayé. Profil (case bleue) : Sélectionne le cercle. Trajectoire (case rose) : Sélectionne la courbe spline. Valide.",
        bullets: [
          "Va dans <strong>Fonctions</strong> > <strong>Bossage/Base balayé</strong>.",
          "<strong>Profil (case bleue) :</strong> Sélectionne le cercle.",
          "<strong>Trajectoire (case rose) :</strong> Sélectionne la courbe spline. Valide avec la coche verte.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Bossage balayé (profil cercle + trajectoire spline) et tube 3D obtenu</div>"
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
      imageFileName: "mod4_tube_balayage.png",
      svgType: "sweep"
    }
  },

  // --------------------------------------------------------------------------
  // 4.4 LA SYMÉTRIE : MODÉLISER UNE PINCE DE PRÉHENSION
  // --------------------------------------------------------------------------
  {
    id: "step-4-4",
    moduleIndex: 4,
    stepNumber: "4.4",
    title: "4.4 La Symétrie : Modéliser une pince de préhension",
    moduleTitle: "Module 4 : Les outils de modélisation avancés",
    subtitle: "Ne dessiner que la moitié d'un objet et laisser SolidWorks faire le reste",
    category: "Symétrie 3D",
    duration: "9 min",
    difficulty: "Intermédiaire",
    summary: "Ne dessiner que la moitié d'un objet et laisser SolidWorks faire le reste.",
    quickGoal: {
      concept: "Ne dessiner que la moitié d'un objet et laisser SolidWorks faire le reste.",
      actions: [
        "Nouveau fichier Pièce",
        "Dessiner et extruder la demi-pince avec face médiane plane",
        "Sélectionner la face plane centrale en plan de symétrie",
        "Sélectionner le corps et cocher 'Fusionner les corps'",
        "Valider et célébrer la fin du parcours"
      ]
    },
    instructions: [
      {
        title: "1. Nouveau fichier",
        text: "Crée une nouvelle Pièce.",
        bullets: [
          "Presse <kbd class='shortcut-key'>Ctrl</kbd> + <kbd class='shortcut-key'>N</kbd> ➔ sélectionne <strong>Pièce</strong> ➔ clique sur <strong>OK</strong>.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Création d'une nouvelle pièce pour la pince</div>"
        ]
      },
      {
        title: "2. La moitié",
        text: "Sur le Plan de face, dessine et extrude uniquement le demi-corps de la pince avec un doigt de préhension d'un côté. Attention : assure-toi d'avoir une face bien plate pile au milieu de ta pièce qui servira de plan miroir !",
        bullets: [
          "Sur le <strong>Plan de face</strong>, dessine et extrude uniquement le demi-corps de la pince avec un doigt de préhension d'un côté.",
          "Attention : assure-toi d'avoir une face bien plate pile au milieu de ta pièce qui servira de plan miroir !",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Demi-corps de la pince avec doigt extrudé et face plane médiane</div>"
        ]
      },
      {
        title: "3. Symétrie",
        text: "Dans l'onglet Fonctions, clique sur Symétrie.",
        bullets: [
          "Dans l'onglet <strong>Fonctions</strong>, clique sur <strong>Symétrie</strong>.",
          "<strong>Plan de symétrie :</strong> Sélectionne la face plane centrale de ta demi-pince.",
          "<strong>Corps à symétriser :</strong> Déplie le menu 'Corps à symétriser' et clique sur ta pièce.",
          "Coche bien <strong>'Fusionner les corps'</strong> pour n'avoir qu'un seul objet solide à la fin. Valide.",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Sélection de la face centrale et des corps à symétriser avec 'Fusionner les corps'</div>",
          "<div class=\"image-placeholder border-dashed border-2 border-gray-400 bg-gray-100 p-8 text-center my-4 rounded\">Illustration : Pince de préhension complète symétrisée en un seul solide</div>",
          "<div class=\"my-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-orange-500/10 border-2 border-[#ff7d00] shadow-xl glow-7robot text-center\"><div class=\"inline-flex p-3.5 bg-[#ff7d00] text-white rounded-2xl shadow-lg mb-3\"><svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11h-7z\"/></svg></div><h3 class=\"text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight\">⚔️ Tu es maintenant prêt à modéliser des actionneurs pour les robots de combat !!!</h3><p class=\"text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed\">Félicitations ! Tu as complété avec succès les 4 exercices avancés (Révolution, Répétition circulaire, Balayage et Symétrie). Tu as toutes les compétences requises pour concevoir les pièces de 7Robot !</p></div>"
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
      imageFileName: "mod4_pince_symetrique.png",
      svgType: "mirror"
    }
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
