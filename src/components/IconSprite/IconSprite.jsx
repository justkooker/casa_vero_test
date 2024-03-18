const IconSprite = ({
	sprite,
	id,
	width,
	height,
	fillColor = null,
	styles={},
	rotateDeg,
}) => {
	return (
		<svg
			width={width}
			height={height}
			style={{ transform: `rotate(${rotateDeg}deg)` }}
		>
			<use fill={fillColor}  xlinkHref={`${sprite}#${id}`} style={{...styles}} />
		</svg>
	);
};
export default IconSprite;
