var element = document.getElementById("socialnav");

function swapStyleSheet(sheet) {
    document.getElementById("csser").setAttribute("href", sheet);  
}

{/* <div class="btn-group dropup ml-auto">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Theme
  </button>
  <div class="dropdown-menu">
  <a href="#" class="dropdown-item" onclick="swapStyleSheet('public/css/styles.css');">STYLE 1</a> 
  <a href="#" class="dropdown-item" onclick="swapStyleSheet('public/css/testing.css');">STYLE 2</a>
  </div>
</div> */}

element.innerHTML = (`
<div class="row socials">
<a class="back-to-home" href="https://twitter.com/apologeticaly" target="_blank" rel="noopener noreferrer"><p class="back-to-home mb-0">Twitter</p></a>
<a class="back-to-home" href="https://github.com/apologeticaly" target="_blank" rel="noopener noreferrer"><p class="back-to-home ml-3 mb-0">GitHub</p></a>
<a class="back-to-home" href="https://www.linkedin.com/in/msconstantino/" target="_blank" rel="noopener noreferrer"><p class="back-to-home ml-3 mb-0">LinkedIn</p></a>
</div>
`);