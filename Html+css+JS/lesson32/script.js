function login() {
    const obj = {
        userName: document.querySelector("#userName").value,
        Passeord: document.querySelector("input[type=password]").value,
    };



    fetch("http://api.shipap.co.il/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password }),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

