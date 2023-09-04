export default class SubMenu extends HTMLUListElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.ariaLabel = 'Submenu';
        this.classList.add('submenu');
        this.subMenuItems.forEach((item, i) => {
            if (i === 0) return;
            const menuItem = document.createElement('li', {
                is: 'my-menu-item',
            });

            menuItem.setAttribute('title', item);
            menuItem.setAttribute('href', this.subMenuItems[0] + '/' + item);
            this.appendChild(menuItem);
        });
        const style = document.createElement('style');
        style.textContent = `
        .submenu {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin: 0px;
            margin-top: 8px;
            padding: 0px;
        }`;
        this.append(style);
    }
}
