
var updatestock = setInterval(function(){
$(function(){
    $.ajax({
       cache:true,
        url:"http://hq.sinajs.cn/list=int_dji,int_nasdaq,int_sp500",
        type:"GET",
        dataType:"script",
        success:function(data) {
			var dji = hq_str_int_dji.split(",");
			var nasdaq = hq_str_int_nasdaq.split(",");
			var sp500 = hq_str_int_sp500.split(",");
			document.getElementById("table1_21").innerHTML=sp500[0];
			document.getElementById("table1_22").innerHTML=sp500[1];
			document.getElementById("table1_23").innerHTML=sp500[2];
			document.getElementById("table1_24").innerHTML=sp500[3];
			document.getElementById("table1_31").innerHTML=nasdaq[0];
			document.getElementById("table1_32").innerHTML=nasdaq[1];
			document.getElementById("table1_33").innerHTML=nasdaq[2];
			document.getElementById("table1_34").innerHTML=nasdaq[3];
			document.getElementById("table1_41").innerHTML=dji[0];
			document.getElementById("table1_42").innerHTML=dji[1];
			document.getElementById("table1_43").innerHTML=dji[2];
			document.getElementById("table1_44").innerHTML=dji[3];
	}})
    });
},1000);
	

	