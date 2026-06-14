# Semana 9 - Servidor Node.js

Este proyecto contiene un servidor básico construído con Node.js y Express. Sirve como ejemplo de cómo iniciar una API simple que responde en rutas HTTP.

## Archivos principales

- `server.js`: define las rutas del servidor y el puerto donde escucha.
- `preguntas-semana_9.txt`: respuestas a las preguntas de la semana.
- `ejecucion-servidor.txt`: describe qué sucede al ejecutar el servidor.
- `componentes-servidor.txt`: explica los componentes del servidor.
- `reflexion-semana_9.txt`: reflexión sobre la importancia de la estabilidad y seguridad.

## Cómo ejecutar

1. Instalar dependencias (si es necesario):
   ```bash
   npm install
   ```
2. Iniciar el servidor:
   ```bash
   node server.js
   ```
3. Abrir en el navegador o usar una herramienta HTTP:
   - `http://localhost:3000/`
   - `http://localhost:3000/estado`

## Rutas

- `/`: devuelve un mensaje indicando que el servidor está activo.
- `/estado`: devuelve un JSON con el estado del servidor.

## Puerto

El servidor escucha en el puerto `3000`.
