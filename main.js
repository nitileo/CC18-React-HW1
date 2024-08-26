const st1 = {display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',width:'500px',hieght:'500px',margin:'auto',padding:'16px',borderRadius:'12px',backgroundColor:'whitesmoke',boxShadow:"5px 5px 12px silver"}


function App(){
    return(
        <div style={st1}>
            <Profile />
            <div style = {{display:'flex',textAlign:'center',justifyContent:'center',gap:'48px'}}>
                <Posts/>
                <Following />
                <Follower />
            </div>
        </div>
    )
}

function Profile(){
    return(
        <div>
            <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="profilepicture" style={{borderRadius:'50%'}} />
            <h2>Julienne Moore</h2>
            <p>Julianne.moore@company.com</p>
        </div>
    )
}

function Posts(){
    return (
        <div>
            <h2>25</h2>
            <p>Posts</p>
        </div>
    )
}

function Following(){
    return (
        <div>
            <h2>350</h2>
            <p>Following</p>
        </div>
    )
}

function Follower(){
    return (
        <div>
            <h2>1.5K</h2>
            <p>Follower</p>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)