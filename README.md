# Archivos de Prueba Técnica - Desarrollador de Software 2024 [PS2024]

## Contenidos

1. **Carpeta de Backup de PostgreSQL**: Contiene el archivo de respaldo de la base de datos.
2. **Carpeta de Play Framework**: Código fuente del proyecto utilizando Play Framework.
3. **Carpeta de NextJS/React**: Código fuente del proyecto utilizando NextJS y React.

---

## Ejecución

### 1. Backup de PostgreSQL

Ubica el archivo `backup.sql` en la carpeta **PostgreSQL** y copiarlo en el directorio `C:\Program Files\PostgreSQL\XX\bin`.
Crear una base de datos en PostgreSQL llamada `PruebaTecnicaSeptiembre`. 

Nota:Si se decide utilizar un nombre diferente, se debe de asegurar que este coincida dentro del archivo `application.conf` en los archivos de Play Framework.


**Reemplaza `XX` con la versión de PostgreSQL instalada en tu sistema.**
```bash
# Consola (Windows)
cd C:\Program Files\PostgreSQL\XX\bin
psql -h localhost -p 5432 -U postgres -f backup.sql PruebaTecnicaSeptiembre
Contraseña: 123
```

Si el comando psql no se reconoce, asegúrate de tener PostgreSQL instalado y de añadir su ruta al PATH de variables de entorno del sistema.

### 2. Play Framework
Abrir la terminal de comandos y navegar hasta la carpeta PlayFramework.
Ejecuta el siguiente comando:

```bash
# Consola (Windows)
cd ...\PruebaTecnica\PlayFramework
sbt run
```


### 3. NextJS/React
Abrir Visual Studio Code, abrir carpeta y seleccionar "React_Nextjs" -> Ejm: `...\PruebaTecnica\React_Nextjs`

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
```bash
# En la terminal de VSCode
npm run dev
```
Finalmente accede al proyecto en un navegador en http://localhost:3000/

Nota: Si el comando npm run dev no funciona, asegúrate de instalar las dependencias necesarias.

Instalación de dependencias:

Dependencias requeridas:
`"dependencies": {
  "bootstrap": "^5.3.3",
  "next": "14.2.9",
  "react-bootstrap": "^2.10.4",
  "react-tooltip": "^5.28.0"
}`

O ejecutar el comando `npm install` dentro de la ubicación del proyecto.
```bash
npm install
```



