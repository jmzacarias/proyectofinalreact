# Te tiro fruta
El proyecto se basa en una tienda e-commerce de productos de verdulería

## Tecnología principal

ReactJS [Create React App](https://github.com/facebook/create-react-app)

### Librería utilizada

Mui Materials (https://mui.com/components/material-icons/)

### Base de datos

Firebase (https://firebase.google.com/)

## Inicializar
Descargar el código y en la terminal inciarlo con 'npm start'

## Variables de entorno

REACT_APP_apiKey=AIzaSyAFN9BzaNNM9QTyNNcYhgs3lF3Ir7GGqFQ
REACT_APP_authDomain=proyecto1-b0c35.firebaseapp.com
REACT_APP_projectId=proyecto1-b0c35
REACT_APP_storageBucket=proyecto1-b0c35.appspot.com
REACT_APP_messagingSenderId=188541215325
REACT_APP_appId=1:188541215325:web:2cdf1d6bf74a3923a523b4

### Categorías

Existen 3 categorías por las cuaes filtrar los productos: furtas, verduras y hortalizas

### Datos de productos

Los productos muestran su imagen, nombre, precio y detalle. A su vez cuentan con el stock, el cual no se muestra al usuario pero, en caso de solicitar una cantidad mayor se le notifica que la cantidad no esta disponible. Asimismo tienen el dato de la categoría a la que pertenecen, el cual sirve para filtrar los productos por este atributo. 


## Componentes
### NavBar 
Renderiza el header. Consume de la base de datos las categorias y del componente CartWidget el logo del carrito cuando hay elementos agregados, así como la cantidad total de productos que existen en él.

### ItemListContainer
Renderiza los productos disponibles o filtrados. Establece el estado products que acumula cada uno de los productos disponibles así como también el estado loading que se setea 'true' cuando espera la respuesta de la base de datos y 'false' cuando ya la resolvió.
A su vez recibe por parámetros categoryId para filtrar por categorías los productos.

### ItemList
Recibe por props el estado products de ItemListContainer, lo recorre con el método "map" envía por prop cada uno de los elementos que se encuentran en el estado

### Item
Recibe por prop cada producto y dibuja una tarjeta por cada uno. 

### ItemDetailContainer
Setea el estado Item el cual recibe 1 solo producto del cual el usuario desea ver en detalle, recibiendo por parametros el ID del mismo.4Envia por Prop el Item a ItemDetail

### ItemDetail
REcibe el estado Item por prop y recibe el componente ItemCount. Setea el estado quantity, que envía por prop el stock del Item y el valor inicial del estado quantity, que inicia en 0.

### ItemCount
Setea un estado counter que inicia en el estado quantity que se recibe por prop como initial y que tiene como tope el stock del item que se recibe por pro como stock. Tiene 2 botones con los signos menos y mas para incrementar o decrementar el número del estado counter. Si el counter esta en un número mayor a 0 se habilita un boton que permite agregar la cantidad del counter del producto en cuestion al carrito.

### Cart
Mapea el estado CART y muestra el listado de productos agregados a este. Da la posibilidad de eliminar uno a uno o vaciar el carrito.
Muestra el componente CustomerForm

### CustomerForm
Muestra un formulario de contacto para que el usuraio agregue sus datos.


## Rutas

La ruta home renderiza el componente ItemListContainer y renderiza la totalidad de los productos. 
La ruta categoyId renderiza el componente ItemListContainer filtrado por las categorías antes mencionadas.
La ruta productId renderiza el componente ItemDetailContainer para mostrar el detalle del producto y da la posibilidad de agregarlo, en las cantidades deseadas, al carrito de compras.
La ruta Cart renderiza el componente Cart, donde se muestra el listado de los productos elegidos con sus cantidades y precio por producto y total. De no haberse agregado productos informa que el carrito está vacío. Asimismo muestra el formulario para los datos del cliente y, una vez agregados estos por el usuario muenstra un mensaje con éstos.

# Video demostrativo


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
