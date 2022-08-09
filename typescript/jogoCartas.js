let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  while(card >= 2 && card <= 6) {
    count++;
    break;
  }
  if (count > 0) {
      console.log(count + " Bet");
    } else {
      console.log(count + " Hold");
    }



  // Altere apenas o código acima desta linha
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
