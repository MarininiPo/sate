document.querySelectorAll('.questions-items-h3').forEach(function (item) {
    item.addEventListener('click', function () {
      // Переключаем класс между 'open' и 'close'
      item.classList.toggle('open');
      item.classList.toggle('close');
  
      // Находим следующий параграф и переключаем его видимость
      let paragraph = item.nextElementSibling;
      if (paragraph && paragraph.classList.contains('questions-items-p')) {
        paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
  
  const projectsData = [
    {
      imgSrc: './img/arena.jpg',
      rectangleImgSrc: './img/Rectangle.svg',
      title: 'Газпром Арена',
      description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному событию.'
    },
    {
      imgSrc: './img/arena.jpg',
      rectangleImgSrc: './img/Rectangle.svg',
      title: 'Газпром Арена',
      description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному событию.'
    },
    {
      imgSrc: './img/arena.jpg',
      rectangleImgSrc: './img/Rectangle.svg',
      title: 'Газпром Арена',
      description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному событию.'
    }
  ];
  
  // Данные для строительных изображений
  const imagesData = [
    { imgSrc: './img/bilding.png', altText: 'Bilding 1' },
    { imgSrc: './img/bilding.png', altText: 'Bilding 2' },
    { imgSrc: './img/bilding.png', altText: 'Bilding 3' },
    { imgSrc: './img/bilding.png', altText: 'Bilding 4' },
    { imgSrc: './img/bilding.png', altText: 'Bilding 5' },
    { imgSrc: './img/bilding.png', altText: 'Bilding 6' },
    { imgSrc: './img/bilding.png', altText: 'Bilding 7' },
    { imgSrc: './img/bilding.png', altText: 'Bilding 8' }
    
  ];
  
  // Данные для блоков "О нас"
  const aboutWorkData = [
    { iconSrc: './img/icon-bilding.svg', iconAlt: 'icon-bilding', title: 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ' },
    { iconSrc: './img/icon-bilding.svg', iconAlt: 'icon-bilding', title: 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ' },
    { iconSrc: './img/icon-bilding.svg', iconAlt: 'icon-bilding', title: 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ' },
    { iconSrc: './img/icon-bilding.svg', iconAlt: 'icon-bilding', title: 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ' },
    { iconSrc: './img/icon-bilding.svg', iconAlt: 'icon-bilding', title: 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ' },
    { iconSrc: './img/icon-bilding.svg', iconAlt: 'icon-bilding', title: 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ' }
  ];
  
  // Функция для рендеринга данных с использованием шаблона
  function renderTemplate(templateId, data, containerSelector) {
    const source = document.getElementById(templateId).innerHTML;
    const template = Handlebars.compile(source);
    const html = template(data);
    document.querySelector(containerSelector).innerHTML = html;
  }
  
  // Рендеринг блоков
  document.addEventListener("DOMContentLoaded", function () {
    renderTemplate('big-projects-template', { projects: projectsData }, '.big-projects-items');
    renderTemplate('images-building-template', { images: imagesData }, '.images-bilding-grid');
    renderTemplate('about-work-template', { items: aboutWorkData }, '.about-work-items');
  });