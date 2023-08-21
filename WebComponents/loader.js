import Menu from './menu/menu.js';
import MenuItem from './menu/menu-item.js';
import SubMenu from './menu/sub-menu.js';
import Modal from './modal.js';

if ('customElements' in window) {
    customElements.define('my-menu', Menu);
    customElements.define('my-menu-item', MenuItem);
    customElements.define('my-sub-menu', SubMenu);
    customElements.define('my-modal', Modal);
}
