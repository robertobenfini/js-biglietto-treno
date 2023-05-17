// età
let età= parseInt (prompt ("Quanti anni hai?").trim());

//km da percorrere
let km= parseInt (prompt ("Quanti chilometri dovrai percorrere?").trim());

//prezzo km
const prezzo_km=0.21;

//prezzo biglietto intero
let prezzo_biglietto_intero=(km * prezzo_km);

//sconto <18
if (età < 18) {
    let prezzo_minorenni = (prezzo_biglietto_intero - (prezzo_biglietto_intero * 20 / 100));
    document.getElementById ("prezzo").innerHTML = prezzo_minorenni.toFixed(2) + "€";
}
//sconto >=65
else if (età >= 65) {
    let prezzo_65 = (prezzo_biglietto_intero - (prezzo_biglietto_intero * 40 / 100));
    document.getElementById ("prezzo").innerHTML = prezzo_65.toFixed(2) + "€";
}
//prezzo pieno
else {(prezzo_biglietto_intero);
    document.getElementById ("prezzo").innerHTML = prezzo_biglietto_intero.toFixed(2) + "€";
}



