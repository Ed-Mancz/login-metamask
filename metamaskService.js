let userWallet = document.getElementById('userWallet').innerHTML

async function login(){
    let accounts = await ethereum.request({ method: 'eth_requestAccounts'})
    userWallet = accounts[0]
}