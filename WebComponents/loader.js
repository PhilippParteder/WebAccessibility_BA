import Boilerplate from './Boilerplate.js';
import Table from './table.js';
import Menu from './menu/menu.js';
import MenuItem from './menu/menu-item.js';
import SubMenu from './menu/sub-menu.js';

if ('customElements' in window) {
    customElements.define('my-table', Table);
    customElements.define('my-boilerplate', Boilerplate);
    customElements.define('my-menu', Menu);
    customElements.define('my-menu-item', MenuItem);
    customElements.define('my-sub-menu', SubMenu);
}
