import React from 'react';
import './style.css';
import {Table } from 'antd';


const columns = [{
    title: 'Mês',
    dataIndex: 'segmento',
    width: 150,
  }, {
    title: 'Qualificação/agendamento',
    dataIndex: 'mes',
    width: 150,

  }, {
    title: 'Diagnóstico',
    dataIndex: 'mes',
    width: 210,
    
  }, {
    title: 'Demonstração do sistema',
    dataIndex: 'mes',
    width: 200,

  }, {
  
    title: 'Fechamento',
    dataIndex: 'leads',
  }];
  
  const data = [];

  const m1 = 100;
  const m2 = 500;
  const m4 = 300;
  const m5 = 250;


  
  
  data.push({
    segmento: `Janeiro`,
    mes: m1,
    leads: `600`, 
  }
  );

  data.push({
    segmento: `Fevereiro`,  
    mes: m5,
    leads: `800`, 
  }
  );

  data.push({
    segmento: `Março`,
    mes: m2,
    leads: `500`, 
  }
  );
  
  
  data.push({
    segmento: `Abril`,
    mes: m5,
    leads: `300`, 
  }
  );
  
  
  data.push({
    segmento: `Maio`,
    mes: m1,
    leads: `700`, 
  }
  );

  data.push({
    segmento: ` Junho`,
    mes: m1,
    leads: `1000 `, 
  }
  );
  
  
  data.push({
    segmento: `Julho`,
    mes: m4,
    leads: `600`, 
  }
  );
  
  data.push({
    segmento: `Agosto`,
    mes: m2,
    leads: `500 `, 
  }
  );
  
  
  
    data.push({
      segmento: `Setembro`,
      mes: m2,
      leads: `1000 `, 
    }
);

data.push({
  segmento: `Outubro`,
  mes: m2,
  leads: '800', 
}
);


data.push({
  segmento: `Novembro`,
  mes: m1,
  leads: `500`, 
}
);


data.push({
  segmento: `Dezembro`,
  mes: m5,
  leads: `500 `, 
}
);














class TabelaFunilVendasMes extends React.Component {

    render() {


        return ( 

         
        
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        

        );
    }
}

export default  TabelaFunilVendasMes;