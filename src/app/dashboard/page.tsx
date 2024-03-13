import LineChart from "./line-chart";

function BarChart() {
    return (
        <>
            <h1>Dashboard</h1>
            <LineChart />
        </>
    )
}

export default function Dashboard() {
    return <BarChart />
}