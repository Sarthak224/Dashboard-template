import { linkedinColumns } from "../components/Tables/TableHeaders";
import Tables from "../components/Tables";
import { useEffect, useMemo, useState } from "react";
import axios, { Axios } from "axios";

export default function FlipkartPage(){

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

    var columns =  useMemo(()=>linkedinColumns)
    var data = useMemo(()=>(linkedinData?linkedinData.dataList:[]))


    console.log(linkedinData)
    


    return (
        <div>
         { linkedinData &&  <Tables columns ={linkedinColumns} data={linkedinData.dataList} />}
        </div>
    )
}