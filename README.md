# 🚀 DevAtlas

**Explora el mundo de la programación.**

DevAtlas es una plataforma web educativa diseñada para explorar, conocer y comparar lenguajes de programación, sus características, ventajas, desventajas y aplicaciones en el desarrollo de software.

Este proyecto se desarrolla de manera colaborativa como parte de la asignatura de **Programación Web**, utilizando herramientas y prácticas empleadas en proyectos reales de desarrollo de software.

---

## ✨ ¿Qué estamos construyendo?

Una plataforma que permitirá a los usuarios:

- 🔎 Explorar diferentes lenguajes de programación.
- 💻 Conocer sus características y principales aplicaciones.
- 📊 Comparar tecnologías y sus ventajas y desventajas.
- 🗂️ Navegar por categorías de desarrollo de software.
- 🔐 Acceder mediante autenticación de usuarios _(funcionalidad planificada)_.
- 🌐 Consultar información mediante APIs REST _(funcionalidad planificada)_.

El proyecto evolucionará durante el curso, incorporando nuevas funcionalidades conforme avancemos en los temas.

## 🛠️ Tecnologías

| Tecnología       | Propósito                      |
| ---------------- | ------------------------------ |
| Next.js          | Framework de React             |
| React            | Construcción de interfaces     |
| TypeScript       | Desarrollo con tipado estático |
| Tailwind CSS     | Estilos y diseño responsive    |
| Material Symbols | Iconografía                    |
| Git              | Control de versiones           |
| GitHub           | Repositorio y colaboración     |

El diseño visual inicial se realizó con **Stitch** y se está adaptando a componentes React y a la arquitectura de Next.js.

## 🚀 Comenzar

### 1. Requisitos

Antes de comenzar, instala:

- Node.js (versión LTS compatible con el proyecto).
- Git.
- Visual Studio Code.

### 2. Clonar el repositorio

```bash
git clone https://github.com/juliocsanb/web-218500.git
```

Accede al directorio:

```bash
cd web-218500
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre en el navegador:

**http://localhost:3000**

Los cambios realizados en el código se reflejarán automáticamente durante el desarrollo.

## 📁 Estructura del proyecto

La estructura principal de Next.js con App Router es:

```text
src/
└── app/
    ├── globals.css
    ├── layout.tsx
    └── page.tsx

public/
package.json
README.md
```

A medida que avancemos, organizaremos el código en componentes reutilizables y nuevas rutas.

### Archivos importantes

| Archivo        | Responsabilidad                        |
| -------------- | -------------------------------------- |
| `page.tsx`     | Página principal de DevAtlas           |
| `layout.tsx`   | Estructura global, fuentes y metadatos |
| `globals.css`  | Estilos globales y sistema de diseño   |
| `package.json` | Dependencias y scripts del proyecto    |

## 🎨 Sistema de diseño

DevAtlas utiliza un sistema de diseño compartido que incluye:

- Paleta de colores semánticos.
- Tipografía **Inter** para la interfaz.
- Tipografía **JetBrains Mono** para contenido técnico.
- Iconografía de Material Symbols.
- Espaciados y tamaños de texto personalizados.
- Diseño adaptable a dispositivos móviles y computadoras.

La configuración global se encuentra en `src/app/globals.css`.

**Importante:** al desarrollar una sección, utiliza las clases y los tokens existentes antes de introducir nuevos estilos.

## 🤝 Trabajo colaborativo con Git y GitHub

Cada equipo será responsable de desarrollar una sección de la página principal.

Para evitar conflictos, **no trabajaremos directamente sobre la rama `main`**.

### 1. Actualizar el proyecto

```bash
git switch main
git pull origin main
```

### 2. Crear una rama

Utiliza un nombre descriptivo:

```bash
git switch -c feature/seccion-lenguajes
```

Otros ejemplos:

```text
feature/hero
feature/categorias
feature/comparador
feature/filosofia
```

### 3. Realizar cambios

Desarrolla la sección asignada respetando el diseño y la estructura del proyecto.

### 4. Guardar los cambios

```bash
git add .
git commit -m "feat: implementa sección de lenguajes"
```

### 5. Publicar la rama

```bash
git push -u origin feature/seccion-lenguajes
```

### 6. Crear un Pull Request

Desde GitHub:

1. Abre el repositorio.
2. Selecciona tu rama.
3. Haz clic en **Compare & pull request**.
4. Explica qué implementaste.
5. Solicita una revisión.
6. Espera la aprobación antes de integrar los cambios.

**No se debe hacer merge de un Pull Request sin revisión.**

## 📋 Reglas de colaboración

- No modificar directamente la rama `main`.
- Utilizar nombres descriptivos para ramas y commits.
- Mantener el código formateado y organizado.
- Respetar el sistema de diseño compartido.
- Evitar modificar archivos que pertenecen a otros equipos sin coordinación.
- Verificar que la aplicación funcione antes de enviar un Pull Request.
- Resolver errores de compilación y revisar los cambios realizados.
- Participar en la revisión del código de los compañeros.

## 🧪 Validaciones

Antes de publicar cambios, ejecuta:

```bash
npm run lint
```

Si el proyecto tiene configurado el script de compilación:

```bash
npm run build
```

El código debe pasar las validaciones antes de integrarse.

## 🤖 Uso de inteligencia artificial

Se permite utilizar herramientas de inteligencia artificial como apoyo durante el desarrollo.

Algunos usos recomendados son:

- Convertir HTML a JSX/TSX.
- Adaptar configuraciones de Tailwind CSS.
- Comprender errores de compilación.
- Investigar conceptos de React y Next.js.
- Mejorar la organización del código.
- Revisar posibles errores y proponer soluciones.

**Sin embargo, utilizar IA no sustituye la responsabilidad de comprender y validar el código generado.**

Nuestro flujo de trabajo será:

**Entender → Solicitar → Revisar → Integrar → Probar**

> No se trata de escribir cada línea manualmente, sino de comprender qué estamos construyendo, tomar decisiones técnicas y verificar que la solución funciona.

## 🗺️ Evolución del proyecto

- [x] Crear el proyecto con Next.js y TypeScript.
- [x] Definir el diseño inicial con Stitch.
- [x] Configurar el sistema visual base.
- [ ] Integrar las secciones del Home.
- [ ] Organizar la interfaz en componentes reutilizables.
- [ ] Incorporar autenticación de usuarios.
- [ ] Implementar consumo de APIs REST.
- [ ] Incorporar nuevas funcionalidades y almacenamiento de datos.
- [ ] Preparar el despliegue de la aplicación.

## 📚 Recursos

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)

---

## 🎓 Proyecto académico

Desarrollado como parte de la asignatura de **Programación Web**.

El objetivo no es únicamente construir una página funcional, sino aprender a trabajar colaborativamente, comprender código existente, integrar herramientas modernas y aplicar buenas prácticas de ingeniería de software.

**DevAtlas — Aprende, explora y construye.** 🚀
