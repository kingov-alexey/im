const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    //res.json('test');
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('не задан ID'));
    }
  }
}

module.exports = new UserController();
