export default class Toaster extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.root.innerHTML = `
        <div role="alert" aria-live="polite" class="toaster" id="toaster" aria-atomic="true">
        </div>`;
    }

    static get observedAttributes() {
        return ['toasts'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'toasts') {
            if (!oldValue) {
                this.renderToasts(JSON.parse(newValue));
            } else {
                const oldArray = JSON.parse(oldValue);
                const newArray = JSON.parse(newValue);
                if (oldValue !== newValue) {
                    this.newToasts = [...oldArray, ...newArray].filter(
                        (item) => {
                            const itemString = JSON.stringify(item);
                            return (
                                oldValue.indexOf(itemString) === -1 ||
                                newValue.indexOf(itemString) === -1
                            );
                        }
                    );
                    this.renderToasts(this.newToasts);
                }
            }
        }
    }

    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = `
        .toaster {
            align-items: flex-end;
            display: flex;
            flex-direction: column;
            inset: 32px 0px auto 32px;
            padding-right: 32px;
            position: absolute;
            pointer-events: none;
            z-index: 10000;
            overflow-x: hidden;
        }`;
        this.root.append(style);
    }
    renderToasts(toasts) {
        if (!toasts) return;
        toasts.forEach((toast, index) => {
            const myToast = document.createElement('my-toast');
            myToast.toast = toast;
            myToast.index = index;
            myToast.addEventListener('close', () => {
                this.removeToast(index);
            });
            this.root.querySelector('#toaster').appendChild(myToast);
        });
    }
    removeToast(index) {
        this.root.querySelectorAll('my-toast').forEach((element) => {
            if (element.index === index)
                setTimeout(() => {
                    element.remove();
                }, 500);
        });
    }
}
