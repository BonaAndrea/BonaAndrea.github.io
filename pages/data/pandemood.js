window.PROJECT_DATA = {

    title:    "Pandemood",
    metaDesc: "Pandemood – a puzzle-platformer developed in Unity by a 6-person team, with a focus on dialogue system and gameplay mechanics.",

    category:  "Puzzle Platformer · Unity",
    titleHTML: "Pande<span>mood</span>",

    meta: [
        { icon: "bx-time-five",  text: "1–3 months"      },
        { icon: "bx-group",      text: "Team of 6"        },
        { icon: "bx-joystick",   text: "PC"               },
    ],

    shortDesc: "A puzzle-platformer set in a post-Covid world, exploring the importance of emotions. I served as gameplay developer in a team of six, focusing on mechanics, UI and the dialogue system.",

    tags: ["Unity", "C#", "Dialogue System", "UI", "Platformer"],

    cta: [
        { label: "Download",     icon: "bx-download", href: "https://bugstards.itch.io/pandemood",  primary: true,  external: true  },
        { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio",              primary: false, external: false },
    ],

    slides: [
        { src: "../images/pandemood/pandemood2.jpg",    alt: "Pandemood gameplay"      },
        { src: "../images/pandemood/pandemood3.jpg",    alt: "Dialogue system"         },
        { src: "../images/pandemood/pandemood4.jpg",    alt: "Level design"            },
        { src: "../images/pandemood/pandemoodlogo.png", alt: "Pandemood logo"          },
        { type: "video", src: "https://www.youtube.com/embed/bh6bCZ2yLA4", alt: "Gameplay trailer" },
    ],

    detail: {
        label:   "About the project",
        heading: "Emotions as game mechanics",
        bodyHTML: `
            <p><span>Pandemood</span> is a <span>puzzle-platformer</span> developed in <span>Unity (C#)</span> over 1–3 months as part of the Game Design course at PoliTo. In a team of six, I covered the role of <span>gameplay developer</span>, responsible for implementing the core mechanics and delivering a fun, precise player experience.</p>
            <p>My main focus was the <span>dialogue system</span> — the most complex feature in the game. I implemented text parsing and display, multiple-choice branches with consequences on the game state, and text timing with animations. The key challenge was <span>integrating the dialogue content with the underlying system</span>: keeping the data-driven text pipeline clean and decoupled from the game logic while still allowing emotional states to influence branching and visual feedback.</p>
            <p>Beyond the dialogue system, I implemented <span>movement and platforming</span> mechanics, ensuring responsive and precise controls, and <span>object interactions</span> that tie into the emotional narrative of the game. I also handled the <span>UI</span>, designing and building the in-game interface to complement the game's visual style.</p>
        `,
    },

    info: [
        { label: "Engine",    value: "Unity"          },
        { label: "Language",  value: "C#"             },
        { label: "Duration",  value: "1–3 months"     },
        { label: "Team",      value: "6 people"       },
        { label: "Role",      value: "Gameplay Dev"   },
        { label: "Platform",  value: "PC"             },
    ],

    features: [
        { icon: "bx-conversation", text: "Branching dialogue system"          },
        { icon: "bx-run",          text: "Movement & platforming"              },
        { icon: "bx-pointer",      text: "Object interactions"                 },
        { icon: "bx-layout",       text: "In-game UI"                          },
        { icon: "bx-heart",        text: "Emotion-driven game state"           },
        { icon: "bx-text",         text: "Text parsing with timed animations"  },
    ],
};