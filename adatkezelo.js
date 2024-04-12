export function rendez(lista, kulcs, rIrany) {
    const rLISTA = lista.sort(function(ember1, ember2){
        /* return ember1.nev<ember2.nev?-1:1; */
        return ember1[kulcs]<ember2[kulcs]?-1*rIrany:1*rIrany;
    })
    return rLISTA;
}

export function szures(lista, keresoSzoveg){
    const szLista = lista.filter(function(ember){
        return ember.nev.toUppercase().includes(keresoSzoveg.toUppercase());
    });
    return szLista;
}