export function tablazatLetrehoz(lista){
    let szoveg = `<table class="border border-dark container-fluid text-center" style="max-width: 700px">
    <tr>
      <th class="border border-dark">Név</th>
      <th class="border border-dark">Kor</th>
      <th class="border border-dark">Nem</th>
    </tr>`;
    lista.forEach((element,index) => {
        szoveg += `<tr class="border border-dark">
            <td class="border border-dark">${element.nev}</td>
            <td class="border border-dark">${element.kor}</td>
            <td class="border border-dark">${element.nem?"nő":"férfi"}</td>
            <td><button type="button" class="btn btn-danger" id="${index}">🚮</button></td>
        </tr>`;
    });
    return szoveg;
}

export function megjelenit(text) {
    let adatok = $(".adatok");
    adatok.html(text);
}

function rendez(lista) {
    
}

function szures(lista, keresoSzoveg) {
    
}

function sorBeszur() {
    
}

export function torol(lista, index) {
    torlesGombb = $("button")
    lista.forEach((element,index) => {
        torlesGombb.on("click", function(){
            element[index].remove();
        });
    });
}


