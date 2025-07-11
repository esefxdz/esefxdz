document.addEventListener('DOMContentLoaded', () => {
 
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none'); 
  const aboutTab = document.getElementById('about');
  if (aboutTab) aboutTab.style.display = 'block';   

  const buttons = document.querySelectorAll('#top-line button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.id.replace('-btn', '');
      tabs.forEach(tab => tab.style.display = 'none');
      const targetTab = document.getElementById(targetId);
      if (targetTab) targetTab.style.display = 'block';
    });
  });
});
