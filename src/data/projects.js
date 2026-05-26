export const projects = [
  {
    slug: "erp-saas-multiempresa",
    title: {
      es: "ERP SaaS Multiempresa",
      en: "Multi-company SaaS ERP",
    },
    category: {
      es: "Sistema empresarial SaaS",
      en: "SaaS business system",
    },
    projectType: {
      es: "Caso real",
      en: "Real case",
    },
    status: {
      es: "En desarrollo avanzado",
      en: "In advanced development",
    },
    availability: {
      es: "No desplegado actualmente",
      en: "Not currently deployed",
    },
    reviewMode: {
      es: "Disponible mediante explicación técnica, revisión de arquitectura y avances del sistema.",
      en: "Available through technical explanation, architecture review, and system progress walkthrough.",
    },
    description: {
      es: "Sistema ERP multiempresa para centralizar módulos administrativos, operativos y de gestión bajo una arquitectura SaaS.",
      en: "Multi-company ERP system for centralizing administrative, operational, and management modules under a SaaS architecture.",
    },
    problem: {
      es: "Muchas empresas necesitan controlar procesos internos, usuarios, datos y operaciones desde una plataforma unificada, escalable y preparada para múltiples organizaciones.",
      en: "Many companies need to control internal processes, users, data, and operations from a unified, scalable platform prepared for multiple organizations.",
    },
    solution: {
      es: "Se está construyendo una plataforma SaaS con separación por empresa, gestión de usuarios, módulos administrativos, control de datos y una base preparada para crecer por funcionalidades.",
      en: "A SaaS platform is being built with company separation, user management, administrative modules, data control, and a base prepared to grow by features.",
    },
    role: {
      es: "Análisis de requerimientos, diseño de arquitectura, modelado de datos, desarrollo backend, estructura frontend y definición de módulos.",
      en: "Requirements analysis, architecture design, data modeling, backend development, frontend structure, and module definition.",
    },
    cover: "",
    detailPath: "/proyectos/erp-saas-multiempresa",
    codeUrl: "",
    videoUrl: "",
    isDeployed: false,
    isCodePrivate: true,
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API", "SaaS"],
    features: {
      es: [
        "Arquitectura multiempresa.",
        "Gestión de usuarios y roles.",
        "Base para módulos administrativos.",
        "Separación de datos por organización.",
        "Diseño preparado para crecimiento SaaS.",
      ],
      en: [
        "Multi-company architecture.",
        "User and role management.",
        "Base for administrative modules.",
        "Data separation by organization.",
        "Design prepared for SaaS growth.",
      ],
    },
    images: [],
  },
  {
    slug: "sistema-ventas-agroinsumos",
    title: {
      es: "Sistema de Ventas para Agroinsumos",
      en: "Agro-input Sales System",
    },
    category: {
      es: "Sistema web de ventas",
      en: "Web sales system",
    },
    projectType: {
      es: "Caso real",
      en: "Real case",
    },
    status: {
      es: "Sistema funcional",
      en: "Functional system",
    },
    availability: {
      es: "No desplegado actualmente",
      en: "Not currently deployed",
    },
    reviewMode: {
      es: "Disponible mediante video demostrativo y explicación técnica del flujo de ventas.",
      en: "Available through a demo video and technical explanation of the sales flow.",
    },
    description: {
      es: "Sistema de ventas para una tienda de agroinsumos, orientado a registrar productos, clientes, ventas y procesos básicos de administración comercial.",
      en: "Sales system for an agro-input store, focused on registering products, customers, sales, and basic commercial management processes.",
    },
    problem: {
      es: "La venta de agroinsumos requiere controlar productos, precios, clientes y operaciones de venta de forma ordenada para evitar registros manuales dispersos y errores en la gestión.",
      en: "Agro-input sales require organized control of products, prices, customers, and sales operations to avoid scattered manual records and management errors.",
    },
    solution: {
      es: "Se desarrolló un sistema web que permite centralizar la información comercial, gestionar productos y apoyar el registro de ventas de manera más clara y controlada.",
      en: "A web system was developed to centralize commercial information, manage products, and support sales registration in a clearer and more controlled way.",
    },
    role: {
      es: "Análisis del proceso de venta, diseño del sistema, modelado de datos, desarrollo de funcionalidades principales y pruebas del flujo comercial.",
      en: "Sales process analysis, system design, data modeling, development of main features, and testing of the commercial flow.",
    },
    cover: "/img/agroinsumos/login.JPG",
    detailPath: "/proyectos/sistema-ventas-agroinsumos",
    codeUrl: "",
    videoUrl: "https://www.youtube.com/embed/ky9dUPdK-RU",
    isDeployed: false,
    isCodePrivate: true,
    stack: ["React", "Spring Boot", "PostgreSQL", "TailwindCSS"],
    features: {
      es: [
        "Gestión de productos agropecuarios.",
        "Registro de ventas.",
        "Administración de clientes.",
        "Control básico de inventario.",
        "Flujo comercial explicado mediante video demo.",
      ],
      en: [
        "Agro-input product management.",
        "Sales registration.",
        "Customer administration.",
        "Basic inventory control.",
        "Commercial flow explained through a demo video.",
      ],
    },
    images: [
      "/img/agroinsumos/cod_de_barras.JPG",
      "/img/agroinsumos/compras.JPG",
      "/img/agroinsumos/dashboard.JPG",
      "/img/agroinsumos/inventario.JPG",
      "/img/agroinsumos/login.JPG",
      "/img/agroinsumos/reportes.JPG",
      "/img/agroinsumos/ventas.JPG",
    ],
  },
  {
    slug: "cell-repair-desktop",
    title: {
      es: "Cell Repair Desktop",
      en: "Cell Repair Desktop",
    },
    category: {
      es: "Sistema de escritorio",
      en: "Desktop system",
    },
    projectType: {
      es: "Caso real",
      en: "Real case",
    },
    status: {
      es: "Sistema implementado y en uso",
      en: "Implemented system in active use",
    },
    availability: {
      es: "Instalado y utilizado actualmente en la tienda",
      en: "Installed and currently used in the shop",
    },
    reviewMode: {
      es: "Disponible mediante capturas, video demostrativo y explicación técnica del sistema en uso.",
      en: "Available through screenshots, demo video, and technical explanation of the system in use.",
    },
    description: {
      es: "Sistema de escritorio para una tienda de reparación de celulares, implementado para gestionar clientes, dispositivos, órdenes de reparación, ventas, compras, inventario, cuentas por cobrar, reportes y respaldos.",
      en: "Desktop system for a cellphone repair shop, implemented to manage customers, devices, repair orders, sales, purchases, inventory, accounts receivable, reports, and backups.",
    },
    problem: {
      es: "La tienda necesitaba dejar de depender de registros manuales para controlar reparaciones, ventas, inventario, cuentas pendientes y comprobantes, ya que eso dificultaba el seguimiento diario y la consulta de información.",
      en: "The shop needed to stop relying on manual records to control repairs, sales, inventory, pending accounts, and receipts, because that made daily tracking and information lookup difficult.",
    },
    solution: {
      es: "Se desarrolló una aplicación de escritorio con módulos conectados para registrar clientes, dispositivos, órdenes de reparación, compras, ventas, inventario, reportes, tickets y copias de seguridad, permitiendo operar el negocio desde una herramienta centralizada.",
      en: "A desktop application was developed with connected modules for customers, devices, repair orders, purchases, sales, inventory, reports, tickets, and backups, allowing the business to operate from a centralized tool.",
    },
    role: {
      es: "Análisis del flujo real de la tienda, diseño de la interfaz, modelado de datos, desarrollo de módulos principales, integración con base de datos local, generación de tickets y pruebas con uso real.",
      en: "Analysis of the shop's real workflow, interface design, data modeling, main module development, local database integration, ticket generation, and testing with real use.",
    },
    cover: "/img/cell-repair/dashboard.JPG",
    detailPath: "/proyectos/cell-repair-desktop",
    codeUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=dlZ2OWdPNOY",
    isDeployed: true,
    isCodePrivate: true,
    stack: ["Spring Boot", "React+vite", "SQLite", "Electron"],
    features: {
      es: [
        "Registro de clientes.",
        "Registro de equipos celulares.",
        "Gestión de órdenes de reparación.",
        "Ventas, compras e inventario.",
        "Cuentas por cobrar y reportes.",
        "Generación de tickets y respaldos.",
      ],
      en: [
        "Customer registration.",
        "Cellphone device registration.",
        "Repair order management.",
        "Sales, purchases, and inventory.",
        "Accounts receivable and reports.",
        "Ticket generation and backups.",
      ],
    },
    images: [
      "/img/cell-repair/clientes.JPG",
      "/img/cell-repair/compras.JPG",
      "/img/cell-repair/contabilidad.JPG",
      "/img/cell-repair/cuentas_por_cobrar.JPG",
      "/img/cell-repair/dashboard.JPG",
      "/img/cell-repair/dispositivos.JPG",
      "/img/cell-repair/inventario.JPG",
      "/img/cell-repair/login.JPG",
      "/img/cell-repair/ordenes.JPG",
      "/img/cell-repair/reportes.JPG",
      "/img/cell-repair/respaldos.JPG",
      "/img/cell-repair/ticket.JPG",
      "/img/cell-repair/ventas.JPG",
    ],
  },
  {
    slug: "bibliosys",
    title: {
      es: "Bibliosys",
      en: "Bibliosys",
    },
    category: {
      es: "Sistema web",
      en: "Web system",
    },
    projectType: {
      es: "Caso de estudio",
      en: "Case study",
    },
    status: {
      es: "MVP funcional / Proyecto académico",
      en: "Functional MVP / Academic project",
    },
    availability: {
      es: "No desplegado actualmente",
      en: "Not currently deployed",
    },
    reviewMode: {
      es: "Disponible mediante capturas, video demostrativo y código fuente.",
      en: "Available through screenshots, demo video, and source code.",
    },
    description: {
      es: "Sistema web para la gestión y consulta de recursos digitales.",
      en: "Web system for managing and consulting digital resources.",
    },
    problem: {
      es: "Existía la necesidad de organizar recursos digitales de forma más clara, accesible y centralizada.",
      en: "There was a need to organize digital resources in a clearer, more accessible, and centralized way.",
    },
    solution: {
      es: "Se desarrolló una plataforma web que permite gestionar recursos, usuarios, roles, comentarios y favoritos.",
      en: "A web platform was developed to manage resources, users, roles, comments, and favorites.",
    },
    role: {
      es: "Análisis, diseño, desarrollo frontend, backend y base de datos.",
      en: "Analysis, design, frontend development, backend development, and database design.",
    },
    cover: "/img/bibliosys/1.png",
    detailPath: "/proyectos/bibliosys",
    codeUrl: "https://github.com/denis24-rgb/bibliosys",
    videoUrl: "https://www.youtube.com/embed/uPZOWcAnbgE",
    isDeployed: false,
    isCodePrivate: false,
    stack: ["Spring Boot", "PostgreSQL", "JPA", "Thymeleaf", "Bootstrap"],
    features: {
      es: [
        "Gestión de recursos digitales.",
        "Autenticación y roles de usuario.",
        "Comentarios y favoritos.",
        "Panel administrativo.",
        "Base de datos relacional.",
      ],
      en: [
        "Digital resource management.",
        "Authentication and user roles.",
        "Comments and favorites.",
        "Administrative panel.",
        "Relational database.",
      ],
    },
    images: ["/img/bibliosys/1.png", "/img/bibliosys/2.png", "/img/bibliosys/3.png"],
  },
  {
    slug: "app-reportes",
    title: {
      es: "App de Reportes Ciudadanos",
      en: "Citizen Reports App",
    },
    category: {
      es: "Aplicación móvil",
      en: "Mobile application",
    },
    projectType: {
      es: "Caso de estudio",
      en: "Case study",
    },
    status: {
      es: "Prototipo funcional",
      en: "Functional prototype",
    },
    availability: {
      es: "No desplegado actualmente",
      en: "Not currently deployed",
    },
    reviewMode: {
      es: "Disponible mediante capturas, video demostrativo y código fuente.",
      en: "Available through screenshots, demo video, and source code.",
    },
    description: {
      es: "Aplicación móvil para reportar incidencias ciudadanas con geolocalización, fotografías, seguimiento de estado y comunicación con instituciones.",
      en: "Mobile app for reporting citizen incidents with geolocation, photos, status tracking, and institutional communication.",
    },
    problem: {
      es: "El reporte de incidencias urbanas suele depender de canales poco estructurados, lo que dificulta ubicar, clasificar y dar seguimiento a los casos.",
      en: "Urban incident reporting often depends on poorly structured channels, making it difficult to locate, classify, and track cases.",
    },
    solution: {
      es: "Se planteó una app móvil donde el ciudadano puede registrar reportes con ubicación, fotos y categoría, mientras las instituciones pueden revisar el avance del caso.",
      en: "A mobile app was proposed where citizens can submit reports with location, photos, and category, while institutions can review case progress.",
    },
    role: {
      es: "Diseño del flujo de reportes, desarrollo móvil, integración de mapas, modelo de datos y conexión con servicios backend.",
      en: "Report flow design, mobile development, map integration, data modeling, and backend service connection.",
    },
    cover: "/img/reportes/1.jpg",
    detailPath: "/proyectos/app-reportes",
    codeUrl: "https://github.com/denis24-rgb/seguridad_ciudadana/tree/main/report_app",
    videoUrl: "https://www.youtube.com/embed/EhKWGAWGqAY",
    isDeployed: false,
    isCodePrivate: false,
    stack: ["Flutter", "PostgreSQL", "Google Maps API", "Firebase"],
    features: {
      es: [
        "Reportes con geolocalización y fotos.",
        "Seguimiento de estado en tiempo real.",
        "Mapa interactivo con filtrado por tipo de reporte.",
        "Notificaciones push para cambios de estado.",
        "Integración con panel institucional.",
      ],
      en: [
        "Reports with geolocation and photos.",
        "Real-time status tracking.",
        "Interactive map filtered by report type.",
        "Push notifications for status changes.",
        "Integration with an institutional dashboard.",
      ],
    },
    images: ["/img/reportes/1.jpg", "/img/reportes/2.jpg", "/img/reportes/3.jpg"],
  },
  {
    slug: "plataforma-institucional",
    title: {
      es: "Plataforma Web Institucional",
      en: "Institutional Web Platform",
    },
    category: {
      es: "Sistema web",
      en: "Web system",
    },
    projectType: {
      es: "Caso de estudio",
      en: "Case study",
    },
    status: {
      es: "Sistema web funcional",
      en: "Functional web system",
    },
    availability: {
      es: "No desplegado actualmente",
      en: "Not currently deployed",
    },
    reviewMode: {
      es: "Disponible mediante capturas, explicación técnica y revisión de código fuente.",
      en: "Available through screenshots, technical explanation, and source code review.",
    },
    description: {
      es: "Sistema web para que instituciones gestionen reportes ciudadanos con roles, asignación de técnicos, historial y mapa interactivo.",
      en: "Web system for institutions to manage citizen reports with roles, technician assignment, history, and an interactive map.",
    },
    problem: {
      es: "Las instituciones necesitan una herramienta para revisar reportes, asignar responsables y controlar el avance de cada incidencia de forma ordenada.",
      en: "Institutions need a tool to review reports, assign responsible staff, and track the progress of each incident in an organized way.",
    },
    solution: {
      es: "Se construyó una plataforma administrativa con roles diferenciados, mapa de reportes, cambio de estado, asignación de técnicos y registro de evidencias.",
      en: "An administrative platform was built with separated roles, report map, status updates, technician assignment, and evidence tracking.",
    },
    role: {
      es: "Análisis del proceso institucional, diseño de módulos administrativos, backend, vistas responsivas y lógica de seguimiento.",
      en: "Institutional process analysis, administrative module design, backend development, responsive views, and tracking logic.",
    },
    cover: "/img/institucional/1.jpg",
    detailPath: "/proyectos/plataforma-institucional",
    codeUrl: "https://github.com/denis24-rgb/Backend",
    videoUrl: "",
    isDeployed: false,
    isCodePrivate: false,
    stack: ["Spring Boot", "Thymeleaf", "Bootstrap 5", "PostgreSQL", "JPA"],
    features: {
      es: [
        "Mapa interactivo con reportes geolocalizados filtrados por zona.",
        "Gestión de usuarios institucionales con roles diferenciados.",
        "Cambio de estado y asignación de técnicos a reportes.",
        "Historial de acciones y subida de evidencias.",
        "Panel de control responsive con acceso seguro.",
      ],
      en: [
        "Interactive map with geolocated reports filtered by zone.",
        "Institutional user management with role separation.",
        "Status updates and technician assignment.",
        "Action history and evidence uploads.",
        "Responsive dashboard with secure access.",
      ],
    },
    images: ["/img/institucional/1.jpg", "/img/institucional/2.jpg", "/img/institucional/3.jpg"],
  },
];

const localize = (value, language) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }

  return value[language] || value.es;
};

export const getLocalizedProject = (project, language = "es") => ({
  ...project,
  title: localize(project.title, language),
  category: localize(project.category, language),
  projectType: localize(project.projectType, language),
  status: localize(project.status, language),
  availability: localize(project.availability, language),
  reviewMode: localize(project.reviewMode, language),
  description: localize(project.description, language),
  problem: localize(project.problem, language),
  solution: localize(project.solution, language),
  role: localize(project.role, language),
  features: localize(project.features, language),
});

export const proyectos = projects;
