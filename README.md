<<<<<<< HEAD
<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
=======

>>>>>>> 0817328a2f9780be507e5e8b9ce0c1206519b5e5
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">

</head>
<body>
<<<<<<< HEAD
  <h1>Aplicação nlw2</h1>
  <div class="d-flex justify-content-center">
      
  </div>

</body>
</html>
>>>>>>> 20915ce3dad171c64dc120bf8a2e272b2162ec6d
=======
 
  <div id="teste" class="d-flex justify-content-center">
   
   <center><h1>Proffy</h1></center>
   <center><img  src="src/assets/images/landing.svg"></img></center>
    
  </div>

# Tecnologias

## Banco de dados
    SQLLITE
## Frontend
    ReactJs
## Backend
    NodeJS 
    requisições-insominia 

# Configurações do NodeJS
-criar uma pasta para rodar o servidor
-dentro dessa pasta utiliza o comando pra instalar arquivo de dependência 
=> yarn init
-após cria a pasta src dentro dela cria um arquivo server.ts(configuração de rotas)
-se tiver utilizando typescript instalar ele na 
-aplicação
=> yarn add typescript -D

=> yarn tsc --init ou npx tsc--init
-instalar dependencia do ts-node
=> yarn add ts-node-dev D 
   tipo um devtolls
   
=>yarn add express
  trabalhar com as rotas)

=>yarn add knex sqllite3
  escrever sql com o javascript

# Criação das tabelas
 import Knex from 'knex';

<h5>Tabela de usuários</h5>

import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: Knex){

    return knex.schema.dropTable('users');
}

<h5>Tabela de classes</h5>

import Knex from 'knex';
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        table.integer('user_id').notNullable()
        .references('id').inTable('users')
        .onDelete('cascade').onUpdate('CASCADE');
    })
}

export async function down(knex: Knex){

    return knex.schema.dropTable('classes');
}


# Funcionalidades
## Conexões
    => Rota para listar o total de conexões realizadas;
    => Rota para criar uma nova conexão;


## Aulas
    =>Rota para criar uma aula
    => Rota para listar aulas
        -filtrar por matéria ,dia da semana , horário da semana
</body>
</html>

>>>>>>> 0817328a2f9780be507e5e8b9ce0c1206519b5e5
