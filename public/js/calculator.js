
function sumYears(){
    var mAySum=0;
    var mayMax=0;
    var mayMaxRow="";
    $('.may').each(function( index ){
        mAySum+=parseFloat($(this).html());
    });
    $('.may').each(function( index ){
        var row=$(this).attr('id').split('_')[1];
        var may=parseFloat($("#mAy_"+row).html());
        if (may>mayMax){
            mayMax=may;
            mayMaxRow=row;
        }
        $("#per_"+row).closest("tr").removeClass("danger");
        $("#per_"+row).html((may/mAySum*100).toFixed(0)+"%");
    });
    $("#per_"+mayMaxRow).closest("tr").addClass("danger");
    
    $("#sum_mAy").html(mAySum.toFixed(0));
    var batt=parseInt($("#battery").val(),10);
    $("#years").html((batt/mAySum).toFixed(2)); 
    return mAySum;
}
function calcmAh(row){
    var ms=parseInt($("#mS_"+row).val(),10);
    var no=parseInt($("#t_"+row).val(),10);
    var ma=parseFloat($("#mA_"+row).val());
    var mah=(ma/1000*no)*(ms/3600);
    var may=mah*24*365;
    $("#mAh_"+row).html(mah.toFixed(4));
    $("#mAy_"+row).html(may.toFixed(2));
    var sum=sumYears();
}
 //console.log("ch");
        //console.log($("#mS_1").val());
        
        //var ms=parseInt($("#mS_1").val(),10);
        //var no=parseInt($("#t_1").val(),10);
        //var ma=parseInt($("#mA_1").val(),10);
        //var mah=(ma/1000*no)*(ms/3600);
        //var may=mah*24*365;
        //$("#mAh_1").html(mah.toFixed(4));
        //$("#mAy_1").html(may.toFixed(2));
$(function() {
 
for (var i = 0; i < event_date.length; i++) {
    $('#mS_'+i+', #t_1, #mA_1').on("change, keyup",function(){calcmAh("1");});
}
    console.log( "ready!" );
    calcmAh("1");
    calcmAh("2");
    calcmAh("3");
    calcmAh("4");
    calcmAh("5");
    calcmAh("6");
    calcmAh("7");
    calcmAh("8");
    calcmAh("9");
    calcmAh("10");
    calcmAh("11");
    calcmAh("12");
    $('#mS_1, #t_1, #mA_1').on("change, keyup",function(){calcmAh("1");});
    $('#mS_2, #t_2, #mA_2').on("change, keyup",function(){calcmAh("2");});
    $('#mS_3, #t_3, #mA_3').on("change, keyup",function(){calcmAh("3");});
    $('#mS_4, #t_4, #mA_4').on("change, keyup",function(){calcmAh("4");});
    $('#mS_5, #t_5, #mA_5').on("change, keyup",function(){calcmAh("5");});
    $('#mS_6, #t_6, #mA_6').on("change, keyup",function(){calcmAh("6");});
    $('#mS_7, #t_7, #mA_7').on("change, keyup",function(){calcmAh("7");});
    $('#mS_8, #t_8, #mA_8').on("change, keyup",function(){calcmAh("8");});
    $('#mS_9, #t_9, #mA_9').on("change, keyup",function(){calcmAh("9");});
    $('#mS_10, #t_10, #mA_10').on("change, keyup",function(){calcmAh("10");});
    $('#mS_11, #t_11, #mA_11').on("change, keyup",function(){calcmAh("11");});
    $('#mS_12, #t_12, #mA_12').on("change, keyup",function(){calcmAh("12");});
    $('#t_all').on("change, keyup",function(){
        var v=$(this).val();
        console.log(v);
        $('.t_force').val(v);
        for(i=1;i<=12;i++)
            calcmAh(i+"");
    });
});
    

