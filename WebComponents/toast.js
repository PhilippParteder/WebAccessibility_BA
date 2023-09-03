export default class Toast extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.root.innerHTML = `    
        <div class="toast">
            <div class="toast__content">
                <p class="toast__title"></p> 
                <p class="toast__message"></p>
            </div>
            <button class="toast_button" aria-label="close">
            </button>
        </div>`;
    }
    connectedCallback() {
        console.log('toast connected');
        this.renderToast();
        const style = document.createElement('style');
        style.textContent = `
      .toast {
        border: solid 2px;
        border-radius: 4px;
        min-width: 256px;
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 24px;
        padding: 16px 12px;
        pointer-events: all;
        margin-bottom: 16px;
      }
      .toast__container {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 32px;
        right: 32px;
      }
      .toast--success {
        background-color: #c8e6c9;
        border-color: #1b5e20;
        color: #1b5e20;
      }
      .toast--warning {
        background-color: #fff9c4;
        border-color: #964e0f;
        color: #964e0f;
      }
      .toast--error {
        background-color: #ffcdd2;
        border-color: #b71c1c;
        color: #b71c1c;
      }
      .toast--info {
        background-color: #f5f5f5;
        border-color: #212121;
        color: #212121;
      }
      .toast__title {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        margin:0;
        padding:0;
      }
      .toast__content {
        margin: 0px 8px;
      }
      .toast__message {
        margin: 8px 0px;
      }
      button {
        all: unset;
        height: fit-content;
      }
      button:focus {
        outline: orange auto 5px;
      }
      .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -moz-font-feature-settings: 'liga';
          -moz-osx-font-smoothing: grayscale;
      }
      .icon {
          cursor: pointer;
          transition: 0.3s transform;
      }
      .icon:hover {
          transform: rotate(90deg) scale(1.25);
         }`;
        this.root.append(style);
    }
    closeToast() {
        this.root.dispatchEvent(
            new Event('close', {
                composed: true,
            })
        );
    }
    renderToast() {
        this.root
            .querySelector('.toast')
            .classList.add(`toast--${this.toast.status}`);
        this.root.querySelector('.toast__title').innerHTML = `${
            this.toast.status.charAt(0).toUpperCase() +
            this.toast.status.substring(1)
        }`;
        this.root.querySelector(
            '.toast__message'
        ).innerHTML = `${this.toast.message}`;
        if (this.toast.status === 'error' || this.toast.status === 'warning') {
            const icon = document.createElement('span');
            icon.classList.add('material-symbols-outlined', 'icon');
            icon.innerText = 'close';
            this.root.querySelector('button').appendChild(icon);
            this.root.querySelector('button').addEventListener('click', () => {
                this.closeToast();
            });
        } else {
            setTimeout(() => {
                this.closeToast();
            }, 5000);
        }
    }
    disconnectedCallback() {
        console.log('toast disconnected');
    }
}
