import React from 'react';
import './style.css';
import {Table } from 'antd';


const columns = [{
    title: 'Segmento',
    dataIndex: 'segmento',
    width: 150,
  }, {
    title: 'Mês',
    dataIndex: 'mes',
    width: 150,
  }, {
    title: 'n° Leads',
    dataIndex: 'leads',
  }];
  
  const data = [];

  data.push({
    segmento: `Consultoria`,
    mes: 'Agosto',
    leads: `500`, 
  }
  );
  
  
  data.push({
    segmento: `Restaurante`,
    mes: 'Agosto',
    leads: `600`, 
  }
  );

  data.push({
    segmento: `Comércio`,  
    mes: 'Agosto',
    leads: `800`, 
  }
  );

  data.push({
    segmento: `Consultoria`,
    mes: 'Setembro',
    leads: `500`, 
  }
  );
  
  
  data.push({
    segmento: `Restaurante`,
    mes: 'Setembro',
    leads: `300`, 
  }
  );
  
  
  data.push({
    segmento: `Comércio`,
    mes: 'Setembro',
    leads: `700`, 
  }
  );
  
  
  
    data.push({
      segmento: `Consultoria`,
      mes: 'Novembro',
      leads: `1000 `, 
    }
);

data.push({
  segmento: `Comércio`,
  mes: 'Novembro',
  leads: '800', 
}
);


data.push({
  segmento: `Restaurante`,
  mes: 'Novembro',
  leads: `500`, 
}
);


data.push({
  segmento: `Consultoria `,
  mes: 'Dezembro',
  leads: `500 `, 
}
);


data.push({
  segmento: `Comércio`,
  mes: 'Dezembro',
  leads: `800 `, 
}
);


data.push({
  segmento: `Restaurante`,
  mes: 'Dezembro',
  leads: `500`, 
}
);


data.push({
  key: 7,
  segmento: `Consultoria`,
  mes: 'Outubro',
  leads: `1000 `, 
}
);


data.push({
  segmento: `Restaurante`,
  mes: 'Outubro',
  leads: `600`, 
}
);

data.push({
  segmento: `Comércio`,
  mes: 'Outubro',
  leads: `500 `, 
}
);









class TabelaLeadSegmento extends React.Component {

    render() {


        return ( 

         
        
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        

        );
    }
}

export default  TabelaLeadSegmento;