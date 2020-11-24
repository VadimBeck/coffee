const modal = (function(){
  let modalBlock = document.querySelector(".modal");
  let body = document.body;
  let active = false;

  function openModal() {
    body.classList.add("locked");
    body.style.paddingRight = scrollWidth()+"px";
    modalBlock.classList.add("is-active");
    active = true;
  }
  function closeModal() {
    body.classList.remove("locked");
    body.style.paddingRight = "0";
    modalBlock.classList.remove("is-active");
    active = false;
  }
  function scrollWidth(){
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return width;
  }
  document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal__close")){
      closeModal();
    }
  })
  document.addEventListener('keydown', function(e){
    if (e.keyCode == 27 && active) {
      closeModal();
    }
  })
  return {
    open : openModal
  }
}());

document.body.addEventListener("click", (e)=> {
  if(e.target.classList.contains("product-count__btn")){
    e.preventDefault();
    modal.open();
  }
})