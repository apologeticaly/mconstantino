var element = document.getElementById("insert-nav");

element.innerHTML = (`
<nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="/">
        <img class="logo" src="../img/mini.png" alt="">
    </a>

        <ul class="navbar-nav ml-auto" style="flex-direction: row; align-items: center;">
            <li class="nav-item">
                <a class="nav-link" href="/">Work</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resumé</a>
            </li>
        </ul>
</nav>
`);