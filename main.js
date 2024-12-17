// Anonymouns Function = callback function // Expression Function

let man = () => {
  // it's same a Variable  [(=>)] Arrow Function
  console.log("This is anonymouns function");//Block of Function
};
man();
// NAsted Function: if // loop .. Arrays , Objects

function outerFunction(){
    const outerVar ="This is outer function";// only Variable
    function innerFunction(){
       console.log(outerVar);
       console.log("This is inner function"); // Global Scope
    }
    innerFunction();
}

outerFunction();

//We have Two Scopes in JavaScript
// Global Scope
// Local Scope