class people {
    nome = undefined
    idade = undefined
    github = undefined

    /* 
        Seta o nome, aceita string
    */
    setNome(nome){
        this.nome = nome
        return this
    }

    /* 
        Seta idade
    */
    setIdade(idade){
        this.idade = idade
        return this
    }

    /* 
        Seta github
    */
    setGitub(github){
        this.github = github
        return this
    }
}

module.exports = people;