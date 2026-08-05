const npsModal=document.getElementById('npsModal');
const npsScale=document.getElementById('npsScale');
const sendNps=document.getElementById('sendNps');
const closeNps=document.getElementById('closeNps');
const thanks=document.getElementById('npsThanks');
let selectedScore=null;

for(let i=0;
i<=10;
i++){const b=document.createElement('button');
b.type='button';
b.textContent=i;
b.addEventListener('click',()=>{selectedScore=i;
document.querySelectorAll('#npsScale button').forEach(x=>x.classList.remove('selected'));
b.classList.add('selected');
});
npsScale.appendChild(b);
}
window.addEventListener('chatbot:closed',()=>{if(!sessionStorage.getItem('npsAnswered')){npsModal.classList.add('show');
npsModal.setAttribute('aria-hidden','false');
}});

closeNps.addEventListener('click',()=>{npsModal.classList.remove('show');
npsModal.setAttribute('aria-hidden','true');
});

sendNps.addEventListener('click',()=>{sessionStorage.setItem('npsAnswered','true');
thanks.style.display='block';
sendNps.disabled=true;
setTimeout(()=>{npsModal.classList.remove('show');
npsModal.setAttribute('aria-hidden','true');
},1600);
});

