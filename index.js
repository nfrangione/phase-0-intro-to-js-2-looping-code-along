function writeCards(names, reason) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${reason} gift!`);
    }
    return thankYouCards;
  }

function countDown(count) {
    while ( count > 0) {
        console.log(count);
        count -= 1;
    }
    console.log(count);
}