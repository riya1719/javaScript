class Article
{
    
    Function1() {
        console.log("Call Back Function 1");
    }
    Function2() {
        console.log("Call Back Function 2");
    }
    Function3() {
        console.log("Call Back Function 3");
    }
    Function4() {
        console.log("Call Back Function 4");
    }
    Function5() {
        console.log("Call Back Function 5");
    }
    Function6() {
        console.log("Call Back Function 6");
    }
  }

const callback = () => {

  console.log("callback funtion starts")
    let Obj = new Article();

    Obj.Function1();

    setTimeout(Obj.Function2, 3000)

    setTimeout(Obj.Function3, 2000)

  new Promise((resolve, reject) =>
    resolve('Promise 1')
  ).then(resolve =>  { console.log(resolve) ; Obj.Function5(); })

  new Promise((resolve, reject) =>
    resolve('Promise 2')
  ).then(resolve =>  { console.log(resolve) ; Obj.Function4();} )

  Obj.Function6();

  console.log("callback funtion ends")
  console.log("Promise will be called right after all function in the callback ends ");
  console.log("and before timer funtions queue starts");
}
callback();