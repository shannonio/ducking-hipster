module.exports.favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return 'Too high';
  } else if (guess < fav) {
    return 'Too low';
  } else {
    return 'You got it!';
  }
};

module.exports.checkLock = function(one, two, three, four) {
  if ((one === 3 || one === 5 || one === 7)
      && (two === 2) 
      && (three >= 5 && three <= 100)
      && !(four >= 9 && four <= 20)) {
    return 'correct';
  } else {
    return 'incorrect';
  }
};

module.exports.canIGet = function(item, price) {
  return ((item === 'MacBook Air' && price >= 999)
      || (item === 'MacBook Pro' && price >= 1299)
      || (item === 'Mac Pro' && price >= 2499)
      || (item === 'Apple Sticker' && price >= 1))
};
