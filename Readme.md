# Esse é o meu servidor Backend usando o express

    - Data: 08/05/2020
    - Curso de Backend: Traversy Media

# Instalação das dependências

    Dev:
        - Nodemon
    Production:
        - Express
        - Nodemon
        - Mongoose
        - DotEnv
        - Morgan

# dotenv

    - Responsável por atribuir ao $process.env do NODE, processos
    - Esses processos ou ENUMs, estão contidos na pasta config/config.env

# colors

    - Responsável por colorir os logs no prompt

# Rotas

    - As rotas são usadas como parametro através de um método de chamada
    - Isso permite que através do protocolo HTTP, o express, consiga manipular as rotas, o que vem no corpo da URL e da Requisição
    - As rotas estão em routes/route.js
    - as rotas pegão os middlewares que estão na pasta controller, que são usados como rotas
