const Router = require('express');
const { Operation } = require('../db');
const { v4: uuidv4 } = require('uuid');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const operation = await Operation.findAll({
            limit: 10,
            order: [["createdAt", "DESC"]]
        })

        console.log(operation)

        res.json({
            data: operation
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
        const { concept, amount, date, type } = req.body;

        const operation = await Operation.create({
            concept,
            amount,
            date,
            type,
            id: uuidv4()
        })

        console.log(operation)

        res.json({
            data: operation
        })

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
            where: { id }
        })

        console.log(operation)

        res.sendStatus(200)

    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});



module.exports = router;