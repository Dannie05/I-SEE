import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
labels:['Referal','Data','Airtime','Cable TV','Electronic'],
datasets:[
    {
        label: 'All time',
    data:[12, 9, 3, 5, 2, 3],
    backgroundColor:[
       ' rgba(255, 99, 132,0.5)',
       ' rgba(54, 162, 235,0.5)',
       ' rgba(255, 206, 86,0.5)',
       ' rgba(75, 192, 192,0.5)',
       ' rgba(153, 102, 255,0.5)',
       ' rgba(255, 159, 64,0.5)',
    ],
    borderColor:[
        ' rgba(255, 99, 132, 1)',
        ' rgba(54, 162, 235, 1)',
        ' rgba(255, 206, 86, 1)',
        ' rgba(75, 192, 192, 1)',
        ' rgba(153, 102, 255, 1)',
        ' rgba(255, 159, 64, 1)',
    ],
     borderWidth:2
    },
]
}

export default function Chart({
    showOnUtilitiesPage
  }: {
    showOnUtilitiesPage?: string | null
  }) {
    return <Doughnut data={data} className='max-h-[75%] min-h-[70%] w-11/12'/>
    
}