const server = require('./src/app');
const {conn} = require('./src/db.js');

const {Category} = require('./src/db');

const category = [
    {
        id: 1,
        name: 'Food'
    },
    {
        id: 2,
        name: 'Services'
    },
    {
        id: 3,
        name: 'Clothing'
    },
    {
        id: 4,
        name: 'Salary'
    },
    {
        id: 5,
        name: 'Education'
    },{
        id: 6,
        name: 'Sports'
    },{
        id: 7,
        name: 'Leisure'
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

