
const getGithubUserData = () => {

    const USERNAME = document.querySelector(".input").value;

    const reqUrl = `https://api.github.com/users/${USERNAME}`;


    fetch(reqUrl)
    .then((response) => {
        return response.json()
    })
    .then((DATA) => {
        
        let DisplayThis = `Name: ${DATA.name} , Followers: ${DATA.followers}`;


        document.querySelector(".card2").innerHTML = DisplayThis;
        
        



    })
    .catch((err) => {
        console.log(`Error Occured: ${err}`);
    })

    



}

document.querySelector(".reqBtn").addEventListener("click", getGithubUserData);