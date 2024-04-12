import { megjelenit } from "./fuggvenyek.js";
import { tablazatLetrehoz } from "./fuggvenyek.js";
import { emberekLISTA } from "./adat.js";
import { torol } from "./fuggvenyek.js";
import { rendez } from "./adatkezelo.js";
import { szures } from "./adatkezelo.js";

let rIrany = 1;
init(emberekLISTA);
szuresNevSzerint();
function init() {
    /* console.log(emberekLISTA); */
    let txt = tablazatLetrehoz(emberekLISTA);
    megjelenit(txt);
    rendezesEsemeny();
}

function rendezesEsemeny(){
    const nevmezoELEM = $("#nevId");
    nevmezoELEM.on("click", function(){
    const lista = rendez(emberekLISTA, "#nevId", rIrany);
    /* console.log(lista) */
    init(lista);
    let txt = tablazatLetrehoz(lista);
    megjelenit(txt);
    rendezesEsemeny()
    rIrany=(-1);
})
  }
function szuresNevSzerint(){
    const szuroElem = $("#szovegId");
    szuroElem.on("keyup", function(){
        let szoveg = szuroElem.val();
        init(szures(emberekLISTA, szoveg));
    })
}