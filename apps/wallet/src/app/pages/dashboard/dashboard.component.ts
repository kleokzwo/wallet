import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
    selector: 'wallet-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    // public public_address: string = '1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F';
    // public current_balance: string = '19.987.00';

    // @ViewChild("chart") chart: ChartComponent | undefined;
    // @ViewChild('sidebar') sidebar: SidebarComponent | undefined;
    // public chartOptions: any;
  
    // public constructor() {
    //   this.chartOptions = {
    //     series: [
    //       {
    //         name: "distibuted",
    //         data: [21, 22, 10, 28, 16, 21, 13, 30]
    //       }
    //     ],
    //     chart: {
    //       height: 350,
    //       type: "bar",
    //       toolbar: {
    //         tools: {
    //             download: false
    //         }
    //     }
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     tooltip: {
    //         enabled: false
    //     },
    //     xaxis: {
    //         categories: [
    //           ["Jan"],
    //           ["Feb"],
    //           ["Mar"],
    //           ["Apr"],
    //           ["May"],
    //           ["Jun"],
    //           ["Jul"],
    //           ["Aug"],
    //           ["Sep"],
    //           ["Oct"],
    //           ["Nov"],
    //           ["Dec"]
    //         ],
    //         labels: {
    //           style: {
    //             colors: [
    //               "#FEB019",
    //               "#FF4560",
    //               "#775DD0",
    //               "#546E7A",
    //               "#26a69a",
    //               "#D10CE8",
    //               "#FF4560",
    //               "#FEB019",
    //               "#FF4560",
    //               "#775DD0",
    //               "#546E7A",
    //               "#26a69a"
    //             ],
    //             fontSize: "12px"
    //           }
    //         }
    //       },
    //     plotOptions: {
    //         bar: {
    //             distributed: true,
    //             borderRadius: 5,
    //             columnWidth: '20%',
    //         }
    //     },
    //     legend: {
    //       show: false
    //     },
    //     grid: {
    //       show: false
    //     }
    //   };
    // }

    public toggleMenu() {
        const sidebar = document.getElementById('sidebar');

// const toggleSidebarMobile = (sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose) => {
//     sidebar.classList.toggle('hidden');
//     sidebarBackdrop.classList.toggle('hidden');
//     toggleSidebarMobileHamburger.classList.toggle('hidden');
//     toggleSidebarMobileClose.classList.toggle('hidden');
// }

// const toggleSidebarMobileEl = document.getElementById('toggleSidebarMobile');
// const sidebarBackdrop = document.getElementById('sidebarBackdrop');
// const toggleSidebarMobileHamburger = document.getElementById('toggleSidebarMobileHamburger');
// const toggleSidebarMobileClose = document.getElementById('toggleSidebarMobileClose');
// const toggleSidebarMobileSearch = document.getElementById('toggleSidebarMobileSearch');

// toggleSidebarMobileSearch.addEventListener('click', () => {
//     toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
// });

// toggleSidebarMobileEl.addEventListener('click', () => {
//     toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
// });

// sidebarBackdrop.addEventListener('click', () => {
//     toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
// });

    }
}