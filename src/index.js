const whoLikeIt = (likes) => {
    let whoLike = ""

    if(likes.length == 1)
        whoLike =  likes[0] + " likes this"
    else if(likes.length == 2)
        whoLike = likes[0] + " and " + likes[1] +  " like this"
    else 
        whoLike = "no one likes this"

    return whoLike
}

module.exports = {
    whoLikeIt
}