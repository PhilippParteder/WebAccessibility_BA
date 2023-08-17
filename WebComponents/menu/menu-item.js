export default class MenuItem extends HTMLElement {
    constructor() {
        super();

        // Creates a shadow root
        this.root = this.attachShadow({ mode: 'closed' });

        // Render HTML
        this.root.innerHTML = `
        <li>
            <span>
                <a href="${this.href}" >
                    ${this.title}
                </a>
            </span>
        </li>`;
    }
    connectedCallback() {
        this.root.querySelector('a').href = this.getAttribute('href');
        this.root.querySelector('a').innerHTML = this.title;

        if (!this.hasSubmenu) return;
        const subMenu = document.createElement('my-sub-menu');
        subMenu.subMenuItems = this.subMenuItems;
        this.root.querySelector('span').append(subMenu);
    }
    attributeChangedCallback() {}
}
