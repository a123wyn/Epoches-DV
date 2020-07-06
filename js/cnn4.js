var myChart = echarts.init(document.getElementById('main'));
var Train = new Array();
var Validation = new Array();
var Best_Validation = new Array();
var maxData = 1;
var epochs = [];
var zhexian = [];
var weekMaxData = [];
for (var i = 0; i < 20; i++) {
    epochs.push(i);
    weekMaxData.push(maxData);
}
$.ajaxSettings.async = false;
for(var i = 0;i < 20;i++){
    $.getJSON("./data/cnn4/aapd/metrics_epoch_" + i + ".json",function(json){
                    var tHL = json.training_HL;
                    var tR1 = json.training_R_at_1;
                    var tR3 = json.training_R_at_3;
                    var tR5 = json.training_R_at_5;
                    var tP1 = json.training_P_at_1;
                    var tP3 = json.training_P_at_3;
                    var tP5 = json.training_P_at_5;
                    var tFB1 = json.training_FBeta_at_1;
                    var tFB3 = json.training_FBeta_at_3;
                    var tFB5 = json.training_FBeta_at_5;
                    var tndcg1 = json.training_nDCG_at_1;
                    var tndcg3 = json.training_nDCG_at_3;
                    var tndcg5 = json.training_nDCG_at_5;
                    var tmaf1 = json.training_macro_f1;
                    var tmip = json.training_micro_precision;
                    var tmir = json.training_micro_recall;
                    var tmif = json.training_micro_fscore;
                    var tloss = json.training_loss;
                    var tlinshi = [tHL, tR1, tR3, tR5, tP1, tP3, tP5, tFB1, tFB3, tFB5, tndcg1, tndcg3, tndcg5, tmaf1, tmip, tmir, tmif, tloss];
                    Train.push(tlinshi);
                    var vHL = json.validation_HL;
                    var vR1 = json.validation_R_at_1;
                    var vR3 = json.validation_R_at_3;
                    var vR5 = json.validation_R_at_5;
                    var vP1 = json.validation_P_at_1;
                    var vP3 = json.validation_P_at_3;
                    var vP5 = json.validation_P_at_5;
                    var vFB1 = json.validation_FBeta_at_1;
                    var vFB3 = json.validation_FBeta_at_3;
                    var vFB5 = json.validation_FBeta_at_5;
                    var vndcg1 = json.validation_nDCG_at_1;
                    var vndcg3 = json.validation_nDCG_at_3;
                    var vndcg5 = json.validation_nDCG_at_5;
                    var vmaf1 = json.validation_macro_f1;
                    var vmip = json.validation_micro_precision;
                    var vmir = json.validation_micro_recall;
                    var vmif = json.validation_micro_fscore;
                    var vloss = json.validation_loss;
                    var vlinshi = [vHL, vR1, vR3, vR5, vP1, vP3, vP5, vFB1, vFB3, vFB5, vndcg1, vndcg3, vndcg5, vmaf1, vmip, vmir, vmif, vloss];
                    Validation.push(vlinshi);
                    var bHL = json.best_validation_HL;
                    var bR1 = json.best_validation_R_at_1;
                    var bR3 = json.best_validation_R_at_3;
                    var bR5 = json.best_validation_R_at_5;
                    var bP1 = json.best_validation_P_at_1;
                    var bP3 = json.best_validation_P_at_3;
                    var bP5 = json.best_validation_P_at_5;
                    var bFB1 = json.best_validation_FBeta_at_1;
                    var bFB3 = json.best_validation_FBeta_at_3;
                    var bFB5 = json.best_validation_FBeta_at_5;
                    var bndcg1 = json.best_validation_nDCG_at_1;
                    var bndcg3 = json.best_validation_nDCG_at_3;
                    var bndcg5 = json.best_validation_nDCG_at_5;
                    var bmaf1 = json.best_validation_macro_f1;
                    var bmip = json.best_validation_micro_precision;
                    var bmir = json.best_validation_micro_recall;
                    var bmif = json.best_validation_micro_fscore;
                    var bloss = json.best_validation_loss;
                    var blinshi = [bHL, bR1, bR3, bR5, bP1, bP3, bP5, bFB1, bFB3, bFB5, bndcg1, bndcg3, bndcg5, bmaf1, bmip, bmir, bmif, bloss];
                    Best_Validation.push(blinshi);
                    zhexian.push(bmif);
        });
}
$.ajaxSettings.async = true;

// for(var i = 0; i < 20; i++) {
//     getdata(i);
// }
// function getdata(i){
//     request = new XMLHttpRequest();
//     if(request!=null){
//         var url = "./data/cnn4/aapd/metrics_epoch_" + i + ".json";/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
//         request.open("GET", url,true);/*设置请求方法与路径*/
//         request.onreadystatechange = function () {/*XHR对象获取到返回信息后执行*/
//             if(request.readyState == 4){
//                 if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
//                 var json = JSON.parse(request.responseText);
//                 var tHL = json.training_HL;
//                 var tR1 = json.training_R_at_1;
//                 var tR3 = json.training_R_at_3;
//                 var tR5 = json.training_R_at_5;
//                 var tP1 = json.training_P_at_1;
//                 var tP3 = json.training_P_at_3;
//                 var tP5 = json.training_P_at_5;
//                 var tFB1 = json.training_FBeta_at_1;
//                 var tFB3 = json.training_FBeta_at_3;
//                 var tFB5 = json.training_FBeta_at_5;
//                 var tndcg1 = json.training_nDCG_at_1;
//                 var tndcg3 = json.training_nDCG_at_3;
//                 var tndcg5 = json.training_nDCG_at_5;
//                 var tmaf1 = json.training_macro_f1;
//                 var tmip = json.training_micro_precision;
//                 var tmir = json.training_micro_recall;
//                 var tmif = json.training_micro_fscore;
//                 var tloss = json.training_loss;
//                 var tlinshi = [tHL, tR1, tR3, tR5, tP1, tP3, tP5, tFB1, tFB3, tFB5, tndcg1, tndcg3, tndcg5, tmaf1, tmip, tmir, tmif, tloss];
//                 Train.push(tlinshi);
//                 var vHL = json.validation_HL;
//                 var vR1 = json.validation_R_at_1;
//                 var vR3 = json.validation_R_at_3;
//                 var vR5 = json.validation_R_at_5;
//                 var vP1 = json.validation_P_at_1;
//                 var vP3 = json.validation_P_at_3;
//                 var vP5 = json.validation_P_at_5;
//                 var vFB1 = json.validation_FBeta_at_1;
//                 var vFB3 = json.validation_FBeta_at_3;
//                 var vFB5 = json.validation_FBeta_at_5;
//                 var vndcg1 = json.validation_nDCG_at_1;
//                 var vndcg3 = json.validation_nDCG_at_3;
//                 var vndcg5 = json.validation_nDCG_at_5;
//                 var vmaf1 = json.validation_macro_f1;
//                 var vmip = json.validation_micro_precision;
//                 var vmir = json.validation_micro_recall;
//                 var vmif = json.validation_micro_fscore;
//                 var vloss = json.validation_loss;
//                 var vlinshi = [vHL, vR1, vR3, vR5, vP1, vP3, vP5, vFB1, vFB3, vFB5, vndcg1, vndcg3, vndcg5, vmaf1, vmip, vmir, vmif, vloss];
//                 Validation.push(vlinshi);
//                 var bHL = json.best_validation_HL;
//                 var bR1 = json.best_validation_R_at_1;
//                 var bR3 = json.best_validation_R_at_3;
//                 var bR5 = json.best_validation_R_at_5;
//                 var bP1 = json.best_validation_P_at_1;
//                 var bP3 = json.best_validation_P_at_3;
//                 var bP5 = json.best_validation_P_at_5;
//                 var bFB1 = json.best_validation_FBeta_at_1;
//                 var bFB3 = json.best_validation_FBeta_at_3;
//                 var bFB5 = json.best_validation_FBeta_at_5;
//                 var bndcg1 = json.best_validation_nDCG_at_1;
//                 var bndcg3 = json.best_validation_nDCG_at_3;
//                 var bndcg5 = json.best_validation_nDCG_at_5;
//                 var bmaf1 = json.best_validation_macro_f1;
//                 var bmip = json.best_validation_micro_precision;
//                 var bmir = json.best_validation_micro_recall;
//                 var bmif = json.best_validation_micro_fscore;
//                 var bloss = json.best_validation_loss;
//                 var blinshi = [bHL, bR1, bR3, bR5, bP1, bP3, bP5, bFB1, bFB3, bFB5, bndcg1, bndcg3, bndcg5, bmaf1, bmip, bmir, bmif, bloss];
//                 Best_Validation.push(blinshi);
//                 zhexian.push(bmif);
//                 }
//             }
//         }
//         request.send(null);/*不发送数据到服务器*/
//     }
// }
// console.log(Train);
// 数据
var dateBase = new Date();
var year = dateBase.getFullYear();
var dottedBase = +dateBase + 1000 * 3600 * 24;

// var radarData = [];
// var radarDataAvg = [];
// var weekLineData = [];
var weekCategory = [];


//周数据
for (var i = 0; i < 7; i++) {
    // 日期
    var date = new Date(dottedBase -= 1000 * 3600 * 24);
    weekCategory.unshift([
        date.getMonth() + 1,
        date.getDate()
    ].join('/'));
}

//     // 折线图数据
//     weekMaxData.push(maxData);
//     var distance = Math.round(Math.random() * 11000 + 500);
//     weekLineData.push(distance);

//     // 雷达图数据
//     // 我的指标
//     var averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
//     var maxSpeed = averageSpeed + (+(Math.random() * 3).toFixed(2));
//     var hour = +(distance / 1000 / averageSpeed).toFixed(1);
//     var radarDayData = [distance, averageSpeed, maxSpeed, hour];
//     radarData.unshift(radarDayData);

//     // 平均指标
//     var distanceAvg = Math.round(Math.random() * 8000 + 4000);
//     var averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
//     var maxSpeedAvg = averageSpeedAvg + (+(Math.random() * 2).toFixed(2));
//     var hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
//     var radarDayDataAvg = [distanceAvg, averageSpeedAvg, maxSpeedAvg, hourAvg];
//     radarDataAvg.unshift(radarDayDataAvg);
// }

// 颜色设置
var color = {
    linearYtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#f5b44d'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    linearGtoB: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#43dfa2'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    linearBtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#1c98e8'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    areaBtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(35,184,210,.2)'
        }, {
            offset: 1,
            color: 'rgba(35,184,210,0)'
        }]
    }
};

var option = {
    title: {
        text: 'CNN4',
        textStyle: {
            color: '#fff',
            fontSize: 32,
            fontWeight: 'normal'
        },
        subtext: year + '/' + weekCategory[6],
        subtextStyle: {
            color: '#fff',
            fontSize: 16,
        },
        top: 50,
        left: 80
    },
    legend: {
        top: 220,
        left: 80,
        orient: 'vertical',
        itemGap: 15,
        itemWidth: 12,
        itemHeight: 12,
        data: ['Train', 'Validation','Best_Validation'],
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
    },
    tooltip: {
        trigger: 'item'
    },
    radar: {
        center: ['68%', '27%'],
        radius: '40%',
        name: {
            color: '#fff'
        },
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                color: color.linearYtoG,
                opacity: .6
            }
        },
        splitLine: {
            lineStyle: {
                color: color.linearYtoG,
                opacity: .6
            }
        },
        splitArea: {
            areaStyle: {
                color: '#fff',
                opacity: .1,
                shadowBlur: 25,
                shadowColor: '#000',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
            }
        },
        indicator: [
            {
                "name": "1-10\u00d7HL",
                "max": 1
            },
            {
                "name": "R@1",
                "max": 1
            },
            {
                "name": "R@3",
                "max": 1
            },
            {
                "name": "R@5",
                "max": 1
            },
            {
                "name": "P@1",
                "max": 1
            },
            {
                "name": "P@3",
                "max": 1
            },
            {
                "name": "P@5",
                "max": 1
            },
            {
                "name": "F1@1",
                "max": 1
            },
            {
                "name": "F1@3",
                "max": 1
            },
            {
                "name": "F1@5",
                "max": 1
            },
            {
                "name": "nDCG@1",
                "max": 1
            },
            {
                "name": "nDCG@3",
                "max": 1
            },
            {
                "name": "nDCG@5",
                "max": 1
            },
            {
                "name": "MaF1",
                "max": 1
            },
            {
                "name": "MiP",
                "max": 1
            },
            {
                "name": "MiR",
                "max": 1
            },
            {
                "name": "MiF1",
                "max": 1
            },
            {
                "name": "loss",
                "max": 1
            }]
    },
    grid: {
        left: 90,
        right: 80,
        bottom: 40,
        top: '60%',
    },
    xAxis: {
        type: 'category',
        position: 'bottom',
        axisLine: true,
        axisLabel: {
            color: 'rgba(255,255,255,.8)',
            fontSize: 12
        },
        data: epochs,
    },
    yAxis: {
        name: 'micro_f1',
        nameLocation: 'end',
        nameGap: 24,
        nameTextStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: 14
        },
        max: 0.75,
        min: 0.55,
        splitNumber: 4,

        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                opacity: .1
            }
        },
        axisLabel: {
            color: 'rgba(255,255,255,.8)',
            fontSize: 12

        }
    },
    series: [
    {
        name: 'cnn性能',
        type: 'radar',
        symbolSize: 0,
        data: [{
            value: Train[6],
            name: 'Train',
            itemStyle: {
                normal: {
                    color: '#00FFFF',
                    opacity: 0.3
                }
            },
            lineStyle: {
                normal: {
                    show: true,
                    width: 1,
                    opacity: 0.5,
                    color: "#00FFFF"
                }
            },
            areaStyle: {
                normal: {
                    color: '#00FFFF',
                    shadowBlur: 25,
                    shadowColor: 'rgba(248,211,81,.3)',
                    shadowOffsetX: 0,
                    shadowOffsetY: -10,
                    opacity: 0.3
                }
            },
        },
            {
            value: Validation[6],
            name: 'Validation',
            itemStyle: {
                normal: {
                    color: '#00FF00',
                    opacity: 0.3
                }
            },
            lineStyle: {
                normal: {
                    show: true,
                    width: 1,
                    opacity: 0.5,
                    color: "#00FF00"
                }
            },
            areaStyle: {
                normal: {
                    color: '#00FF00',
                    shadowBlur: 15,
                    shadowColor: 'rgba(0,0,0,.2)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 5,
                    opacity: 0.3
                }
            },
            },
            {
                value: Best_Validation[6],
                name: 'Best_Validation',
                itemStyle: {
                    normal: {
                        color: '#00008B',
                        opacity: 0.3
                    }
                },
                lineStyle: {
                    normal: {
                        show: true,
                        width: 1,
                        opacity: 0.5,
                        color: "#00008B"
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#00008B',
                        shadowBlur: 15,
                        shadowColor: 'rgba(0,0,0,.2)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 5,
                        opacity: 0.3
                    }
                },
            }
        ]
    }, 
    {
        name: 'cnn_mif1',
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        lineStyle: {
            normal: {
                color: color.linearBtoG,
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: color.areaBtoG,
            }
        },
        data: zhexian,
        // data: [0.622710645198822,0.6865882277488708,0.6993613243103027,0.7018518447875977,0.7101236581802368,
        //     0.723647952079773,0.723647952079773,0.723647952079773,0.723647952079773,0.723647952079773,
        //     0.723647952079773,0.723647952079773,0.723647952079773,0.723647952079773,0.723647952079773,
        //     0.723647952079773,0.723647952079773,0.723647952079773,0.723647952079773,0.723647952079773],
        // [0.59,0.56,0.56,0.56,0.6,0.61,0.62,0.58,0.68,0.72,0.71,0.73,0.74,0.75,0.81,0.84,0.82,0.86,0.89,0.92]
        lineSmooth: true,
        markLine: {
            silent: true,
            data: [{
                type: 'average',
                name: '平均值'
            }],
            precision: 0,
            label: {
                normal: {
                    formatter: '平均值: \n {c}'
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgba(248,211,81,.7)'
                }
            }
        },
        tooltip: {
            position: 'top',
            formatter: '{c}',
            backgroundColor: 'rgba(28,152,232,.2)',
            padding: 6
        }
    }, 
    {
        name: '占位背景',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: 0
            }
        },
        silent: true,
        barWidth: '50%',
        data: weekMaxData,
        animation: false
    }, 
    {
        name: '占位背景',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: .1
            }
        },
        silent: true,
        barWidth: '50%',
        barGap: 0,
        data: weekMaxData,
        animation: false
    }],
    backgroundColor: '#383546',
};
myChart.setOption(option);
// 点击事件
myChart.on('click', function (params) {
    if (params.componentType === 'series' && params.seriesType === 'line') {
        var dataIndex = params.dataIndex;
        // if(request!=null){
        //     var url = "./data/cnn4/aapd/metrics_epoch_" + dataIndex + ".json";/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
        //     request.open("GET", url,true);/*设置请求方法与路径*/
        //     request.setRequestHeader('Content-Type','text/plain');
        //     //request.overrideMimeType("application/json");
        //     request.onreadystatechange = function () {/*XHR对象获取到返回信息后执行*/
        //         if(request.readyState == 4){
        //             if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
        // $.getJSON("./data/cnn4/aapd/metrics_epoch_" + dataIndex + ".json",function(json){
        //             var tHL = json.training_HL;
        //             var tR1 = json.training_R_at_1;
        //             var tR3 = json.training_R_at_3;
        //             var tR5 = json.training_R_at_5;
        //             var tP1 = json.training_P_at_1;
        //             var tP3 = json.training_P_at_3;
        //             var tP5 = json.training_P_at_5;
        //             var tFB1 = json.training_FBeta_at_1;
        //             var tFB3 = json.training_FBeta_at_3;
        //             var tFB5 = json.training_FBeta_at_5;
        //             var tndcg1 = json.training_nDCG_at_1;
        //             var tndcg3 = json.training_nDCG_at_3;
        //             var tndcg5 = json.training_nDCG_at_5;
        //             var tmaf1 = json.training_macro_f1;
        //             var tmip = json.training_micro_precision;
        //             var tmir = json.training_micro_recall;
        //             var tmif = json.training_micro_fscore;
        //             var tloss = json.training_loss;
        //             tlinshi = [tHL, tR1, tR3, tR5, tP1, tP3, tP5, tFB1, tFB3, tFB5, tndcg1, tndcg3, tndcg5, tmaf1, tmip, tmir, tmif, tloss];
        //             var vHL = json.validation_HL;
        //             var vR1 = json.validation_R_at_1;
        //             var vR3 = json.validation_R_at_3;
        //             var vR5 = json.validation_R_at_5;
        //             var vP1 = json.validation_P_at_1;
        //             var vP3 = json.validation_P_at_3;
        //             var vP5 = json.validation_P_at_5;
        //             var vFB1 = json.validation_FBeta_at_1;
        //             var vFB3 = json.validation_FBeta_at_3;
        //             var vFB5 = json.validation_FBeta_at_5;
        //             var vndcg1 = json.validation_nDCG_at_1;
        //             var vndcg3 = json.validation_nDCG_at_3;
        //             var vndcg5 = json.validation_nDCG_at_5;
        //             var vmaf1 = json.validation_macro_f1;
        //             var vmip = json.validation_micro_precision;
        //             var vmir = json.validation_micro_recall;
        //             var vmif = json.validation_micro_fscore;
        //             var vloss = json.validation_loss;
        //             vlinshi = [vHL, vR1, vR3, vR5, vP1, vP3, vP5, vFB1, vFB3, vFB5, vndcg1, vndcg3, vndcg5, vmaf1, vmip, vmir, vmif, vloss];
        //             var bHL = json.best_validation_HL;
        //             var bR1 = json.best_validation_R_at_1;
        //             var bR3 = json.best_validation_R_at_3;
        //             var bR5 = json.best_validation_R_at_5;
        //             var bP1 = json.best_validation_P_at_1;
        //             var bP3 = json.best_validation_P_at_3;
        //             var bP5 = json.best_validation_P_at_5;
        //             var bFB1 = json.best_validation_FBeta_at_1;
        //             var bFB3 = json.best_validation_FBeta_at_3;
        //             var bFB5 = json.best_validation_FBeta_at_5;
        //             var bndcg1 = json.best_validation_nDCG_at_1;
        //             var bndcg3 = json.best_validation_nDCG_at_3;
        //             var bndcg5 = json.best_validation_nDCG_at_5;
        //             var bmaf1 = json.best_validation_macro_f1;
        //             var bmip = json.best_validation_micro_precision;
        //             var bmir = json.best_validation_micro_recall;
        //             var bmif = json.best_validation_micro_fscore;
        //             var bloss = json.best_validation_loss;
        //             blinshi = [bHL, bR1, bR3, bR5, bP1, bP3, bP5, bFB1, bFB3, bFB5, bndcg1, bndcg3, bndcg5, bmaf1, bmip, bmir, bmif, bloss];
        // });
                    // var json = JSON.parse(request.responseText);
                    
                    // }
                // }
            // }
            // request.send();/*不发送数据到服务器*/
        // }
        myChart.setOption({
            series: [
                {
                    name: 'cnn4性能',
                    type: 'radar',
                    symbolSize: 0,
                    data: [{
                        name: 'Train',
                        value: Train[dataIndex],
                        itemStyle: {
                            normal: {
                                color: '#00FFFF',
                                opacity: 0.3
                            }
                        },
                        lineStyle: {
                            normal: {
                                show: true,
                                width: 1,
                                opacity: 0.5,
                                color: "#00FFFF"
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#00FFFF',
                                shadowBlur: 25,
                                shadowColor: 'rgba(248,211,81,.3)',
                                shadowOffsetX: 0,
                                shadowOffsetY: -10,
                                opacity: 0.3
                            }
                        },
                    },
                    {
                        name: 'Validation',
                        value: Validation[dataIndex],
                            itemStyle: {
                                normal: {
                                    color: '#00FF00',
                                    opacity: 0.3
                                }
                            },
                            lineStyle: {
                                normal: {
                                    show: true,
                                    width: 1,
                                    opacity: 0.5,
                                    color: "#00FF00"
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: '#00FF00',
                                    shadowBlur: 15,
                                    shadowColor: 'rgba(0,0,0,.2)',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 5,
                                    opacity: 0.3
                                }
                            },
                    },
                    {
                        name: 'Best_Validation',
                        value: Best_Validation[dataIndex],
                        itemStyle: {
                            normal: {
                                color: '#00008B',
                                opacity: 0.3
                            }
                        },
                        lineStyle: {
                            normal: {
                                show: true,
                                width: 1,
                                opacity: 0.5,
                                color: "#00008B"
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#00008B',
                                shadowBlur: 15,
                                shadowColor: 'rgba(0,0,0,.2)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 5,
                                opacity: 0.3
                            }
                        },
                    }]
                }]
        })
    }
});