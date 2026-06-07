window.PROJECT_DATA = {

    // SEO
    title:    "Sands of Dawn",
    metaDesc: "Sands of Dawn – a soulslike game built from scratch in Unreal Engine 5 and C++ by Andrea Bona.",

    // Hero – left column
    category:  "Soulslike · Unreal Engine 5",
    titleHTML: "Sands of<br><span>Dawn</span>",

    meta: [
        { icon: "bx-time-five", text: "6+ months"    },
        { icon: "bx-user",      text: "Solo project"  },
        { icon: "bx-joystick",  text: "PC"            },
    ],

    shortDesc: "My first Unreal Engine 5 project — a soulslike built entirely from scratch over six months, handling every aspect from combat systems to UI, sounds and level design.",

    tags: ["C++", "Blueprints", "UE5", "Animation Blueprint", "Behavior Tree", "State Machine"],

    cta: [
        { label: "Download",     icon: "bx-download", href: "https://mega.nz/file/i0YBVSoa#sAT3vwZ4bAVuf8Fl-tFHl5vsaVR7FECj5hE1nOR00zE", primary: true,  external: true  },
        { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio",                                                        primary: false, external: false },
    ],

    // Hero – right column (carousel)
    slides: [
        { src: "../images/sands-of-dawn/2.jpg",   alt: "Sands of Dawn gameplay"  },
        { src: "../images/sands-of-dawn/3.png",   alt: "Combat system"           },
        { src: "../images/sands-of-dawn/4.png",   alt: "Environment"             },
        { src: "../images/sands-of-dawn/5.png",   alt: "Character"               },
        { src: "../images/sands-of-dawn/6.png",   alt: "Level design"            },
        { src: "../images/sands-of-dawn/7.png",   alt: "Atmosphere"              },
        { src: "../images/sands-of-dawn/Logo.jpg",alt: "Sands of Dawn logo"      },
    ],

    // Detail section
    detail: {
        label:   "About the project",
        heading: "From zero to soulslike",
        bodyHTML: `
            <p><span>Sands of Dawn</span> is my first <span>Unreal Engine 5</span> and <span>C++</span> project, developed solo over <span>six months</span>. Built entirely from scratch, I handled every aspect of the game — gameplay, animations, UI, audio and level design.</p>
            <p>The core of the project is the <span>combat system</span>, which includes light and heavy attacks, i-frame dodge, parry/deflect and a <span>stamina system</span> governing all player actions. I adopted a hybrid architecture: <span>C++ for the core logic</span> (character state management, damage calculation, stamina) and <span>Blueprints for events and animations</span>, integrating Animation Blueprint with a State Machine and Montages for combat transitions.</p>
            <p>The three main technical challenges were: precisely <span>syncing animations and hitboxes</span> to achieve an authentic soulslike combat feel; <span>managing the character state machine</span> to prevent inconsistent transitions between attack, dodge and parry; and <span>bridging C++ and Blueprints</span> across a complex project while learning the engine from the ground up. Enemy AI is driven by a <span>Behavior Tree</span> that reacts to player distance and actions.</p>
        `,
    },

    // Sidebar – project info
    info: [
        { label: "Engine",    value: "Unreal Engine 5"  },
        { label: "Languages", value: "C++ · Blueprints" },
        { label: "Duration",  value: "6+ months"        },
        { label: "Team",      value: "Solo"             },
        { label: "Platform",  value: "PC"               },
    ],

    // Sidebar – key features
    features: [
        { icon: "bx-crosshair", text: "Light & heavy attacks"       },
        { icon: "bx-shield",    text: "Parry / deflect system"       },
        { icon: "bx-run",       text: "I-frame dodge"                },
        { icon: "bx-battery",   text: "Stamina system"               },
        { icon: "bx-bot",       text: "AI with Behavior Tree"        },
        { icon: "bx-film",      text: "Animation Blueprint + Montages"},
    ],
};