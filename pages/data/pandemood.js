window.PROJECT_DATA = {
    // ─────────────────────────────────────────────────────────────────────────
    // CONFIGURAZIONI GLOBALI (Uguali per tutte le lingue)
    // ─────────────────────────────────────────────────────────────────────────
    title: "Pandemood",
    slides: [
        { src: "../images/pandemood/pandemood2.jpg",    alt: "Pandemood gameplay"      },
        { src: "../images/pandemood/pandemood3.jpg",    alt: "Dialogue system"         },
        { src: "../images/pandemood/pandemood4.jpg",    alt: "Level design"            },
        { src: "../images/pandemood/pandemoodlogo.png", alt: "Pandemood logo"          },
        { type: "video", src: "https://www.youtube.com/embed/bh6bCZ2yLA4", alt: "Gameplay trailer" },
    ],
    tags: ["Unity", "C#", "Dialogue System", "UI", "Platformer"],

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN INGLESE (en)
    // ─────────────────────────────────────────────────────────────────────────
    en: {
        title: "Pandemood",
        metaDesc: "Pandemood – a puzzle-platformer developed in Unity by a 6-person team, with a focus on dialogue system and gameplay mechanics.",
        category: "Puzzle Platformer · Unity",
        titleHTML: "Pande<span>mood</span>",
        shortDesc: "A puzzle-platformer set in a post-Covid world, exploring the importance of emotions. I served as gameplay developer in a team of six, focusing on mechanics, UI and the dialogue system.",
        cta: [
            { label: "Download",     icon: "bx-download", href: "https://bugstards.itch.io/pandemood", primary: true,  external: true  },
            { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio",             primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five",  text: "1–3 months" },
            { icon: "bx-group",      text: "Team of 6"  },
            { icon: "bx-joystick",   text: "PC"         },
        ],
        detail: {
            label:   "About the project",
            heading: "Emotions as game mechanics",
            bodyHTML: `
                <p><span>Pandemood</span> is a <span>puzzle-platformer</span> developed in <span>Unity (C#)</span> over 1–3 months as part of the Game Design course at PoliTo. In a team of six, I covered the role of <span>gameplay developer</span>, responsible for implementing the core mechanics and delivering a fun, precise player experience.</p>
                <p>My main focus was the <span>dialogue system</span> - the most complex feature in the game. I implemented text parsing and display, multiple-choice branches with consequences on the game state, and text timing with animations. The key challenge was <span>integrating the dialogue content with the underlying system</span>: keeping the data-driven text pipeline clean and decoupled from the game logic while still allowing emotional states to influence branching and visual feedback.</p>
                <p>Beyond the dialogue system, I implemented <span>movement and platforming</span> mechanics, ensuring responsive and precise controls, and <span>object interactions</span> that tie into the emotional narrative of the game. I also handled the <span>UI</span>, designing and building the in-game interface to complement the game's visual style.</p>
            `,
        },
        info: [
            { label: "Engine",    value: "Unity"        },
            { label: "Language",  value: "C#"           },
            { label: "Duration",  value: "1–3 months"   },
            { label: "Team",      value: "6 people"     },
            { label: "Role",      value: "Gameplay Dev" },
            { label: "Platform",  value: "PC"           },
        ],
        features: [
            { icon: "bx-conversation", text: "Branching dialogue system"           },
            { icon: "bx-run",          text: "Movement & platforming"              },
            { icon: "bx-pointer",      text: "Object interactions"                 },
            { icon: "bx-layout",       text: "In-game UI"                          },
            { icon: "bx-heart",        text: "Emotion-driven game state"           },
            { icon: "bx-text",         text: "Text parsing with timed animations"  },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN ITALIANO (it)
    // ─────────────────────────────────────────────────────────────────────────
    it: {
        title: "Pandemood",
        metaDesc: "Pandemood – un puzzle-platform sviluppato in Unity da un team di 6 persone, con focus su sistema di dialoghi e meccaniche di gameplay.",
        category: "Puzzle Platformer · Unity",
        titleHTML: "Pande<span>mood</span>",
        shortDesc: "Un puzzle-platform ambientato in un mondo post-Covid che esplora l'importanza delle emozioni. Ho lavorato come gameplay developer in un team di sei persone, concentrandomi su meccaniche, UI e sistema di dialoghi.",
        cta: [
            { label: "Scarica",         icon: "bx-download", href: "https://bugstards.itch.io/pandemood", primary: true,  external: true  },
            { label: "Tutti i progetti", icon: "bx-grid-alt", href: "../index.html#portfolio",             primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five",  text: "1–3 mesi"        },
            { icon: "bx-group",      text: "Team di 6"       },
            { icon: "bx-joystick",   text: "PC"              },
        ],
        detail: {
            label:   "Sul progetto",
            heading: "Le emozioni come meccaniche di gioco",
            bodyHTML: `
                <p><span>Pandemood</span> è un <span>puzzle-platformer</span> sviluppato in <span>Unity (C#)</span> nell'arco di 1–3 mesi per il corso di Game Design del PoliTo. All'interno di un team di sei persone, ho ricoperto il ruolo di <span>gameplay developer</span>, occupandomi dell'implementazione delle meccaniche core e di garantire un'esperienza di gioco fluida e precisa.</p>
                <p>Il mio focus principale è stato il <span>sistema di dialoghi</span>, la feature più complessa del gioco. Ho implementato il parsing e la visualizzazione del testo, rami a scelta multipla con conseguenze sullo stato del gioco e la sincronizzazione temporale dei testi con le animazioni. La sfida chiave è stata <span>l'integrazione dei contenuti dei dialoghi con il sistema sottostante</span>: mantenere la pipeline del testo data-driven pulita e disaccoppiata dalla logica di gioco, consentendo comunque agli stati emotivi di influenzare i bivi e i feedback visivi.</p>
                <p>Oltre al sistema di dialoghi, ho implementato le meccaniche di <span>movimento e platforming</span>, assicurando controlli reattivi e precisi, e le <span>interazioni con gli oggetti</span> che si collegano alla narrativa emotiva del gioco. Mi sono occupato anche della <span>UI</span>, progettando e creando l'interfaccia in-game per integrarsi con lo stile visivo del progetto.</p>
            `,
        },
        info: [
            { label: "Motore",     value: "Unity"        },
            { label: "Linguaggio", value: "C#"           },
            { label: "Durata",     value: "1–3 mesi"     },
            { label: "Team",       value: "6 persone"    },
            { label: "Ruolo",      value: "Gameplay Dev" },
            { label: "Piattaforma", value: "PC"           },
        ],
        features: [
            { icon: "bx-conversation", text: "Sistema di dialoghi ramificato"          },
            { icon: "bx-run",          text: "Movimento e platforming"                 },
            { icon: "bx-pointer",      text: "Interazione con gli oggetti"             },
            { icon: "bx-layout",       text: "Interfaccia utente (UI) in-game"         },
            { icon: "bx-heart",        text: "Stato del gioco guidato dalle emozioni"  },
            { icon: "bx-text",         text: "Parsing del testo con animazioni a tempo" },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN FRANCESE (fr)
    // ─────────────────────────────────────────────────────────────────────────
    fr: {
        title: "Pandemood",
        metaDesc: "Pandemood – un jeu de réflexion et de plateforme développé sous Unity da une équipe de 6 personnes, axé sur le système de dialogue et les mécaniques de jeu.",
        category: "Puzzle Platformer · Unity",
        titleHTML: "Pande<span>mood</span>",
        shortDesc: "Un jeu de réflexion et de plateforme se déroulant dans un monde post-Covid, explorant l'importance des émotions. J'ai agi en tant que développeur de gameplay au sein d'une équipe de six personnes, me concentrant sur les mécaniques, l'interface utilisateur et le système de dialogue.",
        cta: [
            { label: "Télécharger",   icon: "bx-download", href: "https://bugstards.itch.io/pandemood", primary: true,  external: true  },
            { label: "Tous les projets", icon: "bx-grid-alt", href: "../index.html#portfolio",           primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five",  text: "1–3 mois"       },
            { icon: "bx-group",      text: "Équipe de 6"    },
            { icon: "bx-joystick",   text: "PC"             },
        ],
        detail: {
            label:   "À propos du projet",
            heading: "Les émotions comme mécaniques de jeu",
            bodyHTML: `
                <p><span>Pandemood</span> est un <span>jeu de réflexion et de plateforme</span> développé sous <span>Unity (C#)</span> en 1 à 3 mois dans le cadre du cours de Game Design au PoliTo. Au sein d'une équipe de six personnes, j'ai assumé le rôle de <span>développeur de gameplay</span>, responsable de l'implémentation des mécaniques fondamentales et de la création d'une expérience joueur précise et amusante.</p>
                <p>Mon attention s'est principalement portée sul le <span>système de dialogue</span> - la fonctionnalité la plus complexe du projet. J'ai mis en place le parsing et l'affichage du texte, des embranchements à choix multiples ayant un impact sur l'état du jeu, ainsi que la synchronisation du texte avec les animations. Le défi majeur consistait à <span>intégrer le contenu des dialogues avec le système sous-jacent</span> : maintenir un pipeline de texte data-driven propre et découplé de la logique de jeu, tout en permettant aux états émotionnels d'influencer les choix et les retours visuels.</p>
                <p>Au-delà du système de dialogue, j'ai implémenté les mécaniques de <span>déplacement et de plateforme</span>, garantissant des contrôles réactifs, ainsi que les <span>interactions avec les objets</span> qui s'inscrivent dans le récit émotionnel du jeu. J'ai également pris en charge l'<span>interface utilisateur (UI)</span>, en concevant l'interface en jeu pour compléter le style visuel de l'univers.</p>
            `,
        },
        info: [
            { label: "Moteur",     value: "Unity"        },
            { label: "Langage",    value: "C#"           },
            { label: "Durée",      value: "1–3 mois"     },
            { label: "Équipe",     value: "6 personnes"  },
            { label: "Rôle",       value: "Gameplay Dev" },
            { label: "Plateforme", value: "PC"           },
        ],
        features: [
            { icon: "bx-conversation", text: "Système de dialogue à embranchements"   },
            { icon: "bx-run",          text: "Déplacement et plateforme"              },
            { icon: "bx-pointer",      text: "Interactions avec les objets"           },
            { icon: "bx-layout",       text: "Interface utilisateur en jeu"           },
            { icon: "bx-heart",        text: "État du jeu dicté par les émotions"     },
            { icon: "bx-text",         text: "Parsing de texte avec animations synchronisées" },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN SPAGNOLO (es)
    // ─────────────────────────────────────────────────────────────────────────
    es: {
        title: "Pandemood",
        metaDesc: "Pandemood – un juego de puzles y plataformas desarrollado en Unity por un equipo de 6 personas, centrado en el sistema de diálogos y las mecánicas de juego.",
        category: "Puzzle Platformer · Unity",
        titleHTML: "Pande<span>mood</span>",
        shortDesc: "Un juego de puzles y plataformas ambientado en un mundo post-Covid que explora la importancia de las emociones. Trabajé como desarrollador de gameplay en un equipo de seis personas, enfocándome en mecánicas, UI y el sistema de diálogos.",
        cta: [
            { label: "Descargar",       icon: "bx-download", href: "https://bugstards.itch.io/pandemood", primary: true,  external: true  },
            { label: "Todos los proyectos", icon: "bx-grid-alt", href: "../index.html#portfolio",             primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five",  text: "1–3 meses"      },
            { icon: "bx-group",      text: "Equipo de 6"    },
            { icon: "bx-joystick",   text: "PC"             },
        ],
        detail: {
            label:   "Sobre el proyecto",
            heading: "Las emociones como mecánicas de juego",
            bodyHTML: `
                <p><span>Pandemood</span> es un <span>juego de puzles y plataformas</span> desarrollado en <span>Unity (C#)</span> durante 1–3 meses como parte del curso de Game Design en el PoliTo. En un equipo de seis personas, cubrí el rol de <span>desarrollador de gameplay</span>, responsable de implementar las mecánicas principales y ofrecer una experiencia de usuario precisa y divertida.</p>
                <p>Mi enfoque principal fue il <span>sistema de diálogos</span>, la funcionalidad más compleja del juego. Implementé el parsing y la visualización de texto, ramas de opción múltiple con consecuencias en el estado del juego y la sincronización de los textos con las animaciones. El desafío clave fue <span>integrar el contenido de los diálogos con el sistema subyacente</span>: mantener el pipeline de texto data-driven limpio y desacoplado de la lógica de juego, permitiendo al mismo tiempo que los estados emocionales influyeran en las decisiones y en las respuestas visuales.</p>
                <p>Además del sistema de diálogos, implementé mecánicas de <span>movimiento y plataformas</span>, asegurando controles precisos y reactivos, e <span>interacciones con objetos</span> vinculadas a la narrativa emocional del juego. También me encargué de la <span>UI</span>, diseñando e implementando la interfaz en juego para complementar el estilo visual del proyecto.</p>
            `,
        },
        info: [
            { label: "Motor",      value: "Unity"        },
            { label: "Lenguaje",   value: "C#"           },
            { label: "Duración",   value: "1–3 meses"    },
            { label: "Equipo",     value: "6 personas"   },
            { label: "Rol",        value: "Gameplay Dev" },
            { label: "Plataforma", value: "PC"           },
        ],
        features: [
            { icon: "bx-conversation", text: "Sistema de diálogo ramificado"          },
            { icon: "bx-run",          text: "Movimiento y plataformas"               },
            { icon: "bx-pointer",      text: "Interacciones con objetos"              },
            { icon: "bx-layout",       text: "Interfaz de usuario en el juego"        },
            { icon: "bx-heart",        text: "Estado del juego guiado por emociones"  },
            { icon: "bx-text",         text: "Parsing de texto con animaciones con tiempo" },
        ]
    }
};