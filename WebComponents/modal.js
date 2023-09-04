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
                <slot name="dialog_label"></slot>
            </div>
            <div id="dialog_desc" class="dialog_desc">
                <slot name="dialog_desc"></slot>
            </div>
            <div class="dialog_options">
                <button class="dialog__button" type="button" id="cancel_button" >
                    <slot name="cancel_button"></slot>
                </button>
                <button class="dialog__button" type="button" id="confirm_button">
                    <slot name="confirm_button"></slot>
                </button>
            </div>
        </dialog>`;
    }
    static get observedAttributes() {
        return ['showing'];
    }
    connectedCallback() {
        this.root
            .querySelector('dialog')
            .addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    this.closeModal();
                    this.root.dispatchEvent(
                        new Event('escape', {
                            composed: true,
                        })
                    );
                }
            });
        this.root
            .querySelector('#confirm_button')
            .addEventListener('click', (event) => {
                this.closeModal();
                this.root.dispatchEvent(
                    new Event('confirm', {
                        composed: true,
                    })
                );
            });
        this.root
            .querySelector('#cancel_button')
            .addEventListener('click', (event) => {
                this.closeModal();
                this.root.dispatchEvent(
                    new Event('cancel', {
                        composed: true,
                    })
                );
            });

        const style = document.createElement('style');
        style.textContent = `
        .hidden {
            display: none;
        }
        .dialog_label {
            text-align: center;
        }
        .dialog_desc {
            padding: 10px 20px;
        }
        .dialog_options {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        .dialog_options > .dialog__button {
            margin: 8px;
            padding: 4px 8px;
            min-width: 32px;
            border: 1px solid black;
            border-radius: 4px;
            background-color: #fefefe;
            font-size: large;
            text-align: center;
            cursor: pointer;
        }
        .dialog_options > .dialog__button:hover {
            background-color: #dddddd;
        }`;
        this.root.append(style);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.showing = newValue;
        this.root.querySelector('dialog').returnValue = 'escape';
        if (this.showing === 'true')
            this.root.querySelector('dialog').showModal();
    }
    closeModal() {
        this.root.querySelector('dialog').close();
    }
}
