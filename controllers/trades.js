const Trade = require("../models/trades");

async function getSingleTrade(req, res) {
    console.log(req.params.id)
    const data = await Trade.findAll({
        where: {
            id: Number(req.params.id)
        },
        raw: true,
        limit: 1
    })
    console.log(data.length)
    if (data.length == 0) {
        // console.log(data);
        res.status(404).send('ID not found');
        // res.status(200).send(data.dataValues);
    } else {
        res.status(200).json(data[0]);
    }
    // console.log(data);
}

async function createNewTrade(req, res) {

    if (req.body.type == "sell") {

        await Trade.create({
            id: Math.floor(Math.random()),
            type: req.body.type,
            user_id: req.body.user_id,
            symbol: req.body.symbol,
            shares: req.body.shares,
            price: req.body.price,
            timestamp: 1521522701000
        })
        .then((createdTrade) => {
            console.log(createdTrade.dataValues)
            res.status(201).json(
                createdTrade.dataValues
            )
        })
        .catch((error) => {
            console.log(error)
            // res.status()
        })

    } else {

        await Trade.create({
            id: Math.floor(Math.random()),
            type: req.body.type,
            user_id: req.body.user_id,
            symbol: req.body.symbol,
            shares: req.body.shares,
            price: req.body.price,
            timestamp: 1531522701000
        })
        .then((createdTrade) => {
            console.log(createdTrade.dataValues)
            res.status(201).json(
                createdTrade.dataValues
            )
        })
        .catch((error) => {
            console.log(error)
            // res.status()
        })

    }

 

}

async function getAllTrades(req, res) {
    const { type, user_id} = req.query;  
// console.log(typeof Number(user_id));

    // type and user_id present
    if (type !== undefined && user_id !== undefined ) {
        const data = await Trade.findAll({
            where: {
                type: type,
                user_id: Number(user_id)
            },
            raw: true,
            limit: 1
        })
        if (data == undefined) {
            // console.log(data);
            // res.status(200).send(data.dataValues);
        } else {
            res.status(200).json(data);
            // console.log(data);
        }
    }

    // type present, user_id undefined
    if (type !== undefined && user_id == undefined ) {
        res.status(200).json([]);
    }

    //  type undefined, user_id present
    if ( type == undefined && user_id !== undefined) {
        const data = await Trade.findAll({
            where: { user_id: Number(user_id) },
            raw: true,
            limit: 2
        })
        if (data == undefined) {
            // console.log(data); 
            // res.status(200).json(data.dataValues);  
        } else {
            console.log(data)
            res.status(200).json(data);  
        }
 
    } 

    // type undefined, user_id undefined
    if (user_id == undefined && type == undefined) {
      const data = await Trade.findAll({
        raw: true,
        limit: 1000
    })
            if (data == undefined) {
                console.log(data);  
            } else {
                console.log(data)
                res.status(200).json(data);
                // console.log(data.every(data => console.log(data)));
            }
    }
   

}

module.exports = {
    getAllTrades,
    createNewTrade,
    getSingleTrade
}