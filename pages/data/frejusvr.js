window.PROJECT_DATA = {
    // ─────────────────────────────────────────────────────────────────────────
    // CONFIGURAZIONI GLOBALI
    // ─────────────────────────────────────────────────────────────────────────
    title: "FrejusVR",
    slides: [
        { src: "../images/frejusvr/frejusvr1.jpg", alt: "FrejusVR tunnel environment" },
        { src: "../images/frejusvr/frejusvr2.jpg", alt: "Emergency scenario"          },
        { src: "../images/frejusvr/frejusvr3.jpg", alt: "Rescue simulation"           },
        { src: "../images/frejusvr/frejusvr4.jpg", alt: "In-game visuals"             },
    ],
    tags: ["Unity", "C#", "URP", "VR", "Oculus Quest 2", "Optimisation", "QA"],

    // ─────────────────────────────────────────────────────────────────────────
    // ENGLISH (en)
    // ─────────────────────────────────────────────────────────────────────────
    en: {
        title: "FrejusVR",
        metaDesc: "FrejusVR – a VR emergency simulation of a tunnel fire rescue at the Frejus tunnel, ported to URP and optimised for Oculus Quest 2 during an internship at Funix SRLS.",
        category: "VR Simulation · Unity URP",
        titleHTML: "Frejus<span>VR</span>",
        shortDesc: "A VR emergency simulation recreating a fire and rescue scenario inside the Frejus tunnel. I ported the project to URP, optimised it for Oculus Quest 2 and served as QA to ensure a smooth, believable experience.",
        cta: [
            { label: "More info",     icon: "bx-link-external", href: "https://www.funix.it/portfolio/#frejusVR", primary: true,  external: true  },
            { label: "All projects", icon: "bx-grid-alt",       href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-glasses",   text: "Oculus Quest 2"  },
            { icon: "bx-briefcase", text: "Internship"       },
            { icon: "bx-wrench",    text: "URP Port + QA"    },
        ],
        detail: {
            label:   "About the project",
            heading: "Emergency training inside the Frejus tunnel",
            bodyHTML: `
                <p><span>FrejusVR</span> is a <span>VR emergency simulation</span> built in <span>Unity</span> that recreates a fire and rescue scenario inside the Frejus tunnel. Developed during my internship at Funix SRLS, the project was a pre-existing application that needed to be modernised and made to run on <span>Oculus Quest 2</span>.</p>
                <p>My primary task was <span>porting the project to URP</span> - the most technically demanding part of the work. This involved converting and updating all <span>shaders and materials</span> to URP-compatible equivalents, <span>re-baking the lighting</span> to work within URP's lighting model, and rebuilding the <span>post-processing stack</span>. Each of these required careful attention to preserve the visual atmosphere of the original while adapting it to the new pipeline.</p>
                <p>Once the port was stable, I tackled <span>performance optimisation</span> for the Quest 2's standalone hardware. The main issues were an <span>unstable frame rate</span> and a rendering pipeline not suited for mobile VR - both critical problems in a simulation where low frame rates cause discomfort. I applied a combination of draw call reduction, occlusion culling and rendering budget adjustments to bring performance to a stable, comfortable level. Finally, I covered <span>QA</span> across the full experience, verifying that the simulation remained believable and free of breaks in immersion after all the technical changes.</p>
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
            { icon: "bx-transfer",    text: "Full URP port"                    },
            { icon: "bx-palette",     text: "Shader & material conversion"     },
            { icon: "bx-sun",         text: "Lighting re-bake"                 },
            { icon: "bx-camera",      text: "Post-processing rebuild"          },
            { icon: "bx-chip",        text: "Quest 2 performance optimisation" },
            { icon: "bx-check-shield",text: "QA & immersion testing"           },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ITALIANO (it)
    // ─────────────────────────────────────────────────────────────────────────
    it: {
        title: "FrejusVR",
        metaDesc: "FrejusVR – una simulazione d'emergenza in VR per il soccorso antincendio nel traforo del Frejus, convertita in URP e ottimizzata per Oculus Quest 2 durante uno stage presso Funix SRLS.",
        category: "Simulazione VR · Unity URP",
        titleHTML: "Frejus<span>VR</span>",
        shortDesc: "Una simulazione d'emergenza in realtà virtuale che ricrea uno scenario di incendio e salvataggio all'interno del traforo del Frejus. Ho convertito il progetto alla pipeline URP, ottimizzato le performance per Oculus Quest 2 e svolto attività di QA.",
        cta: [
            { label: "Maggiori info",   icon: "bx-link-external", href: "https://www.funix.it/portfolio/#frejusVR", primary: true,  external: true  },
            { label: "Tutti i progetti", icon: "bx-grid-alt",       href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-glasses",   text: "Oculus Quest 2"  },
            { icon: "bx-briefcase", text: "Tirocinio"        },
            { icon: "bx-wrench",    text: "Porting URP + QA" },
        ],
        detail: {
            label:   "Sul progetto",
            heading: "Addestramento d'emergenza nel traforo del Frejus",
            bodyHTML: `
                <p><span>FrejusVR</span> è una <span>simulazione d'emergenza VR</span> sviluppata in <span>Unity</span> che ricrea uno scenario di incendio e soccorso nel traforo del Frejus. Gestito durante il mio tirocinio presso Funix SRLS, il progetto consisteva in un'applicazione preesistente che richiedeva di essere ammodernata e ottimizzata per girare in modalità standalone su <span>Oculus Quest 2</span>.</p>
                <p>Il mio compito principale è stato il <span>porting del progetto a URP</span>, la fase tecnicamente più complessa. Questo ha richiesto la conversione e l'aggiornamento di tutti gli <span>shader e materiali</span> con versioni compatibili con la Universal Render Pipeline, il <span>re-bake completo dell'illuminazione</span> per adattarlo al nuovo light model e la ricostruzione del <span>post-processing stack</span>, prestando massima attenzione a preservare l'atmosfera visiva originale.</p>
                <p>Una volta stabilizzato il porting, mi sono concentrato sull'<span>ottimizzazione delle performance</span> per l'hardware mobile del Quest 2. I problemi principali erano un <span>frame rate instabile</span> e una pipeline di rendering troppo pesante per la VR mobile - criticità assolute in una simulazione dove i cali di frame causano chinetosi. Combinando la riduzione delle draw call, l'occlusion culling e il bilanciamento del rendering budget, ho portato le prestazioni a un livello fluido e confortevole. Infine, ho curato il controllo qualità (<span>QA</span>) sull'intera esperienza, verificando che la simulazione rimanesse credibile e totalmente immersiva.</p>
            `,
        },
        info: [
            { label: "Motore",      value: "Unity"           },
            { label: "Linguaggio",  value: "C#"              },
            { label: "Pipeline",    value: "URP"             },
            { label: "Piattaforma", value: "Oculus Quest 2"  },
            { label: "Contesto",    value: "Tirocinio"       },
            { label: "Cliente",     value: "Funix SRLS"      },
        ],
        features: [
            { icon: "bx-transfer",    text: "Porting completo a URP"            },
            { icon: "bx-palette",     text: "Conversione shader e materiali"    },
            { icon: "bx-sun",         text: "Re-bake dell'illuminazione"        },
            { icon: "bx-camera",      text: "Ricostruzione del post-processing" },
            { icon: "bx-chip",        text: "Ottimizzazione performance Quest 2" },
            { icon: "bx-check-shield",text: "QA e test di immersività"          },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FRANÇAIS (fr)
    // ─────────────────────────────────────────────────────────────────────────
    fr: {
        title: "FrejusVR",
        metaDesc: "FrejusVR – une simulation d'urgence en VR d'un sauvetage incendie dans le tunnel du Fréjus, portée sur URP et optimisée pour Oculus Quest 2 lors d'un stage chez Funix SRLS.",
        category: "Simulation VR · Unity URP",
        titleHTML: "Frejus<span>VR</span>",
        shortDesc: "Une simulation d'urgence en réalité virtuelle recréant un scénario d'incendie et de sauvetage dans le tunnel du Fréjus. J'ai porté le projet sur URP, optimisé ses performances pour Oculus Quest 2 et assuré la QA.",
        cta: [
            { label: "Plus d'infos",    icon: "bx-link-external", href: "https://www.funix.it/portfolio/#frejusVR", primary: true,  external: true  },
            { label: "Tous les projets", icon: "bx-grid-alt",       href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-glasses",   text: "Oculus Quest 2"   },
            { icon: "bx-briefcase", text: "Stage"            },
            { icon: "bx-wrench",    text: "Portage URP + QA" },
        ],
        detail: {
            label:   "À propos du projet",
            heading: "Formation d'urgence au sein du tunnel du Fréjus",
            bodyHTML: `
                <p><span>FrejusVR</span> est une <span>simulation d'urgence en VR</span> développée sous <span>Unity</span> qui recrée un scénario d'incendie et de sauvetage dans le tunnel du Fréjus. Réalisé lors de mon stage chez Funix SRLS, le projet s'appuyait sur une application existante qui devait être modernisée pour fonctionner de manière autonome sur <span>Oculus Quest 2</span>.</p>
                <p>Ma mission principale consistait à <span>porter le projet sur URP</span> - la partie la plus exigeante techniquement. Cela impliquait la conversion de tous les <span>shaders et matériaux</span>, le <span>re-calcul complet de l'éclairage</span> (light bake) selon le modèle URP, ed la reconstruction du <span>volume de post-traitement</span>. Chaque étape a demandé une attention méticuleuse pour préserver l'ambiance visuelle d'origine.</p>
                <p>Une fois le portage stabilisé, je me suis attaqué à l'<span>optimisation des performances</span> pour le matériel mobile du Quest 2. Les obstacles majeurs résidaient dans un <span>taux de rafraîchissement instable</span> et un pipeline lourd, deux facteurs critiques générant de l'inconfort en VR. J'ai combiné réduction des draw calls, occlusion culling et ajustements budgétaires de rendu pour stabiliser l'expérience. Enfin, j'ai pris en charge la <span>QA</span> sur l'ensemble du cycle afin de garantir une immersion fluide et réaliste.</p>
            `,
        },
        info: [
            { label: "Moteur",      value: "Unity"           },
            { label: "Langage",     value: "C#"              },
            { label: "Pipeline",    value: "URP"             },
            { label: "Plateforme",  value: "Oculus Quest 2"  },
            { label: "Contexte",    value: "Stage"            },
            { label: "Client",      value: "Funix SRLS"      },
        ],
        features: [
            { icon: "bx-transfer",    text: "Portage complet vers URP"             },
            { icon: "bx-palette",     text: "Conversion des shaders et matériaux"  },
            { icon: "bx-sun",         text: "Re-calcul de l'éclairage static"      },
            { icon: "bx-camera",      text: "Reconstruction du post-processing"    },
            { icon: "bx-chip",        text: "Optimisation des performances Quest 2" },
            { icon: "bx-check-shield",text: "Tests QA et de continuité immersive"  },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ESPAÑOL (es)
    // ─────────────────────────────────────────────────────────────────────────
    es: {
        title: "FrejusVR",
        metaDesc: "FrejusVR – una simulación de emergencia en VR de un rescate en caso de incendio en el túnel de Fréjus, adaptada a URP y optimizada para Oculus Quest 2 durante las prácticas en Funix SRLS.",
        category: "Simulación VR · Unity URP",
        titleHTML: "Frejus<span>VR</span>",
        shortDesc: "Una simulación de emergencia en realidad virtual que recrea un escenario de incendio y rescate dentro del túnel de Fréjus. Realicé la portabilidad a URP, optimicé el rendimiento para Oculus Quest 2 y actué como QA.",
        cta: [
            { label: "Más info",        icon: "bx-link-external", href: "https://www.funix.it/portfolio/#frejusVR", primary: true,  external: true  },
            { label: "Todos los proyectos", icon: "bx-grid-alt",       href: "../index.html#portfolio",                  primary: false, external: false },
        ],
        meta: [
            { icon: "bx-glasses",   text: "Oculus Quest 2"  },
            { icon: "bx-briefcase", text: "Prácticas"        },
            { icon: "bx-wrench",    text: "Puerto URP + QA"  },
        ],
        detail: {
            label:   "Sobre el proyecto",
            heading: "Entrenamiento de emergencia dentro del túnel de Fréjus",
            bodyHTML: `
                <p><span>FrejusVR</span> es una <span>simulación de emergencia en VR</span> desarrollada en <span>Unity</span> que recrea un escenario de incendio y salvamento en el túnel de Fréjus. Desarrollado durante mis prácticas en Funix SRLS, el proyecto era una aplicación preexistente que requería modernizarse y optimizarse para funcionar de forma nativa en <span>Oculus Quest 2</span>.</p>
                <p>Mi tarea principal fue el <span>porting del proyecto a URP</span>, la fase técnicamente más compleja. Esto implicó convertir y actualizar todos los <span>shaders y materiales</span> a equivalentes compatibles con la Universal Render Pipeline, el <span>re-calculo de la iluminación estática (bake)</span> y la reconstrucción del <span>stack de post-procesamiento</span>, cuidando preservar fielmente la atmósfera visual original.</p>
                <p>Una vez estabilizado el proyecto en URP, abordé la <span>optimización del rendimiento</span> para el hardware móvil de Quest 2. Los problemas principales eran una <span>tasa de fotogramas inestable</span> y un flujo de renderizado pesado para VR móvil, fallos críticos en simulaciones donde la falta de fluidez provoca mareos. Apliqué una combinación de reducción de draw calls, occlusion culling y límites de renderizado para estabilizar la experiencia. Finalmente, cubrí el área de <span>QA</span>, verificando que la simulación permaneciera inmersiva y creíble.</p>
            `,
        },
        info: [
            { label: "Motor",       value: "Unity"           },
            { label: "Lenguaje",    value: "C#"              },
            { label: "Pipeline",    value: "URP"             },
            { label: "Plataforma",  value: "Oculus Quest 2"  },
            { label: "Contexto",    value: "Prácticas"       },
            { label: "Cliente",     value: "Funix SRLS"      },
        ],
        features: [
            { icon: "bx-transfer",    text: "Portabilidad completa a URP"       },
            { icon: "bx-palette",     text: "Conversión de shaders y materiales" },
            { icon: "bx-sun",         text: "Re-bake de iluminación estática"   },
            { icon: "bx-camera",      text: "Reconstrucción de post-procesado"  },
            { icon: "bx-chip",        text: "Optimización de rendimiento en Quest 2" },
            { icon: "bx-check-shield",text: "QA y pruebas de inmersión técnica" },
        ],
    },
};