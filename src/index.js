const whoLikeIt = (likes) => {
    let whoLike = " likes this"

    if(likes.length > 0)
        whoLike =  likes[0] + whoLike
    else 
        whoLike = "no one" + whoLike

    return whoLike
}

module.exports = {
    whoLikeIt
}