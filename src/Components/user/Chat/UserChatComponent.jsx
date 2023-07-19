import "./UserChatComponent.css"

export default function UserChatComponent() {
    return <>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="check-btn">
        <i className="bi bi-chat-dots chat" title="Chat"></i>
        <span className="position-absolute top-0 start-100 translate-middle p-2 mt-1 bg-danger border border-light rounded-circle"></span>
        <i className="bi bi-x-circle close" title="Close"></i>
    </label>
    <div className="chat-wrapper">
        <div className="chat-header">
            <p>Let's Chat - Online</p>
        </div>
        <div className="chat-form">
            <div className="chat-msg">
            { Array.from({length:20}).map((_, idx) => {
                return (
                <div key={idx}>
                    <p>
                        <b>You wrote:</b> This is a toast message.
                    </p>
                    <p className="bg-primary p-3 ms-4 text-light" style={{borderRadius:"30px"}}>
                        <b>Support wrote:</b> This is a toast message and blah blah blah.
                    </p>
                </div>
                )
                })
            }
            </div>
            <textarea id="clientChatMsg"
            className="form-control"
            placeholder="Type your message">
            </textarea>
            <button className="btn btn-success btn-block">Submit</button>
        </div>
    </div>
    </>
}