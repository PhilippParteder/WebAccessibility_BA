import SubMenu from './menu/sub-menu.js';
import MenuItem from './menu/menu-item.js';
import Menu from './menu/menu.js';
import Modal from './modal.js';
import Toast from './toast.js';
import Toaster from './toaster.js';

if ('customElements' in window) {
    customElements.define('my-sub-menu', SubMenu, { extends: 'ul' });
    customElements.define('my-menu-item', MenuItem, { extends: 'li' });
    customElements.define('my-menu', Menu);
    customElements.define('my-modal', Modal);
    customElements.define('my-toast', Toast, { extends: 'div' });
    customElements.define('my-toaster', Toaster);
}
