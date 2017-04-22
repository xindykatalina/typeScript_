interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let personaUno:MyPersona = {
    first_name:'Sindy',
    last_name:'Sanchez',
    twitter_account:'@xindykatalina'
}

let personaDos:MyPersona = {
    first_name:'Jorge',
    last_name:'Perez',
    twitter_account:'@jandri'
}

console.log(personaUno);
console.log(personaDos);