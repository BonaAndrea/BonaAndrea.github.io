window.PROJECT_DATA = {
    // ─────────────────────────────────────────────────────────────────────────
    // CONFIGURAZIONI GLOBALI
    // ─────────────────────────────────────────────────────────────────────────
    title: "Funko Potter",
    slides: [
        { src: "../images/funko-potter/fp1.png",   alt: "Funko Potter gameplay"    },
        { src: "../images/funko-potter/fp2.png",   alt: "Character selection"      },
        { src: "../images/funko-potter/logo.png",  alt: "Funko Potter logo"        },
        { type: "video", src: "https://player.vimeo.com/video/816916365", alt: "Gameplay video" },
    ],
    tags: ["X3DOM", "JavaScript", "HTML", "3D Graphics", "Game Design", "Blender"],

    // ─────────────────────────────────────────────────────────────────────────
    // ENGLISH (en)
    // ─────────────────────────────────────────────────────────────────────────
    en: {
        title: "Funko Potter",
        metaDesc: "Funko Potter – an interactive browser game built with X3DOM for the Computer Graphics exam at PoliTo, featuring single and local multiplayer modes.",
        category: "Browser Game · X3DOM",
        titleHTML: "Funko<br><span>Potter</span>",
        shortDesc: "An interactive dodge/attack browser game built with X3DOM for the Computer Graphics exam at PoliTo. Features single and local multiplayer modes with balanced characters inspired by the Harry Potter universe.",
        cta: [
            { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio", primary: true, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "University project" },
            { icon: "bx-group",     text: "Team project"       },
            { icon: "bx-globe",     text: "Browser / X3DOM"    },
        ],
        detail: {
            label:   "About the project",
            heading: "3D graphics meets game design",
            bodyHTML: `
                <p><span>Funko Potter</span> was developed as part of the <span>Computer Graphics exam</span> at PoliTo, split into two distinct deliverables. The first was a <span>Blender render</span> exploring 3D modelling techniques. The second - and more complex - was an interactive <span>browser game built with X3DOM</span> and JavaScript, using real-time 3D graphics directly in the browser without plugins.</p>
                <p>I designed a <span>dodge/attack combat game</span> featuring characters inspired by the Harry Potter universe rendered as Funko Pop figures. The game supports both <span>single player</span> and <span>local multiplayer</span> modes, with each character having unique skills. A significant part of my work was <span>balancing the characters</span> - tuning stats, attack patterns and abilities so that every matchup felt fair and strategically interesting rather than one-sided.</p>
                <p>The main technical challenge was <span>implementing responsive gameplay entirely within X3DOM</span>, a library designed primarily for 3D visualisation rather than games. Handling input, collision, game state and animation within its constraints required creative problem-solving and a solid understanding of the underlying WebGL rendering model.</p>
            `,
        },
        info: [
            { label: "Technology", value: "X3DOM + JavaScript" },
            { label: "3D Tool",    value: "Blender"            },
            { label: "Platform",   value: "Browser"            },
            { label: "Modes",      value: "Single & Local MP"  },
            { label: "Context",    value: "PoliTo - Computer Graphics exam" },
        ],
        features: [
            { icon: "bx-cube",        text: "Blender 3D modelling & render"     },
            { icon: "bx-globe",       text: "X3DOM real-time 3D in browser"     },
            { icon: "bx-user",        text: "Single player mode"                },
            { icon: "bx-group",       text: "Local multiplayer mode"            },
            { icon: "bx-equalizer",   text: "Balanced characters & skills"      },
            { icon: "bx-joystick",    text: "Dodge / attack combat system"      },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ITALIANO (it)
    // ─────────────────────────────────────────────────────────────────────────
    it: {
        title: "Funko Potter",
        metaDesc: "Funko Potter – un gioco interattivo per browser sviluppato con X3DOM per l'esame di Computer Graphics al PoliTo, con modalità single player e multiplayer locale.",
        category: "Browser Game · X3DOM",
        titleHTML: "Funko<br><span>Potter</span>",
        shortDesc: "Un browser game interattivo di combattimento basato su schivate e attacchi, realizzato con X3DOM per l'esame di Computer Graphics al PoliTo. Include modalità a giocatore singolo e multiplayer locale, con personaggi bilanciati ispirati all'universo di Harry Potter.",
        cta: [
            { label: "Tutti i progetti", icon: "bx-grid-alt", href: "../index.html#portfolio", primary: true, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "Progetto universitario" },
            { icon: "bx-group",     text: "Progetto di gruppo"      },
            { icon: "bx-globe",     text: "Browser / X3DOM"         },
        ],
        detail: {
            label:   "Sul progetto",
            heading: "La grafica 3D incontra il game design",
            bodyHTML: `
                <p><span>Funko Potter</span> è stato sviluppato per l'<span>esame di Computer Graphics</span> al PoliTo, suddiviso in due parti. La prima consisteva in un <span>render in Blender</span> per esplorare le tecniche di modellazione 3D. La seconda - e più complessa - era un <span>gioco per browser interattivo sviluppato con X3DOM</span> e JavaScript, in grado di renderizzare grafica 3D in tempo reale direttamente nel browser senza plug-in esterni.</p>
                <p>Ho progettato un <span>sistema di combattimento basato su attacchi e schivate</span>, utilizzando personaggi della saga di Harry Potter modellati in stile Funko Pop. Il gioco supporta sia il <span>giocatore singolo</span> che il <span>multiplayer locale</span>, assegnando abilità uniche a ogni personaggio. Una parte cruciale del lavoro è stata il <span>bilanciamento dei personaggi</span>: calibrare statistiche, pattern di attacco e abilità per rendere ogni scontro equo, strategico e mai a senso unico.</p>
                <p>La sfida tecnica principale è stata <span>implementare un gameplay reattivo interamente dentro X3DOM</span>, una libreria pensata nativamente per la visualizzazione di modelli 3D statici piuttosto che per lo sviluppo di giochi. Gestire input, collisioni, stati di gioco e animazioni entro questi limiti ha richiesto soluzioni creative e una solida comprensione del modello di rendering WebGL sottostante.</p>
            `,
        },
        info: [
            { label: "Tecnologia", value: "X3DOM + JavaScript" },
            { label: "Tool 3D",    value: "Blender"            },
            { label: "Piattaforma", value: "Browser"            },
            { label: "Modalità",   value: "Singolo & MP Locale" },
            { label: "Contesto",   value: "PoliTo - Esame di Computer Graphics" },
        ],
        features: [
            { icon: "bx-cube",        text: "Modellazione 3D e render in Blender" },
            { icon: "bx-globe",       text: "Grafica 3D real-time nel browser con X3DOM" },
            { icon: "bx-user",        text: "Modalità giocatore singolo"          },
            { icon: "bx-group",       text: "Modalità multiplayer locale"         },
            { icon: "bx-equalizer",   text: "Abilità e personaggi bilanciati"     },
            { icon: "bx-joystick",    text: "Combat system basato su schivata/attacco" },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FRANÇAIS (fr)
    // ─────────────────────────────────────────────────────────────────────────
    fr: {
        title: "Funko Potter",
        metaDesc: "Funko Potter – un jeu de navigateur interactif conçu avec X3DOM pour l'examen d'infographie au PoliTo, avec des modes solo et multijoueur local.",
        category: "Browser Game · X3DOM",
        titleHTML: "Funko<br><span>Potter</span>",
        shortDesc: "Un jeu par navigateur interactif basé sur l'esquive et l'attaque, développé avec X3DOM pour l'examen d'infographie au PoliTo. Comprend des modes solo et multijoueur local avec des personnages équilibrés inspirés de Harry Potter.",
        cta: [
            { label: "Tous les projets", icon: "bx-grid-alt", href: "../index.html#portfolio", primary: true, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "Projet universitaire" },
            { icon: "bx-group",     text: "Projet de groupe"       },
            { icon: "bx-globe",     text: "Navigateur / X3DOM"     },
        ],
        detail: {
            label:   "À propos du projet",
            heading: "L'infographie 3D rencontre le game design",
            bodyHTML: `
                <p><span>Funko Potter</span> a été développé dans le cadre de l'<span>examen d'infographie 3D</span> au PoliTo, divisé en deux phases. La première était un <span>rendu Blender</span> axé sur la modélisation. La seconde - plus complexe - était un <span>jeu interactif sur navigateur construit avec X3DOM</span> et JavaScript, affichant de la 3D en temps réel directement sans aucun plug-in.</p>
                <p>J'ai conçu un <span>système de combat basé sur l'esquive et l'attaque</span> mettant en scène les figures de l'univers de Harry Potter revisitées en figurines Funko Pop. Le jeu gère le mode <span>solo</span> ainsi que le <span>multijoueur local</span>, attribuant des compétences propres à chaque héros. Une part essentielle de mon travail a été l'<span>équilibrage des personnages</span> : ajuster les attributs, les fenêtres de tir et les habiletés pour que chaque duel reste juste, tactique et disputé.</p>
                <p>Le défi technique majeur a été d'<span>implémenter un gameplay dynamique exclusivement via X3DOM</span>, une bibliothèque conçue initialement pour de la visualisation de données 3D plutôt que pour du jeu vidéo. Structurer les entrées clavier, les collisions, le cycle de jeu et les animations dans ces conditions a demandé de l'ingéniosité et une maîtrise avancée du modèle de rendu WebGL.</p>
            `,
        },
        info: [
            { label: "Technologie", value: "X3DOM + JavaScript" },
            { label: "Outil 3D",    value: "Blender"            },
            { label: "Plateforme",  value: "Navigateur"         },
            { label: "Modes",       value: "Solo & Multijoueur Local" },
            { label: "Contexte",    value: "PoliTo - Examen d'infographie" },
        ],
        features: [
            { icon: "bx-cube",        text: "Modélisation 3D et rendu sous Blender" },
            { icon: "bx-globe",       text: "Rendu 3D temps réel sur navigateur via X3DOM" },
            { icon: "bx-user",        text: "Mode joueur solo"                    },
            { icon: "bx-group",       text: "Mode multijoueur en local"           },
            { icon: "bx-equalizer",   text: "Personnages et sorts équilibrés"     },
            { icon: "bx-joystick",    text: "Système de combat esquive / attaque" },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ESPAÑOL (es)
    // ─────────────────────────────────────────────────────────────────────────
    es: {
        title: "Funko Potter",
        metaDesc: "Funko Potter – un juego interactivo para navegador desarrollado con X3DOM para el examen de Gráficos por Computadora en el PoliTo, con modos individual y multijuegos local.",
        category: "Browser Game · X3DOM",
        titleHTML: "Funko<br><span>Potter</span>",
        shortDesc: "Un juego de navegador interactivo de combate basado en esquivar y atacar, creado con X3DOM para el examen de Gráficos por Computadora en el PoliTo. Incluye modos individual y multijugador local con personajes balanceados inspirados en Harry Potter.",
        cta: [
            { label: "Todos los proyectos", icon: "bx-grid-alt", href: "../index.html#portfolio", primary: true, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "Proyecto universitario" },
            { icon: "bx-group",     text: "Proyecto de equipo"      },
            { icon: "bx-globe",     text: "Navegador / X3DOM"       },
        ],
        detail: {
            label:   "Sobre el proyecto",
            heading: "Los gráficos 3D se unen al diseño de juegos",
            bodyHTML: `
                <p><span>Funko Potter</span> se desarrolló como parte del <span>examen de Gráficos por Computadora</span> en el PoliTo, dividido en dos entregas. La primera fue un <span>renderizado en Blender</span> para explorar técnicas de modelado 3D. La segunda - y más compleja - fue un <span>juego de navegador interactivo construido con X3DOM</span> y JavaScript, utilizando gráficos 3D en tiempo real directamente en el navegador sin complementos externos.</p>
                <p>Diseñé un <span>juego de combate de esquivar y atacar</span> con personajes inspirados en el universo de Harry Potter recreados como figuras Funko Pop. El juego admite modos de <span>un solo jugador</span> y <span>multijugador local</span>, donde cada personaje posee habilidades únicas. Una parte significativa de mi trabajo fue el <span>balanceo de los personajes</span>: ajustar estadísticas, patrones de ataque y habilidades para que cada enfrentamiento se sintiera justo y estratégicamente interesante.</p>
                <p>El principal desafío técnico fue <span>implementar una jugabilidad fluida completamente dentro de X3DOM</span>, una librería diseñada principalmente para la visualización 3D estática y no para videojuegos. Manejar entradas, colisiones, estados de juego y animaciones bajo estas restricciones requirió soluciones creativas y una comprensión sólida del modelo de renderizado WebGL subyacente.</p>
            `,
        },
        info: [
            { label: "Tecnología",  value: "X3DOM + JavaScript" },
            { label: "Herramienta", value: "Blender"            },
            { label: "Plataforma",  value: "Navegador"         },
            { label: "Modos",       value: "Individual & MP Local" },
            { label: "Contexto",    value: "PoliTo - Examen de Gráficos por Computadora" },
        ],
        features: [
            { icon: "bx-cube",        text: "Modelado 3D y renderizado en Blender" },
            { icon: "bx-globe",       text: "Gráficos 3D en tiempo real en navegador con X3DOM" },
            { icon: "bx-user",        text: "Modo jugador individual"             },
            { icon: "bx-group",       text: "Modo multijugador local"             },
            { icon: "bx-equalizer",   text: "Personajes y habilidades balanceados" },
            { icon: "bx-joystick",    text: "Sistema de combate de esquivar/atacar" },
        ],
    },
};