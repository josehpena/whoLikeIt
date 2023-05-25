const whoLikeIt = (likes) => {
    let whoLike = ""

    if(likes.length == 1)
        whoLike =  likes[0] + " likes this"
    else if(likes.length == 2)
        whoLike = likes[0] + " and " + likes[1] +  " like this"
    else if(likes.length == 3)
        whoLike = likes[0] + ", " + likes[1] + " and " + likes[2] + " like this"
    else if(likes.length == 4)
        whoLike = likes[0] + ", " + likes[1] + " and " + (likes.length - 2) + " others like this"
    else 
        whoLike = "no one likes this"

    return whoLike
}

module.exports = {
    whoLikeIt
}