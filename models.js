export class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    getCPF(){
        return this.#cpf
    }

    getMaisculo(){
        return {
            nome: this.nome.toUpperCase(),
            endereco: {
                estado: this.endereco.estado.toUpperCase(),
                cidade: this.endereco.cidade.toUpperCase(),
                rua: this.endereco.rua.toUpperCase()
            }
        }
    }

    getMinusculo(){
        return {
            nome: this.nome.toLowerCase(),
            endereco: {
                estado: this.endereco.estado.toLowerCase(),
                cidade: this.endereco.cidade.toLowerCase(),
                rua: this.endereco.rua.toLowerCase()
            }
        }
    }
}

export class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

export class Endereco {
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getMaisculo(){
        return {
            estado: this.estado.toUpperCase(),
            cidade: this.cidade.toUpperCase(),
            rua: this.rua.toUpperCase()
        }
    }

    getMinusculo(){
        return {
            estado: this.estado.toLowerCase(),
            cidade: this.cidade.toLowerCase(),
            rua: this.rua.toLowerCase()
        }
    }
}

export class Empresa {
    #cnpj
    constructor(nomeFantasia, razaoSocial, cnpj, endereco){
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
        this.endereco = endereco
    }

    getCNPJ(){
        return this.#cnpj
    }

    getMaisculo(){
        return {
            nomeFantasia: this.nomeFantasia.toUpperCase(),
            razaoSocial: this.razaoSocial.toUpperCase(),
            endereco: {
                estado: this.endereco.estado.toUpperCase(),
                cidade: this.endereco.cidade.toUpperCase(),
                rua: this.endereco.rua.toUpperCase()
            }
        }
    }

    getMinusculo(){
        return {
            nomeFantasia: this.nomeFantasia.toLowerCase(),
            razaoSocial: this.razaoSocial.toLowerCase(),
            endereco: {
                estado: this.endereco.estado.toLowerCase(),
                cidade: this.endereco.cidade.toLowerCase(),
                rua: this.endereco.rua.toLowerCase()
            }
        }
    }
    detalhes() {
        let texto = `Empresa: ${this.nomeFantasia} (${this.razaoSocial})\n`
        texto += `CNPJ: ${this.getCNPJ()}\n`
        texto += `Endereço: ${this.endereco.rua}, ${this.endereco.numero}, ${this.endereco.cidade} - ${this.endereco.estado}\n`
        
        texto += "Telefones: "
        for (let t of this.telefones) {
            texto += `(${t.ddd}) ${t.numero} `
        }
        texto += "\n\nClientes:\n"

        for (let c of this.clientes) {
            texto += `Nome: ${c.nome}, CPF: ${c.getCPF()}, Endereço: ${c.endereco.rua}, ${c.endereco.numero}, ${c.endereco.cidade} - ${c.endereco.estado}\n`
        }

        return texto
    }
}