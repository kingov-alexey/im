const uuid = require('uuid');
const path = require('path');

class DeviceController {
  async create(req, res) {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = reg.files;
    let fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
  }
  async getAll(req, res) {}
  async getOne(req, res) {}
}

module.exports = new DeviceController();
