function userCard(number) {
  let balance = 500;
  let transactionLimit = 5000;
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

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }
  addCard() {
    this.cards.push(userCard());
  }
  getCardByKey(number) {

  }
}

const user = new UserAccount('Bob');
user.addCard();
user.addCard();

console.log(user);