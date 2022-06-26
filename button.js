const buttontemplate = document.createElement('template');

buttontemplate.innerHTML = `
    <style>
        *{margin:0;padding:0;box-sizing:border-box;}
        a{width:170px; height:45px;display:flex;justify-content:center;align-items:center;
            position:relative;overflow:hidden;border: 2px solid black;border-radius:50px;
        }
        p{position:absolute;}
    </style>
    <div>
        <a>
            <p></p>
            <p></p>
        </a>
    </div>
`;
class ButtonComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(buttontemplate.content.cloneNode(true));
        //this.shadowRoot.querySelector('p').innerText = this.getAttribute('textValue');
        var tags = this.shadowRoot.querySelectorAll('p')
        var x = 0;
        while (x < tags.length){
            var tag = tags[x]
            tag.innerText = this.getAttribute('textValue')
            x= x + 1;
        }

    }
}
window.customElements.define('button-card',ButtonComponent);

