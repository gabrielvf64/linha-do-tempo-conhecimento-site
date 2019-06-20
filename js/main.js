const items = document.querySelectorAll("#linha-do-tempo li");

const estaNaViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.righ <= (window.innerWidth || document.documentElement.clientHeight)
  );
};

const executa = () =>
  items.forEach(item => {
    if(estaNaViewport(item)) {
      item.classList.add('aparece');
    }
  });

// Eventos
window.addEventListener('load', executa);
window.addEventListener('resize', executa);
window.addEventListener('scroll', executa);