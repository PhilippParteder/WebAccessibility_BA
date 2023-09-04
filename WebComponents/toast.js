export default class Toast extends HTMLDivElement {
    constructor() {
        super();
        this.innerHTML = `    
            <div class="toast__content">
                <p class="toast__title"></p> 
                <p class="toast__message"></p>
            </div>`;
    }
    connectedCallback() {
        this.renderToast();
        this.classList.add('toast');
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
          animation: slideInRight 0.5s ease-in-out;
        }
        .toast.slideOut {
          animation: slideOutLeft 0.5s ease-in-out;
          animation-fill-mode: both;
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
          }
        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }`;
        this.append(style);
    }
    closeToast() {
        this.dispatchEvent(new Event('close'));
        this.classList.add('slideOut');
    }
    renderToast() {
        this.classList.add(`toast--${this.toast.status}`);
        this.querySelector('.toast__title').innerHTML = `${
            this.toast.status.charAt(0).toUpperCase() +
            this.toast.status.substring(1)
        }`;
        this.querySelector(
            '.toast__message'
        ).innerHTML = `${this.toast.message}`;
        if (this.toast.status === 'error' || this.toast.status === 'warning') {
            const button = document.createElement('button');
            button.classList.add('toast_button');
            button.setAttribute('aria-label', 'close');
            const icon = document.createElement('span');
            icon.classList.add('material-symbols-outlined', 'icon');
            icon.innerText = 'close';
            button.appendChild(icon);
            button.addEventListener('click', () => {
                this.closeToast();
            });
            this.appendChild(button);
        } else {
            setTimeout(() => {
                this.closeToast();
            }, 5000);
        }
    }
}
