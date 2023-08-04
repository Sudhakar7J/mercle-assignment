import { messageCountList } from "./../utils/messageCountList"
import { channels } from "./../utils/channels"
import { DuplicateData, DuplicateDataFormat } from "../utils/helper"

const engagementHelper = {
  engagementMessageOverTimeChartOptions: function () {
    const duplicates = DuplicateData(messageCountList)
    const formattedData = DuplicateDataFormat(duplicates, channels)

    const chartOptions = {
      chart: {
        type: "spline",
        backgroundColor: "#22222C",
        style: {
          fontFamily: "Roboto, sans-serif",
          fontSize: 16,
        },
      },

      xAxis: {
        type: "datetime",
        tickInterval: 24 * 3600 * 1000,
        dateTimeLabelFormats: {
          millisecond: "%l:%M %p",
          second: "%l:%M %p",
          minute: "%l:%M %p",
          hour: "%l:%M %p",
          day: "%e %b",
          week: "%e. %b",
          month: "%b '%y",
          year: "%Y",
        },
        tickLength: 10,
        tickWidth: 2,
        lineWidth: 2,
        labels: {
          style: {
            textTransform: "normal",
            color: "#3c4048",
            fontWeight: 1000,
            fontSize: "12px",
          },
        },
      },
      yAxis: {
        gridLineWidth: 0,
        gridLineDashStyle: "none",
        gridLineColor: "",
        lineColor: "",
        lineWidth: 0,
        title: " ",
        tickLength: 10,
        tickWidth: 2,
        labels: {
          style: {
            textTransform: "normal",
            color: "#3c4048",
            fontWeight: 1000,
            fontSize: "12px",
          },
        },
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "",
      },
      series: formattedData,

      tooltip: {
        outside: true,
        crosshairs: true,
        useHTML: true,
        formatter: function () {
          const unixTimestamp = this.x
          const date = new Date(unixTimestamp)
          const options = {
            day: "numeric",
            month: "short",
          }
          const formattedDate = date.toLocaleDateString("en-UK", options)
          return `${this.series.name} <br/>${this.y} message on ${formattedDate}</b>`
        },
        backgroundColor: "#0c0c0f",
        borderWidth: 2,
        style: {
          opacity: "0.8",
          color: "white",
          background: "transparent",
        },
      },
      plotOptions: {
        series: {
          marker: {
            symbol: "circle",
            enabled: false,
            color: "#008f8d",
          },
        },
      },
      legend: {
        itemStyle: {
          fontWeight: 500,
          color: "white",
        },
        itemHoverStyle: {
          color: "white",
        },
        backgroundColor: "#15161b",
        alignColumns: false,
      },
    }
    return chartOptions
  },
}

export { engagementHelper, messageCountList, channels }
