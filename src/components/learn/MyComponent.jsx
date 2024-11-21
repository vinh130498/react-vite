// () => { }
// component = html + css + js
// JSX: 1 parent
// fragment <></>

import './style.css';

const MyComponent = () => {
    // const studyReact = "vinh"; //string
    // const studyReact = 25; //number
    // const studyReact = true; //boolean
    // const studyReact = undefined;
    // const studyReact = null;
    const studyReact = [1, 2, 3];
    // const studyReact = {
    //     name: "vinh",
    //     age: 26
    // }

    return (
        <>
            <div> {JSON.stringify(studyReact)} & study react update</div >
            <div>{console.log("VINH")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }} // dấu nháy đôi thứ nhất tượng trưng cho sử dụng JS trong HTML, còn thứ hai tượng trưng cho object
            >child</div>
        </>
    );
}

export default MyComponent;