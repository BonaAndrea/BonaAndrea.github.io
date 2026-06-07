window.PROJECT_DATA = {

    title:    "FrejusVR",
    metaDesc: "FrejusVR – a VR emergency simulation of a tunnel fire rescue at the Frejus tunnel, ported to URP and optimised for Oculus Quest 2 during an internship at Funix SRLS.",

    category:  "VR Simulation · Unity URP",
    titleHTML: "Frejus<span>VR</span>",

    meta: [
        { icon: "bx-glasses",   text: "Oculus Quest 2"  },
        { icon: "bx-briefcase", text: "Internship"       },
        { icon: "bx-wrench",    text: "URP Port + QA"    },
    ],

    shortDesc: "A VR emergency simulation recreating a fire and rescue scenario inside the Frejus tunnel. I ported the project to URP, optimised it for Oculus Quest 2 and served as QA to ensure a smooth, believable experience.",

    tags: ["Unity", "C#", "URP", "VR", "Oculus Quest 2", "Optimisation", "QA"],

    cta: [
        { label: "More info",    icon: "bx-link-external", href: "https://www.funix.it/portfolio/#frejusVR", primary: true,  external: true  },
        { label: "All projects", icon: "bx-grid-alt",      href: "../index.html#portfolio",                 primary: false, external: false },
    ],

    slides: [
        { src: "../images/frejusvr/frejusvr1.jpg", alt: "FrejusVR tunnel environment" },
        { src: "../images/frejusvr/frejusvr2.jpg", alt: "Emergency scenario"          },
        { src: "../images/frejusvr/frejusvr3.jpg", alt: "Rescue simulation"           },
        { src: "../images/frejusvr/frejusvr4.jpg", alt: "In-game visuals"             },
    ],

    detail: {
        label:   "About the project",
        heading: "Emergency training inside the Frejus tunnel",
        bodyHTML: `
            <p><span>FrejusVR</span> is a <span>VR emergency simulation</span> built in <span>Unity</span> that recreates a fire and rescue scenario inside the Frejus tunnel. Developed during my internship at Funix SRLS, the project was a pre-existing application that needed to be modernised and made to run on <span>Oculus Quest 2</span>.</p>
            <p>My primary task was <span>porting the project to URP</span> — the most technically demanding part of the work. This involved converting and updating all <span>shaders and materials</span> to URP-compatible equivalents, <span>re-baking the lighting</span> to work within URP's lighting model, and rebuilding the <span>post-processing stack</span>. Each of these required careful attention to preserve the visual atmosphere of the original while adapting it to the new pipeline.</p>
            <p>Once the port was stable, I tackled <span>performance optimisation</span> for the Quest 2's standalone hardware. The main issues were an <span>unstable frame rate</span> and a rendering pipeline not suited for mobile VR — both critical problems in a simulation where low frame rates cause discomfort. I applied a combination of draw call reduction, occlusion culling and rendering budget adjustments to bring performance to a stable, comfortable level. Finally, I covered <span>QA</span> across the full experience, verifying that the simulation remained believable and free of breaks in immersion after all the technical changes.</p>
        `,
    },

    info: [
        { label: "Engine",    value: "Unity"           },
        { label: "Language",  value: "C#"              },
        { label: "Pipeline",  value: "URP"             },
        { label: "Platform",  value: "Oculus Quest 2"  },
        { label: "Context",   value: "Internship"      },
        { label: "Client",    value: "Funix SRLS"      },
    ],

    features: [
        { icon: "bx-transfer",    text: "Full URP port"                      },
        { icon: "bx-palette",     text: "Shader & material conversion"        },
        { icon: "bx-sun",         text: "Lighting re-bake"                    },
        { icon: "bx-camera",      text: "Post-processing rebuild"             },
        { icon: "bx-chip",        text: "Quest 2 performance optimisation"    },
        { icon: "bx-check-shield",text: "QA & immersion testing"              },
    ],
};