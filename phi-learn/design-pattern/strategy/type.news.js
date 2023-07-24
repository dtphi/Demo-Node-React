/**
 * Object map function strategy for the news.
 */
const newsStrategy = {
    defaultLastNews,
    latestVoteNewsByQuality: _getLatestVoteNewsByQuality,
    lastNewsByQuality: _getLastNewsByQuality,
    latestFavoriteNewsByQuality: _getLatestFavoriteNewsQuality,
    latestViewNewsByQuality: _getLatestViewNewsByQuality,
}

/**
 * 
 * @param {*} quality
 * @param {*} filters 
 * @returns 
 */
function defaultLastNews(quality, filters) {
    return {
        quality: quality,
        filters: filters,
        news: 'default last news'
    }
}

/**
 * 
 * @param {*} quality 
 * @param {*} filters 
 * @returns 
 */
function _getLatestVoteNewsByQuality(quality, filters) {
    return {
        quality: quality,
        news: 'latest voted news',
        filters: filters
    }
}

/**
 * 
 * @param {*} quality 
 * @param {*} filters 
 * @returns 
 */
function _getLastNewsByQuality(quality, filters) {
    return {
        quality: quality,
        news: 'last news',
        filters: filters
    }
}

/**
 * 
 * @param {*} quality 
 * @param {*} filters 
 * @returns 
 */
function _getLatestFavoriteNewsQuality(quality, filters) {
    return {
        quality: quality,
        news: 'latest favorite news',
        filters: filters
    }
}

/**
 * 
 * @param {*} quality 
 * @param {*} filters 
 * @returns 
 */
function _getLatestViewNewsByQuality(quality, filters) {
    return {
        quality: quality,
        news: 'latest view news',
        filters: filters
    }
}

/**
 * 
 * @param {*} quality 
 * @param {*} typeNews 
 * @param {*} filters 
 * @returns 
 */
function getNews(quality, typeNews, filters) {
    quality = quality ? quality : 5
    typeNews = typeNews ? typeNews : 'defaultLastNews'
    console.log(quality, typeNews)

    return newsStrategy[typeNews](quality, filters)
}

console.log('>>>>> Default news strategy:', getNews())
console.log('>>>>> LatestVoteNewsByQuality strategy:', getNews(10, 'latestVoteNewsByQuality', ['a','b','c']))