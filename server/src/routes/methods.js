const Router = require('express');
const { Operation, Category } = require('../db');
const { v4: uuidv4 } = require('uuid');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const operation = await Operation.findAll({
            limit: 10,
            order: [["createdAt", "DESC"]]
        });

        console.log(operation);

        const calculateBalance = (operation) => {
            let income = 0;
            let expenses = 0;

            operation.map((item) => {
                
                if(item.type === 'Income'){
                    income += item.amount;
                }else if(item.type === 'Expenses'){
                    expenses += item.amount;
                }
            });


            

            const balance = income - expenses;

            const balanceObj = {
                income,
                expenses,
                balance
            };
            
            return balanceObj
        };

        const total = calculateBalance(operation);

        console.log('INCOME ', total.income);
        console.log('EXPENSES ', total.expenses);
        console.log('TOTAL BALANCE ', total.balance);
        
        res.json({
            data: operation,
            balance: total
        })

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const operation = await Operation.findByPk(id)

        console.log(operation)

        res.json({
            data: operation
        })

    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})


router.post('/', async (req, res) => {
    try {
        const { concept, amount, date, type,category } = req.body;

        const operation = await Operation.create({
            concept,
            amount,
            date,
            type,
            id: uuidv4(),
        });

        
        for(let i = 0; i < category.length; i++) {
            console.log(category[i]);
            let idCategory = await Category.findAll({
                where: {
                    name: category[i]
                },
                attributes: ['id']
            })

            operation.addCategory(idCategory);
        }
        
        res.json({
            data: operation
        });



    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
});

router.put('/', async (req, res) => {
    try {
        const { id, concept, amount, date } = req.body;

        const operation = await Operation.update(
            {
                concept,
                amount,
                date,
            },
            { where: { id } }
        )

        console.log(operation)

        res.sendStatus(200);

    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const operation = await Operation.destroy({
            where: { 
                id:id 
            }
        })

        console.log(operation)

        res.sendStatus(200)

    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});



module.exports = router;