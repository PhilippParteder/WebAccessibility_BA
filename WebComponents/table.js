export default class Table extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
    }

    static get observedAttributes() {
        return ['caption', 'dataset'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (
            name === 'dataset' ||
            (name === 'caption' && newValue !== oldValue)
        ) {
            this.renderTable();
        }
    }

    connectedCallback() {
        this.renderTable();
    }

    renderTable() {
        const caption = this.getAttribute('caption');
        const dataset = this.getAttribute('dataset');

        if (!dataset) return;

        const parsedData = JSON.parse(dataset);
        const table = document.createElement('table');

        if (caption) {
            const captionElement = document.createElement('caption');
            captionElement.textContent = caption;
            table.appendChild(captionElement);
        }

        parsedData.forEach((item, index) => {
            if (index === 0) {
                const headerRow = document.createElement('tr');
                for (const key in item) {
                    if (item.hasOwnProperty(key)) {
                        const th = document.createElement('th');
                        th.textContent = key;
                        th.setAttribute('scope', 'col');
                        headerRow.appendChild(th);
                    }
                }
                table.appendChild(headerRow);
            }

            const row = document.createElement('tr');
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    const cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
            }
            table.appendChild(row);
        });

        const container = document.createElement('div');
        container.classList.add('table-container');
        container.appendChild(table);

        this.root.innerHTML = '';
        this.root.appendChild(container);

        const style = document.createElement('style');
        style.textContent = `
        table,
        th,
        td {
          border: 1px solid black;
        }
        table {
          border-collapse: collapse;
        }
        td {
          padding: 2px 8px;
        }
        .table-container {
            overflow-x: auto;
        }`;
        this.root.appendChild(style);
    }
}
