function sumar(){
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value

    let valor_sum = parseInt(op1) + parseInt(op2)
    document.getElementById("rpta").innerHTML = valor_sum
}


function restar(){
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value
    
    let valor_rest = parseInt(op1) - parseInt(op2)
    document.getElementById("rpta").innerHTML = valor_rest
}

function multiplicar(){
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value
    
    let valor_mult = parseInt(op1) * parseInt(op2)
    document.getElementById("rpta").innerHTML = valor_mult
}

function dividir(){
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value
    
    let valor_div = parseFloat(op1) / parseFloat(op2)
    document.getElementById("rpta").innerHTML = valor_div
}