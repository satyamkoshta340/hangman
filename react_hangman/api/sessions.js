const BASE_URL = "http://127.0.0.1:8000/api/sessions";

async function createSession(name){
    const response = await fetch(`${BASE_URL}/`,{ 
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            name
        }) 

    });

    const session =await response.json();
    console.log(session);
    return session;
}

async function playInSession(id, letter){
    const response = await fetch(`${BASE_URL}/${id}/play`, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            letter
        })
    })
    const session =await response.json();
    return session;
}

module.exports = {
    createSession,
    playInSession
}