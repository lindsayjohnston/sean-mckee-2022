import './MainBodyLandscape.css';
import MenuLandscape from '../MenuLandscape/MenuLandscape';
import SectionLandscapeTop from "../SectionLandscapeTop/SectionLandscapeTop";
import SectionLandscapeCentered from "../SectionLandscapeCentered/SectionLandscapeCentered";
import SectionLandscapeTitleRight from "../SectionLandscapeTitleRight/SectionLandscapeTitleRight";
import SectionLandscapeTitleLeft from "../SectionLandscapeTitleLeft/SectionLandscapeTitleLeft";


const mainBodyLandscape = (props) =>{
  
  return(
      <div className="mainBodyLandscape">
           <MenuLandscape 
               siteTitle={props.siteTitle}
               sections={props.sections}/>
           <SectionLandscapeTop 
                sections={props.sections}/>
           <SectionLandscapeTitleLeft
                sections={props.sections}
                order= "1"
                />
           <SectionLandscapeCentered
                sections={props.sections}
                order= "2"
                />
           <SectionLandscapeTitleLeft 
                sections={props.sections}
                order= "3"
                />
      </div>
  )
};

export default mainBodyLandscape;