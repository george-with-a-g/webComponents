const underlinetemplate = document.createElement('template');

underlinetemplate.innerHTML = `
    <style>
        *{margin:0;padding:0;box-sizing:border-box;}
    </style>
    <div>
        <p></p>
    </div>
`;
class TextUnderlineComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(underlinetemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('textValue');
    }
}
window.customElements.define('text-card',TextUnderlineComponent);

