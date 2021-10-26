const server = require('./src/app');
const {conn} = require('./src/db.js');

const {Category} = require('./src/db');

const category = [
    {
        id: 1,
        name: 'Comida'
    },
    {
        id: 2,
        name: 'Servicios'
    },
    {
        id: 3,
        name: 'Vestimenta'
    },
    {
        id: 4,
        name: 'Sueldo'
    },
    {
        id: 5,
        name: 'Educacion'
    }
];


conn.sync({ alter: true })
    
    .then(() => {
        server.listen(4000, () => {
            console.log('Listening on port 4000')
            
            try{

                category.map(item => {
                    Category.findOrCreate({
                        where:{
                            name: item.name
                        }
                    })
                })

                console.log('Category loaded');

            }catch(e){
                console.log(e);
            }
        })
});

