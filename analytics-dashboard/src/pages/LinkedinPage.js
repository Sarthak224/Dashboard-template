import { Col, Row, Table } from "reactstrap";
import Card from "../components/Card";
import { Bar, Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement,CategoryScale,LinearScale,BarElement} from 'chart.js/auto'
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";


export default function LinkedinPage(){


  
    ChartJS.register(ArcElement);
    ChartJS.register(CategoryScale)
    ChartJS.register(LinearScale)
    ChartJS.register(BarElement)


    const [linkedinData,setLinkedInData] = useState(null);
    const [pieData,setPieData] = useState({keys:[],values:[]})

    async function getLinkedinData(){
      var res = await axios.get('http://localhost:3013/api/company/getData?company=linkedin')
      if(res.data){
        setLinkedInData(res.data)

        var pieChartData = res.data.levelType;
        var pieKeys = Object.keys(pieChartData);
        var newObj = {
          
          keys:[],
          values:[]
        
        }

        for(var i=0;i<pieKeys.length;++i){
          newObj.keys.push(pieKeys[i]);
          newObj.values.push(pieChartData[pieKeys[i]])
        }
        setPieData({...newObj})

      }
    }

    useEffect(()=>{
     getLinkedinData();
    },[])


    console.log(linkedinData)




    const data = {
        labels: pieData.keys,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: pieData.values,
              // you can set indiviual colors for each bar
              backgroundColor: [
                '#5589e276',
                '#7fe25576',
                '#bcde3376',
                '#bcda3376',

              ],
              borderWidth: 1,
            }
        ]
}


    return (
            <div className={"page-sect-card"}>
              <h3 className ="detail-box-linkedin-main " style={{padding:"30px 20px",paddingTop:"30px",marginLeft:"20px",width:"90%",maxWidth:"90%",marginTop:"20px"}}><i class="fab fa-linkedin" style={{fontSize:"27px",marginRight:"30px"}} ></i><b>Linkedin Data :</b></h3>
              <Row className="detail-box-linkedin-chart-pie" style={{paddingLeft:"30px"}}>
                <Col className="detail-box-linkedin-main" md="5" style={{display:"flex",alignContent:"center"}}>

                <Pie
               data={data}
               options={{
                 plugins: {
                   title: {
                     display: true,
                     text: "Users Gained between 2016-2020"
                   }
                 }
               }}
               style={{margin:"auto"}}
             /> 

                </Col>
                <Col className="detail-box-linkedin-main" md="6">


                <Row style={{justifyContent:"space-around",padding:"20px"}}>
        <Col md="6" className="detail-box-linkedin box-border">
            <p>Max Linkedin Followers</p>
            <p className="box-val">{linkedinData ?linkedinData.maxFollowers :"Loading..."}</p>
        </Col>
        <Col md="6" className="detail-box-linkedin box-border">
        <p>Overall Project ROM</p>
        <p className="box-val">${"$1,12,3790.85"}</p>

        </Col>
        {/* <Col md="4" className="detail-box-home box-border">
        <p>Milestones completed</p>
        <p className="box-val">3</p>

        </Col> */}
       
            </Row>
            <Row style={{justifyContent:"",padding:"20px"}}>
               {/* <Col md="6" className="detail-box-home" style={{maxWidth:"49%",padding:"5%"}}>
               <h5 style={{marginTop:"-12px",marginBottom:"40px",marginLeft:"-12px"}}><b>Projects Tasks by Status :</b></h5>   
              </Col> */}
               <Col md="12" className="detail-box-home" style={{maxWidth:"99%",padding:"0%",width:"700px",marginTop:"30px",width:"45vw"}}>
               {/* <h5 style={{marginTop:"-12px",marginBottom:"40px",marginLeft:"-12px"}}><b>Sales :</b></h5>    */}
                
               <Bar
               data={data}
               width={"210"}
               height={"170"}
       
               options={{
                 plugins: {
                   title: {
                     display: true,
                     text: "Sales between 2016-2020"
                   },
                   legend: {
                     display: false
                   }
                 },
                 scales: {
                   xAxes: [{
                       barPercentage: 0.4
                   }]
               },
       
               // maintainAspectRatio: false,
       
               }}


             style={{width:"360px",height:"420px"}}
             />
               </Col>
       
            </Row>




                </Col>


            </Row>
            <Row style={{margin:"30px",backgroundColor:"#fff",marginBottom:"60px"}}>
              
            <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr><tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr><tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr><tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr><tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

            </Row>
            </div>   
         );
}