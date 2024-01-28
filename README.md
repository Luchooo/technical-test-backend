# technical-test-backend

## Índice

- [Objetivo](#objetivo)
  - [Ejercicio 1: Consumo de APIs](#ejercicio-1)
  - [Ejercicio 2: Nomenclatura](#ejercicio-2)
  - [Ejercicio 3: Pensamiento lógico](#ejercicio-3)
  - [Ejercicio 4: Modelado de bases de datos](#ejercicio-4)
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
 <br>  

 
  #### Ejercicio 3: Pensamiento lógico
- Escribe una función que tome un número entero como entrada y devuelva un array con todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9]. ✅
  
- 👉 **Code**:

  ```ts
  // oddNumbers.ts
  
   const oddNumbersByNum = (num: number): number[] => {
      if (typeof num !== 'number' || !Number.isInteger(num) || num < 1) {
          throw new Error('Please provide a positive integer');
      }
  
      const odds: number[] = [];
  
      for (let i = 1; i <= num; i+=2) {
          odds.push(i)
      }
      return odds;
  }

  console.log(oddNumbersByNum(9)) // Output [1, 3, 5, 7, 9]
    ```

  - 👉 **Code test**:

  ```ts
    import { expect, test } from "vitest";
    import { oddNumbersByNum } from './oddNumbers';
    
    test("Returns odd numbers up to 9", () => {
        const res = [1, 3, 5, 7, 9];
        expect(oddNumbersByNum(9)).toMatchObject(res);
    });
    
    test('Returns an error msg when the number 0', () => {
        expect(() => oddNumbersByNum(0)).toThrowError(/positive integer/i)
    });
    
    test('Returns an error message for a non-positive integer', () => {
        expect(() => oddNumbersByNum('lola')).toThrowError(/positive integer/i)
    });

    test('Returns an error message for a decimal number', () => {
        expect(() => oddNumbersByNum(2.6)).toThrowError(/positive integer/i)
    });
    ```
 <br>  
 
   #### Ejercicio 4: Modelado de bases de datos
  - Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones de integridad necesarias para que el sistema funcione correctamente. ✅
























  
