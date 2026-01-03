





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
    console.log('enviando')
}


const fReceiveUsers = async () => {
    const APIusers = "https://consuming-an-api.vercel.app/exibir"
    fetch(APIusers)
}

fReceiveUsers()

document.getElementById('enviarBotao').addEventListener('click', () => {
    fForm()


})