import { useState } from 'react';
import './cardLeng.css'

function CardHtml( {foto} ) {
  const [hover, setHover] = useState(false);

  return (
    <div className='fondoCard'>
        <div className="card" 
            onMouseEnter={ () => setHover(true) } onMouseLeave={ () => setHover(false) }>
      
      <img src={foto} className='iconcard'/>

        { hover && (
            <div className="txtcard" >
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo... </p>
            </div>
        ) }
        </div>
    </div>
  );
}

export default CardHtml