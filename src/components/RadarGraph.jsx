import { useRadarGraph } from "../hooks/useRadarGraph";
import { Radar } from "react-chartjs-2";


export function RadarGraph ({data}) {
  // const {stats} = useRadarGraph();
  return (
    <>
      <Radar data={data}/>
    </>
  )
}