import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js"

ChartJS.register(BarElement, CategoryScale, LinearScale)

export default function StockChart({ products }) {
  const data = {
    labels: products.map(p => p.name),
    datasets: [
      {
        label: "재고 수량",
        data: products.map(p => p.stock),
        backgroundColor: "#4ade80"
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: { legend: { display: false } }
  }

  return (
    <div className="bg-gray-800 p-4 mt-4 rounded">
      <h3 className="text-white mb-2">📊 재고 차트</h3>
      <Bar data={data} options={options} />
    </div>
  )
}
