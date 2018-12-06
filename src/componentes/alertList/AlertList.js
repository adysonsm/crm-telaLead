import React from 'react';
import './style.css';
import {Icon, Badge, Popover, Col, Row} from 'antd';




const content = (

  <div class="alertList">

  <Row type="flex" justify="start">
      <Col span={16}>Notificação(4)</Col>
      <Col span={8}>Mensagem (3)</Col>
</Row>



<Row type="flex" justify="start">
    
    <Icon type="mail" theme="twoTone" />
    <p>  Negócio Telsign Consultoria</p>
  
</Row>


<Row type="flex" justify="start">
  <Icon type="phone" theme="twoTone" />

    <p>  Ligar para Cliente </p>
  
</Row>


<Row type="flex" justify="start">

  <Icon type="star" theme="twoTone" />
    <p>  Ligar para Cliente </p>
    
  


</Row>


<Row type="flex" justify="start">

<Icon type="close-circle" theme="twoTone" />
  
    <p>  Cancelar Notar </p>
    
  


</Row>





    <Row type="flex" justify="center">

    Limpar Menssagem
      
    </Row>



  
  
  
  </div>


    
  );




class AlertList extends React.Component {

    render() {


        return ( 


            <div>


            <Popover content={content} placement="bottom" trigger="click">

            <Badge dot >
                  <Icon type="bell" />
        </Badge>
            
          </Popover>

          
           
                
            
            
            </div>



        );
    }
}

export default  AlertList;