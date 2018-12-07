import React from 'react';
import './style.css';
import {Table } from 'antd';


const columns = [{
    title: 'Origem Leads',
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
    segmento: `Site (cadastro)`,
    mes: 'Agosto',
    leads: `500`, 
  }
  );
  
  
  data.push({
    segmento: `Google (ads)`,
    mes: 'Agosto',
    leads: `600`, 
  }
  );

  data.push({
    segmento: `outbound`,  
    mes: 'Agosto',
    leads: `800`, 
  }
  );

  data.push({
    segmento: `Site (cadastro)`,
    mes: 'Setembro',
    leads: `500`, 
  }
  );
  
  
  data.push({
    segmento: `outbound`,
    mes: 'Setembro',
    leads: `300`, 
  }
  );
  
  
  data.push({
    segmento: `Google (ads)`,
    mes: 'Setembro',
    leads: `700`, 
  }
  );

  data.push({
    key: 7,
    segmento: ` Blog`,
    mes: 'Outubro',
    leads: `1000 `, 
  }
  );
  
  
  data.push({
    segmento: `Google (ads)`,
    mes: 'Outubro',
    leads: `600`, 
  }
  );
  
  data.push({
    segmento: `Facebook`,
    mes: 'Outubro',
    leads: `500 `, 
  }
  );
  
  
  
    data.push({
      segmento: `Site (cadastro)`,
      mes: 'Novembro',
      leads: `1000 `, 
    }
);

data.push({
  segmento: `outbound`,
  mes: 'Novembro',
  leads: '800', 
}
);


data.push({
  segmento: `Facebook`,
  mes: 'Novembro',
  leads: `500`, 
}
);


data.push({
  segmento: `Site (cadastro)`,
  mes: 'Dezembro',
  leads: `500 `, 
}
);


data.push({
  segmento: `Facebook`,
  mes: 'Dezembro',
  leads: `800 `, 
}
);


data.push({
  segmento: `Google (ads)`,
  mes: 'Dezembro',
  leads: `500`, 
}
);












class TabelaOrigemLeads extends React.Component {

    render() {


        return ( 

         
        
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        

        );
    }
}

export default  TabelaOrigemLeads;