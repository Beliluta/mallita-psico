// script.js

const ramos = [
  // Primer Año - I Semestre
  { nombre: "Estrategias para el aprendizaje", id: "estrategias" },
  { nombre: "Antropología", id: "antropologia", abre: ["etica"] },
  { nombre: "Fundamentos biológicos del comportamiento", id: "fund_bio", abre: ["neuropsicologia"] },
  { nombre: "Procesos cognitivos", id: "proc_cognitivos", abre: ["psic_evolutiva1", "psic_personalidad"] },
  { nombre: "Evolución histórica de la psicología", id: "evo_historia", abre: ["teorias1", "teorias2"] },
  { nombre: "Fundamentos filosóficos de la psicología", id: "fund_filo" },
  { nombre: "Taller de comunicación", id: "taller_comunicacion" },

  // Primer Año - II Semestre
  { nombre: "Ética", id: "etica", requisitos: ["antropologia"], abre: ["electivo1"] },
  { nombre: "Neuropsicología", id: "neuropsicologia", requisitos: ["fund_bio"], abre: ["eval_cognitiva"] },
  { nombre: "Procesos afectivos", id: "proc_afectivos", abre: ["psic_evolutiva1", "psic_personalidad"] },
  { nombre: "Fundamentos socioantropológicos del comportamiento", id: "fund_socio" },
  { nombre: "Introducción a la metodología de la investigación", id: "intro_metodologia", abre: ["metodologia_aplicada"] },
  { nombre: "Taller de trabajo grupal", id: "taller_grupal" },

  // Segundo Año - III Semestre
  { nombre: "Electivo de formación integral I", id: "electivo1", requisitos: ["etica"] },
  { nombre: "Psicología evolutiva I", id: "psic_evolutiva1", requisitos: ["proc_cognitivos", "proc_afectivos"], abre: ["psic_evolutiva2"] },
  { nombre: "Psicología de la personalidad", id: "psic_personalidad", requisitos: ["proc_cognitivos", "proc_afectivos"], abre: ["psicopatologia", "eval_cognitiva"] },
  { nombre: "Psicología social I", id: "psic_social1", abre: ["psic_social2"] },
  { nombre: "Metodología aplicada a la psicología", id: "metodologia_aplicada", requisitos: ["intro_metodologia"], abre: ["datos_cuant", "datos_cual", "proyectos"] },
  { nombre: "Taller de entrevista", id: "taller_entrevista" },

  // Segundo Año - IV Semestre
  { nombre: "Electivo de formación integral II", id: "electivo2" },
  { nombre: "Psicopatología general", id: "psicopatologia", requisitos: ["psic_personalidad"], abre: ["psicopat_inf", "psicopat_adulto"] },
  { nombre: "Psicología evolutiva II", id: "psic_evolutiva2", requisitos: ["psic_evolutiva1"], abre: ["factores_educativos"] },
  { nombre: "Psicología social II", id: "psic_social2", requisitos: ["psic_social1"], abre: ["comport_organizacional", "problemas_psicosociales"] },
  { nombre: "Análisis de datos cuantitativos", id: "datos_cuant", requisitos: ["metodologia_aplicada"], abre: ["proyecto_inv"] },
  { nombre: "Evaluación psicológica cognitiva", id: "eval_cognitiva", requisitos: ["neuropsicologia", "psic_personalidad"], abre: ["eval_personalidad"] },

  // Tercer Año - V Semestre
  { nombre: "Electivo de formación integral III", id: "electivo3" },
  { nombre: "Psicopatología y psiquiatría infantil", id: "psicopat_inf", requisitos: ["psicopatologia"] },
  { nombre: "Teorías psicológicas I", id: "teorias1", requisitos: ["evo_historia"], abre: ["psico_sistemica", "psico_psicoanalitica", "comport_organizacional", "factores_educativos", "problemas_psicosociales", "integracion", "gestion_personas", "gestion_escolar", "psicologia_comunitaria"] },
  { nombre: "Análisis de datos cualitativos", id: "datos_cual", requisitos: ["metodologia_aplicada"] },
  { nombre: "Evaluación psicológica de la personalidad", id: "eval_personalidad", requisitos: ["eval_cognitiva"], abre: ["eval_integrada", "taller_persona"] },
  { nombre: "Políticas públicas", id: "politicas" },

  // Tercer Año - VI Semestre
  { nombre: "Electivo de formación integral IV", id: "electivo4" },
  { nombre: "Psicopatología y psiquiatría adulto", id: "psicopat_adulto", requisitos: ["psicopatologia"] },
  { nombre: "Teorías psicológicas II", id: "teorias2", requisitos: ["evo_historia"], abre: ["comport_organizacional", "factores_educativos", "problemas_psicosociales", "integracion", "psico_cognitiva", "psico_humanista", "gestion_personas", "gestion_escolar", "psicologia_comunitaria"] },
  { nombre: "Evaluación psicológica integrada", id: "eval_integrada", requisitos: ["eval_personalidad"] },
  { nombre: "Formulación y evaluación de proyectos sociales", id: "proyectos", requisitos: ["metodologia_aplicada"] },
  { nombre: "Taller persona del psicólogo", id: "taller_persona", requisitos: ["eval_personalidad"] },

  // Cuarto Año - VII Semestre
  { nombre: "Introducción a la psicoterapia sistémica", id: "psico_sistemica", requisitos: ["teorias1"] },
  { nombre: "Introducción a la psicoterapia psicoanalítica", id: "psico_psicoanalitica", requisitos: ["teorias1"] },
  { nombre: "Comportamiento organizacional", id: "comport_organizacional", requisitos: ["psic_social2", "teorias1", "teorias2"], abre: ["gestion_personas"] },
  { nombre: "Factores psicológicos en procesos educativos", id: "factores_educativos", requisitos: ["psic_evolutiva2", "teorias1", "teorias2"], abre: ["gestion_escolar"] },
  { nombre: "Problemas psicosociales actuales", id: "problemas_psicosociales", requisitos: ["psic_social2", "teorias1", "teorias2"], abre: ["psicologia_comunitaria"] },
  { nombre: "Integración en psicología", id: "integracion", requisitos: ["teorias1", "teorias2"] },

  // Cuarto Año - VIII Semestre
  { nombre: "Introducción a la psicoterapia cognitiva", id: "psico_cognitiva", requisitos: ["teorias2"] },
  { nombre: "Introducción a la psicoterapia humanista", id: "psico_humanista", requisitos: ["teorias2"] },
  { nombre: "Gestión de personas y organizaciones", id: "gestion_personas", requisitos: ["comport_organizacional", "teorias1", "teorias2"] },
  { nombre: "Gestión escolar", id: "gestion_escolar", requisitos: ["factores_educativos", "teorias1", "teorias2"] },
  { nombre: "Psicología comunitaria", id: "psicologia_comunitaria", requisitos: ["problemas_psicosociales", "teorias1", "teorias2"] },
  { nombre: "Electivo de especialización I", id: "especializacion1" },

  // Quinto Año - IX Semestre
  { nombre: "Electivo diseño e intervención", id: "intervencion" },
  { nombre: "Electivo diseño en contextos", id: "contextos" },
  { nombre: "Electivo de especialización II", id: "especializacion2" },
  { nombre: "Proyecto de investigación", id: "proyecto_inv", requisitos: ["datos_cuant"] },

  // Quinto Año - X Semestre
  { nombre: "Práctica profesional", id: "practica", requisitos: [
    "estrategias", "antropologia", "fund_bio", "proc_cognitivos", "evo_historia", "fund_filo", "taller_comunicacion",
    "etica", "neuropsicologia", "proc_afectivos", "fund_socio", "intro_metodologia", "taller_grupal",
    "electivo1", "psic_evolutiva1", "psic_personalidad", "psic_social1", "metodologia_aplicada", "taller_entrevista",
    "electivo2", "psicopatologia", "psic_evolutiva2", "psic_social2", "datos_cuant", "eval_cognitiva",
    "electivo3", "psicopat_inf", "teorias1", "datos_cual", "eval_personalidad", "politicas",
    "electivo4", "psicopat_adulto", "teorias2", "eval_integrada", "proyectos", "taller_persona",
    "psico_sistemica", "psico_psicoanalitica", "comport_organizacional", "factores_educativos", "problemas_psicosociales", "integracion",
    "psico_cognitiva", "psico_humanista", "gestion_personas", "gestion_escolar", "psicologia_comunitaria", "especializacion1",
    "intervencion", "contextos", "especializacion2", "proyecto_inv"
  ] },
  { nombre: "Electivo de especialización III", id: "especializacion3" },
  { nombre: "Seminario de investigación", id: "seminario", requisitos: ["proyecto_inv"] }
];

const avance = JSON.parse(localStorage.getItem("avance_curricular")) || [];

function crearMalla() {
  const contenedor = document.getElementById("malla");
  const columnas = {};

  ramos.forEach((ramo, index) => {
    const colIndex = Math.floor(index / 7);
    if (!columnas[colIndex]) {
      const columna = document.createElement("div");
      columna.className = "semestre";
      contenedor.appendChild(columna);
      columnas[colIndex] = columna;
    }

    const divRamo = document.createElement("div");
    divRamo.className = "ramo";
    divRamo.id = ramo.id;
    if (avance.includes(ramo.id)) divRamo.classList.add("aprobado");

    const span = document.createElement("span");
    span.textContent = ramo.nombre;

    const boton = document.createElement("button");
    boton.textContent = "Aprobar";
    boton.onclick = () => aprobarRamo(ramo.id);
    if (!puedeAprobar(ramo)) boton.disabled = true;

    divRamo.appendChild(span);
    divRamo.appendChild(boton);
    columnas[colIndex].appendChild(divRamo);
  });
}

function puedeAprobar(ramo) {
  return (ramo.requisitos || []).every(req => avance.includes(req));
}

function aprobarRamo(id) {
  if (!avance.includes(id)) {
    avance.push(id);
    localStorage.setItem("avance_curricular", JSON.stringify(avance));
    location.reload();
  }
}

window.onload = crearMalla;
