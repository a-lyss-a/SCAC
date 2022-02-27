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

const Testimonial = ({
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

  const monument = "Tipasa"
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
          <div>
            <img src={details.image_url}/>
            <p className="text-sm mb-0">
              {details.short_description}
            </p>
          </div>
      </div>
    </div>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;