const messagebox = document.querySelector(".message-box");
const encrypt_mssge = document.querySelector(".encrypted_message");
const encryptKey = document.querySelector(".encryptKey input");
const decryptKey = document.querySelector(".decryptKey input");
const phone1 = document.querySelector(".chats__phone1");
const phone2 = document.querySelector(".chats__phone2");
const phone3 = document.querySelector(".chats__phone3");
const b1=document.querySelector(".send-button");

var encryptionKey=0
var decryptionKey=0
let messageText = [];
var meste=[]

encryptKey.addEventListener('click', function() {
  encryptionKey= encryptKey.valueAsNumber;   
});
encryptKey.addEventListener('keyup', function() {
  encryptionKey = encryptKey.valueAsNumber;
});
decryptKey.addEventListener('click', function() {
  decryptionKey  = decryptKey.valueAsNumber;
});
decryptKey.addEventListener('keyup', function() {
  decryptionKey = decryptKey.valueAsNumber;
});

const bobSend = mssge => {
    // console.log(mssge)
  let BobCht = document.createElement("div");
  let BobMssg = document.createElement("div");
  BobCht.classList.add("Bob", "chat", "chat-sent");
  BobMssg.classList.add("Bob", "message-sent");
  BobMssg.innerText = mssge;
  BobCht.appendChild(BobMssg);
  phone1.appendChild(BobCht);
}

const hckrReceive = mssge => {
  let text = '';
   mssge.map(letter => {
    text += letter;
  });
  let hckrCht = document.createElement("div");
  let hckrMssg = document.createElement("div");
  hckrCht.classList.add("Bob", "chat", "chat-sent");
  hckrMssg.classList.add("Bob", "message-sent");
  hckrMssg.innerText = text;
  hckrCht.appendChild(hckrMssg);
  phone2.appendChild(hckrCht);
//   console.log(text);
}

const AshlyReceive = mssge => {
  let AshCht = document.createElement("div"); 
  let AshMssg = document.createElement("div");
  AshCht.classList.add("Ashley","chat", "chat-received")
  AshMssg.classList.add("Ashley", "message-received");
  AshMssg.innerText = mssge;
  AshCht.appendChild(AshMssg);
  phone3.appendChild(AshCht);
}

function encrypt (messge = []) {
  let encryptedText = [];
  var l=messge.length;
  for(let i=0;i<l;i++)
  {
    var ch=""
    ch+=messge[i]
    console.log(ch)
    console.log(ch.charCodeAt(0))

    let chr=String.fromCharCode(ch.charCodeAt(0)+encryptionKey)
    console.log(ch.charCodeAt(0)+encryptionKey)
    encryptedText.push(chr);
    ch=""
  }
    
  return encryptedText;
}

function decrypt(messages = [], unlockKey){
  let chr = "";
  var l=messages.length;
  for(let i=0;i<l;i++)
  {
    var ch=""
    ch+=messages[i]
    chr+=String.fromCharCode(ch.charCodeAt(0)-unlockKey)
    ch=""
    
  }
  
  
  return chr;
}
const send = (mssge) => {
  let enkeys = [];
  console.log(mssge)
  var s1=""
  for(let i=0;i<mssge.length;i++)
  {
    s1+=mssge[i]
  }
  messageToSend = encrypt(mssge, encryptionKey);
  enkeys = decrypt(messageToSend, decryptionKey);
//   console.log(messageToSend)
  bobSend(s1);
  hckrReceive(messageToSend);
  AshlyReceive(enkeys);
  messagebox.value = "";
}
var m1;
messagebox.addEventListener('keyup', function() {
  m1 = messagebox.value;
  console.log(m1)
  
});
b1.addEventListener('click',function(){
  for(let i=0;i<m1.length;i++)
  {
    meste.push(m1[i])
    console.log(meste)
  }
  send(meste)
  messageText=[]
  meste=[]
})


messagebox.addEventListener('keydown', function(e) {
  if(e.keyCode === 8){
    messageText.pop()
}
  else if(e.which=== 13){
    send(messageText);
    messageText = [];
  }
  else{
    if(e.which===16){
        messageText.push()
    }
    else{
        messageText.push(e.key);
    }
    
    console.log(messageText) 
  }
});