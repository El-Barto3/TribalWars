
var spears = document.querySelectorAll("[class='units-entry-all squad-village-required']")[0].innerHTML; //piki
var swords = document.querySelectorAll("[class='units-entry-all squad-village-required']")[1].innerHTML; //miecze
spears = spears.substring(1,spears.length-1);
swords = swords.substring(1,swords.length-1);
proportion = [15,6,3,2];
sum = 26;

for(i=0;i<proportion.length;i++)
{
    console.log("Spears["+ (i+1) +"]: [" + (spears * proportion[i] / sum).toFixed() + "]");
    console.log("Swords["+ (i+1) +"]: [" + (swords * proportion[i] / sum).toFixed() + "]");
    console.log('///');
}