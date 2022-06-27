const buttontemplate = document.createElement('template');

buttontemplate.innerHTML = `
    <style>
        *{margin:0;padding:0;box-sizing:border-box;}
        a{width:170px; height:45px;display:flex;justify-content:center;align-items:center;
            position:relative;border: 2px solid black;border-radius:50px;overflow:hidden;
            background-color: transparent;transition:1s;
        }
        p{position:absolute;}
        .text1{margin-top:60px; transition: 1s; color: black;}
        .text2{transition: 1s;}
        a:hover{ background-color: black;}
        a:hover .text1{margin-top: 0; color: white;}
        a:hover .text2{margin-bottom: 60px;}
    </style>
    <div>
        <a>
            <p class="text1"></p>
            <p class="text2"></p>
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
//
