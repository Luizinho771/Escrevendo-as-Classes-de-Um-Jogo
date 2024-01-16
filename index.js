


class hero {

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }



    attack() {
        let typeAttack;
        switch (true) {
            case this.type == "guerreiro":
                typeAttack = "espada";
                break;
            case this.type == "mago":
                typeAttack = "magic";
                break;
            case this.type == "monge":
                typeAttack = "artes marciais";
                break;
            case this.type == "ninja":
                typeAttack = "shuriken";
                break;
        }

        console.log("o " + this.type + " atacou usando " + typeAttack);

    }

}


let Paulo = new hero("Paulo", 25, "mago");

Paulo.attack();