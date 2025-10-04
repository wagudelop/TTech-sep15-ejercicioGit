// =====================
// Datos iniciales
// =====================

// Lista que contiene la información de los elementos que se mostrarán
const elementos_carrusel = [
    {
        codigo: "e001",
        nombre: "Desarrollo Web",
        descripcion: "Cursos sobre TI",
        imagen: "images/catalogacion01.jpeg"
    }
];

// Lista de categorías
const lista_categorias = [
    { codigo: "c001", nombre: "Citación bibliográfica", imagen: "images/cite01.jpg" },
    { codigo: "c002", nombre: "Catalogación bibliográfica", imagen: "images/catalogacion01.jpg" },
    { codigo: "c003", nombre: "Corrección de estilo", imagen: "images/plantilla01.jpg" },
    { codigo: "c004", nombre: "Gestores bibliográficos", imagen: "images/gestores.jpg" },
    { codigo: "c005", nombre: "Bibliotecas digitales", imagen: "images/bdigital.jpg" },
    { codigo: "c006", nombre: "MARC21", imagen: "images/marc21.jpg" },
    { codigo: "c007", nombre: "Alfabetización informacional", imagen: "images/alfabetizacion.jpg" }
];

// Lista de cursos/servicios
const lista_cursos = [
    {
        codigo: "001",
        nombre: "Normas APA",
        descripcion: "Curso práctico de citación y referencias en formato APA.",
        categoria: "c001",   // ✅ corregido
        imagen: "images/cite01.jpg",
        precio: 15000,
        duracion: "2 horas",
        clasificacion: 5
    },
    {
        codigo: "002",
        nombre: "Normas MLA y Chicago",
        descripcion: "Introducción a estilos alternativos de citación.",
        categoria: "c001",
        imagen: "images/MLA.jpg",
        precio: 12000,
        duracion: "1.5 horas",
        clasificacion: 3
    },
    {
        codigo: "003",
        nombre: "Introducción a RDA",
        descripcion: "Principios básicos de catalogación con RDA.",
        categoria: "c002",
        imagen: "images/catalogacion01.jpg",
        precio: 20000,
        duracion: "3 horas",
        clasificacion: 5
    },
    {
        codigo: "005",
        nombre: "Corrección ortotipográfica",
        descripcion: "Revisión de textos académicos y formales.",
        categoria: "c003",
        imagen: "images/plantilla01.jpg",
        precio: 10000,
        duracion: "1 hora",
        clasificacion: 4
    },
    {
        codigo: "006",
        nombre: "Redacción académica",
        descripcion: "Cómo estructurar y mejorar textos académicos.",
        categoria: "c003",
        imagen: "images/redacAcademica.jpg",
        precio: 12000,
        duracion: "2 horas",
        clasificacion: 5
    },
    {
        codigo: "007",
        nombre: "Mendeley básico",
        descripcion: "Gestión de referencias con Mendeley.",
        categoria: "c004",
        imagen: "images/mendeley.jpg",
        precio: 15000,
        duracion: "2 horas",
        clasificacion: 4
    },
    {
        codigo: "008",
        nombre: "Zotero avanzado",
        descripcion: "Creación de bibliografías automáticas con Zotero.",
        categoria: "c004",
        imagen: "images/zotero.jpeg",
        precio: 18000,
        duracion: "3 horas",
        clasificacion: 5
    },
    {
        codigo: "009",
        nombre: "Recursos electrónicos académicos",
        descripcion: "Acceso y uso de bases de datos científicas.",
        categoria: "c005",
        imagen: "images/e-recursos.jpg",
        precio: 20000,
        duracion: "3 horas",
        clasificacion: 5
    },
    {
        codigo: "011",
        nombre: "MARC21 básico",
        descripcion: "Introducción al formato MARC21.",
        categoria: "c006",
        imagen: "images/marc21.jpeg",
        precio: 25000,
        duracion: "4 horas",
        clasificacion: 5
    },
    {
        codigo: "013",
        nombre: "Búsqueda avanzada en internet",
        descripcion: "Cómo optimizar la búsqueda de información académica.",
        categoria: "c007",
        imagen: "images/busquedainformacion.jpg",
        precio: 12000,
        duracion: "1.5 horas",
        clasificacion: 4
    },
    {
        codigo: "014",
        nombre: "Evaluación de fuentes de información",
        descripcion: "Criterios para valorar la calidad y confiabilidad de fuentes.",
        categoria: "c007",
        imagen: "images/evaluacioninformac.jpg",
        precio: 15000,
        duracion: "2 horas",
        clasificacion: 5
    }
];

// =====================
// Funciones de acceso
// =====================
function obtenerProductoServicio(codigo) {
    return lista_cursos.find(curso => curso.codigo === codigo) || null;
}
