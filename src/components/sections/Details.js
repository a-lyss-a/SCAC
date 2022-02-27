import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Details = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const monument = "2532"
  const [details, setDetails] = useState([]);
  useEffect(()=>{
   fetch('http://159.65.88.66/hack/details?query=' + monument,{
     headers : {
       'Content-Type':'application/json'
     }
   })
   .then(response => response.json())
   .then(response => setDetails(response))
   .catch(error => console.log(error))
  },[])
  
  console.log(details)
  // const sectionHeader = {
  //   title: {details.name},
  //   paragraph: "Hi"
  // };

  return (
    <div className="container">
      <div className={innerClasses}>
        <SectionHeader data={{title: details.name}} className="center-content" />
          <div className="center-content">
            <img className="center-content" src={details.image_url}/>
          </div>
          <div id="column1">
            <p className="text-sm mb-0" id="desc-box">
              {details.short_description}
            </p>
          </div>
          <div id="column2">
            <table>
              <tbody>
                <tr>
                  <td>Endangered?</td>
                  <td>{details.danger}</td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>{details.region}</td>
                </tr>
                <tr>
                  <td>Countries</td>
                  <td>{details.states}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{details.location}</td>
                </tr>
                <tr>
                  <td>Coordinates</td>
                  <td>{details.coordinates}</td>
                </tr>
                <tr>
                  <td>Date inscribed</td>
                  <td>{details.date_inscribed}</td>
                </tr>
               </tbody> 
            </table>
          </div>
      </div>
    </div>
  );
}

Details.propTypes = propTypes;
Details.defaultProps = defaultProps;

export default Details;