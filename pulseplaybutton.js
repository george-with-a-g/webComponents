const pulsetemplate = document.createElement('template');

pulsetemplate.innerHTML = `
    <style>
        *{margin:0;padding:0;box-sizing:border-box;}
    </style>
    <div>
        <p></p>
    </div>
`;
class PulseButtonTemplate extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(pulsetemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('textValue');
    }
}
window.customElements.define('text-card',PulseButtonTemplate);

