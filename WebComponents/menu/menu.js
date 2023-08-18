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
        </nav>`;
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

        const style = document.createElement('style');
        style.textContent = `
        ul {
            display: flex;
            flex-direction: row;
            list-style-type: none;
            justify-content: center;
            background-color: #2f3542;
            color: #ffffff;
            padding: 32px 0;
            margin: 0px;
          }  
        `;
        this.root.append(style);
    }
}