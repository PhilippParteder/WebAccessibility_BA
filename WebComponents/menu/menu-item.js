export default class MenuItem extends HTMLLIElement {
    constructor() {
        super();
        this.innerHTML = `
            <span class="menu__link">
                <a href="${this.href}" aria-expanded="false">
                    ${this.title}
                </a>
            </span>`;
    }

    connectedCallback() {
        this.querySelector('a').href = this.getAttribute('href');
        this.querySelector('a').innerHTML = this.title;

        if (this.hasSubmenu) {
            const subMenu = document.createElement('ul', {
                is: 'my-sub-menu',
            });
            subMenu.subMenuItems = this.subMenuItems;
            subMenu.style.display = 'none';
            subMenu.classList.add('submenu');
            this.appendChild(subMenu);

            const button = document.createElement('button');
            button.classList.add('menu__toggle-button');

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
                const a = this.querySelector('a');
                const label = this.querySelector('button > span');
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
            this.querySelector('span').append(button);
            this.addEventListener('mouseover', () => {
                this.classList.add('open');
                clearTimeout(this.timer);
            });
            this.addEventListener('mouseout', () => {
                this.timer = setTimeout(() => {
                    this.classList.remove('open');
                }, 500);
            });
        }

        const style = document.createElement('style');
        style.textContent = `
        .menu__link {
            padding: 4px 8px;
            display: flex;
            align-items: center;
        }
        .menu__link > a {
            color: #ffffff;
            text-decoration: none;
        }
        .menu__link:focus,
        .menu__link:hover {
            text-decoration: underline;
        }
        .menu__toggle-button {
            all: unset;
            cursor: pointer;
            padding: 0;
            height: 19px;
        }
        .menu__toggle-button:focus {
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
        this.append(style);
    }
}
