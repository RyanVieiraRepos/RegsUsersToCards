var usersArray = []


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

    const users = fetch(APIusers)

        .then(response => {
            response.json().then(json => {
                console.log(json),
                    document.querySelector('body').innerHTML +=
                    `
                    <div class='card'>
                       <strong>${json.nome}</strong>
                    <strong>${json.idade} anos de idade</strong>
   <div class='descCont'>
                    <strong>${json.descrição}</strong>
   </div>
                    </div
                    `

            })

                .catch(error => console.log('No response'))

        });

}

const fRenderCards = () => {

}

fGetUsers()





document.getElementById('enviarBotao').addEventListener('click', () => {
    fForm()


})