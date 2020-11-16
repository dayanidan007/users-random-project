

const id1 = new APIManager()
const load = function () {
    id1.randomUser()
    id1.randomQuote()
    id1.randomPokemon()
    id1.randomAboutMe()
    id1.randomFriends()

}

const reid = new Renderer(id1.data)

const display = function () {
    $("#profile-pic").remove();
    $(".user-info").remove()
    $("#qoute").remove()
    $("#pokemon-image").remove()
    $("#pokemon-text").remove()
    $(".meat-text").remove()
    $("._friend").remove()
    reid.renderuser()
    reid.renderquote()
    reid.renderpokemon()
    reid.rendermeatext()
    reid.renderfriends()
}

let users = []
let newstor = []
count = 0
const save = function () {
    users.push(reid)
    localStorage.user = JSON.stringify(users)
    let storage = JSON.parse(localStorage.user)
    newst(storage[count].data )
    count++
}


let num = newstor.length
const loading = function () {
    $("#profile-pic").remove();
    $(".user-info").remove()
    $("#qoute").remove()
    $("#pokemon-image").remove()
    $("#pokemon-text").remove()
    $(".meat-text").remove()
    $("._friend").remove()
    console.log(newstor)
    if (num < 0) {
        num = newstor.length-1
    }
    let newStroge = newstor[num]
    console.log(num)
    console.log(newStroge)
    newStroge.renderuser()
    newStroge.renderquote()
    newStroge.renderpokemon()
    newStroge.rendermeatext()
    newStroge.renderfriends()
    num--
}

const newst = function (data) {
    newstor.push(new Renderer(data))
}


