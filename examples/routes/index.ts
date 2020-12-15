import express from 'express';

const router = express.Router();

router.get('/simple/hello', function(req, res) {
  res.json({
    msg: 'hello world'
  });
});


router.get('/base/get', function(req, res) {
  res.json(req.query);
});

export default router;
