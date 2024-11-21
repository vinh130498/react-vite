// () => { }
// component = html + css + js
// JSX: 1 parent
// fragment <></>

import './style.css';

const MyComponent = () => {
    return (
        <>
            <div> vinh & study react update</div >
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>
    );
}

export default MyComponent;