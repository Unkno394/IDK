
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

document.querySelectorAll('.catalog-panel .select-one').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        const panelTitle = this.querySelector('p')?.textContent.trim();
        
        if (panelTitle) {
            
            document.querySelector('.subcategory-panel .content-catalog p').textContent = panelTitle;
            
            
            document.querySelector('.subcategory-panel').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});


document.querySelector('.subcategory-panel svg')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.subcategory-panel').classList.remove('active');
});


document.addEventListener('click', (e) => {
    const subcategoryPanel = document.querySelector('.subcategory-panel');
    if (subcategoryPanel.classList.contains('active') && 
        !e.target.closest('.subcategory-panel') && 
        !e.target.closest('.catalog-panel .select-one')) {
        subcategoryPanel.classList.remove('active');
    }
});


document.querySelectorAll('.subcategory-panel .select-two').forEach(item => {
    if (item.querySelector('p')?.textContent.trim() === 'Смартфоны') {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            document.querySelector('.smartphones-panel').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
});


document.querySelector('.smartphones-panel svg')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.smartphones-panel').classList.remove('active');
    document.body.style.overflow = '';
});


document.addEventListener('click', (e) => {
    const smartphonesPanel = document.querySelector('.smartphones-panel');
    if (smartphonesPanel.classList.contains('active') && 
        !e.target.closest('.smartphones-panel') && 
        !e.target.closest('.subcategory-panel .select-two')) {
        smartphonesPanel.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.querySelector('.catalog')?.addEventListener('click', function() {
    const menuBtn = document.querySelector('.menu');
    menuBtn.classList.add('active');
    document.querySelector('.menu-panel').classList.add('active');
    document.body.style.overflow = 'hidden';
});

function moveElementsForDesktop() {
    const cityEl = document.querySelector('.cityy');
    const phoneEl = document.querySelector('.phone');
    const timeEl = document.querySelector('.worktime');
    const helpEl = document.querySelector('.help');
    const grey = document.querySelector('.grey');
    const main = document.querySelector('main');
    const header = document.querySelector('header');
  
    if (!grey || !main) return;
  
    // Создаём контейнеры один раз
    let leftGroup = grey.querySelector('.left-group');
    if (!leftGroup) {
      leftGroup = document.createElement('div');
      leftGroup.className = 'left-group';
      grey.prepend(leftGroup);
    }
  
    let centerGroup = grey.querySelector('.center-group');
    if (!centerGroup) {
      centerGroup = document.createElement('div');
      centerGroup.className = 'center-group';
      grey.appendChild(centerGroup);
    }
  
    let rightGroup = grey.querySelector('.right-group');
    if (!rightGroup) {
      rightGroup = document.createElement('div');
      rightGroup.className = 'right-group';
      grey.appendChild(rightGroup);
    }
  
    const isDesktop = window.innerWidth >= 768;
  
    if (isDesktop) {
      if (cityEl && !leftGroup.contains(cityEl)) leftGroup.appendChild(cityEl);
      if (phoneEl && !leftGroup.contains(phoneEl)) leftGroup.appendChild(phoneEl);
  
      if (timeEl && !centerGroup.contains(timeEl)) centerGroup.appendChild(timeEl);
  
      if (helpEl && !rightGroup.contains(helpEl)) rightGroup.appendChild(helpEl);
    } else {
      // Возвращаем всё в main
      if (cityEl && !main.contains(cityEl)) main.appendChild(cityEl);
      const mobileContainer = document.querySelector('.mobile-header') || main || document.body;
      if (phoneEl && !header.contains(phoneEl)) header.appendChild(phoneEl);
      if (timeEl && !main.contains(timeEl)) main.appendChild(timeEl);
      if (helpEl && !main.contains(helpEl)) main.appendChild(helpEl);
  
      // Удаляем временные контейнеры, чтобы не мешались
      if (leftGroup) leftGroup.remove();
      if (centerGroup) centerGroup.remove();
      if (rightGroup) rightGroup.remove();
    }
  }
  
  window.addEventListener('resize', moveElementsForDesktop);
  window.addEventListener('DOMContentLoaded', moveElementsForDesktop);
  


  document.addEventListener('DOMContentLoaded', function() {
    const gamepad = document.querySelector('.main-desktop img');
    
    if (!gamepad) return;

    // Анимация появления через 300ms после загрузки
    setTimeout(() => {
        gamepad.style.transition = 'right 1.2s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.8s ease';
        gamepad.style.right = '-100px';
        gamepad.style.opacity = '1';
        
        // Для экранов > 2000px добавляем масштабирование
        if (window.innerWidth >= 2001) {
            gamepad.style.transform = 'translateY(-50%) scale(1.1)';
        }
    }, 300);
});

