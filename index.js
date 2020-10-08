const people = require('./states')

const xande = new people()
                .setNome('Alexandre')
                .setIdade(21)
                .setGitub('hurricane404')

//xande
console.log(xande)

//Change xande
xande.setNome('Alexandre Silva')
console.log(xande)
