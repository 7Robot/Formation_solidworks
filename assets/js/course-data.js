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
  // MODULE 4 : PROJET RÉEL - LE BOÎTIER FEETECH
  // --------------------------------------------------------------------------
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

// Rendre accessible globalement
window.COURSE_MODULES = COURSE_MODULES;
window.COURSE_STEPS = COURSE_STEPS;
