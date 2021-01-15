const Attendee = require('../models/schema/attendee')

// 處理與會模式
module.exports = async (confId, mode, staffId) => {
    const updateItem = { attendMode: mode }
    try {
        await Attendee.updateOne({ confId: confId, staffId: staffId }, updateItem)
        return true // 更新出席人員檔的與會模式       
    } catch (error) {
        return false
    }
}