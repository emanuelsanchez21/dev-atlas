"use client";

import React from "react";

interface Categoria {
  id: string;
  titulo: string;
  descripcion: string;
  lenguajesCount: number;
  badgeColor: string;
  icon: string;
}

const categorias: Categoria[] = [
  {
    id: "web",
    titulo: "Desarrollo Web",
    descripcion: "Frameworks SPA, SSR, APIs y motores de renderizado de browsers.",
    lenguajesCount: 14,
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    icon: "language",
  },
  {
    id: "moviles",
    titulo: "Aplicaciones Móviles",
    descripcion: "Ecosistemas iOS y Android, multiplataforma y desarrollo nativo.",
    lenguajesCount: 8,
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    icon: "smartphone",
  },
  {
    id: "backend",
    titulo: "Backend",
    descripcion: "Sistemas distribuidos, servidores de alto rendimiento y capas de persistencia.",
    lenguajesCount: 19,
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    icon: "dns",
  },
  {
    id: "datos",
    titulo: "Ciencia de Datos",
    descripcion: "Modelado numérico, estadística, ETL masivo y pipelines de visualización.",
    lenguajesCount: 6,
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    icon: "analytics",
  },
  {
    id: "ia",
    titulo: "Inteligencia Artificial",
    descripcion: "Entrenamiento de LLMs, inferencia tensorial y agentes autónomos.",
    lenguajesCount: 7,
    badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    icon: "psychology",
  },
  {
    id: "bajo-nivel",
    titulo: "Sistemas de Bajo Nivel",
    descripcion: "Kernels, drivers, hardware embebido y seguridad sin garbage collector.",
    lenguajesCount: 5,
    badgeColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    icon: "memory",
  },
  {
    id: "videojuegos",
    titulo: "Videojuegos",
    descripcion: "Motores Unreal, Unity, Godot y pipelines de shaders 3D de baja latencia gráfica.",
    lenguajesCount: 9,
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    icon: "sports_esports",
  },
];

export default function CategoriasSection() {
  return (
    <section id="categorias" className="py-16 md:py-24 relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-margin">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[16px] text-primary">
              account_tree
            </span>
            <span className="text-label-code font-label-code uppercase tracking-wider text-primary text-xs font-semibold">
              Taxonomía Técnica
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Explorar por Categoría
          </h2>
          <p className="text-on-surface-variant max-w-2xl text-body-md font-body-md">
            Navega por especialidad ingenieril y localiza las opciones tecnológicas líderes en cada dominio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categorias.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-surface-container/60 hover:bg-surface-container border border-outline-variant/30 hover:border-outline-variant/80 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-lg bg-surface-container-high border border-outline-variant/20 text-on-surface group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px]">
                      {cat.icon}
                    </span>
                  </div>
                  <span
                    className={`text-[12px] font-label-code px-2.5 py-1 rounded-full border ${cat.badgeColor}`}
                  >
                    {cat.lenguajesCount} lenguajes
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {cat.titulo}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {cat.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}