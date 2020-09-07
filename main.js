class patternPrinting extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        const form = document.createElement('form');
        const inputPattern = document.createElement('input');
        const inputCount = document.createElement('input');
        const submit = document.createElement('BUTTON');
        submit.innerHTML = "SUBMIT"; 
        form.appendChild(inputPattern);
        form.appendChild(inputCount);
        form.appendChild(submit);

        form.addEventListener('submit', e => {
            display();
            e.preventDefault();
        });

        shadowRoot.appendChild(form);

        const divPattern = document.createElement('div');
        shadowRoot.appendChild(divPattern);

        function display(){
            divPattern.innerHTML= printPattern();
        }

        function printPattern(){
            let pattern ="";
            for(let i=1;i<=inputCount.value;i++){
                 pattern = pattern + inputPattern.value + " "; 
            }

            return pattern;
        }        
    }
}

customElements.define('print-pattern', patternPrinting);