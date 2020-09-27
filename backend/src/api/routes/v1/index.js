const express = require('express');

//custom routes
const menuRoutes = require('./menu.route');
const router = express.Router();

/**
 * @swagger
 * /status:
 *  get:
 *    tags:
 *      - Status
 *    summary: Server health status
 *    responses:
 *        200:
 *          description: A successful response
 */
router.get('/status', (req, res) => res.send('OK'));
router.use('/restaurant', menuRoutes);

module.exports = router;
