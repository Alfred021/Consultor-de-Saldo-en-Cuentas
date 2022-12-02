# Consultor de Saldo en Cuentas: 

Este proyecto fue creado utilizando create-react-app.

## Empezar el Proyecto

Usar `npm install` para instalar todas las dependencias.
Despues para levantar el proyecto simplemente: 

### `npm run start`

Para correr los tests unitarios: 

### `npm run test`

Para ver code coverage de los tests: 

### `npm run test -- --coverage`

Para configurar husky junto con prettier y eslint para formatear y reforzar estilo en el pre-commit:

### `npm run configure-husky`

Despues de toda la instalación crear un archivo `.env` (el nombre así tal cual esta escrito) en raiz del proyecto, colocarle esta variable: REACT_APP_API_URL = y el valor para la api de prueba que aparece en el documento: 
Challenge Desarrollador NCR - SSFW, de Octubre 2022 el cual es la inspiración para este proyecto.
Luego despues de haber creado el env y añadida la variable, cerrar y volver a abrir el proyecto, esperar a que corran los tests y levantarla con los comandos mencionados anteriormente. Todo esto tomando en cuenta que el archivo .env no se commitea nunca.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
