document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('form').forEach(form=>{
const status=document.createElement('div');status.className='form-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.appendChild(status);
form.addEventListener('submit',e=>{e.preventDefault();status.textContent='Спасибо. Заявка подготовлена. Подключите CRM или Telegram-уведомления перед публикацией сайта.';status.classList.add('is-visible');form.querySelectorAll('input,select,textarea,button').forEach(x=>x.disabled=true);});
});});