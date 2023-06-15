(function loop() {
  setTimeout(function () {
        var timer = document.getElementsByClassName('return-countdown');
          if(timer != undefined)
          {
              var spears = document.querySelectorAll("[class='units-entry-all squad-village-required']")[0].innerHTML; //piki
              var swords = document.querySelectorAll("[class='units-entry-all squad-village-required']")[1].innerHTML; //miecze
              spears = spears.substring(1,spears.length-1);
              swords = swords.substring(1,swords.length-1);
              perc = [0.6133,0.26333,0.12333];
              inputSpear = document.querySelectorAll('[name="spear"]')[0];
              inputSword = document.querySelectorAll('[name="sword"]')[0];
              for(i=0;i<3;i++)
              {
                  //inputSpear = spears * perc[i];
                  //inputSword = swords * perc[i];

                    inputSpear.click();
                  //  inputSpear.value = (spears * perc[i]).toFixed();
                 // inputSpear.value = 205;

                  setTimeout(2000);
                  document.querySelectorAll('[class="btn btn-default free_send_button"]')[0].click();
                  
              }
              setTimeout(10000);
          }
    loop()
  }, 3000);
}());