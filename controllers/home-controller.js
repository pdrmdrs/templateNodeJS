const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: getTitle(),
        message: getMessage()
    });
});

var getTitle = function() {
    return 'Hey!';
}

var getMessage = function() {
    return 'Hello there!';
}

module.exports = router;