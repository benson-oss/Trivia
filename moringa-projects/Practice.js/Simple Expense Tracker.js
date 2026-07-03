const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

const expenses = [];

addBtn.addEventListener("click", () => {
  const desc = descInput.value;
  const amount = amountInput.value;

  // Validation
  if (!desc || isNaN(amount)) {
    alert("Please enter a description and a valid amount.");
    return;
  }

  // Add expense
expenses.push( {desc, amount} );
  renderExpenses();

  // Clear inputs
  descInput.value = "";
  amountInput.value = "";
});

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = `${exp.desc}: $${exp.amount}`;
    expenseList.appendChild(li);
    total += exp.amount;
  });

  totalDisplay.textContent = `Total: $${total}`;
}
