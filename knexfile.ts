import path from 'path';
//Knexfile é usado para criar as tabelas do arquivo 'migrations'
module.exports = {
    client : 'sqlite3',
    connection : {
        filename : path.resolve(__dirname,'src', 'database', 'database.sqlite'),
    },
    migrations : {
        directory : path.resolve(__dirname, 'src','database','migrations') 
    },
    
    useNullAsDefault: true
}; 