
document.querySelector('button').addEventListener('click', _ => {

    const number = Math.floor(Math.random() * 502);

    const url = `https://bobsburgers-api.herokuapp.com/characters/${number}`;

    fetch (url)
        .then (result => result.json())
        .then (data => {
            console.log(data);
            document.querySelector('h2').innerText = `Name: ${data.name}`;
            document.querySelector('img').src = data.image;
            document.querySelector('.gender').innerText = `Gender: ${data.gender}`;
            document.querySelector('.hair').innerText = `Hair Color: ${data.hairColor}`;
            document.querySelector('.occupation').innerText = `Occupation: ${data.occupation}`;
            document.querySelector('.voice').innerText = `Voiced By: ${data.voicedBy}`;
        })
        .catch (error => error);

});


