import { Col, Row } from "reactstrap";
import Card from "../components/Card";
import { Bar, Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement,CategoryScale,LinearScale,BarElement} from 'chart.js/auto'

export default function Home(){

    ChartJS.register(ArcElement);
    ChartJS.register(CategoryScale)
    ChartJS.register(LinearScale)
    ChartJS.register(BarElement)


    const data = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: [55, 23, 96],
              // you can set indiviual colors for each bar
              backgroundColor: [
                '#5589e276',
                '#7fe25576',
                '#bcde3376'
              ],
              borderWidth: 1,
            }
        ]
}


    return (
     <div className={"page-sect-card"}>
     <Row style={{justifyContent:"",padding:"20px"}}>
        <Col md="4" className="detail-box-home box-border">
            <p>Tasks completed in last 7 days</p>
            <p className="box-val">32</p>
        </Col>
        <Col md="4" className="detail-box-home box-border">
        <p>Overall Project ROM</p>
        <p className="box-val">${"$1,12,3790.85"}</p>

        </Col>
        <Col md="4" className="detail-box-home box-border">
        <p>Milestones completed</p>
        <p className="box-val">3</p>

        </Col>

     </Row>
     <Row style={{justifyContent:"",padding:"20px"}}>
        <Col md="6" className="detail-box-home" style={{maxWidth:"49%",padding:"5%"}}>
        <h5 style={{marginTop:"-12px",marginBottom:"40px",marginLeft:"-12px"}}><b>Projects Tasks by Status :</b></h5>   
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
      />        </Col>
        <Col md="6" className="detail-box-home" style={{maxWidth:"49%",padding:"0%",width:"700px"}}>
        {/* <h5 style={{marginTop:"-12px",marginBottom:"40px",marginLeft:"-12px"}}><b>Sales :</b></h5>    */}
         
        <Bar
        data={data}
        width={"150"}
        height={"220"}

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

      />
        </Col>

     </Row>
     </div>
    
    );
}