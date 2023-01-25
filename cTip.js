// Get access to all input div Id's
const billTotal = document.getElementById('billTotal');
const tipTotal = document.getElementById("tipTotal");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv =  document.getElementById("perPersonTotal");

// Get number of people from number of people Div
// As it is string we should convert to number
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

//Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
    const bill = Number(billTotal.value);
  // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercentage = Number(tipTotal.value)/100;
  // get the total tip amount
    const tipAmount = bill * tipPercentage;
    console.log({tipAmount});
  // calculate the total (tip amount + bill)
    const total = tipAmount + bill
    console.log({total})
  // calculate the per person total (total divided by number of people)
    const perPersonTotal = total/numberOfPeople
    console.log({perPersonTotal})
  // update the perPersonTotal on DOM & show it to user
    // perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).tolocaleString('en-us')}`;
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
} 

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount
  numberOfPeople++;
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;
  // calculate the bill based on the new number of people
  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
 if(numberOfPeople == 1){
    alert("Hey! you cannot have less than 1 person...");
    throw (`Hey! you cannot have less than 1 person...`)
    return
 }
  // decrement the amount
  numberOfPeople--;
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;
  // calculate the bill based on the new number of people
  calculateBill()
}