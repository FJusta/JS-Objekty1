function Telefon(marka, cena, kolor, waga, ekran) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
    this.waga = waga;
    this.ekran = ekran;
}
Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", waga to " + this.waga + ", a ekran to " + this.ekran + ".");
}
var SamsungGalaxyS6 = new Telefon("Samsung", 2500, "czarny", 138, "5,1 cala"); 
var iPhone6S = new Telefon("Apple", 2300, "biały", 143, "4,7 cala");
var OnePlusOne = new Telefon("OnePlus", 1500, "czerwony", 162, "5,5 cala");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

Telefon.prototype.weight = function() {
    console.log("Jeśli nie chcesz ładować swojego smartfona codziennie, to " + this.marka + " będzie najlepszym rozwiązaniem.");
}
var PhilipsXeniumV377 = new Telefon("Philips Xenium V377");

PhilipsXeniumV377.weight();