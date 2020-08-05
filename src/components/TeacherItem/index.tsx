import React from 'react';

import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
function TeacherItem(){
    return(
        <article className="teacher-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/62311509?s=460&u=49d3488c7088800a4a4866353fbd68064de814a8&v=4" alt="Rodrigo Vieira"/>
                            <div>
                                <strong>Rodrigo Vieira</strong>
                                <span>Programação</span>
                            </div>
                        </header>
                        <p>Entusiasta das melhores tecnologias de aplicações de alto nível
                            <br></br><br></br>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus asperiores cumque ex nihil a vitae aspernatur? Temporibus enim delectus eum magni, necessitatibus magnam non voluptatibus dicta qui. Culpa, ea!
                        </p>
                        <footer>
                            <p>
                            Preço/hora
                                <strong>R$ 80,00</strong>
                            </p>
                            <button type="button">
                            Entrar em contato
                                <img src={ whatsappIcon } alt="envie sua mensagem"/>
                               
                            </button>
                        </footer>
                </article>
    )
}
export default TeacherItem;