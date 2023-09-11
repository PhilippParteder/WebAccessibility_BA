export default class Table extends HTMLElement {
    constructor() {
        super();
        // Creates a shadow root
        this.root = this.attachShadow({ mode: 'closed' });
    }

    static get observedAttributes() {
        return ['dataset'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'dataset' && newValue !== oldValue) {
            console.log(JSON.parse(newValue));
            this.renderTable();
        }
    }
    renderTable() {
        const caption = this.getAttribute('caption');
        if (caption) {
            const captionElement = document.createElement('caption');
            captionElement.textContent = caption;
            table.appendChild(captionElement);
        }
        const dataset = this.getAttribute('dataset');
        if (!dataset) return;

        const parsedData = JSON.parse(dataset);
        const table = document.createElement('table');
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
        this.root.innerHTML = '';
        this.root.appendChild(table);
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
        }`;
        this.root.append(style);
    }
}
