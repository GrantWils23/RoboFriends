import React from "react";


// DESTRUCTURING IN THE PROPS directly into the card element

const Card = ({ name, email, id }) => {
    return (
        <>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </>
    );
}

// DESTRUCTURING THE PROPS by creating a Const where it = props

// const Card = (props) => {
//     const { name, email, id } = props;
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }



//  DESTRUCTURING THE PROPS by calling the properties and writing   props.id  props.name  props.email

// const Card = (props) => {
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robot' src={`https://robohash.org/${props.id}?200x200`} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

export default Card;

//