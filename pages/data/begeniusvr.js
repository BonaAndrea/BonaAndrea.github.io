window.PROJECT_DATA = {

    title:    "EliTech BeGenius VR",
    metaDesc: "EliTech BeGenius VR – a mixed industrial training and safety simulation built in Unity for Oculus Quest 2, developed as an internship and thesis project at Funix SRLS.",

    category:  "VR Application · Unity",
    titleHTML: "EliTech<br><span>BeGenius VR</span>",

    meta: [
        { icon: "bx-group",     text: "Team of 3"       },
        { icon: "bx-glasses",   text: "Oculus Quest 2"  },
        { icon: "bx-briefcase", text: "Internship + Thesis" },
    ],

    shortDesc: "A dual-purpose VR application combining industrial training and safety simulation, developed for Oculus Quest 2 during my internship and thesis at Funix SRLS. I designed the full experience and led optimisation.",

    tags: ["Unity", "C#", "VR", "Oculus Quest 2", "UX Design", "Game Design", "Optimisation"],

    cta: [
        { label: "More info",    icon: "bx-link-external", href: "https://www.funix.it/portfolio/#elitechVR", primary: true,  external: true  },
        { label: "All projects", icon: "bx-grid-alt",      href: "../index.html#portfolio",                  primary: false, external: false },
    ],

    slides: [
        { src: "../images/begenius/begenius1.jpg", alt: "BeGenius VR environment"    },
        { src: "../images/begenius/begenius2.jpg", alt: "Training scenario"          },
        { src: "../images/begenius/begenius3.jpg", alt: "Safety simulation"          },
    ],

    detail: {
        label:   "About the project",
        heading: "Training and safety through immersion",
        bodyHTML: `
            <p><span>EliTech BeGenius VR</span> is a <span>dual-purpose VR application</span> built in <span>Unity (C#)</span> for <span>Oculus Quest 2</span>, developed during my internship and thesis project at Funix SRLS in a team of three. The experience combines <span>industrial training</span> and <span>safety simulation</span>, allowing users to learn procedures and practice real-world tasks in an immersive environment.</p>
            <p>I was responsible for <span>designing the entire experience</span>, making deliberate decisions about how users would move through the virtual environment, what they would interact with, and why. The <span>gamification layer</span> — built on points and rewards, narrative progression, and real-task simulation — was chosen and designed by me to maximise engagement and knowledge retention without sacrificing the simulation's fidelity.</p>
            <p>A major part of the work was <span>sound design</span>: selecting and placing audio in three-dimensional space to reinforce presence and guide attention. On the technical side, I handled <span>optimisation for Oculus Quest 2</span> — a standalone headset with strict hardware constraints — using <span>lightmapping and baked lighting</span>, <span>LOD and occlusion culling</span>, and <span>texture compression</span> to maintain visual quality while hitting the performance targets required for comfortable VR.</p>
        `,
    },

    info: [
        { label: "Engine",    value: "Unity"              },
        { label: "Language",  value: "C#"                 },
        { label: "Team",      value: "3 people"           },
        { label: "Platform",  value: "Oculus Quest 2"     },
        { label: "Context",   value: "Internship + Thesis"},
        { label: "Client",    value: "Funix SRLS"         },
    ],

    features: [
        { icon: "bx-hard-hat",    text: "Industrial training scenarios"       },
        { icon: "bx-shield",      text: "Safety simulation"                   },
        { icon: "bx-trophy",      text: "Points & rewards gamification"       },
        { icon: "bx-book-open",   text: "Narrative progression"               },
        { icon: "bx-volume-full", text: "3D spatial sound design"             },
        { icon: "bx-chip",        text: "Quest 2 optimisation (LOD, baking)"  },
    ],
};