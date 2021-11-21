export default function handler(req, res) {
    const url = 'https://hebrewapi.herokuapp.com/all/' + encodeURI(req.query.t)
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);
            res.status(200).json(responseData);
        })
}