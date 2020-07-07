<<<<<<< HEAD
const  tabelanotas = document.getElementById("tabelanotas")
const select = document.getElementById("select")

const turma1 = [
    ["Ana", 7.4, 8.7, 7.7],
    ["Barbara", 5.5, 8.5, 7.5],
    ["Bernardo", 7.0, 6.0, 7.9],
    ['Catarina', 9.5, 7.0, 7.5],
    ['Daniel', 7.4, 8.7, 7.7]
]
const turma2 = [
    ['Amália', 7.4, 5.0, 7.7],
    ['Beatriz', 5.5, 9.0, 7.5],
    ["Breno", 7.0, 6.0, 7.9],
    ['Carlos', 9.5, 7.0, 7.5],
    ['Daniel', 7.4, 8.7, 7.7],
    ['Eduardo', 4.5, 6.0, 5.5],
    ['Marcela', 8.5, 6.5, 9.0],
    ['Pedro', 3.5, 5.0, 7.0],

]
    
function funcao() {
    if(document.getElementById("tabelanotas").tBodies.length != 0){        
        tabelanotas.removeChild(tabelanotas.getElementsByTagName("tbody")[0]);
    }
    if(document.getElementById("tabelanotas").rows.length != 0){        
        tabelanotas.removeChild(tabelanotas.getElementsByTagName("thead")[0]);
    }
    let turma = null
    let cabeca = document.createElement("THEAD")
    let cabecalho = document.createElement("TR")
    let nome = document.createElement("TH")
    let notap1 = document.createElement("TH")
    let notap2 = document.createElement("TH")
    let notap3 = document.createElement("TH")
    let mediafi = document.createElement("TH")
    let cabnome = document.createTextNode("Nome")
    let cabnota1 = document.createTextNode("Nota P1")
    let cabnota2 = document.createTextNode("Nota P2")
    let cabnota3 = document.createTextNode("Nota P3")
    let cabmedia = document.createTextNode("Média")
    nome.appendChild(cabnome)
    notap1.appendChild(cabnota1)
    notap2.appendChild(cabnota2)
    notap3.appendChild(cabnota3)
    mediafi.appendChild(cabmedia)
    cabecalho.appendChild(nome)    
    cabecalho.appendChild(notap1)
    cabecalho.appendChild(notap2)
    cabecalho.appendChild(notap3)
    cabecalho.appendChild(mediafi)
    cabeca.appendChild(cabecalho)
    tabelanotas.appendChild(cabeca)


    switch (select.value){
        case "T1" :
            turma = turma1;
            break;
        case "T2" : 
            turma = turma2;
            break; 
    }


    let tabela = document.createElement("TBODY")
    tabela.setAttribute("id", "tabela")
    

    for (let i = 0; i<turma.length; i++){
        let linha = document.createElement("TR")
        let media = (turma[i][1]+ turma[i][2] + turma[i][3])/3
        turma[i].push(media.toFixed(2))
        
        for (let j = 0; j<turma[i].length; j++){
            let coluna = document.createElement("TD")            
            let texto = document.createTextNode(turma[i][j])               
            coluna.appendChild(texto)
            linha.appendChild(coluna)                            
            
             }
        tabela.appendChild(linha)
        turma[i].pop()
        } 
    tabelanotas.appendChild(tabela) 
        
}

=======
const  tabelanotas = document.getElementById("tabelanotas")
const select = document.getElementById("select")

const turma1 = [
    ["Ana", 7.4, 8.7, 7.7],
    ["Barbara", 5.5, 8.5, 7.5],
    ["Bernardo", 7.0, 6.0, 7.9],
    ['Catarina', 9.5, 7.0, 7.5],
    ['Daniel', 7.4, 8.7, 7.7]
]
const turma2 = [
    ['Amália', 7.4, 5.0, 7.7],
    ['Beatriz', 5.5, 9.0, 7.5],
    ["Breno", 7.0, 6.0, 7.9],
    ['Carlos', 9.5, 7.0, 7.5],
    ['Daniel', 7.4, 8.7, 7.7],
    ['Eduardo', 4.5, 6.0, 5.5],
    ['Marcela', 8.5, 6.5, 9.0],
    ['Pedro', 3.5, 5.0, 7.0],

]
    
function funcao() {
    if(document.getElementById("tabelanotas").tBodies.length != 0){        
        tabelanotas.removeChild(tabelanotas.getElementsByTagName("tbody")[0]);
    }
    if(document.getElementById("tabelanotas").rows.length != 0){        
        tabelanotas.removeChild(tabelanotas.getElementsByTagName("thead")[0]);
    }
    let turma = null
    let cabeca = document.createElement("THEAD")
    let cabecalho = document.createElement("TR")
    let nome = document.createElement("TH")
    let notap1 = document.createElement("TH")
    let notap2 = document.createElement("TH")
    let notap3 = document.createElement("TH")
    let mediafi = document.createElement("TH")
    let cabnome = document.createTextNode("Nome")
    let cabnota1 = document.createTextNode("Nota P1")
    let cabnota2 = document.createTextNode("Nota P2")
    let cabnota3 = document.createTextNode("Nota P3")
    let cabmedia = document.createTextNode("Média")
    nome.appendChild(cabnome)
    notap1.appendChild(cabnota1)
    notap2.appendChild(cabnota2)
    notap3.appendChild(cabnota3)
    mediafi.appendChild(cabmedia)
    cabecalho.appendChild(nome)    
    cabecalho.appendChild(notap1)
    cabecalho.appendChild(notap2)
    cabecalho.appendChild(notap3)
    cabecalho.appendChild(mediafi)
    cabeca.appendChild(cabecalho)
    tabelanotas.appendChild(cabeca)


    switch (select.value){
        case "T1" :
            turma = turma1;
            break;
        case "T2" : 
            turma = turma2;
            break; 
    }


    let tabela = document.createElement("TBODY")
    tabela.setAttribute("id", "tabela")
    

    for (let i = 0; i<turma.length; i++){
        let linha = document.createElement("TR")
        let media = (turma[i][1]+ turma[i][2] + turma[i][3])/3
        turma[i].push(media.toFixed(2))
        
        for (let j = 0; j<turma[i].length; j++){
            let coluna = document.createElement("TD")            
            let texto = document.createTextNode(turma[i][j])               
            coluna.appendChild(texto)
            linha.appendChild(coluna)                            
            
             }
        tabela.appendChild(linha)
        turma[i].pop()
        } 
    tabelanotas.appendChild(tabela) 
        
}

>>>>>>> 66e04906def3518c6365b9869438154c6031e571
