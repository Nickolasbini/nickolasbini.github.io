export function showToast(toast, message, severity = 'success', seconds = 5000, title = ''){
    const severities = ['success','info','warn','error','secondary','contrast'];
    if(!severities.includes(severity))
        severity = 'success';
    if(title == '')
        title = process.env.VUE_APP_NAME.replaceAll('"', '');
    if(severity == 'error')
        message += '!';
    toast.add({ severity: severity, summary: title, detail: message, life: seconds });
    let toastEl = document.querySelector('.p-toast');
    toastEl.style.left = 'unset';
    let screenWidth = window.innerWidth;
    if(screenWidth < 450 && (toastEl != null && toastEl != undefined)){
      let percent = screenWidth / 100;
      let margin = percent * 5;
      toastEl.style.width = (percent * 90) + 'px';
      toastEl.style.right = margin + 'px';
      toastEl.style.left  = margin + 'px';
    }
}