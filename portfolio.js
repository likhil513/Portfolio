const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Save theme preference
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


const links =document.querySelectorAll('.routes a')
const mainSection=document.getElementById('main_section')

loadPage('index.html')
links.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const url=link.dataset.url;
        loadPage(url);
    })
})

function loadPage(url){
    fetch(url)
    .then(response=>response.text())
    .then(html=>{
        mainSection.innerHTML = html;
    })
}
