window.PROJECT_DATA = {

    title:    "Alpine Rescue 2.0",
    metaDesc: "Alpine Rescue 2.0 – an ongoing remake of the original VR mountain rescue simulation, rebuilt in Unity with updated post-processing, refined mechanics and deep technical optimisation for PC VR.",

    category:  "VR Simulation · Unity - Ongoing",
    titleHTML: "Alpine Rescue<br><span>2.0</span>",

    meta: [
        { icon: "bx-time-five",   text: "Ongoing"       },
        { icon: "bx-user",        text: "Solo project"  },
        { icon: "bx-glasses",     text: "PC VR"         },
    ],

    shortDesc: "An active remake of the original Alpine Rescue VR simulation. The focus is on technical optimisation, updated post-processing and refined gameplay - preserving what made the original work while rebuilding it to a higher standard.",

    tags: ["Unity", "C#", "VR", "PC VR", "Optimisation", "Post-processing", "Ongoing"],

    cta: [
        { label: "All projects", icon: "bx-grid-alt", href: "../index.html#portfolio", primary: true, external: false },
    ],

    slides: [
        { src: "../images/alpine-rescue/alpine3.png", alt: "Alpine Rescue 2.0 environment" },
        { src: "../images/alpine-rescue/alpine4.png", alt: "Updated visuals"               },
        { type: "video", src: "https://www.youtube.com/embed/_j9rtjwrcsw", alt: "Development preview" },
    ],

    detail: {
        label:   "About the project",
        heading: "Rebuilding a solid foundation",
        bodyHTML: `
            <p><span>Alpine Rescue 2.0</span> is an ongoing solo remake of the original VR mountain rescue simulation, developed in <span>Unity (C#)</span> for <span>PC VR</span>. The goal is not to reinvent the experience, but to rebuild it properly - taking what worked in the original and bringing it up to a technical standard that the first version, built under academic time constraints, couldn't achieve.</p>
            <p>The primary focus is <span>technical optimisation</span>: auditing and rewriting systems that were functional but inefficient, reducing runtime overhead, and ensuring the application runs smoothly and comfortably in VR - where frame rate consistency is non-negotiable. Alongside this, the <span>post-processing stack</span> has been updated to give the environments a more polished and atmospheric look without compromising performance.</p>
            <p>On the gameplay side, the approach is deliberate refinement rather than redesign. The <span>original mechanics are preserved</span> in spirit - the avalanche and canine rescue scenarios, the VR interactions, the pacing - but each has been <span>revisited and tightened</span> based on what the original playtest feedback revealed. The project is actively in development, with updates ongoing.</p>
        `,
    },

    info: [
        { label: "Engine",    value: "Unity"         },
        { label: "Language",  value: "C#"            },
        { label: "Platform",  value: "PC VR"         },
        { label: "Team",      value: "Solo"          },
        { label: "Status",    value: "In development"},
        { label: "Based on",  value: "Alpine Rescue (2021)" },
    ],

    features: [
        { icon: "bx-chip",        text: "Deep technical optimisation"         },
        { icon: "bx-camera",      text: "Updated post-processing stack"       },
        { icon: "bx-wrench",      text: "Refined VR interactions"             },
        { icon: "bx-mountain",    text: "Avalanche rescue scenario"           },
        { icon: "bx-dog",         text: "Canine rescue scenario"              },
        { icon: "bx-code-curly",  text: "Codebase rewrite & cleanup"         },
    ],
};