export default class Toaster extends HTMLElement {
    constructor() {
        super();
        this._toasts = [];
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = `
        <div role="alert" aria-live="polite" class="toaster" id="toaster" aria-atomic="true">
        </div>`;
    }

    set toasts(newToasts) {
        this._toasts = newToasts;
        this.renderToasts(newToasts);
    }

    get toasts() {
        return this._toasts;
    }

    connectedCallback() {
        this.renderToasts(this._toasts);
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
    removeToast(index) {
        this._toasts.splice(index, 1);
        this.root.querySelectorAll(`my-toast`).forEach((element) => {
            if (element.index === index) element.remove();
        });
    }
    renderToasts(toasts) {
        console.log('rendering');
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
}
