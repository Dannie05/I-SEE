export const ClipBoard = () => {
  const copyBtn = document.querySelector('.copyBtn');
  const link = document.querySelector("#refLink");
  const value = link.value
  link.select();
  link.setSelectionRange(0, 99999);
  document.execCommand('copy')
  // navigator.clipboard.writeText(value)
  // console.log(value);

  setTimeout(()=>{
    copyBtn.innerHTML = 'copied✔'
  }, 100)
  setTimeout(()=>{
    copyBtn.innerHTML = 'copy'
  }, 3000)

};
