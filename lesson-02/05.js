let passport = {
    name: "Petr",
    surname: "Petrov",
};

const newPassport = {...passport}

newPassport.name = "Ivan";

console.log(passport)
console.log(newPassport)
