window.PROJECT_DATA = {
    // ─────────────────────────────────────────────────────────────────────────
    // CONFIGURAZIONI GLOBALI (Uguali per tutte le lingue)
    // ─────────────────────────────────────────────────────────────────────────
    title: "Sands of Dawn",
    slides: [
        { src: "../images/sands-of-dawn/2.jpg",   alt: "Sands of Dawn gameplay"  },
        { src: "../images/sands-of-dawn/3.png",   alt: "Combat system"           },
        { src: "../images/sands-of-dawn/4.png",   alt: "Environment"             },
        { src: "../images/sands-of-dawn/5.png",   alt: "Character"               },
        { src: "../images/sands-of-dawn/6.png",   alt: "Level design"            },
        { src: "../images/sands-of-dawn/7.png",   alt: "Atmosphere"              },
        { src: "../images/sands-of-dawn/Logo.jpg",alt: "Sands of Dawn logo"      },
    ],
    tags: ["C++", "Blueprints", "UE5", "Animation Blueprint", "Behavior Tree", "State Machine"],

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN INGLESE (en)
    // ─────────────────────────────────────────────────────────────────────────
    en: {
        title: "Sands of Dawn",
        metaDesc: "Sands of Dawn – a soulslike game built from scratch in Unreal Engine 5 and C++ by Andrea Bona.",
        category: "Soulslike · Unreal Engine 5",
        titleHTML: "Sands of<br><span>Dawn</span>",
        shortDesc: "My first Unreal Engine 5 project - a soulslike built entirely from scratch over six months, handling every aspect from combat systems to UI, sounds and level design.",
        cta: [
            { label: "Download",     icon: "bx-download", href: "https://mega.nz/file/i0YBVSoa#sAT3vwZ4bAVuf8Fl-tFHl5vsaVR7FECj5hE1nOR00zE", primary: true,  external: true  },
            { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio",                                                 primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "6+ months"   },
            { icon: "bx-user",      text: "Solo project" },
            { icon: "bx-joystick",  text: "PC"           },
        ],
        detail: {
            label:   "About the project",
            heading: "From zero to soulslike",
            bodyHTML: `
                <p><span>Sands of Dawn</span> is my first <span>Unreal Engine 5</span> and <span>C++</span> project, developed solo over <span>six months</span>. Built entirely from scratch, I handled every aspect of the game - gameplay, animations, UI, audio and level design.</p>
                <p>The core of the project is the <span>combat system</span>, which includes light and heavy attacks, i-frame dodge, parry/deflect and a <span>stamina system</span> governing all player actions. I adopted a hybrid architecture: <span>C++ for the core logic</span> (character state management, damage calculation, stamina) and <span>Blueprints for events and animations</span>, integrating Animation Blueprint with a State Machine and Montages for combat transitions.</p>
                <p>The three main technical challenges were: precisely <span>syncing animations and hitboxes</span> to achieve an authentic soulslike combat feel; <span>managing the character state machine</span> to prevent inconsistent transitions between attack, dodge and parry; and <span>bridging C++ and Blueprints</span> across a complex project while learning the engine from the ground up. Enemy AI is driven by a <span>Behavior Tree</span> that reacts to player distance and actions.</p>
            `,
        },
        info: [
            { label: "Engine",    value: "Unreal Engine 5"  },
            { label: "Languages", value: "C++ · Blueprints" },
            { label: "Duration",  value: "6+ months"        },
            { label: "Team",      value: "Solo"             },
            { label: "Platform",  value: "PC"               },
        ],
        features: [
            { icon: "bx-crosshair", text: "Light & heavy attacks"        },
            { icon: "bx-shield",    text: "Parry / deflect system"       },
            { icon: "bx-run",       text: "I-frame dodge"                },
            { icon: "bx-battery",   text: "Stamina system"               },
            { icon: "bx-bot",       text: "AI with Behavior Tree"        },
            { icon: "bx-film",      text: "Animation Blueprint + Montages"},
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN ITALIANO (it)
    // ─────────────────────────────────────────────────────────────────────────
    it: {
        title: "Sands of Dawn",
        metaDesc: "Sands of Dawn – un gioco soulslike sviluppato da cima a fondo in Unreal Engine 5 e C++ da Andrea Bona.",
        category: "Soulslike · Unreal Engine 5",
        titleHTML: "Sands of<br><span>Dawn</span>",
        shortDesc: "Il mio primo progetto in Unreal Engine 5: un soulslike interamente sviluppato da solo in sei mesi, curando ogni singolo aspetto, dai sistemi di combattimento all'interfaccia utente, dall'audio al level design.",
        cta: [
            { label: "Scarica",         icon: "bx-download", href: "https://mega.nz/file/i0YBVSoa#sAT3vwZ4bAVuf8Fl-tFHl5vsaVR7FECj5hE1nOR00zE", primary: true,  external: true  },
            { label: "Tutti i progetti", icon: "bx-grid-alt", href: "../index.html#portfolio",                                                 primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "6+ mesi"          },
            { icon: "bx-user",      text: "Progetto singolo"  },
            { icon: "bx-joystick",  text: "PC"               },
        ],
        detail: {
            label:   "Sul progetto",
            heading: "Da zero a soulslike",
            bodyHTML: `
                <p><span>Sands of Dawn</span> è il mio primo progetto in <span>Unreal Engine 5</span> e <span>C++</span>, sviluppato interamente da solo nell'arco di <span>sei mesi</span>. Creato da zero, ho gestito autonomamente ogni aspetto del gioco: gameplay, animazioni, UI, audio e level design.</p>
                <p>Il cuore del progetto risiede nel <span>sistema di combattimento</span>, che include attacchi leggeri e pesanti, schivata con i-frame, parata/deflect e un <span>sistema di stamina</span> che regola ogni azione del giocatore. Ho adottato un'architettura ibrida: <span>C++ per la logica principale</span> (gestione degli stati del personaggio, calcolo dei danni, stamina) e <span>Blueprint per eventi e animazioni</span>, integrando l'Animation Blueprint con una macchina a stati e montaggi per le transizioni di attacco.</p>
                <p>Le tre principali sfide tecniche sono state: sincronizzare al millimetro <span>animazioni e hitbox</span> per ottenere il feeling tipico dei soulslike; <span>gestire la macchina a stati del personaggio</span> per prevenire transizioni errate tra attacco, schivata e parata; e <span>connettere C++ e Blueprint</span> all'interno di un progetto complesso mentre imparavo a padroneggiare il motore grafico. L'IA dei nemici è gestita tramite un <span>Behavior Tree</span> che reagisce alla distanza e alle azioni del giocatore.</p>
            `,
        },
        info: [
            { label: "Motore",     value: "Unreal Engine 5"  },
            { label: "Linguaggi",  value: "C++ · Blueprints" },
            { label: "Durata",     value: "6+ mesi"          },
            { label: "Team",       value: "Solo"             },
            { label: "Piattaforma", value: "PC"               },
        ],
        features: [
            { icon: "bx-crosshair", text: "Attacchi leggeri e pesanti"   },
            { icon: "bx-shield",    text: "Sistema di parata / deflect"  },
            { icon: "bx-run",       text: "Schivata con i-frame"         },
            { icon: "bx-battery",   text: "Sistema di stamina"           },
            { icon: "bx-bot",       text: "IA con Behavior Tree"         },
            { icon: "bx-film",      text: "Animation Blueprint + Montages"},
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN FRANCESE (fr)
    // ─────────────────────────────────────────────────────────────────────────
    fr: {
        title: "Sands of Dawn",
        metaDesc: "Sands of Dawn – un jeu soulslike conçu à partir de zéro sous Unreal Engine 5 et C++ par Andrea Bona.",
        category: "Soulslike · Unreal Engine 5",
        titleHTML: "Sands of<br><span>Dawn</span>",
        shortDesc: "Mon tout premier projet sur Unreal Engine 5 - un soulslike développé entièrement en solo sur une période de six mois, englobant les systèmes de combat, l'interface utilisateur, l'audio et le level design.",
        cta: [
            { label: "Télécharger",   icon: "bx-download", href: "https://mega.nz/file/i0YBVSoa#sAT3vwZ4bAVuf8Fl-tFHl5vsaVR7FECj5hE1nOR00zE", primary: true,  external: true  },
            { label: "Tous les projets", icon: "bx-grid-alt", href: "../index.html#portfolio",                                                 primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "6+ mois"          },
            { icon: "bx-user",      text: "Projet en solo"   },
            { icon: "bx-joystick",  text: "PC"               },
        ],
        detail: {
            label:   "À propos du projet",
            heading: "De zéro à un soulslike",
            bodyHTML: `
                <p><span>Sands of Dawn</span> est mon premier projet développé sous <span>Unreal Engine 5</span> et <span>C++</span>, conçu seul en <span>six mois</span>. Développé de toutes pièces, j'ai pris en charge chaque facette du jeu : gameplay, animations, interface utilisateur, audio et level design.</p>
                <p>Le noyau du projet repose sur son <span>système de combat</span>, qui intègre des attaques légères et lourdes, des esquives avec fenêtres d'invulnérabilité (i-frame), des parades/déviations ainsi qu'un <span>système d'endurance</span> régissant toutes les actions du joueur. J'ai opté pour une architecture hybride : <span>le C++ pour la logique centrale</span> (gestion des états du personnage, calcul des dégâts, endurance) et les <span>Blueprints pour les événements et les animations</span>, en liant l'Animation Blueprint à une machine d'état et à des Montages pour les enchaînements fluides.</p>
                <p>Les trois défis techniques majeurs ont été : synchroniser au millisecondes près <span>les animations et les hitboxes</span> pour restituer la lourdeur authentique des combats soulslike ; <span>structurer proprement la machine d'état</span> pour bloquer les transitions incohérentes entre l'attaque, l'esquive et la parade ; et faire <span>communiquer le C++ et les Blueprints</span> au sein d'une infrastructure complexe tout en apprenant le moteur graphiques. L'IA ennemie est pilotée par un <span>Behavior Tree</span> qui s'adapte à la distance et au comportement du joueur.</p>
            `,
        },
        info: [
            { label: "Moteur",     value: "Unreal Engine 5"  },
            { label: "Langages",   value: "C++ · Blueprints" },
            { label: "Durée",      value: "6+ mois"          },
            { label: "Équipe",     value: "Solo"             },
            { label: "Plateforme", value: "PC"               },
        ],
        features: [
            { icon: "bx-crosshair", text: "Attaques légères et lourdes"  },
            { icon: "bx-shield",    text: "Système de parade / déviation"},
            { icon: "bx-run",       text: "Esquive avec i-frame"         },
            { icon: "bx-battery",   text: "Système d'endurance"          },
            { icon: "bx-bot",       text: "IA avec Behavior Tree"        },
            { icon: "bx-film",      text: "Animation Blueprint + Montages"},
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LOCALIZZAZIONE IN SPAGNOLO (es)
    // ─────────────────────────────────────────────────────────────────────────
    es: {
        title: "Sands of Dawn",
        metaDesc: "Sands of Dawn – un juego soulslike desarrollado desde cero en Unreal Engine 5 y C++ por Andrea Bona.",
        category: "Soulslike · Unreal Engine 5",
        titleHTML: "Sands of<br><span>Dawn</span>",
        shortDesc: "Mi primer proyecto en Unreal Engine 5: un juego soulslike creado íntegramente en solitario durante seis meses, abarcando desde los sistemas de combate hasta la interfaz, el sonido y el diseño de niveles.",
        cta: [
            { label: "Descargar",       icon: "bx-download", href: "https://mega.nz/file/i0YBVSoa#sAT3vwZ4bAVuf8Fl-tFHl5vsaVR7FECj5hE1nOR00zE", primary: true,  external: true  },
            { label: "Todos los proyectos", icon: "bx-grid-alt", href: "../index.html#portfolio",                                              primary: false, external: false },
        ],
        meta: [
            { icon: "bx-time-five", text: "6+ meses"         },
            { icon: "bx-user",      text: "Proyecto solo"    },
            { icon: "bx-joystick",  text: "PC"               },
        ],
        detail: {
            label:   "Sobre el proyecto",
            heading: "De cero a soulslike",
            bodyHTML: `
                <p><span>Sands of Dawn</span> es mi primer proyecto en <span>Unreal Engine 5</span> y <span>C++</span>, desarrollado de manera individual a lo largo de <span>seis meses</span>. Construido completamente desde cero, asumí cada aspecto del juego: jugabilidad, animaciones, interfaz de usuario, audio y diseño de niveles.</p>
                <p>El núcleo del proyecto es el <span>sistema de combate</span>, que incluye ataques ligeros y pesados, esquiva con i-frames, paradas/desvíos y un <span>sistema de resistencia</span> que limita las acciones del jugador. Adopté una arquitectura híbrida: <span>C++ para la lógica central</span> (gestión de estados de personajes, cálculo de daño y resistencia) y <span>Blueprints per eventos y animaciones</span>, integrando Animation Blueprint con una máquina de estados y Montajes para las transiciones de ataque.</p>
                <p>Los tres retos técnicos principales fueron: sincronizar con precisión milimétrica <span>animaciones e hitboxes</span> para capturar la identidad de un combate soulslike; <span>controlar la máquina de estados del personaje</span> para evitar transiciones inconsistentes entre ataque, esquiva y parada; y <span>conectar C++ y Blueprints</span> en un flujo de datos complejo mientras aprendía el motor gráfico desde la base. La IA enemiga se rige por un <span>Behavior Tree</span> que reacciona a la distancia y comportamiento del jugador.</p>
            `,
        },
        info: [
            { label: "Motor",      value: "Unreal Engine 5"  },
            { label: "Lenguajes",  value: "C++ · Blueprints" },
            { label: "Duración",   value: "6+ meses"         },
            { label: "Equipo",     value: "Solo"             },
            { label: "Plataforma", value: "PC"               },
        ],
        features: [
            { icon: "bx-crosshair", text: "Ataques ligeros y pesados"    },
            { icon: "bx-shield",    text: "Sistema de paradas / desvíos" },
            { icon: "bx-run",       text: "Esquiva con i-frame"          },
            { icon: "bx-battery",   text: "Sistema de resistencia"       },
            { icon: "bx-bot",       text: "IA con Behavior Tree"         },
            { icon: "bx-film",      text: "Animation Blueprint + Montages"},
        ]
    }
};