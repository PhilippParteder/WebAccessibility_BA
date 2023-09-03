export default class Toaster extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = `
        <div role="alert" aria-live="polite" class="toaster" id="toaster" aria-atomic="true">
        </div>`;
    }

    static get observedAttributes() {
        return ['toasts'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'toasts') {
            console.log(`'this.toasts' set/changed`);
            if (!oldValue) {
                console.log('first');
                this.renderToasts(JSON.parse(newValue));
            } else {
                console.log('after');

                const oldArray = JSON.parse(oldValue);
                const newArray = JSON.parse(newValue);

                console.log(oldArray);
                console.log(newArray);

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
                    console.log(this.newToasts);
                    this.renderToasts(this.newToasts);
                }
            }
        }
    }

    connectedCallback() {
        console.log('toaster connected');
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
        this.root.querySelectorAll(`my-toast`).forEach((element) => {
            if (element.index === index) element.remove();
        });
    }
    renderToasts(toasts) {
        console.log('rendering:');
        console.log(toasts);
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
