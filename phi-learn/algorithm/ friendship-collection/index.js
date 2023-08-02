// ------------------------------------------------------------------
// Friend collection, where _id is a user.Id and Friends is a list, of user.Id.
// Note: friending and unfriending is a two step operation in this scheme:
> db.friends.find()
{ "_id" : 1, "friends" : [2, 3, 4] }
{ "_id" : 2, "friends" : [1, 3, 5] }
{ "_id" : 3, "friends" : [1, 2, 4, 5] }
{ "_id" : 4, "friends" : [1, 3, 5] }
{ "_id" : 5, "friends" : [2, 3, 4] }
// 1 and 2 mutual friends:
> db.friends.aggregate([{ $match: { _id: { $in: [1, 2] } } }, { $unwind: "$friends" }, { $group: { _id: "$friends", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 3 }], "ok" : 1 }
// 1 and 3 mutual friends:
> db.friends.aggregate([{ $match: { _id: { $in: [1, 3] } } }, { $unwind: "$friends" }, { $group: { _id: "$friends", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 4 }, { "_id": 2 }], "ok" : 1 }
// 1 and 4 mutual friends:
> db.friends.aggregate([{ $match: { _id: { $in: [1, 4] } } }, { $unwind: "$friends" }, { $group: { _id: "$friends", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 3 }], "ok" : 1 }
// 1 and 5 mutual friends:
> db.friends.aggregate([{ $match: { _id: { $in: [1, 5] } } }, { $unwind: "$friends" }, { $group: { _id: "$friends", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 4 }, { "_id": 3 }, { "_id": 2 }], "ok" : 1 }
// 2 and 4 mutual friends:
> db.friends.aggregate([{ $match: { _id: { $in: [2, 4] } } }, { $unwind: "$friends" }, { $group: { _id: "$friends", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 5 }, { "_id": 3 }, { "_id": 1 }], "ok" : 1 }
// 1, 2 and 3 mutual friends:
> db.friends.aggregate([{ $match: { _id: { $in: [1, 2, 3] } } }, { $unwind: "$friends" }, { $group: { _id: "$friends", count: { $sum: 1 } } }, { $match: { count: 3 } }, { $project: { _id: 1 } }])
{ "result" : [], "ok" : 1 }  // have no friends in common.
// 1, 2 and 4 mutual friends:
> db.friends.aggregate([{ $match: { _id: { $in: [1, 2, 4] } } }, { $unwind: "$friends" }, { $group: { _id: "$friends", count: { $sum: 1 } } }, { $match: { count: 3 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 3 }], "ok" : 1 } // have one friend in common: user 3
// ------------------------------------------------------------------
// Friendship collection, where _id is calculated by sorting and 
// and joining two friends user.Id
//
// Note: friending and unfriending is a one step operation in this
// scheme:
// encode the exact same friend relationships as above.
> db.friendships.insert([
    { "_id": "1|2", "u": [1, 2] },
    { "_id": "1|3", "u": [1, 3] },
    { "_id": "1|4", "u": [1, 4] },
    //{ "_id" : "1|2", "u" : [2, 1] }, // omit -- id exists above
    { "_id": "2|3", "u": [2, 3] },
    { "_id": "2|5", "u": [2, 5] },
    //{ "_id" : "1|3", "u" : [3, 1] }, // omit -- id exists above
    //{ "_id" : "2|3", "u" : [3, 2] }, // omit -- id exists above
    { "_id": "3|4", "u": [3, 4] },
    { "_id": "3|5", "u": [3, 5] },
    //{ "_id" : "1|4", "u" : [4, 1] }, // omit -- id exists above
    //{ "_id" : "3|4", "u" : [4, 3] }, // omit -- id exists above
    { "_id": "4|5", "u": [4, 5] },
    //{ "_id" : "2|5", "u" : [5, 2] }, // omit -- id exists above
    //{ "_id" : "3|5", "u" : [5, 3] }, // omit -- id exists above
    //{ "_id" : "4|4", "u" : [5, 4] }, // omit -- id exists above
])
    > db.friendships.find()
{ "_id" : "1|2", "u" : [1, 2] }
{ "_id" : "1|3", "u" : [1, 3] }
{ "_id" : "1|4", "u" : [1, 4] }
{ "_id" : "2|3", "u" : [2, 3] }
{ "_id" : "2|5", "u" : [2, 5] }
{ "_id" : "3|4", "u" : [3, 4] }
{ "_id" : "3|5", "u" : [3, 5] }
{ "_id" : "4|5", "u" : [4, 5] }
//# 1 and 2 mutual friends:
> db.friendships.aggregate([{ $match: { u: { $in: [1, 2] } } }, { $project: { _id: 0, u: 1 } }, { $unwind: "$u" }, { $match: { u: { $nin: [1, 2] } } }, { $group: { _id: "$u", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 3 }], "ok" : 1 }
//# 1 and 3 mutual friends:
> db.friendships.aggregate([{ $match: { u: { $in: [1, 3] } } }, { $project: { _id: 0, u: 1 } }, { $unwind: "$u" }, { $match: { u: { $nin: [1, 3] } } }, { $group: { _id: "$u", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 4 }, { "_id": 2 }], "ok" : 1 }
//# 1 and 4 mutual friends:
> db.friendships.aggregate([{ $match: { u: { $in: [1, 4] } } }, { $project: { _id: 0, u: 1 } }, { $unwind: "$u" }, { $match: { u: { $nin: [1, 4] } } }, { $group: { _id: "$u", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 3 }], "ok" : 1 }
//# 1 and 5 mutual friends:
> db.friendships.aggregate([{ $match: { u: { $in: [1, 5] } } }, { $project: { _id: 0, u: 1 } }, { $unwind: "$u" }, { $match: { u: { $nin: [1, 5] } } }, { $group: { _id: "$u", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 4 }, { "_id": 3 }, { "_id": 2 }], "ok" : 1 }
//# 2 and 4 mutual friends:
> db.friendships.aggregate([{ $match: { u: { $in: [2, 4] } } }, { $project: { _id: 0, u: 1 } }, { $unwind: "$u" }, { $match: { u: { $nin: [2, 4] } } }, { $group: { _id: "$u", count: { $sum: 1 } } }, { $match: { count: 2 } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 5 }, { "_id": 3 }, { "_id": 1 }], "ok" : 1 }
//# 1, 2 and 3 mutual friends:
> users =[1, 2, 3]
    > db.friendships.aggregate([{ $match: { u: { $in: users } } }, { $project: { _id: 0, u: 1 } }, { $unwind: "$u" }, { $match: { u: { $nin: users } } }, { $group: { _id: "$u", count: { $sum: 1 } } }, { $match: { count: users.length } }, { $project: { _id: 1 } }])
{ "result" : [], "ok" : 1 }
//# 1, 2 and 4 mutual friends:
> users =[1, 2, 4]
    > db.friendships.aggregate([{ $match: { u: { $in: users } } }, { $project: { _id: 0, u: 1 } }, { $unwind: "$u" }, { $match: { u: { $nin: users } } }, { $group: { _id: "$u", count: { $sum: 1 } } }, { $match: { count: users.length } }, { $project: { _id: 1 } }])
{ "result" : [{ "_id": 3 }], "ok" : 1 }