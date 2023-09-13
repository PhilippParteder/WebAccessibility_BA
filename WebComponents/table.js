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
            this.renderTable(JSON.parse(this.getAttribute('dataset')));
        }
    }

    connectedCallback() {
        this.renderTable(JSON.parse(this.getAttribute('dataset')));
    }

    renderTable(parsedData) {
        const table = document.createElement('table');
        if (this.getAttribute('caption')) {
            const caption = document.createElement('caption');
            caption.innerHTML = this.getAttribute('caption');
            caption.id = 'caption';
            table.appendChild(caption);
        }
        if (parsedData) {
            parsedData.forEach((item, index) => {
                if (index === 0) {
                    const headerRow = document.createElement('tr');
                    for (const key in item) {
                        const th = document.createElement('th');
                        th.textContent = key;
                        th.setAttribute('scope', 'col');
                        headerRow.appendChild(th);
                    }
                    table.appendChild(headerRow);
                }
                const row = document.createElement('tr');
                for (const key in item) {
                    const cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
                table.appendChild(row);
            });
        }

        const container = document.createElement('div');
        container.classList.add('table-container');
        container.setAttribute('aria-labelledby', 'caption');
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
