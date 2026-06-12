window.PROJECT_DATA = {
    // ─────────────────────────────────────────────────────────────────────────
    // CONFIGURAZIONI GLOBALI
    // ─────────────────────────────────────────────────────────────────────────
    title: "Alpine Rescue",
    slides: [
        { src: "../images/alpine-rescue/alpine1.png", alt: "Alpine Rescue gameplay"     },
        { src: "../images/alpine-rescue/alpine2.jpg", alt: "Avalanche scenario"         },
        { src: "../images/alpine-rescue/logo2.png",   alt: "Alpine Rescue logo"         },
        { type: "video", src: "https://www.youtube.com/embed/k_w-YJBgNKE", alt: "Gameplay trailer" },
    ],
    tags: ["Unity", "C#", "VR", "Game Design", "AI", "UX"],

    // ─────────────────────────────────────────────────────────────────────────
    // ENGLISH (en)
    // ─────────────────────────────────────────────────────────────────────────
    en: {
        title: "Alpine Rescue",
        metaDesc: "Alpine Rescue – a VR simulation developed in Unity for the Virtual Reality course at PoliTo, featuring mountain rescue scenarios designed with real experts.",
        category: "VR Simulation · Unity",
        titleHTML: "Alpine<br><span>Rescue</span>",
        shortDesc: "A VR mountain rescue simulation developed during the Virtual Reality course at PoliTo. Designed in collaboration with alpine rescue experts, featuring avalanche and canine rescue scenarios.",
        cta: [
            { label: "Download",     icon: "bx-download", href: "https://andreabona.itch.io/alpine-rescue", primary: true,  external: true  },
            { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "1–3 months"   },
            { icon: "bx-group",     text: "Team of 3"     },
            { icon: "bx-desktop",   text: "PC / Desktop"  },
        ],
        detail: {
            label:   "About the project",
            heading: "Rescue training in virtual reality",
            bodyHTML: `
                <p><span>Alpine Rescue</span> is a <span>VR simulation</span> developed in <span>Unity (C#)</span> over 1–3 months as part of the Virtual Reality course at PoliTo, in a team of three. The project was conceived and built entirely for <span>desktop VR</span> - developed during Covid, physical headsets were unavailable, so the full experience was designed and optimised to run on PC.</p>
                <p>I was responsible for <span>designing the game experience</span> from the ground up, defining the two rescue scenarios - <span>avalanche rescue</span> and <span>canine rescue</span> - after direct consultation with alpine rescue professionals. This research phase shaped the structure of each scenario, the tasks the player performs, and the logic behind the interactions.</p>
                <p>On the implementation side, I built the <span>VR locomotion and interaction system</span>, the <span>in-world UI</span>, and a basic <span>dog AI</span> that responds to player commands during the canine rescue scenario. The focus throughout was on <span>user experience</span>: making interactions feel natural and intuitive within a VR context, minimising friction so players could focus on the rescue tasks rather than the controls.</p>
            `,
        },
        info: [
            { label: "Engine",    value: "Unity"         },
            { label: "Language",  value: "C#"            },
            { label: "Duration",  value: "1–3 months"    },
            { label: "Team",      value: "3 people"      },
            { label: "Platform",  value: "PC / Desktop"  },
            { label: "Context",   value: "PoliTo VR course" },
        ],
        features: [
            { icon: "bx-mountain",   text: "Avalanche rescue scenario"     },
            { icon: "bx-dog",        text: "Canine rescue scenario"         },
            { icon: "bx-walk",       text: "VR locomotion system"           },
            { icon: "bx-pointer",    text: "VR object interactions"         },
            { icon: "bx-bot",        text: "Basic dog AI"                   },
            { icon: "bx-layout",     text: "In-world VR UI"                 },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ITALIANO (it)
    // ─────────────────────────────────────────────────────────────────────────
    it: {
        title: "Alpine Rescue",
        metaDesc: "Alpine Rescue – una simulazione VR sviluppata in Unity per il corso di Virtual Reality del PoliTo, con scenari di soccorso alpino progettati insieme a veri esperti.",
        category: "Simulazione VR · Unity",
        titleHTML: "Alpine<br><span>Rescue</span>",
        shortDesc: "Una simulazione VR di soccorso in montagna sviluppata durante il corso di Virtual Reality presso il PoliTo. Progettata in collaborazione con esperti di soccorso alpino, include scenari di valanga e ricerca cinofila.",
        cta: [
            { label: "Download",         icon: "bx-download", href: "https://andreabona.itch.io/alpine-rescue", primary: true,  external: true  },
            { label: "Tutti i progetti", icon: "bx-grid-alt", href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "1–3 mesi"      },
            { icon: "bx-group",     text: "Team di 3"     },
            { icon: "bx-desktop",   text: "PC / Desktop"  },
        ],
        detail: {
            label:   "Sul progetto",
            heading: "Addestramento al soccorso in realtà virtuale",
            bodyHTML: `
                <p><span>Alpine Rescue</span> è una <span>simulazione VR</span> sviluppata in <span>Unity (C#)</span> nell'arco di 1–3 mesi all'interno del corso di Virtual Reality presso il PoliTo, in un team di tre persone. Il progetto è stato concepito e strutturato interamente per <span>desktop VR</span>: sviluppato nel periodo Covid, i visori fisici non erano accessibili, di conseguenza l'intera esperienza è stata progettata e ottimizzata per l'esecuzione su PC.</p>
                <p>Mi sono occupato di <span>progettare l'esperienza di gioco</span> da zero, definendo i due scenari di soccorso – <span>soccorso in valanga</span> e <span>ricerca cinofila</span> – a seguito di un confronto diretto con i professionisti del soccorso alpino. Questa fase di ricerca ha plasmato la struttura di ciascuno scenario, i compiti eseguiti dal giocatore e la logica dietro le interazioni.</p>
                <p>Dal punto di vista dell'implementazione, ho programmato il <span>sistema di locomozione e interazione VR</span>, la <span>UI integrata nel mondo di gioco (in-world)</span> e una <span>IA canina di base</span> che risponde ai comandi impartiti del giocatore durante lo scenario di ricerca. L'attenzione costante è stata posta sulla <span>user experience</span>: rendere le azioni naturali e intuitive nel contesto VR, riducendo al minimo la frizione per consentire all'utente di focalizzarsi sulle operazioni di salvataggio anziché sui comandi.</p>
            `,
        },
        info: [
            { label: "Motore",      value: "Unity"         },
            { label: "Linguaggio",  value: "C#"            },
            { label: "Durata",      value: "1–3 mesi"      },
            { label: "Team",        value: "3 persone"     },
            { label: "Piattaforma", value: "PC / Desktop"  },
            { label: "Contesto",    value: "Corso VR PoliTo" },
        ],
        features: [
            { icon: "bx-mountain",   text: "Scenario di soccorso in valanga" },
            { icon: "bx-dog",        text: "Scenario di ricerca cinofila"   },
            { icon: "bx-walk",       text: "Sistema di locomozione VR"      },
            { icon: "bx-pointer",    text: "Interazione con oggetti VR"     },
            { icon: "bx-bot",        text: "IA canina di base"              },
            { icon: "bx-layout",     text: "Interfaccia UI in-world VR"     },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FRANÇAIS (fr)
    // ─────────────────────────────────────────────────────────────────────────
    fr: {
        title: "Alpine Rescue",
        metaDesc: "Alpine Rescue – une simulation VR développée sous Unity dans le cadre du cours de réalité virtuelle à PoliTo, présentant des scénarios de sauvetage en montagne conçus avec de vrais experts.",
        category: "Simulation VR · Unity",
        titleHTML: "Alpine<br><span>Rescue</span>",
        shortDesc: "Une simulation VR de sauvetage en montagne développée au cours du cursus de Réalité Virtuelle à PoliTo. Conçue en partenariat avec des experts du secours alpin, elle propose des scénarios d'avalanches et de recherche cynophile.",
        cta: [
            { label: "Télécharger",     icon: "bx-download", href: "https://andreabona.itch.io/alpine-rescue", primary: true,  external: true  },
            { label: "Tous les projets", icon: "bx-grid-alt", href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "1–3 mois"      },
            { icon: "bx-group",     text: "Équipe de 3"   },
            { icon: "bx-desktop",   text: "PC / Desktop"  },
        ],
        detail: {
            label:   "À propos du projet",
            heading: "Entraînement au sauvetage in réalité virtuelle",
            bodyHTML: `
                <p><span>Alpine Rescue</span> est une <span>simulation VR</span> développée sous <span>Unity (C#)</span> sur une période de 1 à 3 mois dans le cadre du cours de Réalité Virtuelle à PoliTo, au sein d'une équipe de trois personnes. Le projet a été pensé ed exécuté spécifiquement pour le <span>desktop VR</span> : développé pendant l'épidémie de Covid, les casques physiques n'étant pas disponibles, l'expérience complète a été configurée et optimisée pour s'exécuter sur PC.</p>
                <p>J'ai pris en charge la <span>conception de l'expérience de jeu</span> globale, en définissant les deux configurations d'intervention – <span>secours sous avalanche</span> et <span>recherche canine</span> – après consultation directe avec des professionnels du secours en montagne. Cette phase d'investigation a structuré le déroulement de chaque exercice, les objectifs du joueur ed la logique des interactions.</p>
                <p>Côté développement, j'ai bâti le <span>système de déplacement et d'interaction VR</span>, l'<span>interface UI in-world</span>, ainsi qu'une <span>IA canine basique</span> qui réagit aux ordres du joueur durant le scénario d'équipe. L'accent a été mis en permanence sur l'<span>expérience utilisateur</span> : rendre les manipulations fluides ed logiques dans un contexte VR, limitant la complexité technique pour que l'utilisateur se consacre pleinement aux missions de sauvetage.</p>
            `,
        },
        info: [
            { label: "Moteur",      value: "Unity"         },
            { label: "Langage",     value: "C#"            },
            { label: "Durée",       value: "1–3 mois"      },
            { label: "Équipe",      value: "3 personnes"   },
            { label: "Plateforme",  value: "PC / Desktop"  },
            { label: "Contexte",    value: "Cours VR PoliTo" },
        ],
        features: [
            { icon: "bx-mountain",   text: "Scénario de secours sous avalanche" },
            { icon: "bx-dog",        text: "Scénario de recherche cynophile"    },
            { icon: "bx-walk",       text: "Système de déplacement VR"          },
            { icon: "bx-pointer",    text: "Interactions d'objets en VR"        },
            { icon: "bx-bot",        text: "Intelligence Artificielle canine"   },
            { icon: "bx-layout",     text: "Interface utilisateur in-world VR"  },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ESPAÑOL (es)
    // ─────────────────────────────────────────────────────────────────────────
    es: {
        title: "Alpine Rescue",
        metaDesc: "Alpine Rescue – una simulación en VR desarrollada en Unity para el curso de Realidad Virtual en PoliTo, con escenarios de rescate en montaña diseñados junto a expertos reales.",
        category: "Simulación VR · Unity",
        titleHTML: "Alpine<br><span>Rescue</span>",
        shortDesc: "Una simulación de rescate en montaña en VR desarrollada durante el curso de Realidad Virtual en PoliTo. Diseñada en colaboración con profesionales de rescate alpino, presenta escenarios de avalanchas y búsqueda canina.",
        cta: [
            { label: "Descargar",       icon: "bx-download", href: "https://andreabona.itch.io/alpine-rescue", primary: true,  external: true  },
            { label: "Todos los proyectos", icon: "bx-grid-alt", href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "1–3 meses"     },
            { icon: "bx-group",     text: "Equipo de 3"   },
            { icon: "bx-desktop",   text: "PC / Desktop"  },
        ],
        detail: {
            label:   "Sobre el proyecto",
            heading: "Entrenamiento de rescate en realidad virtual",
            bodyHTML: `
                <p><span>Alpine Rescue</span> es una <span>simulación en VR</span> desarrollada en <span>Unity (C#)</span> durante un periodo de 1 a 3 meses como parte del curso de Realidad Virtual en PoliTo, dentro de un equipo de tres personas. El proyecto fue ideado y construido enteramente para <span>desktop VR</span>: al desarrollarse durante la pandemia de Covid, no había visores físicos disponibles, por lo que toda la experiencia se diseñó y optimizó para ejecutarse en PC.</p>
                <p>Fui responsable de <span>diseñar la experiencia de juego</span> desde cero, estructurando los dos escenarios de salvamento – <span>rescate en avalanchas</span> y <span>búsqueda canina</span> – tras consultar directamente con profesionales del rescate alpino. Esta fase de investigación definió la estructura de cada nivel, las tareas del jugador y la lógica de las interacciones.</p>
                <p>En la implementación, desarrollé il <span>sistema de locomoción e interacción en VR</span>, la <span>UI in-world</span> integrada en el entorno y una <span>IA canina básica</span> que responde a las órdenes del jugador durante las tareas de búsqueda. El enfoque principal se mantuvo en la <span>experiencia de usuario</span>: hacer que las interacciones se sintieran naturales dentro del entorno virtual, reduciendo la fricción para que los jugadores se concentraran en el rescate y no en los controles.</p>
            `,
        },
        info: [
            { label: "Motor",       value: "Unity"         },
            { label: "Lenguaje",    value: "C#"            },
            { label: "Duración",    value: "1–3 meses"     },
            { label: "Equipo",      value: "3 personas"    },
            { label: "Plataforma",  value: "PC / Desktop"  },
            { label: "Contexto",    value: "Curso VR PoliTo" },
        ],
        features: [
            { icon: "bx-mountain",   text: "Escenario de rescate en avalanchas" },
            { icon: "bx-dog",        text: "Escenario de búsqueda canina de rescate" },
            { icon: "bx-walk",       text: "Sistema de locomoción VR"           },
            { icon: "bx-pointer",    text: "Interacciones de objetos en VR"     },
            { icon: "bx-bot",        text: "IA canina básica adaptada"          },
            { icon: "bx-layout",     text: "Interfaz de usuario in-world VR"    },
        ],
    },
};