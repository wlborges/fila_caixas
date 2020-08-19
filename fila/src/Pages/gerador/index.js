import React, {useState, useEffect} from 'react';
import './styles.css';
export default function Gerador(){

    const [senhaPref, setSenhaPref] = useState(0);
    const [lastSenhaPref, setLastSenhaPref] = useState(0);
    const [senhaNormal, setSenhaNormal] = useState(0);
    const [lastSenhaNormal, setLastSenhaNormal] = useState(0);
    const [painel, setPainel] = useState([]);

    function geraSenhaPref(){
        setSenhaPref(senhaPref +1)
    }
    function geraSenhaNormal(){
        setSenhaNormal(senhaNormal +1);
    }

    function chamaSenha(guiche, tipo){
        
        if(tipo === 'p'){
            setLastSenhaPref(lastSenhaPref+1);
            setPainel.push()
        }
    }
    


    return(
        <div>
            <div class="grid-container">
                <div class="senha">Senha <br/> CXP-001</div>
                <div class="historico">
                    <div class="header">Historico de chamadas</div>
                    <div class="itens">
                        <ul>
                            <li>Senha</li>
                            <li>Guiche</li>
                            <li>Hora</li>
                        </ul>

                        <ul>
                            <li>CXP-001</li>
                            <li>1</li>
                            <li>22:22</li>
                        </ul>
                    </div>
                </div>
                <div class="guiche">Guiche <br/>1</div>
            </div>

            <button onClick={() => geraSenhaPref()}>gerar senha Preferencial</button>
            <button onClick={() => geraSenhaNormal()}>gerar senha Normal</button>
            <br/>
            Senhas Preferencial:{senhaPref} <br/>
            Senhas Normal:{senhaNormal}
        </div>
    )
}