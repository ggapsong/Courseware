import React from "react";
import Info from  "./info";
function ListItem(props){
    let {data,isShow,changeShow,index} = props;
    return (
        <div>
            <h2
                className="title"
                onClick={()=>{
                    changeShow(index);
                }}
            >{data.name}</h2>
            {isShow?<Info data={data.list} />:""}
        </div>
    );
}
export default ListItem;
