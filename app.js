//! class
class Budget {
  constructor(name, budget) {
    this.name = name;
    this.budget = budget;
  }
  //   increase budget
  increase(value) {
    return (this.budget += value);
  }
  //   decrease budget
  decrease(value) {
    return (this.budget -= value);
  }
  //   remains budget
  remainsBudget() {
    return `${this.name} عزیز باقیمانده ی بودجه شما در حال حاضر ${this.budget} تومان میباشد`;
  }
  //   historys work
  history(value) {
    if (value !== undefined) {
      historys.push(value);
    }
    return historys;
  }
}
//! variables
const increase = document.querySelector(".increase"),
  decrease = document.querySelector(".decrease"),
  remains = document.querySelector(".remains"),
  history = document.querySelector(".history"),
  addNewBudget = document.querySelector(".budget"),
  clearBtn = document.querySelector(".clear"),
  getValues = document.querySelector(".get-values");
let budget,
  historys = [];
//! eventListeners
//? add new budget eventListener
addNewBudget.addEventListener("click", () => {
  const form = document.querySelector(".budget-form"),
    //   access the client name
    name = form.querySelector(".name"),
    // access the client budget value
    budgetValue = form.querySelector(".budget-value");
  // created a new Object from class budget
  budget = new Budget(name.value, Number(budgetValue.value));
  //   removed form afted clicked button
  form.classList.remove("active");
});
//? increase budget eventListeners
increase.addEventListener("click", () => {
  // increased budget after clicked the button and forward inc value for inc method on class budget
  budget.increase(Number(getValues.value));
  //   printed message on result section
  showResult(
    "h1",
    `${budget.name} عزیز بودجه ی شما به مقدار ${getValues.value} تومان افزایش یافت`
  );
  //   added a this work in the history
  budget.history(
    `شما در ساعت ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} به مقدار ${
      getValues.value
    } تومان افزایش بودجه داشته اید`
  );
  //   input value equaled null
  getValues.value = "";
});
//? decrease budget eventListeners
decrease.addEventListener("click", () => {
  // decreased budget after clicked the button and forward dec value for dec method on class budget
  budget.decrease(Number(getValues.value));
  //   printed message on result section
  showResult(
    "h1",
    `${budget.name} عزیز بودجه ی شما به مقدار ${getValues.value} تومان کاهش یافت`
  );
  //   added a this work in the history
  budget.history(
    `شما در ساعت ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} به مقدار ${
      getValues.value
    } تومان کاهش بودجه داشته اید`
  );
  //   input value equaled null
  getValues.value = "";
});
//? Remains eventListeners
remains.addEventListener("click", () => {
  // printed remains budget on the result section
  showResult("h1", budget.remainsBudget());
});
history.addEventListener("click", () => {
  // printed the history after clicked the history button on the result section
  budget.history().forEach((history) => {
    showResult("li", history);
  });
});
//? clear button eventListeners
clearBtn.addEventListener("click", () => {
  // clear all message on the result section afte clicked the clear button
  const resultContainer = document.querySelectorAll(".result-container > *");
  resultContainer.forEach((element) => element.remove());
});
//! function
// function print message on the result section
function showResult(tagName, data) {
  const resultContainer = document.querySelector(".result-container");
  const tag = document.createElement(tagName);
  tag.innerHTML = data;
  resultContainer.appendChild(tag);
}
/* 
Instagram Page => @CodeWithMaster
github account => Https://github.com/CodeWithMaster
please added star for this mini proje and follow account and please share this page and work for programming firends
 */
