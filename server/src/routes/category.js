const { Router } = require('express');
const router = Router();

const {Category, Operation} = require('../db');

router.get('/',async (req, res) => {
    try{
        const result = await Category.findAll();

        console.log(result)
        
        res.json({
            data: result
        })
    }catch(e){
        console.log(e)
        resSendStatus(400)
    }
});


router.get('/:cate', async (req, res) => {

    try{
        const {cate} = req.params;

        let category;

        let data = await Category.findAll({
            include: {
                model: Operation,
                include: Category
              }
        });

        for(let i = 0; i < 7; i++){
            if(data[i].name === cate){
                category = data[i].operations;
            }
        };

        
        res.json({
            data: category
        });

    }catch(e){
        console.log(e);
        res.sendStatus(400);
    }
});



module.exports = router;