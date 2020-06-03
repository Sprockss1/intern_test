var date_diff_indays = function(date1, date2) {
dt1 = new Date(date1);
dt2 = new Date(date2);
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}
function str_date(d){
	var date = d.getDate();
	if(date<10)
		date="0"+date;
	var month = d.getMonth()+1;
	if(month<10)
		month = "0"+month;
	var year = d.getFullYear();
	var dateStr = year+"-"+month+"-"+date;
	return dateStr;
}
function solution (D){		//assuming D to be a object type dictionary	
	var input = Object.keys(D);
	console.log("Input:")
	console.log(D);
	var res = new Object();
	for(var i=0;i<input.length-1;i++){
		var start = new Date(input[i]);
		var end = new Date(input[i+1]);
		var loop = new Date(start);
		var n = date_diff_indays(start,end)+1;
		var diff =(D[input[i+1]]-D[input[i]])/(n-1);	//making an arithmetic progression
		var val = D[input[i]];
		while(loop <= end){ 
		   var d=str_date(loop);          
		   res[d]=val;
		   val=val+diff;
		   var newDate = loop.setDate(loop.getDate() + 1);
		   loop = new Date(newDate);
		}
	}
	console.log("Output:")
	console.log(res);
}
//assuming input dictionaries to be in sorted form
var D1 = {
	"2019-01-01" : 100,
	"2019-01-04" : 115
}
var D2 = {
	"2019-01-10" : 10,
	"2019-01-11" : 20,
	"2019-01-13" : 10
};
solution(D1);
solution(D2);