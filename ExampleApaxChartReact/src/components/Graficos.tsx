import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

// Defina os tipos das props corretamente
interface GraficosProps {
  errorList: Array<any>;
}

export const Graficos = ({ errorList } : GraficosProps) => {
  const [options, setOptions] = useState<any>({ chart: { id: "basic-bar" }, xaxis: { categories: [] } })
  const [series, setSeries] = useState<any>({ name: "series-1", data: [] })

  useEffect(() => {
    let testea : any = []
    let testeb : any = []
    errorList.forEach((a, b) => {
      // options.xaxis.categories.push( a.ano )
      testea.push( a.ano )
      testeb.push( a.contagem )
    }); 
    setOptions({ ...options, xaxis : { categories : testea}})
    setSeries({ ...series, data : testeb})

    console.log(errorList)
  }, [errorList])

  return (
    <Chart
      options={ options }
      series={[ series ]}
      type="bar"
      width="500"
    />
  );
};

export default Graficos;