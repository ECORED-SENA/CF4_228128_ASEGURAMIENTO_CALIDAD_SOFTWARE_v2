export default {
  global: {
    componenteFormativo: 'Validación de requisitos',
    descripcionCurso:
      'En este componente formativo se abordan los temas de técnicas de validación de requisitos (revisiones, prototipos y casos de prueba) y el tema de los requerimientos duraderos y volátiles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Validación de requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Revisiones de requerimientos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Construcción de prototipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Generación de casos de prueba',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Requerimientos duraderos y volátiles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas para la gestión de requisitos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Validación de requerimientos',
      referencia:
        'Axelo 19. (7 de julio de 2019). Adobe Xd-Prototipado interactivo de aplicaciones y páginas web (sin programación).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AQjU9-zc4Hk',
    },
    {
      tema: '1. Validación de requerimientos',
      referencia:
        'Fundación Educreatic. (2018, 19 abril). Crear prototipo pagina web en mockup balsamiq (caso de estudio Kiri).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VMzckBNgoNc',
    },
    {
      tema: '1.2. Construcción de prototipos',
      referencia:
        'León, C. (12 de noviembre de 2018). Diseño de interfaz de usuario de app con MarvelApp.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GG3ab1058Yw',
    },
    {
      tema: '1.3. Generación de casos de prueba',
      referencia: 'Nastaquias, R. (27 de mayo de 2019). Tutorial de Moqups.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H4OZE1e1MW8',
    },
    {
      tema: '3. Herramientas para la gestión de requisitos',
      referencia:
        'Overti. (08 de abril de 2021). Herramientas de gestión de requisitos.',
      tipo: 'Página web',
      link: 'https://www.overti.es/index.php',
    },
    {
      tema: '3. Herramientas para la gestión de requisitos',
      referencia:
        'Barón, A. (08 de abril de 2021). Herramientas para apoyar ingeniería de requisitos.',
      tipo: 'Presentación',
      link:
        'https://prezi.com/kuflo3saesne/herramientas-para-apoyar-ingenieria-de-requisitos/',
    },
    {
      tema: '3. Herramientas para la gestión de requisitos',
      referencia:
        'IBM Rational RequisitePro Integration. (10 de septiembre de 2020). Integrate RequisitePro.',
      tipo: 'Página web',
      link:
        'https://www.opshub.com/integrations/ibm-rational-requisitepro-integration/',
    },
  ],
  glosario: [
    {
      termino: 'Prueba conceptual',
      significado:
        'Las pruebas de concepto ofrecen conclusiones para diseñar un producto o servicio mejor. Además, permiten evaluar el éxito de estas ideas de productos nuevos antes de su comercialización.',
    },
    {
      termino: '<i>Stakeholders</i>',
      significado:
        'Son todas aquellas personas interesadas en la construcción del <i>software</i> que de una u otra forma se relacionan con las actividades, se afecta por estas actividades o toma parte en las decisiones de la empresa o negocio sobre el cual se está haciendo el levantamiento de requerimientos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballesteros, E., Tellez, F. R., y Medina, J. (2020). <i>Software requirements: prototyping, legacy software, and document analysis</i>. Ingeniería y Desarrollo, 37(2), 327–345.',
      link: 'https://doi.org/10.14482/inde.37.2.1053',
    },
    {
      referencia:
        '<i>Easterbrook, S, Lutz, R, et al. (1998). Experiences using lightweight formal methods for requirements modeling. IEE Trans. On Software Engineering</i>, 24(1), 4-14. (ch 10).',
      link: '',
    },
    {
      referencia:
        'Pantaleo, G., y Rinaudo L. (2018). Ingeniería de <i>Software</i>. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Penzenstadler, B. (s. f.). <i>Requirements Engineering. CSU Long Beach.</i>',
      link:
        'http://www.foss2serve.org/index.php/Requirements_Engineering,_CSU_Long_Beach,_Penzenstadler',
    },
    {
      referencia:
        'Porfirio, C. (s. f.). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. atSistemas - Consultoría IT Blog.',
      link:
        'https://www.knowmadmood.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades',
    },
    {
      referencia:
        'Rivadeneira, M., S. G. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1–29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Sommerville I. (2011). Ingeniería del <i>software</i>. Addison-Wesley.',
      link: '',
    },
    {
      referencia: 'Sevilla, J. (2021). Herramientas de gestión de requisitos. ',
      link:
        'http://www.overti.es/tecnologia/296-herramientas-de-gestion-de-requisitos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experto temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
