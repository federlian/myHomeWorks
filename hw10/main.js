//--------------------------1-----------------------------------------------------------

function userCard(number) {
  let balance = 100;
  let transactionLimit = 100;
  const historyLogs = [];
  let key = number > 0 && number <=3 ?
    number :
    'ERROR';

  function getCardOptions () {
    return {
      balance,
      transactionLimit,
      historyLogs,
      key
    }
  }

  function putCredits (money) {
    historyLogs.push({operationType: 'Received credits', money: money, operationTime: new Date().toLocaleString()});
    return balance += money;
  }

  function takeCredits (money) {
    historyLogs.push({operationType: 'Withdrawal of credits', money: money, operationTime: new Date().toLocaleString()});
    if (balance >= money && transactionLimit >= money) {
      balance -= money;
      transactionLimit -= money;
      return true
      } else {
      console.error('No money');
      return false
    }
  }

  function setTransactionLimit (money) {
    historyLogs.push({operationType: 'Transaction limit changes', money: money, operationTime: new Date().toLocaleString()});
    return transactionLimit = money
  }

  function transferCredits (moneyToSend, toCard) {
    let x = moneyToSend / 100 * 0.5;
    let check = takeCredits(moneyToSend + x);
    if (check) {
      toCard.putCredits(moneyToSend)
    }
  }

  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits
  }
}

//-------------------------------------------2-------------------------------------------

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }
  addCard() {
    this.cards.length < 3 ?
      this.cards.push(userCard(this.cards.length + 1)) :
      console.error('Limit Card Over')
  }
  getCardByKey(number) {
    return this.cards.find(value => value.getCardOptions().key === number)
  }
}

const user = new UserAccount('Bob');
user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());