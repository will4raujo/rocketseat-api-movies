Instalar o node: npm init -y ok
Instalar o express: npm install express --save ok

instalar o nodemon: npm install nodemon --save-dev ok
criar o script de dev no package.json:  "dev": "nodemon ./src/server.js" ok

criar o gitignore ok

criar o diretorio de src ok
    criar o arquivo server.js dentro de src ok
        criar a constante express ok
        criar a constant app e executar a express no app ok
        definir a porta em que a aplicação será executada ok
        ouvir a porta ok
    
    criar diretorio de routes
        criar arquivo index.js para direcionar para as rotas solicitadas pelo servidor
        criar os arquivos de acordo com cada rota e configurar o index para encontrar esses arquivos
        configurar o arquivo routes para que direcione para seu respectivo controller
    criar o diretorio de controllers
        criar um arquivo controller para cada rota, toda a regraa deve ficar nele
        configurar o controller para ouvir o arquivo de routes
    criar o diretório de utils
        criar o AppError.js
            criar uma classe construtora com dois elementos message e status code
        Instalar o express async errors: npm install express-async-errors --save
        no começo de tudo fazer a importação do express async errors (server.js 1ª linha)
        usar o error, a requisição, a resposta e o next como parametros e se o error for instanceof AppError
        retornar uma resposta com o satus error.status code como json passando o status e a mensagem
        importar o AppError.js no server.js

Preparar as rotas no programa insomnia configurar os ambientes para deixar automático
    - Criar o ambiente de dev como "BASE_URL":"localhost:(porta)"
    - Criar a pasta de cada tipo de rota e configurar seu ambiente
instalar o bcryptjs: npm install bcryptjs ok

instalar sqlite3 sqlite: npm install sqlite3 sqlite --save ok
    Criar repositório database
    criar arquivo index.js dentro de uma pasta chamada sqlite
        criar constante sqlite3, sqlite e path
        path irá corrigir a rota independente do ambiente;
    no arquivo server.js adicionar a requisição do database/sqlite que foi exportado do index
    ainda no server executar o a função database;

migrations 
criar o diretório migrations dentro de sqlite para recriar as tabelas diretamente no código
criar um arquivo.js de acordo com a tabela a ser criada no banco createUsers.js
criar o arquivo index.js que faça a requisição da conexão com o database
criar uma funcao migrationsRun para executar o array de cada tabela
fazer uma promisse dentro da função executando os schemas para o db
exportar a migrationsRun
alterar no server a const database para migrationsRun e alcançar o index dentro do require
nos arquivos de controller, importar a sqliteConnection
criar uma constante dentro de cada função de requisição para conectar com o banco chamando o sqliteConnection

mudar para buscar o index da migrations no server.js na variavel database
crie a requisião para cada tabela


Instalar o query Builder Knex
instalar knex: npm install knex --save ok
Gerar o arquivo de configuração do knex npx knex init ok
limpar funcionalidades que não serão utilizadas no knexfile
usar o path para não ter problemas com localização de pastas no knexfile
acrescentar no objeto a propriedade useNullAsDefault: true
usar o knexfile para que o knex consiga conectar com a base de dados
    - criar uma pasta chamada knex dentro de database
    - criar um arquivo index.ks
    - trazer as configurações do knexfile para o index.js
    - exportar as configurações
    - configurar o knex file para automatizar as tabelas na aplicação
    - rodar script para criar as tabelas exemplo: npx knex migrate:make createMovie
    - configurar a função up para criar as tabelas
    - configurar a função down para deletar a tabela
    - rodar o script npx knex migrate:latest para criar as tabelas no banco de dados
