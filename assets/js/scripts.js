function transicaoFoto(id){
    var proj = document.getElementById(id);
    var caminho = "url(./assets/images/" + id + ".jpg)";
    proj.height = 30;
    proj.width = 50;
    proj.style.transition = 'all 2s';
    proj.style.background = caminho;
}

function voltarBackground(id){
    document.getElementById(id).style.background = null;
    document.getElementById(id).style.border = '0.1px solid black';
}
