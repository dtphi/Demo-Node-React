'use strict'

module.exports = class BaseRepository {

    async create(doc) {
        const createdEntity = new this.model(doc)
        return await createdEntity.save()
    }

    async findById(id, option) {
        return this.model.findById(id, option)
    }

    async findByCondition(filter, field = any | null, option = any | null, populate = any | null) {
        return this.model.findOne(filter, field, option).populate(populate)
    }

    async getByCondition(filter, field = any | null, option = any | null, populate = any | null) {
        return this.model.find(filter, field, option).populate(populate)
    }

    async findAll() {
        return this.model.find()
    }

    async aggregate(option = any) {
        return this.model.aggregate(option)
    }

    async populate(result = [], option = any) {
        return await this.model.populate(result, option)
    }

    async deleteOne(id) {
        return this.model.deleteOne({ _id: id })
    }

    async deleteMany(id = []) {
        return this.model.deleteMany({ _id: { $in: id } })
    }

    async deleteByCondition(filter) {
        return this.model.deleteMany(filter)
    }

    async findByConditionAndUpdate(filter, update) {
        return this.model.findOneAndUpdate(filter, update)
    }

    async updateMany(filter, update, option = any | null, callback = any | null) {
        return this.model.updateMany(filter, update, option, callback)
    }

    async findByIdAndUpdate(id, update) {
        return this.model.findByIdAndUpdate(id, update)
    }
}
