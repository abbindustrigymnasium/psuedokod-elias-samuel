var MOB, Månader, studiebidrag;
MOB = 4;
Månader = [7,8,9];
studiebidrag = 1250 * 10 * 3 + 1250 * 3;
if (MOB in Månader) {
    var studiebidraget = studiebidrag-625;
    console.log(studiebidraget);
   }   else {
    console.log(studiebidrag);
}



