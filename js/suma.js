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

/*Como subir todo a git 
git init
git add .
git commit -m "Algun mensaje"
git remote add origin link del repositorio
git push -u origin master> */


