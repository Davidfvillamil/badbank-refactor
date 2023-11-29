# Bad Bank App

Bad Bank App es una aplicación bancaria simple construida con React, Express, MongoDB y Docker.

## Características

- Crear cuenta (Create Account): Los usuarios pueden crear nuevas cuentas proporcionando su nombre, correo electrónico y contraseña.
  
- Iniciar sesión (Login): Los usuarios registrados pueden iniciar sesión con su correo electrónico y contraseña.

- Depósito (Deposit): Los usuarios pueden realizar depósitos en sus cuentas.

- Retiro (Withdraw): Los usuarios pueden realizar retiros de sus cuentas.

- Todos los datos (All Data): Visualizar información de todos los usuarios registrados.

## Tecnologías Utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario interactivas.

- Express: Marco web para Node.js que facilita la creación de aplicaciones web y API.

- MongoDB: Base de datos NoSQL utilizada para almacenar los datos de los usuarios.

- Docker: Plataforma de contenedorización que permite empaquetar la aplicación y sus dependencias en contenedores.

## Configuración del Proyecto

### Requisitos Previos

- Node.js y npm
- Docker

### Configuración del Servidor (Express)

1. Navega al directorio del servidor (`server/`).
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar el servidor.

### Configuración del Cliente (React)

1. Navega al directorio del cliente (`client/`).
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar la aplicación cliente.

### Configuración de la Base de Datos (MongoDB con Docker)

1. Ejecuta el comando Docker para iniciar el contenedor MongoDB:

    ```bash
    docker run -p 27017:27017 --name badbank-db -d mongo
    ```

## Contribución

Este proyecto está en desarrollo activo y las contribuciones son bienvenidas. Siéntete libre de abrir problemas (issues) y enviar pull requests.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
