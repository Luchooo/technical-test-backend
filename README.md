# technical-test-backend

---

## Índice

- [Objetivo](#objetivo)
  - [Ejercicio 1: Consumo de APIs](#ejercicio-1)
  - [Ejercicio 2: Nomenclatura](#ejercicio-2)
    
---

### Objetivo
- 🔊 Evaluar tus habilidades en Backend

#### Ejercicio 1: Consumo de APIs
- Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios
  más populares del usuario "google". ✅

  👉 [Top repos web pages](https://technical-test-backend-6vi1.onrender.com/repository)  
  <br>  



#### Ejercicio 2: Nomenclatura
- Te presentamos el siguiente fragmento de código. Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
su función. ✅
    ```js
    function f(x, y, z) {
     let a = x + y;
     let b = a * z;
     let c = Math.sin(b);
     return c;
    }
    ```
- 👉 **Mi respuesta**:

  ```typescript
  // index.ts
  
  const getSin = (x: number, y: number, z: number): number => {
      if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
          throw new Error('All params must be numbers');
      }
      const sum = x + y;
      const product = sum * z;
      return Math.sin(product);
  }
  
  const sin = getSin(1, 2, 3)
  ````
  
