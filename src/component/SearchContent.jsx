import { useEffect, useState } from "react"
import "../assets/styles/searchDiv.css"

export default function SearchContentDiv() {
    const [message, setMessage] = useState([])

    const sendMessage = (e) => {
        e.preventDefault();
        setMessage(['test Data', ...message])
    }

    console.log(message)
    return (
        <>
            <aside id="mainContent" style={{ backgroundColor: '#202123', height: '100vh', marginLeft: '300px' }}>
                {message.length !== 0 ?
                    (<div className="middle-section p-0" style={{ minHeight: '85%', maxHeight: '85%', overflow: 'auto' }}>
                        {message.map((data) => (
                            <>
                                <div style={{ backgroundColor: '#2a2a2b', padding: '15px', marginTop: '10px', alignContent: 'center' }}>{data}</div>
                                <div>Response of Search</div>
                            </>
                        ))}
                    </div>) :
                    (<div className="middle-section" style={{ minHeight: '85%', maxHeight: '85%', paddingTop: '20%' }}>
                        <h1>Wellcome To ChatBot</h1>
                        <p>This is next generation AI base chat bot </p>
                    </div>)
                }
                <div className="below-section" style={{ position: 'relative' }}>
                    <input type="text" style={{ width: '90%', height: '50px', borderRadius: '10px', border: '0', marginLeft: '5px', padding: '10px' }} name="newMessage" />
                    <button style={{ margin: '10px', border: '0', fontSize: '25px', backgroundColor: 'transparent', color: 'white' }} onClick={sendMessage}><i className="fa fa-send"></i></button>

                </div>
            </aside>
        </>
    )
}