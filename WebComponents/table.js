export default class Table extends HTMLElement {
    constructor() {
        super();
        // Creates a shadow root
        this.root = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        this.root.innerHTML = `<table>  
        <tbody>
            <tr>
                <th scope="col">Region</th>
                <th scope="col">Electricity</th>
                <th scope="col">Gas</th>
            </tr>
            <tr>
                <th scope="row">East England</th>
                <td>10.40</td>
                <td>2.31</td>
            </tr>
            <tr>
                <th scope="row">East Midlands</th>
                <td>10.55</td>
                <td>2.77</td>
            </tr>
            <tr>
                <th scope="row">London</th>
                <td>10.10</td>
                <td>2.48</td>
            </tr>
        </tbody>
    </table>  `;
    }
}
