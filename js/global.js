//VARIABLES PAGE SERVEUR
var nbServeur = $('#serveur .number input').val();
var poServeur = $('#serveur .po').val();
var paServeur = $('#serveur .pa').val();
var pcServeur = $('#serveur .pc').val();
var salaireServeur = nbServeur * ((poServeur * 10000) + (paServeur * 100) + pcServeur);

//VARIABLES PAGE GARDE
var nbGarde = $('#garde .number input').val();
var poGarde = $('#garde .po').val();
var paGarde = $('#garde .pa').val();
var pcGarde = $('#garde .pc').val();
var salaireGarde = nbGarde * ((poGarde * 10000) + (paGarde * 100) + pcGarde);

//VARIABLES PAGE INGENIEUR
var nbIngenieur = $('#ingenieur .number input').val();
var poIngenieur = $('#ingenieur .po').val();
var paIngenieur = $('#ingenieur .pa').val();
var pcIngenieur = $('#ingenieur .pc').val();
var salaireIngenieur = nbIngenieur * ((poIngenieur * 10000) + (paIngenieur * 100) + pcIngenieur);

//VARIABLES PAGE PLONGEUR
var nbPlongeur = $('#plongeur .number input').val();
var poPlongeur = $('#plongeur .po').val();
var paPlongeur = $('#plongeur .pa').val();
var pcPlongeur = $('#plongeur .pc').val();
var salairePlongeur = nbPlongeur * ((poPlongeur * 10000) + (paPlongeur + 100) + pcPlongeur);


function nextMonth() {
    
}

function setInputValue() {
    //SET VARIABLES PAGE SERVEUR
    $('#serveur .number input').val() = nbServeur;
    $('#serveur .po').val() = poServeur;
    $('#serveur .pa').val() = paServeur;
    $('#serveur .pc').val() = pcServeur;
    
    //SET VARIABLES PAGE GARDE
    $('#garde .number input').val() = nbGarde;
    $('#garde .po').val() = poGarde;
    $('#garde .pa').val() = paGarde;
    $('#garde .pc').val() = pcGarde;
    
    //SET VARIABLES PAGE INGENIEUR
    $('#ingenieur .number input').val() = nbIngenieur;
    $('#ingenieur .po').val() = poIngenieur;
    $('#ingenieur .pa').val() = paIngenieur;
    $('#ingenieur .pc').val() = pcIngenieur;
    
    //SET VARIABLES PAGE PLONGEUR
    $('#plongeur .number input').val() = nbPlongeur;
    $('#plongeur .po').val() = poPlongeur;
    $('#plongeur .pa').val() = paPlongeur;
    $('#plongeur .pc').val() = pcPlongeur;
}

