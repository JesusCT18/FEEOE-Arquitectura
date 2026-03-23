FEEOE-Arquitectura: Despliegue, CI/CD y Monitorización

Este proyecto consiste en la implementación de una arquitectura de microservicios moderna, utilizando una aplicación Node.js con TypeScript contenizada mediante Docker, desplegada de forma automatizada con GitHub Actions en Render, y supervisada con Prometheus/Grafana.
Tecnologías Utilizadas

    Backend: Node.js, TypeScript, Express.

    Contenerización: Docker (Multi-stage build).

    CI/CD: GitHub Actions.

    Plataforma de Despliegue: Render (PaaS).

    Monitorización: Prometheus (prom-client) y Grafana.

Arquitectura del Sistema

La arquitectura sigue un modelo de integración y entrega continua (CI/CD):

    Código: Repositorio en GitHub.

    Pipeline: GitHub Actions compila, prueba y construye la imagen.

    Runtime: Contenedores Docker ejecutándose en Render.

    Observabilidad: Grafana consume métricas en tiempo real desde el endpoint /metrics.

Ejecución Local

Para ejecutar este proyecto en tu máquina:

    Clonar el repositorio:
    Bash

    git clone https://github.com/JesusCT18/FEEOE-Arquitectura.git
    cd FEEOE-Arquitectura

    Instalar dependencias:
    Bash

    npm install

    Compilar y Ejecutar:
    Bash

    npm run build
    npm start

    Docker (Local):
    Bash

    docker build -t feeoe-app .
    docker run -p 3000:3000 feeoe-app

Configuración de Docker (Optimización)

Se ha utilizado un Dockerfile multi-stage para optimizar el tamaño de la imagen final, separando la etapa de compilación (build) de la de ejecución (runtime).

    Stage 1 (Build): Instalación de dependencias de desarrollo y compilación de TypeScript a JS.

    Stage 2 (Runtime): Imagen ligera de Node.js que solo contiene el código compilado y dependencias de producción.

Pipeline de CI/CD (GitHub Actions)

El flujo automatizado realiza las siguientes tareas en cada push a la rama main:

    Checkout: Descarga del código fuente.

    Setup Node: Configuración del entorno de ejecución.

    Build: Compilación del proyecto (npm run build).

    Deploy: Disparo del webhook de Render para reconstruir el contenedor con la nueva imagen.

Monitorización y Métricas

La aplicación expone telemetría en tiempo real compatible con el estándar de Prometheus.

    Endpoint de métricas: /metrics

    Métricas capturadas:

        Uso de CPU (Usuario y Sistema).

        Consumo de memoria Heap y Resident Set Size.

        Retardo del Event Loop de Node.js.

    Dashboard: Configurado en Grafana mediante un Data Source que apunta a la URL de la aplicación.

Buenas Prácticas y Seguridad

    Imágenes Ligeras: Uso de versiones alpine o slim de Node para reducir la superficie de ataque.

    Variables de Entorno: Gestión de puertos y secretos mediante variables de entorno en Render.

    HTTPS: Comunicación cifrada obligatoria proporcionada por el certificado SSL de Render.

Enlaces del Proyecto

    Repositorio: GitHub - JesusCT18/FEEOE-Arquitectura

    App en Producción: https://feeoe-arquitectura.onrender.com

    Panel de Métricas: https://feeoe-arquitectura.onrender.com/metrics

    Grafana Monitor: https://feeoe-monitor.onrender.com
