export default class MenuItem extends HTMLElement {
    constructor() {
        super();

        let title;
        let href;
        // Creates a shadow root
        this.root = this.attachShadow({ mode: 'closed' });

        // Render HTML
        this.root.innerHTML = `
        <li>
            <span>
                <a href="${this.getAttribute('href')}" >
                    ${this.title}
                </a>
            </span>
        </li>`;
    }
    connectedCallback() {}
}
