const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('acc');
});

module.exports = router;
