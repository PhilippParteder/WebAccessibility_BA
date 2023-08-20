export default class SubMenu extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
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
        const style = document.createElement('style');
        style.textContent = `
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin: 0px;
            margin-top: 8px;
            padding: 0px;
        }
          
        `;
        this.root.append(style);
    }
}
