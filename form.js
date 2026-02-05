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
        }, 3000)

    } else {
        fSendUser()
    }
}


const fSendUser = async () => {
    const APIreg = "https://consuming-an-api.vercel.app/registrar"

}


const fGetUsers = async () => {
    const APIusers = "https://consuming-an-api.vercel.app/getUsers"
    const local = "http://localhost:3000/getUsers"

    fetch(APIusers)
        .then(response => {

            response.json()
                .then(json => {
                    usersArr.push(json)
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
                    <strong>${user.nome}</strong>
                    <strong>${user.idade} anos de idade</strong>
                <div class='descCont'>
                    <strong>${user.descrição}</strong>
                </div>
            </div>
    `
    }

    )
    console.log('rendering...' + usersArr)
}

const fUsersLoadingState = () => {

    const usersDiv = document.getElementById('cardsContainer')

    while (usersDiv.childNodes.length === 0) {
        console.log('a')
    }
}

fUsersLoadingState()

fGetUsers()





document.getElementById('enviarBotao').addEventListener('click', () => {
    fForm()


})