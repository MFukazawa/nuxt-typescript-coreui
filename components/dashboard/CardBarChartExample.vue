<script>
import { Bar } from 'vue-chartjs'

const datasets = [
  {
    label: 'My First dataset',
    backgroundColor: 'rgba(255,255,255,.3)',
    borderColor: 'transparent',
    data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
  },
]

export default {
  extends: Bar,
  props: ['height'],
  mounted() {
    this.renderChart(
      {
        labels: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        datasets,
      },
      {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        dataset: {
          barPercentage: 0.5,
          categoryPercentage: 1,
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      }
    )
  },
}
</script>
