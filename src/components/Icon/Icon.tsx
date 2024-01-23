export type IconProps = {
	src: string;
	alt: string;
	size: number
}

const Icon = ({ icon }: { icon: IconProps }) => <img src={ icon.src } alt={ icon.alt } width={ `${ icon.size }px` } />;

export default Icon;