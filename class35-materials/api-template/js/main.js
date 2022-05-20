//Make an api request using async await
const url = `https://dog.ceo/api/breeds/image/random`;

const getDoge = async _ => {
    const response = await fetch(url);
    const data = await response.json();
    document.querySelector('img').src = data.message;
    console.log(data.message);
};

document.querySelector('button').addEventListener('click', _ => {
    getDoge();
})