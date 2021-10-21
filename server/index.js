const server = require('./src/app');
const {conn} = require('./src/db.js');

// {Name Model} = require('./src/db)


conn.sync({ alter: true })
    
    .then(() => {
        server.listen(4000, () => {
        console.log('Listening at 4000')
    })

});


















// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//     server.listen(3001, async () => {
//       console.log('%s listening at 3001'); // eslint-disable-line no-console
  
//       try{
//         const resultDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  
//         let temperaments = "";
//         for(let i = 0; i < resultDogs.data.length; i++){
//           let temp = resultDogs.data[i].temperament;
//           temperaments += temp;
//           if(i === resultDogs.data.length){
//             continue;
//           }
//           temperaments += ", ";
//         }
//         temperaments = temperaments.split(', ');
  
//         const arr = new Set(temperaments.sort());
//         let temperamentsUni = [...arr];
        
//         temperamentsUni.slice(1,temperamentsUni.length - 1).map(e => {
//           Temperament.findOrCreate({
//             where:{
//               temperament: e
//             }
//           })
//         })
//         console.log("Temperaments loaded");
//       }
//       catch (error){
//         console.log(error);
//       }
//     });
//   });