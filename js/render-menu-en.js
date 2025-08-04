function createMenu(items) {
    const ul = document.createElement("ul");
    ul.className = "menu-column";

    for (const item of items) {

        if (item.children) {
            const li = document.createElement("li");
            li.textContent = item.label;
            li.classList.add("has-submenu");

            const submenu = createMenu(item.children);
            submenu.classList.add("submenu");
            li.appendChild(submenu);
            ul.appendChild(li);
        } else if (item.link) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.link;
            a.textContent = item.label;
            a.style.display = "block";
            li.appendChild(a);
            ul.appendChild(li);
        } else {
            const li = document.createElement("li");
            li.textContent = item.label;
            ul.appendChild(li);
        }

    }

    return ul;
}


const dropdownMenu = document.querySelector(".dropdown-menu");
dropdownMenu.appendChild(createMenu(menuDataEn));
