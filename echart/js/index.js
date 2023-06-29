// 柱状图1模块
(function() {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //const data = localStorage.getItem("a")//获取china.js发送的省份名称
  var data1=[]
  var data2=[]
//获取后台数据
  const Http = new XMLHttpRequest();
  const url='http://43.143.201.120:9999/statistics/listProvinceItemTotalStatis';
  Http.open("POST", url);
  Http.send();
  var temp=[]
  Http.onreadystatechange =function(){
    if(this.readyState==4)
    {
      console.log(Http.response)
      temp=eval(Http.response)
      for(var i=0;i<temp.length;i++)
      {
        data1.push(temp[i].provinceAbbr)
        data2.push(temp[i].coTotal)
      }
      console.log(data1)
    }
  }
  //异步操作（回调函数）
  setTimeout(() => {
    var option = {
      color: ["#e83d3d"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: data1,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {//横坐标字体格式
            textStyle: {

              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [//纵坐标字体格式
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "超标次数",
          type: "bar",
          barWidth: "35%",
          data: data2,
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });

    // 数据变化
    var dataAll = [
      { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
      { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
  }, 1000)
})();

// 柱状图2模块
(function() {
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  //const data = localStorage.getItem("a")//获取china.js发送的省份名称
  var data1=[]
  var data2=[]
//获取后台数据
  const Http = new XMLHttpRequest();
  const url='http://43.143.201.120:9999/statistics/listProvinceItemTotalStatis';
  Http.open("POST", url);
  Http.send();
  var temp=[]
  Http.onreadystatechange =function(){
    if(this.readyState==4)
    {
      console.log(Http.response)
      temp=eval(Http.response)
      for(var i=0;i<temp.length;i++)
      {
        data1.push(temp[i].provinceAbbr)
        data2.push(temp[i].so2Total)
      }
      console.log(data1)
    }
  }
  //异步操作（回调函数）
  setTimeout(() => {
    var option = {
      color: ["#e8c63d"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: data1,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {//横坐标字体格式
            textStyle: {

              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [//纵坐标字体格式
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "超标次数",
          type: "bar",
          barWidth: "35%",
          data: data2,
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });

    // 数据变化
    var dataAll = [
      { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
      { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
  }, 1000)
})();

//柱状图3
(function() {
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  //const data = localStorage.getItem("a")//获取china.js发送的省份名称
  var data1=[]
  var data2=[]
//获取后台数据
  const Http = new XMLHttpRequest();
  const url='http://43.143.201.120:9999/statistics/listProvinceItemTotalStatis';
  Http.open("POST", url);
  Http.send();
  var temp=[]
  Http.onreadystatechange =function(){
    if(this.readyState==4)
    {
      console.log(Http.response)
      temp=eval(Http.response)
      for(var i=0;i<temp.length;i++)
      {
        data1.push(temp[i].provinceAbbr)
        data2.push(temp[i].spmTotal)
      }
      console.log(data1)
    }
  }
  //异步操作（回调函数）
  setTimeout(() => {
    var option = {
      color: ["#9b3de8"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: data1,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {//横坐标字体格式
            textStyle: {

              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [//纵坐标字体格式
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "超标次数",
          type: "bar",
          barWidth: "35%",
          data: data2,
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });

    // 数据变化
    var dataAll = [
      { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
      { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
  }, 1000)
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "新增游客",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 饼形图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "深圳" },
          { value: 42, name: "广东" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})
();
