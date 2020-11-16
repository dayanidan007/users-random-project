
class Renderer {
    constructor(data) {
        this.data = data
    }

    renderuser = () => {
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const someHtml = template({
            firstName: this.data.user.firstName,
            lastName: this.data.user.lastName,
            imguser: this.data.user.imgUser,
            city: this.data.user.city,
            country: this.data.user.country
        })
        $(".user-container").append(someHtml)
    }

    renderquote = () => {
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const someHtml = template({
            quote: this.data.quote.say
        })
        $(".quote-container").append(someHtml)
    }

    renderpokemon = () => {
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const someHtml = template({
            pokemonImg: this.data.pokemon.pokemonImg,
            pokemonName: this.data.pokemon.pokemonName
        })
        $(".pokemon-container").append(someHtml)
    }
    rendermeatext = () => {
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const someHtml = template({
            meatText: this.data.aboutme
        })
        $(".meat-container").append(someHtml)
    }
    renderfriends = () => {
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const someHtml = template({
            friend1first: this.data.friends.friend1first,
            friend1last: this.data.friends.friend1last,
            friend2first: this.data.friends.friend2first,
            friend2last: this.data.friends.friend2last,
            friend3first: this.data.friends.friend3first,
            friend3last: this.data.friends.friend3last,
            friend4first: this.data.friends.friend4first,
            friend4last: this.data.friends.friend4last,
            friend5first: this.data.friends.friend5first,
            friend5last: this.data.friends.friend5last
        })
        $(".friends-container").append(someHtml)
    }
}
