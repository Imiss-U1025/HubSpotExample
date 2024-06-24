const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../../models/User.js');
const jwt = require('jsonwebtoken');

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'No user found' }] });
      
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Incorrect Password!' }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, 'secret', { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
