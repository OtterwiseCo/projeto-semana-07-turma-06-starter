function onSubmit (event) {
  event.preventDefault()
  
  const name= document.querySelector('name').value
  const email= document.querySelector('email').value
  const comment= document.querySelector('comment').value

  console.log(name, email,comment)

//  enviar p API
  const data = {
  name: name,
  email: email,
  body: comment,
  }


console.log(data)
console.log(JSON.stringify(data))

}
// const url= 'https://jsonplaceholder.typicode.com/comments'

// fetch( url, {
//   method: 'GET',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


window.onload = () => { 
  const button = document.querySelector(".button");
  button.addEventListener("click", onSubmit)

}





//  window.onload = () => { 
//   const button = document.querySelector("button");
//     button.addEventListener("click", (event) => {
//       const form = document.querySelector('fieldset')
//     return form
//     })
//     console.log(form)
//  }


// function onclick() {
//   console.log('enviado')  
// }
 
//  window.onload = () => { 
//       const button = document.querySelector('button');
//       button.addEventListener('click', onclick )
//     }


 


    // window.onload = () => { 
    //   const button = document.querySelector("button");
    //    button.addEventListener("click", (event) => {
    //     const form = document.getElementsByName("name");
    //     const email = document.getElementsByName("email");
    //     const message = document.getElementsByName('message');
    //    console.log(name)
    //    console.log(email)  
    //    console.log(message)    
    //    })
    // }

    // function myFunction(a, b) {
    //   document.getElementById("demo").innerHTML = a * b;
    // }  
  // window.onload = () => { 
 

  // //  const button = document.querySelector("button");
   
  // //  if (name !== blank & email !== blank) {

  //   button.addEventListener("click", (event) => {
  //   //  const blank = " ";
  //  const name = document.getElementsByName("name");
  //  const email = document.getElementsByName("email");
  //  const message = document.getElementsByName('message');
   
    
  //  console.log(name + email + message)
  //   //    return "ola";
  //   //      }

  //   // if (name == blank || email == blank || message == blank) {
    
  //   }
    
  //   );
   
  //  };