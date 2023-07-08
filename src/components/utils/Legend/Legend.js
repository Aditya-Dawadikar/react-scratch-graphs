import React,{useState} from 'react'

const Legend = () => {

    const [items,setItems] = useState([
        {
            "color": "#bf3234",
            "label": "ABC"
        },
        {
            "color": "#bf3234",
            "label": "ABC"
        },
        {
            "color": "#bf3234",
            "label": "ABC"
        },{
            "color": "#bf3234",
            "label": "ABC"
        },
        {
            "color": "#bf3234",
            "label": "ABC"
        },
        {
            "color": "#bf3234",
            "label": "ABC"
        }
    ])

  return (
    <div className='center'>
        <div style={{"maxWidth":"100em"}}>
            <ul className='flex'>
                {
                    items.map((elem, index)=>{
                        return <li className='m-1 flex' key={index}>
                            <div
                                className="color-box"
                                style={{
                                        "background": elem.color,
                                        "marginTop": "0.5em"
                                    }}
                            ></div>
                            <p style={{margin:0}} className='m-1'>{elem.label}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Legend