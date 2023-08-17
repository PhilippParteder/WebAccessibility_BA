export default class SubMenu extends HTMLElement {
    constructor() {
        super();

        // Creates a shadow root
        this.root = this.attachShadow({ mode: 'closed' });

        // Render HTML
        this.root.innerHTML = `
        <ul aria-label="Submenu"></ul>
      `;
    }
    connectedCallback() {
        this.subMenuItems.forEach((item, i) => {
            if (i === 0) return;
            const menuItem = document.createElement('my-menu-item');
            menuItem.setAttribute('title', item);
            menuItem.setAttribute('href', this.subMenuItems[0] + '/' + item);
            this.root.querySelector('ul').appendChild(menuItem);
        });
    }
}
