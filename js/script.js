// età
let eta= parseInt (prompt ("Quanti anni hai?").trim());

//km da percorrere
let km= parseInt (prompt ("Quanti chilometri dovrai percorrere?").trim());

//prezzo km
const prezzo_km=0.21;

//prezzo biglietto intero
let prezzo_biglietto_intero=(km * prezzo_km);

//sconto <18
if (isNaN(km) || isNaN(eta) || eta === 0 || km === 0){
    alert("inserire un numero diverso da 0")
}
else{
        if (eta < 18) {
        let prezzo_minorenni = (prezzo_biglietto_intero - (prezzo_biglietto_intero * 20 / 100));
        document.getElementById ("prezzo").innerHTML = prezzo_minorenni.toFixed(2) + "€";
    }
    //sconto >=65
    else if (eta >= 65) {
        let prezzo_65 = (prezzo_biglietto_intero - (prezzo_biglietto_intero * 40 / 100));
        document.getElementById ("prezzo").innerHTML = prezzo_65.toFixed(2) + "€";
    }
    //prezzo pieno
    else {(prezzo_biglietto_intero);
        document.getElementById ("prezzo").innerHTML = prezzo_biglietto_intero.toFixed(2) + "€";
    }
}