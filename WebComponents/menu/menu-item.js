export default class MenuItem extends HTMLElement {
    constructor() {
        super();

        // Creates a shadow root
        this.root = this.attachShadow({ mode: 'closed' });
        let timer;
        // Render HTML
        this.root.innerHTML = `
        <li>
            <span class="link">
                <a href="${this.href}" aria-expanded="false">
                    ${this.title}
                </a>
            </span>
        </li>`;
    }

    connectedCallback() {
        this.root.querySelector('a').href = this.getAttribute('href');
        this.root.querySelector('a').innerHTML = this.title;

        if (this.hasSubmenu) {
            const subMenu = document.createElement('my-sub-menu');
            subMenu.subMenuItems = this.subMenuItems;
            subMenu.style.display = 'none';
            subMenu.classList.add('submenu');
            this.root.querySelector('li').appendChild(subMenu);

            const button = document.createElement('button');

            const span = document.createElement('span');
            span.classList.add('visually-hidden');
            span.innerHTML = `show submenu for "${this.title}"`;
            button.appendChild(span);

            const icon = document.createElement('i');
            icon.classList.add('fa-regular', 'fa-angle-down');
            button.appendChild(icon);

            button.addEventListener('click', (event) => {
                event.preventDefault();
                const a = this.root.querySelector('a');
                const label = this.root.querySelector('button > span');
                if (a.getAttribute('aria-expanded') == 'true') {
                    a.setAttribute('aria-expanded', 'false');
                    label.innerHTML = `show submenu for "${this.title}"`;
                    subMenu.style.display = 'none';
                } else {
                    a.setAttribute('aria-expanded', 'true');
                    label.innerHTML = `hide submenu for "${this.title}"`;
                    subMenu.style.display = 'block';
                }
            });
            this.root.querySelector('span').append(button);
            this.root.querySelector('li').addEventListener('mouseover', () => {
                this.root.querySelector('li').classList.add('open');
                clearTimeout(this.timer);
            });
            this.root.querySelector('li').addEventListener('mouseout', () => {
                this.timer = setTimeout(() => {
                    this.root.querySelector('li').classList.remove('open');
                }, 500);
            });
        }

        const style = document.createElement('style');
        style.textContent = `
        .link {
            padding: 4px 8px;
        }
        .link > a {
            color: #ffffff;
            text-decoration: none;
        }
        .link:focus,
        .link:hover {
            text-decoration: underline;
        }
        button {
            all: unset;
            cursor: pointer;
            padding: 0px 4px 0px 0px;
        }
        button:focus {
            outline: orange auto 5px;
        }
        .fa-angle-down::before {
            content: "\\f107";
        }
        i { 
            font-family: FontAwesome;
            font-size: 10pt;
            font-weight: normal;
            font-style: normal;
            margin: 0px 0px 0px 2px;
            text-decoration: none;
        }
        .open .submenu {
            display: block !important;
        }
        .visually-hidden{
            display: none;
        }
        `;
        this.root.append(style);
    }
}
