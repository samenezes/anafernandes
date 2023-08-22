import './corpo.css'

function corpo(){
    return(
        <>
        <div>
            <h1>Perguntas: <span id="perguntas"> </span></h1>
            <h1>Nível de dificuldade <span id="dificuldade"> </span></h1>
        </div>

        </>
    )
}

function primaryRequest(){
    const valores = fetch('https://opentdb.com/api.php?amount=30&category=16').then(batata => {
        
        batata.json().then(bacon => {
            var perguntas = document.querySelector('#perguntas');
            perguntas.innerHTML = `${bacon.question}`;
            var dificuladde = document.querySelector('#dificuldade');
            dificuladde.innerHTML = `${bacon.difficulty}`;
        }});
    }
    primaryRequest();

export default corpo