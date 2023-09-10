import { Component, AfterViewInit } from '@angular/core';
import {
	ApexAxisChartSeries,
	ApexChart,
	ChartComponent,
	ApexDataLabels,
	ApexPlotOptions,
	ApexYAxis,
	ApexLegend,
	ApexStroke,
	ApexXAxis,
	ApexFill,
	ApexTooltip,
	ApexGrid,
	NgApexchartsModule
} from "ng-apexcharts";
import { DemoMaterialModule } from '../demo-material-module';

export interface ChartOptions {
	series: ApexAxisChartSeries | any;
	chart: ApexChart | any;
	dataLabels: ApexDataLabels | any;
	plotOptions: ApexPlotOptions | any;
	yaxis: ApexYAxis | any;
	xaxis: ApexXAxis | any;
	fill: ApexFill | any;
	tooltip: ApexTooltip | any;
	stroke: ApexStroke | any;
	legend: ApexLegend | any;
	grid: ApexGrid | any;
}

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [NgApexchartsModule, DemoMaterialModule],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	chartOptions: ChartOptions = {
		series: [
			{
				name: 'Sales',
				data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
			},
		],
		chart: {
			height: 350,
			type: 'bar',
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		},
		dataLabels: undefined,
		plotOptions: undefined,
		yaxis: undefined,
		fill: undefined,
		tooltip: undefined,
		stroke: undefined,
		legend: undefined,
		grid: undefined
	};

	seriesOptions: ChartOptions = {
		series: [{
			name: 'Série Temporal',
			data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
		},
		{
			name: 'Série Temporal',
			data: [35, 48, 46, 55, 48, 65, 60, 101, 15],
		}],
		chart: {
			height: 350,
			type: 'line',
		},
		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
			],
			title: {
				text: 'Months',
			},
		},
		yaxis: {
			title: {
				text: 'Values',
			},
		},
		dataLabels: undefined,
		plotOptions: undefined,
		fill: undefined,
		tooltip: undefined,
		stroke: undefined,
		legend: undefined,
		grid: undefined
	}


	// Dados do gráfico de pizza
	pieChartData: number[] = [30, 40, 45, 50, 49];

	// Rótulos das fatias da pizza
	pieChartLabels: string[] = ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E'];

	// Opções do gráfico de pizza
	pieChartOptions: ChartOptions = {
		series:this.pieChartData, 
		chart: {
			type: 'pie',
			width: 500, // Largura fixa
			height: 500, // Altura fixa
		},
		yaxis: undefined,
		xaxis: undefined,
		dataLabels: this.pieChartLabels,
		plotOptions: undefined,
		fill: undefined,
		tooltip: undefined,
		stroke: undefined,
		legend: undefined,
		grid: undefined
	};


	ngAfterViewInit() { }

}
