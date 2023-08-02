'use strict'

const { notification } = require('../models/notification.model')

const pushNotiToSystem = async ({
    type = 'ORDER-OO1',
    receivedId = 1,
    senderId = 1,
    options = {}
}) => {
    let notiContent

    if (type === 'SHOP-001') {
        notiContent = '@@@ just there is new product @@@@'
    } else if (type === 'PROMOTION-001') {
        notiContent = '@@@ just there is new voucher @@@@'
    }

    const noti = await notification.create({
        type: type,
        senderId: senderId,
        receivedId: receivedId,
        content: notiContent,
        options: options
    })

    return noti
}

const listNotiByUser = async ({ userId, type = 'All', isRead = 0 }) => {
    const match = { noti_receivedId: userId }
    if (type !== 'All') {
        match['noti_type'] = type
    }

    return await notification.aggregate([
        {
            $match: match
        },
        {
            $project: {
                noti_type: 1,
                noti_senderId: 1,
                noti_receivedId: 1,
                noti_content: 1,
                // TODO: replace noti_content should frontend working .
                // This is backend handler
                /*noti_content: {
                    $concat: [
                        {
                            $substr: ['$noti_options.shop_name', 0, -1]
                        },
                        'vua moi them san pham moi: ',
                        {
                            $substr: ['$noti_options.product_name', 0, -1]
                        }
                    ]
                },*/
                noti_options: 1,
                createdAt: 1,
            }
        }
    ])

}

module.exports = {
    pushNotiToSystem,
    listNotiByUser
}