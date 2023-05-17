// età
let età= parseInt (prompt ("Quanti anni hai?").trim());

//km da percorrere
let km= parseInt (prompt ("Quanti chilometri dovrai percorrere?").trim());

//prezzo km
const prezzo_km=0.21;

//prezzo biglietto intero
let prezzo_biglietto_intero=(km * prezzo_km).toFixed(2)

//sconto <18
if (età < 18) {
    let prezzo_minorenni = (prezzo_biglietto_intero - (prezzo_biglietto_intero * 20 / 100)).toFixed(2)
    document.getElementById ("prezzo").innerHTML = prezzo_minorenni + "€";
}
//sconto >=65
else if (età >= 65) {
    let prezzo_65 = (prezzo_biglietto_intero - (prezzo_biglietto_intero * 40 / 100)).toFixed(2)
    document.getElementById ("prezzo").innerHTML = prezzo_65 + "€";
}
//prezzo pieno
else {(prezzo_biglietto_intero)
    document.getElementById ("prezzo").innerHTML = prezzo_biglietto_intero + "€";
}



