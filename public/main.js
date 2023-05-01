var waterBtn = document.getElementsByClassName("waterBtn");
var sunBtn = document.getElementsByClassName("sunBtn");
var trash = document.getElementsByClassName("fa-trash");

Array.from(waterBtn).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.childNodes[1].innerText
    const water = this.parentNode.childNodes[3].innerText
    console.log('working', name, water)
    fetch('messages/water', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'water': water
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});
Array.from(sunBtn).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.childNodes[1].innerText
    const sun = parseFloat(this.parentNode.childNodes[5].innerText)
    console.log('working', name, sun)
    fetch('messages/sun', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'sun': sun
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const water = this.parentNode.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'water': water
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
