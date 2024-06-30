import React, { useState } from "react";

const Section = ({ title, description, isVisible, setisVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold">{title}</h3>
      {isVisible ? (
        <button className="underline" onClick={() => setisVisible(false)}>
          Hide
        </button>
      ) : (
        <button className="underline" onClick={() => setisVisible(true)}>
          Show
        </button>
      )}

      {isVisible && <p>{description} </p>}
    </div>
  );
};

const Instamart = () => {
const [visiblesection,setvisiblesection] = useState("abc");
  return (
    <>
      <div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
        <Section
          title={"About Instamart"}
          description={"loreadfsndfkjsads"}
          isVisible={visiblesection==="about"}
          setisVisible={()=> setvisiblesection("about")
          }
        ></Section>
        <Section
          title={"About Careers"}
          description={"loreadfsndfkjsads"}
          isVisible={visiblesection==="Careers"}
          setisVisible={() => setvisiblesection("Careers")
          }
        ></Section>
        <Section
          title={"team Instamart"}
          description={"loreadfsndfkjsads"}
          isVisible={visiblesection==="abc"}
          setisVisible={() =>
         setvisiblesection("abc")
          }
        ></Section>
        
      </div>
    </>
  );
};

export default Instamart;
