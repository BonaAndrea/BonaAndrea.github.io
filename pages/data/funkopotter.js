window.PROJECT_DATA = {

    title:    "Funko Potter",
    metaDesc: "Funko Potter – an interactive browser game built with X3DOM for the Computer Graphics exam at PoliTo, featuring single and local multiplayer modes.",

    category:  "Browser Game · X3DOM",
    titleHTML: "Funko<br><span>Potter</span>",

    meta: [
        { icon: "bx-time-five", text: "University project" },
        { icon: "bx-group",     text: "Team project"       },
        { icon: "bx-globe",     text: "Browser / X3DOM"    },
    ],

    shortDesc: "An interactive dodge/attack browser game built with X3DOM for the Computer Graphics exam at PoliTo. Features single and local multiplayer modes with balanced characters inspired by the Harry Potter universe.",

    tags: ["X3DOM", "JavaScript", "HTML", "3D Graphics", "Game Design", "Blender"],

    cta: [
        { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio", primary: true, external: false },
    ],

    slides: [
        { src: "../images/funko-potter/fp1.png",   alt: "Funko Potter gameplay"    },
        { src: "../images/funko-potter/fp2.png",   alt: "Character selection"      },
        { src: "../images/funko-potter/logo.png",  alt: "Funko Potter logo"        },
        { type: "video", src: "https://player.vimeo.com/video/816916365", alt: "Gameplay video" },
    ],

    detail: {
        label:   "About the project",
        heading: "3D graphics meets game design",
        bodyHTML: `
            <p><span>Funko Potter</span> was developed as part of the <span>Computer Graphics exam</span> at PoliTo, split into two distinct deliverables. The first was a <span>Blender render</span> exploring 3D modelling techniques. The second — and more complex — was an interactive <span>browser game built with X3DOM</span> and JavaScript, using real-time 3D graphics directly in the browser without plugins.</p>
            <p>I designed a <span>dodge/attack combat game</span> featuring characters inspired by the Harry Potter universe rendered as Funko Pop figures. The game supports both <span>single player</span> and <span>local multiplayer</span> modes, with each character having unique skills. A significant part of my work was <span>balancing the characters</span> — tuning stats, attack patterns and abilities so that every matchup felt fair and strategically interesting rather than one-sided.</p>
            <p>The main technical challenge was <span>implementing responsive gameplay entirely within X3DOM</span>, a library designed primarily for 3D visualisation rather than games. Handling input, collision, game state and animation within its constraints required creative problem-solving and a solid understanding of the underlying WebGL rendering model.</p>
        `,
    },

    info: [
        { label: "Technology", value: "X3DOM + JavaScript" },
        { label: "3D Tool",    value: "Blender"            },
        { label: "Platform",   value: "Browser"            },
        { label: "Modes",      value: "Single & Local MP"  },
        { label: "Context",    value: "PoliTo — Computer Graphics exam" },
    ],

    features: [
        { icon: "bx-cube",        text: "Blender 3D modelling & render"     },
        { icon: "bx-globe",       text: "X3DOM real-time 3D in browser"     },
        { icon: "bx-user",        text: "Single player mode"                },
        { icon: "bx-group",       text: "Local multiplayer mode"            },
        { icon: "bx-equalizer",   text: "Balanced characters & skills"      },
        { icon: "bx-joystick",    text: "Dodge / attack combat system"      },
    ],
};