const mysql = require('mysql');

export class Model{

    static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    });

    constructor(){};

    execQuery(query: any){
        let result = new Promise((resolve, reject)=>{
            Model.dbc.query(query, (err: any, rows: any, fields: any)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });

        return result;
    }

}