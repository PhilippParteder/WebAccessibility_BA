export default class MenuItem extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let timer;
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

            const icon = document.createElement('span');
            icon.classList.add('material-symbols-outlined', 'icon');
            icon.innerText = 'expand_more';
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
            display: flex;
            align-items: center;
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
            padding: 0;
            height: 19px;
        }
        button:focus {
            outline: orange auto 5px;
        }
        .open .submenu {
            display: block !important;
        }
        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -moz-font-feature-settings: 'liga';
            -moz-osx-font-smoothing: grayscale;
        }
        .icon{
            transform: translateY(-2px);
        }
        .visually-hidden{
            display: none;
        }
        `;
        this.root.append(style);
    }
}
