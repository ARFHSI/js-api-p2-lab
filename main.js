//////////////////////////// lab 1 نرسل معلوماتنا على الرابط حق ديما///////////////////////////
let username =document.querySelector("#username")
let password =document.querySelector("#password")
let btn =document.querySelector("#btn")
console.log();


async function logIn(){
let yname =document.getElementById("y-name")
    let res = await fetch("https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn",{//رابط ديما//
        method: 'POST',
        body: JSON.stringify({
            username:username.value,
            password:password.value


        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
})

let data = await res.json()
yname.innerText = `username ${data.username}`
console.log(data);

}
