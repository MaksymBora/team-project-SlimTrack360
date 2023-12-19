import recomDesc from '../../../assets/images/img-Recommended/recomDesc.png';
import recomDescW from '../../../assets/images/img-Recommended/recomDesc.webp';
import recomDesk2x from '../../../assets/images/img-Recommended/recomDesk@2x.png';
import recomDeskW2x from '../../../assets/images/img-Recommended/recomDesk@2x.webp';
import recomMob from '../../../assets/images/img-Recommended/recomMob.png';
import recomMobW from '../../../assets/images/img-Recommended/recomMob.webp';
import recomMob2x from '../../../assets/images/img-Recommended/recomMob@2x.png';
import recomMobW2x from '../../../assets/images/img-Recommended/recomMob@2x.webp';
import recomTab from '../../../assets/images/img-Recommended/recomTab.png';
import recomTabW from '../../../assets/images/img-Recommended/recomTab.webp';
import recomTab2x from '../../../assets/images/img-Recommended/recomTab@2x.png';
import recomTabW2x from '../../../assets/images/img-Recommended/recomTab@2x.webp';

import { Picture } from './Image.styled';

const Image = () => {
  return (
    <picture>
      <source
        srcSet={`${recomDescW} 1x, ${recomDeskW2x} 2x`}
        media="(min-width: 1440px)"
        type="image/webp"
      />
      <source
        srcSet={`${recomDesc} 1x, ${recomDesk2x} 2x`}
        media="(min-width: 1440px)"
        type="image/png"
      />
      <source
        srcSet={`${recomTabW} 1x, ${recomTabW2x} 2x`}
        media="(min-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet={`${recomTab} 1x, ${recomTab2x} 2x`}
        media="(min-width: 768px)"
        type="image/png"
      />
      <source
        srcSet={`${recomMobW} 1x, ${recomMobW2x} 2x`}
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source
        srcSet={`${recomMob} 1x, ${recomMob2x} 2x`}
        media="(max-width: 767px)"
        type="image/png"
      />
      <Picture src={recomDesk2x} alt="recommended food" />
    </picture>
  );
};

export default Image;
