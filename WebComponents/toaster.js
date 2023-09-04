export default class Toaster extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
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
                if (JSON.stringify(oldArray) !== JSON.stringify(newArray)) {
                    this.newToasts = [...oldArray, ...newArray].filter(
                        (item) => {
                            const itemString = JSON.stringify(item);
                            return (
                                JSON.stringify(oldArray).indexOf(itemString) ===
                                    -1 ||
                                JSON.stringify(newArray).indexOf(itemString) ===
                                    -1
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
        this.append(style);
    }
    removeToast(index) {
        this.querySelectorAll('.toast').forEach((element) => {
            if (element.index === index)
                setTimeout(() => {
                    element.remove();
                }, 500);
        });
    }
    renderToasts(toasts) {
        if (!toasts) return;
        toasts.forEach((toast, index) => {
            const myToast = document.createElement('div', { is: 'my-toast' });
            myToast.toast = toast;
            myToast.index = index;
            myToast.addEventListener('close', () => {
                this.removeToast(index);
            });
            this.querySelector('#toaster').appendChild(myToast);
        });
    }
}
