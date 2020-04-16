var element = document.getElementById("insert-nav");

element.innerHTML = (`
<nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="/">
        <img class="logo" src="img/mini.png" alt="">
    </a>

        <ul class="navbar-nav ml-auto" style="flex-direction: row; align-items: center;">
            <li class="nav-item">
                <a class="nav-link" href="/">Work</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link resume" href="/resume.pdf" tabindex="-1" aria-disabled="true">Resumé</a>
            </li>
        </ul>
</nav>
`);