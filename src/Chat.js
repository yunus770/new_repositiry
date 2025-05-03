import { useState } from 'react';

function Chat() {

    const [message, setMessage] = useState("")
    const [chat, setChat] = useState([])

    const send = () => {
        if (message.trim() === "") return;
        setChat([...chat, message]);
        setMessage("");
    };

    return (
        <div>
            <h2>Çat</h2>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={send}>Ugratmak</button>
             <div> 
               {chat.map((msg, i) =>(
                    <p key={i}> {msg}</p> ))}
             </div>
        </div>
    );
}

export default Chat;