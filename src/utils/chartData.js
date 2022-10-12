export const barChartData = [
  {
    name: "Sales by Age",
    data: [20, 30, 40, 20, 45, 30],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      backgroundColor: "red",
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        backgroundColor: "red",
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["16-20", "21-25", "26-30", "31-35", "36-42", "42+"],
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#444",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#444",
        fontSize: "14px",
      },
    },
  },
  grid: {
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    colors: ["#999"],
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "40px",
    },
  },
};

function generateData(baseval, count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i += 1;
  }
  return series;
}

export const bubbleChartData = [
  {
    name: "Actual",
    data: generateData(new Date("11 Feb 2022 GMT").getTime(), 10, {
      min: 10,
      max: 30,
    }),
  },
  {
    name: "Target",
    data: generateData(new Date("11 Feb 2022 GMT").getTime(), 10, {
      min: 10,
      max: 30,
    }),
  },
];

export const bubbleChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#444",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#444",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    type: "solid",
    gradient: {
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#ec4b6b", "#4aa3f8"],
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: "8px",
    },
  },
  colors: ["#ec4b6b", "#4aa3f8"],
};

export const donutChartOptions = {
  series: [50, 15, 10, 20, 5],
  labels: ["USA", "Netherlands", "Australia", "Switzerland", "South Korea"],
  colors: ["#4d4d4d"],
  chart: {
    width: "100%",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },

  fill: {
    colors: ["#3097f7", "#69e69e", "#ed4562", "#856fd5", "#f49d3f"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const donutChartData = [50, 15, 10, 20, 5];

export const pieChartOptions = {
  labels: ["Product XX", "Product NX", "Product CX"],
  colors: ["#4d4d4d"],
  chart: {
    width: "100%",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#3899f7", "#ec4b6b", "#f49d3f"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartData = [70, 10, 20];
