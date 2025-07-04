
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


  
document.querySelector('.catalog-panel svg')?.addEventListener('click', function(e) {
    e.stopPropagation(); 
    document.querySelector('.catalog-panel').classList.remove('active');
    document.body.style.overflow = '';
});

// Обработка кликов на категории в основной панели
document.querySelectorAll('.catalog-panel .select-one').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        const panelTitle = this.querySelector('p')?.textContent.trim();
        
        if (panelTitle) {
            // Устанавливаем заголовок для подкатегории
            document.querySelector('.subcategory-panel .content-catalog p').textContent = panelTitle;
            
            // Показываем панель подкатегорий
            document.querySelector('.subcategory-panel').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Кнопка "назад" в подкатегориях
document.querySelector('.subcategory-panel svg')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.subcategory-panel').classList.remove('active');
});

// Закрытие при клике вне панели
document.addEventListener('click', (e) => {
    const subcategoryPanel = document.querySelector('.subcategory-panel');
    if (subcategoryPanel.classList.contains('active') && 
        !e.target.closest('.subcategory-panel') && 
        !e.target.closest('.catalog-panel .select-one')) {
        subcategoryPanel.classList.remove('active');
    }
});