
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
 
  <div id="teste" class="d-flex justify-content-center">
   
   <center><h1>Proffy</h1></center>
   <center><img  src="web/src/assets/images/landing.svg"></img></center>
    
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

