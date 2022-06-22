// ========== Home Styles
// import all modules
import styled from 'styled-components';
import { IImageBackgroundProps } from '../interfaces';
import { Colors, Fonts } from '../themes';

export const Hero = styled.div`
	height: auto;
	background-color: #F5F5F5;
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
	color: #F5F5F5;
	background-color: ${Colors.primary};
	font-weight: bold;
	border-radius: 100%;
	width: 3rem;
	height: 3rem;
	color: #F5F5F5;

	&:first-child {
		margin-right: .6rem;
	}
`;

export const HeroButton = styled.div`
	display: flex;
	margin: 1.5rem 0;
	justify-content: flex-end;
`;

export const HeroCourse = styled.div`
	margin-top: 1.5rem;
`;

export const HeroCourseHeader = styled.div`
	margin-top: 1.5rem;
	display: flex;
`;

export const HeroCourseHeaderTitle = styled.h1`
	color: ${Colors.dark};
	font-size: 1.3rem;
	flex: 2;
	text-transform: uppercase;
`;

export const HeroCourseHeaderSubtitle = styled.p`
	color: ${Colors.dark};
	font-size: 1rem;
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const HeroCourseMain = styled.div`
	display: inline-flex;
	margin: 2rem 0;
`;

export const Card = styled.div`
	width: 15rem;
	margin-right: 1.5rem;

	&:last-child {
		margin-right: 0;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 13rem;
	border-radius: 10px;
`;

export const CardTitleCourse = styled.h1`
	font-family: ${Fonts.secondary};
	color: ${Colors.dark};
	font-size: 1.2rem;
	margin-bottom: .9rem;
`;

export const CardSubtitleCourse = styled.p`
	font-family: ${Fonts.tertiary};
	color: ${Colors.dark};
	font-size: 1rem;
`;

export const Footer = styled.footer`
	background-color: #F5F5F5;
	padding: 2rem 0;
`;

export const FooterTitle = styled.h1`
	font-family: ${Fonts.secondaryBold};
	color: ${Colors.dark};
	font-size: 1.2rem;
	margin-bottom: .9rem;
`;

export const FooterSmalerTitle = styled.h1`
	font-family: ${Fonts.secondary};
	color: ${Colors.dark};
	font-size: 1rem;
	margin-top: 1rem;
`;

export const OrderedList = styled.ol`
	font-size: 1rem;
	margin: 1rem 0 1.3rem 0;
	padding-left: 1rem;
`;

export const List = styled.li`
	margin-bottom: .5rem;
	color: ${Colors.dark};
`;

export const LoadingSection = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoadingText = styled.h1`
	color: ${Colors.dark};
	font-size: 1.8rem;
`;
