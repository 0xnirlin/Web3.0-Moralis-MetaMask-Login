// const { Console } = require("console");

const logout = document.getElementsByClassName(".btn-primary");
const loginb = document.getElementsByClassName(".btn-success");

// const Moralis = require('moralis');
//setting the serverurl from moralis
const serverUrl = "https://sieqbxyygqx1.usemoralis.com:2053/server"
const appId = "x6CVQ3oX21RmULOK4oyY0KdzP5epWBJjjydmqumv"

//Now starting the moralis server with the Moralis.start
//it takes two arguments server url and the app id
Moralis.start({serverUrl, appId})

// Now the sdk is connected now we can user data such as their tokens transaction and NFTS.

// Authentication 

async function login()
{
    let user = Moralis.User.current();
    if(user)
    {
        alert("You are already logged in");
    }

    if(!user)
    {
         await Moralis.authenticate();
    }
  
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  
  }

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

