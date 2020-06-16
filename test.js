
var xs;
var ket=false;
var jum1;
var juh=false;
var veh=false;
var blas=false;
var mutz=false;
var mut=false;
var muts=false;

function mat(){
    jum1= ((xs*0.05)*36)/(1+(0.0125*36));

  }
function noValid1(){
    
    var checkBox = document.getElementById("Check");
    if (checkBox.checked == true){
        document.getElementById("Check1").checked=false;
      //  document.getElementById('val').style.display='block';
      document.getElementById('f1').style.display='block';
      document.getElementById('f2').style.display='block';
      document.getElementById('val1').style.display='block';
      mut=false;
        
      } else {
        document.getElementById('val').style.display='none';
      }
}

function valid1(){
    var checkBox = document.getElementById("Check1");
    if (checkBox.checked == true){
        document.getElementById("Check").checked=false;
        document.getElementById('f1').style.display='block';
        document.getElementById('f2').style.display='block';
        document.getElementById('val1').style.display='block';
        document.getElementById('val').style.display='none';
        mut=true;
        
      
       
      } else {
        document.getElementById('f1').style.display='none';
        document.getElementById('f2').style.display='none';
        document.getElementById('val1').style.display='none';
      
      }
    

}

function noValid2(){
    
    var checkBox = document.getElementById("Check3");
    if (checkBox.checked == true){
        document.getElementById("Check2").checked=false;
       // document.getElementById('vals').style.display='block';
        document.getElementById('val2').style.display='block';
        document.getElementById('f3').style.display='block';
        document.getElementById('f4').style.display='block';
        muts=false;
      } else {
        document.getElementById('vals').style.display='none';
      }
}

function valid2(){
    var checkBox = document.getElementById("Check2");
    if (checkBox.checked == true){
        document.getElementById("Check3").checked=false;
        document.getElementById('f3').style.display='block';
        document.getElementById('f4').style.display='block';
        document.getElementById('vals').style.display='none';
        document.getElementById('val2').style.display='block';
        muts=true;
        
      } else {
        document.getElementById('val2').style.display='none';
        document.getElementById('f3').style.display='none';
        document.getElementById('f4').style.display='none';
      
      }

}

function noValid3(){
    
    var checkBox = document.getElementById("Check4");
    if (checkBox.checked == true){
        document.getElementById("Check5").checked=false;
      //  document.getElementById('valsn').style.display='block';
        document.getElementById('val3').style.display='none';
        document.getElementById('sel1').style.display='none';
        document.getElementById('val4').style.display='none';
        document.getElementById('f6').style.display='none';
        document.getElementById('f7').style.display='none';
        document.getElementById('val3').style.display='block';
        document.getElementById('sel1').style.display='block';
        document.getElementById('valsn').style.display='none';
      } else {
        document.getElementById('valsn').style.display='none';
      }
}

function valid3(){
    var checkBox = document.getElementById("Check5");
    if (checkBox.checked == true){
        document.getElementById("Check4").checked=false;
        document.getElementById('val3').style.display='block';
        document.getElementById('sel1').style.display='block';
        document.getElementById('valsn').style.display='none';
        mutz=true;
      
      } else {
        document.getElementById('val3').style.display='none';
        document.getElementById('sel1').style.display='none';
        document.getElementById('val4').style.display='none';
        document.getElementById('f6').style.display='none';
        document.getElementById('f7').style.display='none';

      
      }

}

function selc1(){

    var x = document.getElementById("sel1").value;
    if(x==1){
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
        
    }
    else if (x==2){
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
    }
    else if (x==3){
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
    }
    else if (x==4){
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
    }
    
    else if (x==5){
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
    }
    else if (x==6){
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
    }
    else if (x==7){
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
    }
    else if (x==8){
        blas=true;
        document.getElementById('f6').style.display='block';
        document.getElementById('f7').style.display='block';
        document.getElementById('val4').style.display='block';
        document.getElementById('pot').style.display='none';
      
    }
    
    else{
      blas=true;
        document.getElementById('gaji').style.display='none';
        document.getElementById('f6').style.display='none';
        document.getElementById('f7').style.display='none';
        document.getElementById('val4').style.display='none';
    }
    
  }

  function noValid4(){
    
    var checkBox = document.getElementById("Check6");
    if (checkBox.checked == true){
        document.getElementById("Check7").checked=false;
      //  document.getElementById('pot1').style.display='block';
        document.getElementById('gaji').style.display='block';
        document.getElementById('yuran').style.display='none';
        document.getElementById('f8').style.display='none';
        document.getElementById('f9').style.display='none';
        
        juh=false;
      } else {
        document.getElementById('pot1').style.display='none';
      }
}

function valid4(){
    var checkBox = document.getElementById("Check7");
    if (checkBox.checked == true){
        document.getElementById("Check6").checked=false;
        xs=0;
        document.getElementById('gaji').style.display='block';
        

        juh=true;
      
      } else {
        document.getElementById('yuran').style.display='none';
        document.getElementById('f8').style.display='none';
        document.getElementById('f9').style.display='none';
        document.getElementById('gaji').style.display='none';
        document.getElementById('pot1').style.display='none';
        document.getElementById('sot1').style.display='none';
        document.getElementById('sot2').style.display='none';
        document.getElementById('sot3').style.display='none';
        document.getElementById('sot4').style.display='none';
        document.getElementById('sot5').style.display='none';
        document.getElementById('sot6').style.display='none';
      
      
      }

}


  function salary(){

     xs = document.getElementById("gajis").value;

 if(xs<1500){ket=false;
    mat();
    document.getElementById('yuran').style.display='block';
    document.getElementById('pots').style.display='none';
    document.getElementById('f8').style.display='block';
    document.getElementById('f9').style.display='block';
    document.getElementById('butang').style.display='block';

   }
 else{ ket=true;
   
    document.getElementById('yuran').style.display='block';
    document.getElementById('pots').style.display='none';
    document.getElementById('f8').style.display='block';
    document.getElementById('f9').style.display='block';
    document.getElementById('butang').style.display='block';}
       
    
  }

  function noValid5(){
    
    var checkBox = document.getElementById("Check10");
    if (checkBox.checked == true){
        document.getElementById("Check11").checked=false;
      //  document.getElementById('pots1').style.display='block';
        document.getElementById('pot1').style.display='none';
        document.getElementById('sot1').style.display='none';
        document.getElementById('sot2').style.display='none';
        document.getElementById('sot3').style.display='none';
        document.getElementById('sot4').style.display='none';
        document.getElementById('sot5').style.display='none';
        document.getElementById('sot6').style.display='none';
        veh=false;
       
      
      } else {
        document.getElementById('pot1').style.display='none';
       
        document.getElementById('pots1').style.display='none';
       

      }
}

function valid5(){
    var checkBox = document.getElementById("Check11");
    if (checkBox.checked == true&&xs>=1500){
        document.getElementById("Check10").checked=false;
        
      var jum= ((xs*0.05)*36)/(1+(0.0125*36));
     veh=true;
      console.log(jum);
      
      } else {
     

      
      }
    }
      function tekan(){
       
    if(ket&&juh&&veh&&!blas&&mut&&muts&mutz){
        mat();
        document.getElementById('gut').innerHTML=jum1.toFixed(0) +".00";
        document.getElementById('blut').innerHTML=" 6 Months- RM" +(((xs*0.05)/36)*6).toFixed(0);
        document.getElementById('blut1').innerHTML=" 12 Months- RM" +(((xs*0.05)/36)*12).toFixed(0);
        document.getElementById('blut2').innerHTML=" 18 Months- RM" +(((xs*0.05)/36)*18).toFixed(0);
        document.getElementById('blut3').innerHTML=" 24 Months- RM" +(((xs*0.05)/36)*24).toFixed(0);
        document.getElementById('blut4').innerHTML=" 30 Months- RM" +(((xs*0.05)/36)*30).toFixed(0);
        document.getElementById('blut5').innerHTML=" 36 Months- RM" +(((xs*0.05)/36)*36).toFixed(0);

        document.getElementById('sot1').style.display='block';
        document.getElementById('sot2').style.display='block';
        document.getElementById('sot3').style.display='block';
        document.getElementById('sot4').style.display='block';
        document.getElementById('sot5').style.display='block';
        document.getElementById('sot6').style.display='block';
        document.getElementById('blut').style.display='block';
        document.getElementById('blut1').style.display='block';
        document.getElementById('blut2').style.display='block';
        document.getElementById('blut3').style.display='block';
        document.getElementById('blut4').style.display='block';
        document.getElementById('blut5').style.display='block';
        document.getElementById('pots1').style.display='none';
        document.getElementById('butang').style.display='none';

    }else{

        document.getElementById('pulos').style.display='block';
        document.getElementById('butang').style.display='none';

        document.getElementById('pots1').style.display='none';
        document.getElementById('sot1').style.display='none';
        document.getElementById('sot2').style.display='none';
        document.getElementById('sot3').style.display='none';
        document.getElementById('sot4').style.display='none';
        document.getElementById('sot5').style.display='none';
        document.getElementById('sot6').style.display='none';
       
    }
        }



