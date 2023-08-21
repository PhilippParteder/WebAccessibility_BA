export default class Modal extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let showing = false;
        this.root.innerHTML = `
        <dialog
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="dialog_label"
            aria-describedby="dialog_desc">
            <div id="dialog_label" class="dialog_label">
            </div>
            <div id="dialog_desc" class="dialog_desc">
            </div>
            <div class="dialog_options">
                <button type="button">
                </button>
                <button type="button" >
                </button>
            </div>
        </dialog>`;
    }
    static get observedAttributes() {
        return ['showing'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.showing = newValue;
        // console.log('this.showing = ' + this.showing);
        if (this.showing === 'true')
            this.root.querySelector('dialog').showModal();
        console.log(this.root.querySelector('dialog'));
    }
}
