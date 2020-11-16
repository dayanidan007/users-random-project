//This is the class that will manage all your APIs

class APIManager {

    constructor() {
        this.data = {
            user: {},
            quote: {},
            pokemon: {},
            aboutme: {},
            friends: {}
        }

    }
    randomFriends = function () {
        $.ajax({
            url: 'https://randomuser.me/api/?results=5',
            dataType: 'json',
            success: (response) => {
                this.data.friends.friend1first = response.results[0].name.first
                this.data.friends.friend1last = response.results[0].name.last
                this.data.friends.friend2first = response.results[1].name.first
                this.data.friends.friend2last = response.results[1].name.last
                this.data.friends.friend3first = response.results[2].name.first
                this.data.friends.friend3last = response.results[2].name.last
                this.data.friends.friend4first = response.results[3].name.first
                this.data.friends.friend4last = response.results[3].name.last
            }
        })

    }
    randomUser = function () {
        $.ajax({
            url: 'https://randomuser.me/api',
            dataType: 'json',
            success: (response) => {
                this.data.user.firstName = response.results[0].name.first
                this.data.user.lastName = response.results[0].name.last
                this.data.user.imgUser = response.results[0].picture.medium
                this.data.user.city = response.results[0].location.city
                this.data.user.country = response.results[0].location.country

            }
        })

    }
    randomQuote = function () {
        $.ajax({
            url: 'https://api.kanye.rest/',
            dataType: 'json',
            success: (response) => {
                this.data.quote.say = response.quote
            }
        });

    }

    randomPokemon = function () {
        let someId = Math.floor(Math.random() * 900)
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${someId}`,
            dataType: 'json',
            success: (response) => {
                this.data.pokemon.pokemonName = response.species.name
                this.data.pokemon.pokemonImg = response.sprites.front_shiny
            }
        });
    }


    randomAboutMe = function () {
        $.ajax({
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            dataType: 'json',
            success: (response) => {
                this.data.aboutme = response[0]
            }
        });
    }

}
