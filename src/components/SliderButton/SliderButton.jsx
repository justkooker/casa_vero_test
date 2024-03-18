import Button from '../Button';
import IconSprite from '../IconSprite/IconSprite';

import sprite from '../../assets/svg/iconSprite.svg';

function SliderButton({ side = 'left', customStyles, onClick }) {
  return (
    <>
      <Button onClick={onClick} customStyles={customStyles}>
        <IconSprite
          sprite={sprite}
          id='arrow-left'
          width={17}
          height={32}
          rotateDeg={side === 'right' ? 180 : 0}
        />
      </Button>
    </>
  );
}

export default SliderButton;
