
document.getElementById('text-container')?.addEventListener('click', function() {
    this.classList.toggle('expanded');
});




const menuBtn = document.querySelector('.menu');
const menuPanel = document.querySelector('.menu-panel');
const overlay = document.querySelector('.menu-overlay');

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    menuPanel.classList.toggle('active');
    overlay.style.display = this.classList.contains('active') ? 'block' : 'none';
});

document.querySelectorAll('.select-one').forEach(item => {
    if (item.querySelector('p')?.textContent.trim() === 'Каталог') {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.catalog-panel').classList.add('active');
        document.body.style.overflow = 'hidden'; 
      });
    }
  });
  
  document.querySelector('.close')?.addEventListener('click', function() {
    document.querySelector('.catalog-panel').classList.remove('active');
    document.body.style.overflow = ''; 
  });
  
  document.addEventListener('click', (e) => {
    const catalogPanel = document.querySelector('.catalog-panel');
    if (catalogPanel.classList.contains('active') && 
        !e.target.closest('.catalog-panel') && 
        !e.target.closest('.select-one')) {
      catalogPanel.classList.remove('active');
      document.body.style.overflow = '';
    }
  });