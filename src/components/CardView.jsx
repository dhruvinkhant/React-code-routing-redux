import React from 'react';
import CardBox from './CardBox';

let data = [
    {
        title:'Silver',
        des1: "1. New Naroda",
        des2: "2. Shivranjani",
        des3: "3. Thaltej"
    },
    {
        title:'Gold',
        des1: "1. Ahmedabad",
        des2: "2. Gandhinagar",
        des3: "3. Surat"
    },
    {
        title:'Platinum',
        des1: "1. India",
        des2: "2. U.S.A",
        des3: "3. London"
    },
    {
        title:'Diamond',
        des1: " 1. Earth",
        des2: "2. Sun",
        des3: "3. Moon"
    }
]

function CardView(props) {
    return (
        <div>
            <CardBox  data={data}/>
        </div>
    );
}

export default CardView;