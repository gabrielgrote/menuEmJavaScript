const inp = require('prompt-sync')({sigint: true})
let geoNotas = []
let matNotas = []
let fisNotas = []
let porNotas = []
let hisNotas = []

function menu(){
    console.log('##################')
    console.log('# escreva:')
    console.log('# 1 para consultar notas de geografia')
    console.log('# 2 para consultar notas de matematica')
    console.log('# 3 para consultar notas de fisica')
    console.log('# 4 para consultar notas de portugues')
    console.log('# 5 para consultar notas de historia')
    console.log('# sair para sair')
    inpute()
}

function inpute(){
    let input = inp('escreva: ')
    switch(input){
        case 'sair':
            console.log('saindo...')
            break
        case 'voltar':
            menu()
            break

        case '1':
            menuGeo()
            break
        case 'adicionar nota geo':
            addNotasGeo()
            break
        case '2':
            menuMat()
            break
        case 'adicionar nota mat':
            addNotasMat()
            break

        default:
            console.log('##################')
            console.log('comando invalido')
            menu()
    }
}

function menuGeo(){
    console.log('##################')
    console.log('# notas de geografia:')
    if (geoNotas.length == 0){
        console.log('# nenhuma nota aqui, para adicionar escreva: adicionar nota geo')
        console.log('# para voltar para o menu principal escreva: voltar')
        console.log('# para sair do programa escreva sair')
    }
    else {
        let count = 0
        let count2 = 0
        let mediaSum = 0
        for (let i in geoNotas){
            count = count + 1
            console.log('# nota'+count+': '+geoNotas[i])
        }
        
        for (let i in geoNotas){
            mediaSum = mediaSum + parseInt(geoNotas[i])
            count2 = count2 + 1
        }
        let media = mediaSum/count2
        console.log('# sua média é: '+media)
        if (media >= 7){
            console.log('# voce passou')
        }
        else{
            console.log('# voce reprovou')
        }
        
        
        console.log('# para adicionar nota escreva: adicionar nota geo')
        console.log('# para voltar para o menu principal escreva: voltar')
        console.log('# para sair do programa escreva sair')
    }
    inpute()
}

function addNotasGeo(){
    console.log('##################')
    let input1 = inp('nova nota: ')
    geoNotas.push(input1)
    console.log('##################')
    console.log('nota adicionada')
    menu()
    
    
}



menu()