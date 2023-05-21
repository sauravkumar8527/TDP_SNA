'use strict';$(document).ready(function(){if($('#apexcharts-area').length>0){var options={chart:{height:350,type:"line",toolbar:{show:false},},dataLabels:{enabled:false},stroke:{curve:"smooth"},series:[{name:"Present Students",color:'#3D5EE1',data:[50,65,75,51,42,42,30]},{name:"Absent Students",color:'#70C4CF',data:[30,15,5,29,38,38,50]}],xaxis:{categories:['15 May','16 May','17 May','18 May','19 May','20 May','21 May'],}}
var chart=new ApexCharts(document.querySelector("#apexcharts-area"),options);chart.render();}

if($('#school-area').length>0){var options={chart:{height:350,type:"area",toolbar:{show:false},},dataLabels:{enabled:false},stroke:{curve:"straight"},series:[{name:"Teachers",color:'#3D5EE1',data:[45,60,75,51,42,42,30]},{name:"Students",color:'#70C4CF',data:[24,48,56,32,34,52,25]}],xaxis:{categories:['Jan','Feb','Mar','Apr','May','Jun','Jul'],}}
var chart=new ApexCharts(document.querySelector("#school-area"),options);chart.render();}

if($('#bar').length>0){var optionsBar={chart:{type:'bar',height:350,width:'100%',stacked:false,toolbar:{show:false},},dataLabels:{enabled:false},plotOptions:{bar:{columnWidth:'55%',endingShape:'rounded'},},stroke:{show:true,width:2,colors:['transparent']},series:[{name:"Boys",color:'#70C4CF',data:[120,132,116,175,119,117,154,192,162,183,146,151],},{name:"Girls",color:'#3D5EE1',data:[136,112,144,47,145,63,156,144,123,100,55,149],}],labels:[2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],xaxis:{labels:{show:false},axisBorder:{show:false},axisTicks:{show:false},},yaxis:{axisBorder:{show:false},axisTicks:{show:false},labels:{style:{colors:'#777'}}},title:{text:'',align:'left',style:{fontSize:'18px'}}}
var chartBar=new ApexCharts(document.querySelector('#bar'),optionsBar);chartBar.render();}

if($('#s-line').length>0){var sline={chart:{height:350,type:'line',zoom:{enabled:false},toolbar:{show:false,}},dataLabels:{enabled:false},stroke:{curve:'straight'},series:[{data:[4,2,1,3,6,2,1,2,1,5,2,1,1,1]}],title:{text:'Answers of T1 (S1-S14)',align:'left'},grid:{row:{colors:['#f1f2f3','transparent'],opacity:0.5},},xaxis:{categories:['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13','S14'],}}
var chart=new ApexCharts(document.querySelector("#s-line"),sline);chart.render();}});if($('#s-line-area').length>0){var sLineArea={chart:{height:350,type:'area',toolbar:{show:false,}},dataLabels:{enabled:false},stroke:{curve:'smooth'},series:[{name:'series1',data:[31,40,28,51,42,109,100]},{name:'series2',data:[11,32,45,32,34,52,41]}],xaxis:{type:'datetime',categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],},tooltip:{x:{format:'dd/MM/yy HH:mm'},}}
var chart=new ApexCharts(document.querySelector("#s-line-area"),sLineArea);chart.render();}

if($('#s-col').length>0){var sCol={chart:{height:350,type:'bar',toolbar:{show:false,}},plotOptions:{bar:{horizontal:false,columnWidth:'70%',endingShape:'rounded'},},dataLabels:{enabled:false},title:{text:'Student Response in May(S1-S14) and June (S1-S14)',align:'left'},stroke:{show:true,width:2,colors:['transparent']},series:[{name:'May',data:[8,7,8,8,7,8,9,9,10,7,9,8,9,10]},{name:'June',data:[8,9,8,9,8,10,9,7,9,2,9,8,10,9]}],xaxis:{categories:['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13','S14'],}}
var chart=new ApexCharts(document.querySelector("#s-col"),sCol);chart.render();}

if($('#s-bar').length>0){var sBar={chart:{height:350,type:'bar',toolbar:{show:false,}},plotOptions:{bar:{horizontal:true,}},dataLabels:{enabled:false},series:[{data:[8.6,4.2,7.4,8.1,5.7]}],xaxis:{categories:['Feels Comfortable','Feels Isolated','No Bullying','Feels Happy','Feels Depressed'],}}
var chart=new ApexCharts(document.querySelector("#s-bar"),sBar);chart.render();}

if($('#donut-chart').length>0){var donutChart={chart:{height:350,type:'donut',toolbar:{show:false,}},series:[33,52,15],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:'bottom'}}}]}
var donut=new ApexCharts(document.querySelector("#donut-chart"),donutChart);donut.render();}

if($('#radial-chart').length>0){var radialChart={chart:{height:350,type:'radialBar',toolbar:{show:false,}},plotOptions:{radialBar:{dataLabels:{name:{fontSize:'22px',},value:{fontSize:'16px',},total:{show:true,label:'Total Students',formatter:function(w){return 14}}}}},series:[33,52,15],labels:['English Only','English and others','Other then english'],}
var chart=new ApexCharts(document.querySelector("#radial-chart"),radialChart);chart.render();}