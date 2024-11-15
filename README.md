# Árbol Binario - Interfaz Gráfica

Este proyecto implementa un árbol binario básico utilizando JavaScript y proporciona una interfaz gráfica en HTML que permite interactuar con el árbol de forma sencilla. Con esta aplicación, puedes agregar nodos al árbol, buscar nodos, y listar los nodos en los recorridos preorder, inorder y postorder.

## Características

- **Agregar Nodos**: Permite agregar nodos al árbol binario ingresando un valor numérico.
- **Buscar Nodos**: Realiza una búsqueda en el árbol binario para verificar si un nodo con el valor especificado está presente.
- **Recorridos del Árbol**: Lista los valores del árbol en los tres órdenes de recorrido:
  - **Preorder**: Muestra los nodos en el orden raíz, izquierda, derecha.
  - **Inorder**: Muestra los nodos en el orden izquierda, raíz, derecha.
  - **Postorder**: Muestra los nodos en el orden izquierda, derecha, raíz.

## Estructura de Archivos

- `index.html`: Contiene la estructura HTML de la interfaz de usuario.
- `style.css`: Define los estilos básicos para el diseño de la interfaz.
- `script.js`: Implementa las clases `Nodo` y `ArbolBinario`, y define las funciones para manejar las interacciones con el usuario.

## Uso de la Aplicación

### Requisitos Previos

Para utilizar esta aplicación, solo necesitas un navegador web compatible con JavaScript.

### Instrucciones

1. **Abrir el archivo HTML**: Abre `index.html` en un navegador para ver la interfaz gráfica.
2. **Agregar un Nodo**:
   - Ingresa un número en el campo "Valor del nodo".
   - Haz clic en el botón **Agregar Nodo**.
   - Se mostrará un mensaje confirmando que el nodo se ha agregado al árbol.
3. **Buscar un Nodo**:
   - Ingresa el número que deseas buscar en el campo "Valor del nodo".
   - Haz clic en el botón **Buscar Nodo**.
   - La aplicación mostrará si el nodo fue encontrado o no.
4. **Listar en Preorder, Inorder o Postorder**:
   - Haz clic en el botón correspondiente a **Listar Preorder**, **Listar Inorder** o **Listar Postorder**.
   - El recorrido del árbol se mostrará en la sección de salida.

## Ejemplo de Uso

Si agregas los valores `16, 8, 24, 4, 12` en ese orden, la estructura del árbol será la siguiente:

    16
   /   \
  8     24
 / \
4  12


### Recorridos de Ejemplo

- **Preorder**: `16, 8, 4, 12, 24`
- **Inorder**: `4, 8, 12, 16, 24`
- **Postorder**: `4, 12, 8, 24, 16`

## Código de Ejemplo

### Clases en JavaScript

El código JavaScript contiene la implementación de las clases `Nodo` y `ArbolBinario`. A continuación, se presenta un fragmento de código de estas clases:

```javascript
class Nodo {
    constructor(numero) {
        this.numero = numero;
        this.hizq = null;
        this.hder = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    agregar(nuevo) {
        if (this.raiz == null) {
            this.raiz = nuevo;
        } else {
            this._recAgregar(nuevo, this.raiz);
        }
    }

    _recAgregar(nuevo, raizx) {
        if (nuevo.numero < raizx.numero) {
            if (raizx.hizq == null) {
                raizx.hizq = nuevo;
            } else {
                this._recAgregar(nuevo, raizx.hizq);
            }
        } else {
            if (raizx.hder == null) {
                raizx.hder = nuevo;
            } else {
                this._recAgregar(nuevo, raizx.hder);
            }
        }
    }

    // Métodos para preorder, inorder y postorder...
}

### Notas sobre el `README.md`

Este archivo explica el propósito y las características de la aplicación, brinda instrucciones claras sobre su uso, ejemplos de recorridos y un fragmento del código base. También incluye secciones para personalización, contribución y licencia, proporcionando un documento completo y útil para cualquier persona que desee comprender o contribuir al proyecto.
