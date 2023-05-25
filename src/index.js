const whoLikeIt = (likes) => {
    let whoLike = "";
  
    switch (likes.length) {
      case 0:
        whoLike = "no one likes this";
        break;
      case 1:
        whoLike = `${likes[0]} likes this`;
        break;
      case 2:
        whoLike = `${likes[0]} and ${likes[1]} like this`;
        break;
      case 3:
        whoLike = `${likes[0]}, ${likes[1]} and ${likes[2]} like this`;
        break;
      default:
        whoLike = `${likes[0]}, ${likes[1]} and ${likes.length - 2} others like this`;
        break;
    }
  
    return whoLike;
  };

module.exports = {
    whoLikeIt
}