var usersArr = []






const fForm = () => {

    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const email = document.getElementById('email').value
    const descrição = document.getElementById('sobre').value


    if (!nome || !sobrenome || !email || !descrição) {
        document.getElementById('fillEm').style.display = 'flex'


        document.getElementById('enviarBotao').style.boxShadow = '0px'

        setTimeout(() => {
            document.getElementById('fillEm').style.display = 'none'
        }, 2000)

    } else {
        fSendUser(nome, sobrenome, email, descrição)
    }
}


const fSendUser = async (nome, sobrenome, email, descrição) => {
    const APIreg = "https://consuming-an-api.vercel.app/registrar"
    let user = {
        nome, sobrenome, email, descrição
    }
    console.log(user)




    console.log('enviando')


    fetch(APIreg, {                  //fetch,metodo, header com tipo de dado (especificação necessaria),  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(user)  // CONTEUDO, objeto js para json


    }).then(res => {
        if (res.ok) {
            console.log('user sent:' + res.status)
        } else {
            console.log('error while sending user:' + res.status)
        }
    })

        .catch(err => { console.error(err) })

}


const fGetUsers = async () => {
    const APIusers = "https://consuming-an-api.vercel.app/getUsers"
    const local = "http://localhost:3000/getUsers"

    fetch(APIusers)
        .then(response => {

            response.json()
                .then(json => {
                    usersArr = json
                    console.log(usersArr)
                    fRenderCards()
                })
        }).catch(err => console.error(err));


}

const fRenderCards = () => {

    const container = document.getElementById('cardsContainer')

    container.innerHTML = '';

    usersArr.forEach((user) => {


        container.innerHTML += `
           <div class='card'>
           <img src='image.png'/>
                    <strong>${user.nome}</strong>
                    <strong>${user.idade} anos de idade</strong>
                
                    <strong>${user.descrição}</strong>
                
            </div>
    `
    }

    )
    console.log('rendering...' + usersArr)
}





fGetUsers()





document.getElementById('enviarBotao').addEventListener('click', () => {
    fForm()


})