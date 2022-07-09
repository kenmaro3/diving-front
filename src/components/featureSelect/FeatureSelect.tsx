
import React, { FC, useEffect, useState, useRef, ReactNode } from "react";
import "./featureselect.scss";
import listenForOutsideClick from "../../utils/listen-for-outside-clicks";

interface FeatureSelectProps{
  children?: ReactNode;
  className: string;
//   functions: Map<string, any>;
//   user: IUser;
}

const FeatureSelect: FC<FeatureSelectProps> = (props) => {
    const menuRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    const [functions, setFunctions] = useState<Map<string, any>>(new Map([]));
  
    useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));
  
    useEffect(() => {
    //   setFunctions(props.functions)
    //   setUser(props.user)
  
    }, [props])
  
    const itemClicked = (key: string) => {
      functions.get(key)()
    }
  
    return (
      <div ref={menuRef} className={isOpen ? `profileMenu -active ${props.className}` : `profileMenu ${props.className}`}>
        <div className="inside" onClick={toggle}>
          {props.children}
        </div>
        <div className="containerOutside">
          <div className="containerInside">
            <div className="menuHeader">
              <div className="menuHeaderTitle">Signed in as</div>
              {/* <h4 className="menuHeaderUsername">{user?.user_name}</h4> */}
            </div>
            <div className="itemContainer">
              {Array.from(functions.keys()).map(key => {
                return (
                  <div className="itemButtonContainer">
                    <button className="itemButton" onClick={() => itemClicked(key)}>
  
                      <div className="itemTitle">{key}</div>
                    </button>
  
                  </div>
                )
              })}
  
            </div>
  
          </div>
  
        </div>
      </div>
    );
  };
export default FeatureSelect