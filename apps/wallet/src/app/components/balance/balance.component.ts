import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

@Component({
    selector: 'wallet-balance',
    templateUrl: './balance.component.html'
})

export class BalanceComponent {
    public public_address: string = '1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F';
    public current_balance: string = '19.987.00';
    @ViewChild("chart") chart: ChartComponent | undefined;
    public chartOptions: any;
  
    public constructor() {
      this.chartOptions = {
        series: [
          {
            name: "distibuted",
            data: [21, 22, 10, 28, 16, 21, 13, 30]
          }
        ],
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            tools: {
                download: false
            }
        }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        xaxis: {
            categories: [
              ["Jan"],
              ["Feb"],
              ["Mar"],
              ["Apr"],
              ["May"],
              ["Jun"],
              ["Jul"],
              ["Aug"],
              ["Sep"],
              ["Oct"],
              ["Nov"],
              ["Dec"]
            ],
            labels: {
              style: {
                colors: [
                  "#FEB019",
                  "#FF4560",
                  "#775DD0",
                  "#546E7A",
                  "#26a69a",
                  "#D10CE8",
                  "#FF4560",
                  "#FEB019",
                  "#FF4560",
                  "#775DD0",
                  "#546E7A",
                  "#26a69a"
                ],
                fontSize: "12px"
              }
            }
          },
        plotOptions: {
            bar: {
                distributed: true,
                borderRadius: 5,
                columnWidth: '20%',
            }
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        }
      };
    }

}