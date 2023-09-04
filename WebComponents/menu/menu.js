export default class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav aria-label="Menu">
            <ul class="menu">
            </ul>
        </nav>`;
    }
    connectedCallback() {
        this.menuItems.forEach((item) => {
            if (typeof item === 'string') {
                const menuItem = document.createElement('li', {
                    is: 'my-menu-item',
                });
                menuItem.setAttribute('title', item);
                menuItem.setAttribute('href', item);
                this.querySelector('ul').appendChild(menuItem);
            } else {
                const menuItem = document.createElement('li', {
                    is: 'my-menu-item',
                });
                menuItem.setAttribute('title', item[0]);
                menuItem.setAttribute('href', item[0]);
                menuItem.hasSubmenu = true;
                menuItem.subMenuItems = item;
                this.querySelector('ul').appendChild(menuItem);
            }
        });
        const style = document.createElement('style');
        style.textContent = `
        .menu {
            display: flex;
            flex-direction: row;
            list-style-type: none;
            justify-content: center;
            background-color: #2f3542;
            color: #ffffff;
            padding: 32px 0;
            margin: 0px;
        }`;
        this.append(style);
    }
}
