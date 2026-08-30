const categories = document.querySelectorAll('.category');
const subCategories = document.querySelectorAll('.sub-category');

// Ensure the menu always starts completely closed.
document.querySelectorAll('.category, .sub-category').forEach(item => {
  item.classList.remove('active');
});
document.querySelectorAll('.category-header, .sub-header').forEach(button => {
  button.setAttribute('aria-expanded', 'false');
});

categories.forEach(category => {
  const button = category.querySelector('.category-header');

  button.addEventListener('click', () => {
    const isActive = category.classList.contains('active');

    categories.forEach(item => {
      item.classList.remove('active');
      item.querySelector('.category-header').setAttribute('aria-expanded', 'false');
      item.querySelectorAll('.sub-category').forEach(sub => {
        sub.classList.remove('active');
        sub.querySelector('.sub-header').setAttribute('aria-expanded', 'false');
      });
    });

    if (!isActive) {
      category.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

subCategories.forEach(sub => {
  const button = sub.querySelector('.sub-header');

  button.addEventListener('click', () => {
    const isActive = sub.classList.contains('active');
    const parent = sub.closest('.category');

    parent.querySelectorAll('.sub-category').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.sub-header').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      sub.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
