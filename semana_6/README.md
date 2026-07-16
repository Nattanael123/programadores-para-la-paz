# Servidor de Incidencias - Semana 6

## Descripción
Servidor Express que gestiona registros de usuarios e incidencias comunitarias. Permite enviar reportes sobre problemas en la comunidad con detalles de tipo e descripción.

## Instalación y Ejecución

### Instalar dependencias
```bash
npm install
```

### Iniciar el servidor
```bash
node server.js
```

El servidor se ejecutará en `http://localhost:3000`

## Rutas Disponibles

### POST /registro
Recibe datos de registro de un usuario.

**Parámetros:**
- `nombre` (string): Nombre del usuario
- `mensaje` (string): Mensaje del usuario

**Ejemplo:**
```bash
curl -X POST http://localhost:3000/registro \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Angel","mensaje":"hola mundo"}'
```

**Respuesta:**
```json
{
  "estado": "Datos recibidos",
  "nombre": "Angel",
  "mensaje": "hola mundo"
}
```

---

### POST /incidencia
Recibe un reporte de incidencia comunitaria.

**Parámetros:**
- `tipo` (string): Tipo de incidencia
- `descripcion` (string): Descripción detallada

**Ejemplo:**
```bash
curl -X POST http://localhost:3000/incidencia \
  -H "Content-Type: application/json" \
  -d '{"tipo":"Iluminación pública","descripcion":"La comunidad reporta que una lámpara del parque no funciona desde hace varios días."}'
```

**Respuesta:**
```json
{
  "mensaje": "Incidencia registrada",
  "tipo": "Iluminación pública",
  "descripcion": "La comunidad reporta que una lámpara del parque no funciona desde hace varios días."
}
```

---

## Archivos Importantes

- `server.js` - Código principal del servidor
- `peticiones.http` - Peticiones HTTP de ejemplo para probar
- `prueba-api.txt` - Explicación de la respuesta del servidor
- `ejemplo-incidencia.txt` - Ejemplo de JSON de incidencia
- `reflexion-semana6.txt` - Reflexión sobre el aprendizaje

## Notas
- El servidor valida que los datos de entrada contengan los campos requeridos
- Las respuestas siempre están en formato JSON
- El servidor está configurado para aceptar JSON en el cuerpo de las peticiones
