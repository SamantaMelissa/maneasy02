import { useEffect, useState } from 'react';
import './App.css';
import Graficos from './components/Graficos';

function App() {
  const [errorList, setErrorList] = useState<Array<any>>([]);

  useEffect(() => {
    fetch('http://localhost:3000/avisos')
      .then(response => response.json())
      .then(data => {
        const filterList = [...errorList];

        data.forEach((a: any) => {
          var item = filterList.findIndex(x => x.ano === parseInt(a.data_aviso.split("-")[0]));

          if (item == -1) {
            filterList.push({
              ano: parseInt( a.data_aviso.split("-")[0] ),
              contagem: 1
            });
          } else {
            filterList[item].contagem += 1;
          }
        });
        console.log(filterList)
        setErrorList(filterList);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []); // Executar o useEffect apenas quando errorList mudar

  return (
    <div className="App">
      <div className="row">
        <div className="mixed-chart">
          {/* Passa errorList como prop para Graficos */}
          <Graficos errorList={errorList} />
        </div>
      </div>
    </div>
  );
}

export default App;
