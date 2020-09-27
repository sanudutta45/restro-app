import React,{useEffect, useState} from 'react'
import Menu from "./Menu";
import {getRestaurant} from "../../actions/menuAction";

const Index = (props) => {
    const[menu,setMenu] = useState({});
    const [loading,setLoading] = useState(true);
    const [serverError,setServerError] = useState("");

    const {id} = props.match.params;

    useEffect(()=>{
      const getInitialData = async ()=>{
          try{
            setServerError("");
            setLoading(true);
            const res = await getRestaurant(id);
            setMenu(res);
            setLoading(false);
          }catch(error){
              setServerError(error.message);
              setLoading(false);
          }
      }
      getInitialData();
    },[id]);

   
    return (
        <div>
            {loading ? <div className="text-center">Loading</div>:
                <Menu menu={menu} serverError={serverError}/>
            }
        </div>
    )
}

export default Index
