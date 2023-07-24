console.log('>>>>>>> Start discount:', 'Mọi con đường sẽ về thành Prome', 'Đường nào cũng về La mã')

/**
 * Map function strategy for the discount.
 */
const discountStrategy = {
    dayNormal,
    dayNhaGiao: discountDayNhaGiao,
    dayQuocTeThieuNhi: discountDayQuocTeThieuNhi,
    dayTamThangBa: discountDayTamThangBa,
}

/**
 * Get the price discount normal.
 * @param {*} discount 
 * @returns 
 */
function dayNormal(discount) {
    return discount
}

/**
 * Get the price discount for the teacher day.
 * @param {*} discount 
 * @returns 
 */
function discountDayNhaGiao(discount) {
    return discount * 0.5
}

/**
 * Get the price discount for the international baby day.
 * @param {*} discount 
 * @returns 
 */
function discountDayQuocTeThieuNhi(discount) {
    return discount * 0.7
}

/**
 * Get the price for the women day.
 * @param {*} discount 
 * @returns 
 */
function discountDayTamThangBa(discount) {
    return discount * 0.8
}

/**
 * The function map the get price discount.
 * @param {*} discountPrice 
 * @param {*} typeDayDiscount 
 * @returns 
 */
const getPriceDiscount = function(discountPrice, typeDayDiscount) {
    return discountStrategy[typeDayDiscount](discountPrice)
}

console.log('>>>>>> Cal discount:')
console.log(getPriceDiscount(1000, 'dayNhaGiao'))