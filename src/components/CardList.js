import React from 'react';
import Card from './Card';


// CREATE A CONST FOR THE CARD COMPONENT AND PASS IT INTO THE CARD LIST TO RETURN THE LIST OF CARDS

// const CardList = ({ robots }) => {
//     const cardComponent = robots.map((user, i) => {
//         return (
//             <Card
//                 key={i} 
//                 id={robots[i].id}
//                 name={robots[i].name}
//                 email={robots[i].email}
//             />
//         );
//     })
//     return (
//         <div>
//             {cardComponent}
//       </div>
//     );
// }



// PASS THE ROBOT MAPPING FUNCTION STRAIGHT INTO THE FUNCTION 

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('NOOOOOO!');
    // }
    return (
        <div>
            {
            robots.map((user, i) => {
                return (
                    <Card
                        key={i} 
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            })
        }
        </div>
    );
}



export default CardList;




// OLD CODE BEFORE LOOPING WITH MAP FUNCTION

// return {
//     <div>
//         <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//         <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//     </div>
// }

// WE NEED TO PUT A KEY PROP ON 