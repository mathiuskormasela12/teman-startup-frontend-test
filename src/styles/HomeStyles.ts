// ========== Home Styles
// import all modules
import styled from 'styled-components';
import { IImageBackgroundProps } from '../interfaces';
import { Colors, Fonts } from '../themes';

export const Hero = styled.div`
	height: auto;
	background-color: white;
`;

export const HeroHead = styled.div`
	padding: 3rem 0;
`;

export const Title = styled.h1`
	font-family: ${Fonts.secondary};
	color: ${Colors.primary};
	line-height: 3.3rem;
`;

export const Subitle = styled.p`
	font-size: 1rem;
	margin: 1.5rem 0;
	line-height: 1.6rem;
`;

export const Button = styled.button`
	outline: none;
	border: none;
	font-size: 1rem;
	color: ${Colors.dark};
	background-color: ${Colors.secondary};
	font-weight: bold;
	border-radius: .8em;
	padding: 1em 1.3em;
`;

export const HeroSwipper = styled.div`
	margin-top: 1.5rem;
`;

export const ScrollView = styled.div`
	overflow-x: scroll;
`;

export const HeroSwipperContainer = styled.div`
	display: inline-flex;
`;

export const ImageBackground = styled.div<IImageBackgroundProps>`
	background: linear-gradient(
		rgba(0, 0, 0, 0.2),
		rgba(0, 0, 0, 0.2)
	), url('${({ src }) => src}') center center;
	background-size: cover;
	height: 20.7rem;
	width: 20.7rem;
	margin-right: 1rem;
	border-radius: 1.5rem;
	display: flex;
	align-items: flex-end;
	padding: 1.5rem 0;
`;

export const CardTitle = styled.h1`
	font-family: ${Fonts.secondary};
	color: ${Colors.secondary};
	font-size: 1.7rem;
	margin-bottom: 1.1rem;
`;

export const CardSubtitle = styled.p`
	font-family: ${Fonts.tertiary};
	color: ${Colors.secondary};
	font-size: 1.4rem;
`;

export const SliderButton = styled.button`
	outline: none;
	border: none;
	font-size: 1rem;
	color: white;
	background-color: ${Colors.primary};
	font-weight: bold;
	border-radius: 100%;
	width: 3rem;
	height: 3rem;
	color: white;

	&:first-child {
		margin-right: .6rem;
	}
`;

export const HeroButton = styled.div`
	display: flex;
	margin: 1.5rem 0;
	justify-content: flex-end;
`;
