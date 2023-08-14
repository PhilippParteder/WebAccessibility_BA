import Boilerplate from './Boilerplate.js';
import Table from './table.js';

if ('customElements' in window) {
    customElements.define('my-table', Table);
    customElements.define('my-boilerplate', Boilerplate);
}
