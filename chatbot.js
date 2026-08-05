const launcher=document.getElementById('chatLauncher');
const bot=document.getElementById('chatbot');
const minimize=document.getElementById('minimizeChat');
const messages=document.getElementById('chatMessages');
const form=document.getElementById('chatForm');
const input=document.getElementById('chatInput');
const quick=document.getElementById('quickReplies');

const answers={
  'consulta de deuda':'Puedes consultar tu deuda en Oficina Virtual con tu número de suministro o DNI del titular.',
  'descargar recibo':'Ingresa a Oficina Virtual, elige “Descargar recibo” y selecciona el mes que necesitas.',
  'emergencia':'Si percibes olor a gas, ventila, cierra la llave general y llama de inmediato al 1800-GAS-PAC.',
  'nueva conexión':'Para una nueva conexión, completa la solicitud digital y coordinaremos una inspección técnica.',
  'reclamo':'Puedes registrar un reclamo con descripción, fotos y datos de suministro desde la Oficina Virtual.'
};

function addMessage(text,type='bot'){const div=document.createElement('div');
div.className=`msg ${type}`;
div.textContent=text;
messages.appendChild(div);
messages.scrollTop=messages.scrollHeight;
}
function reply(text){const typing=document.createElement('div');
typing.className='typing';
typing.textContent='Escribiendo...';
messages.appendChild(typing);
messages.scrollTop=messages.scrollHeight;
setTimeout(()=>{typing.remove();
const key=Object.keys(answers).find(k=>text.toLowerCase().includes(k));
addMessage(key?answers[key]:'Gracias por escribirnos. Puedo ayudarte con deuda, recibos, nueva conexión, reclamos y emergencias.','bot');
},850);
}
launcher.addEventListener('click',()=>{bot.classList.add('open');
launcher.style.display='none';
if(!messages.dataset.started){addMessage('¡Hola! Soy el Asistente Pacífico. ¿En qué puedo ayudarte hoy?');
messages.dataset.started='true';
}});

minimize.addEventListener('click',()=>{bot.classList.remove('open');
launcher.style.display='block';
window.dispatchEvent(new CustomEvent('chatbot:closed'));
});

form.addEventListener('submit',e=>{e.preventDefault();
const text=input.value.trim();
if(!text)return;
addMessage(text,'user');
input.value='';
reply(text);
});

quick.addEventListener('click',e=>{if(e.target.tagName==='BUTTON'){const text=e.target.textContent;
addMessage(text,'user');
reply(text);
}});

document.querySelector('.menu-toggle')?.addEventListener('click',e=>{const menu=document.getElementById('main-menu');
const open=menu.classList.toggle('open');
e.currentTarget.setAttribute('aria-expanded',open);
});

