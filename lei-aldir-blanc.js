// Submenus - abertos ou não
var publicacoes = false;
var anexos = false;
var prodCultArtesvisuais = false;
var prodCultAudiovisual = false;
var prodCultCulturarua = false;
var prodCultArtesanato = false;
var prodCultDanca = false;
var prodCultLiteratura = false;
var prodCultLiteratura2 = false;
var prodCultTeatrocirco = false;
var prodCultEconcultdigital = false;
var prodCultMusica = false;

function barAccordion(bloco) {

    function abrirBloco() {
        document.getElementById(bloco).style.height = 'var(--'+ bloco + ')';
        document.getElementById(bloco).style.overflowY = 'scroll';
    }
    function fecharBloco() {
        document.getElementById(bloco).style.height = '0px';
        document.getElementById(bloco).style.overflowY = 'hidden';
    }

    if (bloco == 'publicacoes') {
        if (publicacoes) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        publicacoes = !publicacoes;
    }
    if (bloco == 'anexos') {
        if (anexos) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        anexos = !anexos;
    }
    if (bloco == 'prod-cult-artesvisuais') {
        if (prodCultArtesvisuais) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultArtesvisuais = !prodCultArtesvisuais;
    }
    if (bloco == 'prod-cult-audiovisual') {
        if (prodCultAudiovisual) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultAudiovisual = !prodCultAudiovisual;
    }
    if (bloco == 'prod-cult-culturarua') {
        if (prodCultCulturarua) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultCulturarua = !prodCultCulturarua;
    }
    if (bloco == 'prod-cult-artesanato') {
        if (prodCultArtesanato) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultArtesanato = !prodCultArtesanato;
    }
    if (bloco == 'prod-cult-danca') {
        if (prodCultDanca) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultDanca = !prodCultDanca;
    }
    if (bloco == 'prod-cult-literatura') {
        if (prodCultLiteratura) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultLiteratura = !prodCultLiteratura;
    }
    if (bloco == 'prod-cult-literatura2') {
        if (prodCultLiteratura2) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultLiteratura2 = !prodCultLiteratura2;
    }
    if (bloco == 'prod-cult-teatrocirco') {
        if (prodCultTeatrocirco) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultTeatrocirco = !prodCultTeatrocirco;
    }
    if (bloco == 'prod-cult-econcultdigital') {
        if (prodCultEconcultdigital) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultEconcultdigital = !prodCultEconcultdigital;
    }
    if (bloco == 'prod-cult-musica') {
        if (prodCultMusica) {
            fecharBloco();
        } else {
            abrirBloco();
        }
        prodCultMusica = !prodCultMusica;
    }







}