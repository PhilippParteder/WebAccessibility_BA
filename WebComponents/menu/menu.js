export default class Menu extends HTMLElement {
    constructor() {
        super();

        // Creates a shadow root
        this.root = this.attachShadow({ mode: 'closed' });

        // Render HTML
        this.root.innerHTML = `
        <nav aria-label="Menu">
            <ul>
            
            </ul>
        </nav>
      `;
    }
    connectedCallback() {
        this.menuItems.forEach((item) => {
            // console.log(item);
            if (typeof item === 'string') {
                const menuItem = document.createElement('my-menu-item');
                menuItem.setAttribute('title', item);
                menuItem.setAttribute('href', item);
                this.root.querySelector('ul').appendChild(menuItem);
            } else {
                const menuItem = document.createElement('my-menu-item');
                menuItem.setAttribute('title', item[0]);
                menuItem.setAttribute('href', item[0]);
                menuItem.hasSubmenu = true;
                menuItem.subMenuItems = item;
                this.root.querySelector('ul').appendChild(menuItem);
            }
        });
        // console.log(this.root.querySelector('ul'));
    }
}
