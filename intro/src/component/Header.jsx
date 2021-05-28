import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({headerTitle,onAdd,showAddtask}) => {
    const handleClick=(event,test)=>{
        console.log("Add Click",event,test);
        onAdd();
    };

    // useEffect(()=>{
    //     /**
    //      * before return act as a componentDidMounted in class component
    //      * and after that act as a componentWillUnmounted
    //      */
    //     console.log("Header component mounted");
    //     document.addEventListener("click",()=>console.log("event"));
    //     return()=>{
    //         document.removeEventlistener("click",()=>console.log("event"));

    //     };
    // },[]);
    return  (
    <header className="header">
            <h1>{headerTitle}</h1>
            <Button btnName={showAddtask ?"Close":"ADD"}
             classes={showAddtask ? "btn--red" : "btn--green"}
             onClick={handleClick}/>
            {/* <Button btnName="Delete" classes="btn--red" />
            <Button btnName="Save" classes="btn--yellow" />  */}
            {/* <h1>{props.headerTitle}</h1> => html print task Manager*/}
            {/* <h1>Task Manager</h1> */} 
        </header>
        );
};

// zamani ke dar parent meghdari baraye Header moshakas nabud az default use mikone.
Header.defaultProps={
    headerTitle:"Default Header"
}


Header.propTypes={ 
    headerTitle:PropTypes.string,
    num:PropTypes.number,
}


// style={headingStyles}=>inline style
// const headingStyles={
//     color:'red',backgroundColor:'black'
// }

 export default Header;

//  const obj={a:1,b:2,c:()=>console.log("hi");}
// dastresi beheshon dar sharayet adi=>obj.a; obj.b;

//  const{a,b}=obj =>object destructure =>moadele eneke begim=>let a=obj.a; let b=obj.b
// ctlr+k+J => baz mikone 
// ctlr+k+0=> mibande 
// style in line => style={{color:'red',backgroungColor:'black'}},=>dont use 


// cons obj1={a:1};
// cons obj2={b:2};
// cons obj3={c:3,d:4};

/**
 * dar enja property haye obj haye bala dar newObj copy shod
 * ama mataghiri dashtim dar obj3 ke d:5 ra dar newObj add
 * kardim va edame obj3 be shekle ghabl add mishie.
 */
// cons newObj={...obj1,...obj2,...obj3,d:5};

// props objecti hast ke har property ke tarif konim ro da khodesh 
// mirize va khoroji re be ma neshan midahad
// ...props=>this is sprade operator