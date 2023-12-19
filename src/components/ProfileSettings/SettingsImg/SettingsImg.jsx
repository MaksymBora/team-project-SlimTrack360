import imgDesk from 'src/assets/images/settings/setDesk.png';
import imgTab from 'src/assets/images/settings/setTab.png';
import imgMob from 'src/assets/images/settings/setMob.png';
import imgDesk2x from 'src/assets/images/settings/setDesk@2x.png';
import imgTab2x from 'src/assets/images/settings/setTab@2x.png';
import imgMob2x from 'src/assets/images/settings/setMob@2x.png';
import imgMobW from 'src/assets/images/settings/setMob.webp';
import imgMobW2x from 'src/assets/images/settings/setMob@2x.webp';
import imgTabW from 'src/assets/images/settings/setTab.webp';
import imgTabW2x from 'src/assets/images/settings/setTab@2x.webp';
import imgDeskW from 'src/assets/images/settings/setDesk.webp';
import imgDeskW2x from 'src/assets/images/settings/setDesk@2x.webp';

const SettingsImg = () => {
  return (
    <picture>
      <source
        srcSet={`${imgDeskW} 1x, ${imgDeskW2x} 2x`}
        media="(min-width: 1440px)"
        type="image/webp"
      />
      <source
        srcSet={`${imgDesk} 1x, ${imgDesk2x} 2x`}
        media="(min-width: 1440px)"
        type="image/png"
      />
      <source
        srcSet={`${imgTabW} 1x, ${imgTabW2x} 2x`}
        media="(min-width: 834px)"
        type="image/webp"
      />
      <source
        srcSet={`${imgTab} 1x, ${imgTab2x} 2x`}
        media="(min-width: 834px)"
        type="image/png"
      />
      <source
        srcSet={`${imgMobW} 1x, ${imgMobW2x} 2x`}
        media="(max-width: 833px)"
        type="image/webp"
      />
      <source
        srcSet={`${imgMob} 1x, ${imgMob2x} 2x`}
        media="(max-width: 833px)"
        type="image/png"
      />
      <img src={imgDesk2x} alt="settings" />
    </picture>
  );
};

export default SettingsImg;
