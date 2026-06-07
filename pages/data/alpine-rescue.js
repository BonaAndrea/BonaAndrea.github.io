window.PROJECT_DATA = {

    title:    "Alpine Rescue",
    metaDesc: "Alpine Rescue – a VR simulation developed in Unity for the Virtual Reality course at PoliTo, featuring mountain rescue scenarios designed with real experts.",

    category:  "VR Simulation · Unity",
    titleHTML: "Alpine<br><span>Rescue</span>",

    meta: [
        { icon: "bx-time-five", text: "1–3 months"   },
        { icon: "bx-group",     text: "Team of 3"     },
        { icon: "bx-desktop",   text: "PC / Desktop"  },
    ],

    shortDesc: "A VR mountain rescue simulation developed during the Virtual Reality course at PoliTo. Designed in collaboration with alpine rescue experts, featuring avalanche and canine rescue scenarios.",

    tags: ["Unity", "C#", "VR", "Game Design", "AI", "UX"],

    cta: [
        { label: "Download",     icon: "bx-download", href: "https://andreabona.itch.io/alpine-rescue", primary: true,  external: true  },
        { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio",                  primary: false, external: false },
    ],

    slides: [
        { src: "../images/alpine-rescue/alpine1.png", alt: "Alpine Rescue gameplay"     },
        { src: "../images/alpine-rescue/alpine2.jpg", alt: "Avalanche scenario"         },
        { src: "../images/alpine-rescue/logo2.png",   alt: "Alpine Rescue logo"         },
        { type: "video", src: "https://www.youtube.com/embed/k_w-YJBgNKE", alt: "Gameplay trailer" },
    ],

    detail: {
        label:   "About the project",
        heading: "Rescue training in virtual reality",
        bodyHTML: `
            <p><span>Alpine Rescue</span> is a <span>VR simulation</span> developed in <span>Unity (C#)</span> over 1–3 months as part of the Virtual Reality course at PoliTo, in a team of three. The project was conceived and built entirely for <span>desktop VR</span> — developed during Covid, physical headsets were unavailable, so the full experience was designed and optimised to run on PC.</p>
            <p>I was responsible for <span>designing the game experience</span> from the ground up, defining the two rescue scenarios — <span>avalanche rescue</span> and <span>canine rescue</span> — after direct consultation with alpine rescue professionals. This research phase shaped the structure of each scenario, the tasks the player performs, and the logic behind the interactions.</p>
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
        { icon: "bx-walk",       text: "VR locomotion system"          },
        { icon: "bx-pointer",    text: "VR object interactions"         },
        { icon: "bx-bot",        text: "Basic dog AI"                   },
        { icon: "bx-layout",     text: "In-world VR UI"                 },
    ],
};