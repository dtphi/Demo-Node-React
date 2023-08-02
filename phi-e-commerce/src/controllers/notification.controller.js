const { listNotiByUser } = require('../services/notification.service')
const { SuccessResponse } = require('../core/success.response')

class NotificationController {
  getListNotiByUser = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get list notification user success',
      metadata: await listNotiByUser(req.query)
    }).send(res)
  }
}

module.exports = new NotificationController()
