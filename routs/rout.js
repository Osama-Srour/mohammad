const express = require('express')
const router = express.Router()
const ctrl = require ('../controler/myctrl')


router.get('/sum', (req, res) => {
    const body = req.body ; 
    const sumofnumber = body.num1 + body.num2 

    return res.status(200).json({"massage": "Working fine" ,
                                 "num1": body.num1,
                                 "num2": body.num2,
                                    "sum": sumofnumber
})
    



});



module.exports = router