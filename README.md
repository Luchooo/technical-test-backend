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


![image](https://github.com/Luchooo/technical-test-backend/assets/6707442/137d1f63-6a09-4039-87a4-925fe9838861)


```sql
--DROP DATABASE youtubedb;
-- CREATE DATABASE youtubedb;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS videos;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id uuid DEFAULT uuid_generate_v4 (),
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (user_id),
    CONSTRAINT valid_username CHECK (username ~ '^[^0-9]+$')
);

INSERT INTO users (username, email)
VALUES
('luis', 'luis@mail.com'),
('maria', 'maria@mail.com');

CREATE TABLE videos (
	video_id uuid DEFAULT uuid_generate_v4 (),
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) UNIQUE NOT NULL,
    user_id uuid NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (video_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE RESTRICT
);

INSERT INTO videos (title, url, user_id) VALUES
('Video1', 'https://www.youtube.com/watch?v=video1', (select user_id from users where email='luis@mail.com')),
('Video2', 'https://www.youtube.com/watch?v=video2', (select user_id from users where email='maria@mail.com'));


CREATE TABLE comments (
	comment_id uuid DEFAULT uuid_generate_v4 (),
    content TEXT NOT NULL,
    user_id uuid NOT NULL,
    video_id uuid NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (comment_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE RESTRICT,
    FOREIGN KEY (video_id) REFERENCES videos(video_id) ON DELETE RESTRICT
);

INSERT INTO comments (content, user_id, video_id) VALUES
('Awesome video', (select user_id from users where email='luis@mail.com'), (select video_id from videos where url='https://www.youtube.com/watch?v=video1')),
('Bad video', (select user_id from users where email='luis@mail.com'), (select video_id from videos where url='https://www.youtube.com/watch?v=video1'));

select * from comments
```

#### Ejercicio 5: Arquitectura del backend
  - Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de diseño, etc.. ✅
  -  👉 **Respuesta**:

Para una aplicación de comercio electrónico, podríamos optar por desarrollar el backend con TypeScript debido a sus ventajas en cuanto a tipado. En las etapas iniciales del proyecto, no veo inconveniente en utilizar una arquitectura de 3 capas, especialmente con un framework backend como NestJS. Asimismo, una arquitectura de islas, como la que se presenta con Deno y Fresh, es válida. En caso de que el proyecto requiera una escala considerable, una arquitectura de microservicios sería la opción más apropiada aunque nunca he implementado por mi cuentea una arquitectura de microservicios el pensar que hay un solo middleware que controla que se necesita y cada servicio tiene su propia función lo veo correcto.

En cuanto a las tecnologías asociadas al backend utilizando Node.js, se emplearían las conocidas, como Express, MySQL con un ORM como Prisma o Sequelize, o bien MongoDB con Mongoose. Para la autenticación, se utilizaría JWT. Los patrones que he aplicado al crear este tipo de aplicaciones son los convencionales, como SOLID, MVC y DI.

Una estructura de carpetas conveniente podría ser la siguiente:
```txt
- /src
  - /controllers          // Controladores
  - /models               // Modelos
  - /services             // Servicios de negocio
  - /middlewares          // Middlewares
  - /routes               // Rutas de la aplicación
  - /config               // Configuración de la aplicación
  - /utils                // Utilidades
  - /db                   // Acceso a la base de datos
  - app.js                // Punto de entrada de la aplicación

```

#### Ejercicio 6: Nomenclatura
  - Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una compañía, la política debe incluir nomenclatura de: bases de datos, variables, funciones,
clases, git, etc. ✅
  -  👉 **Respuesta**:

Lo que haría no es crear un documento de nomenclaturas; en lugar de eso, me apoyaría en herramientas como linter/eslint para que el repositorio siempre mantenga el mismo código, para manjear la nomenclatura del código. También, usaría commits convencionales configurados en el repositorio para el manejo de Git. Tanto el repositorio local como el de producción deben estar configurados; en producción, con la ayuda de herramientas como GitHub Actions para validar, por ejemplo, el formateo o el linter de código. Además, agregaría tests de tipo unit_test, end-to-end y de integración con herramientas como Jest con vitest y Cypress.

La documentación del código no debería quedar atrás; con herramientas como Swagger, de igual manera, estas automatizaciones que generemos como equipo deben ser monitoreadas periódicamente
























  
