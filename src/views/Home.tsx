/* eslint-disable react/no-array-index-key */
// ========== Home
// import all modules
import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardTitle,
  Hero,
  HeroButton,
  HeroCourse,
  HeroCourseHeader,
  HeroCourseHeaderSubtitle,
  HeroCourseHeaderTitle,
  HeroCourseMain,
  HeroHead,
  HeroSwipper,
  HeroSwipperContainer,
  ImageBackground,
  Image,
  ScrollView,
  SliderButton,
  Subitle,
  Title,
  CardTitleCourse,
  CardSubtitleCourse,
  Footer,
  FooterTitle,
  FooterSmalerTitle,
  OrderedList,
  List,
  LoadingSection,
  LoadingText,
} from '../styles';

// import all modules
import { Container, Head } from '../components';
import Service from '../service';

export const Home: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const refs = data.reduce((acc, value, index) => {
    acc[index] = React.createRef();
    return acc;
  }, {});

  const lists = [
    'First, you need to register and make an account.',
    'Log in to your new account',
    'Choose the products you interested in',
    'Follow the payment instructions',
    "Voila, it's yours now",
  ];

  const secondLists = [
    "I've purchased a product, how do I access it?",
    'When will I receive my order?',
    'How about physical products?',
    "I can't find my purchased products, where to find them?",
  ];

  const getAllData = async () => {
    setLoading(true);
    try {
      const response = await Service.getAllData();

      if (response.data.length > 0) {
        setData(response.data.slice(0, 4));
      } else {
        setData([]);
      }

      setLoading(false);
    } catch (err) {
      setData([]);
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleNextSlider = () => {
    const currentIndex = cardIndex + 1;

    if (currentIndex < data.length) {
      setCardIndex(currentIndex);
      refs[currentIndex].current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  const handlePrevSlider = () => {
    const currentIndex = cardIndex - 1;
    if (currentIndex < data.length && currentIndex > -1) {
      setCardIndex(currentIndex);

      refs[currentIndex].current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  if (loading) {
    return (
      <LoadingSection>
        <LoadingText>
          Loading...
        </LoadingText>
      </LoadingSection>
    );
  }

  return (
    <Hero>
      <Head title="Home" />
      <HeroHead>
        <Container size={85}>
          <Title>
            Dive deeper inside the mind
            of top-notch brands
          </Title>
          <Subitle>
            Experience a new way of learning.
            Be inspired for your entrepreneurship journey, and befriend with the brand.
          </Subitle>
          <Button>
            LET’S GET STARTED
          </Button>
        </Container>
      </HeroHead>
      <HeroSwipper>
        <Container size={85}>
          <ScrollView>
            <HeroSwipperContainer>
              {data.map((item, index) => (
                <ImageBackground
                  src={item.thumbnail_src}
                  key={item.id.toString()}
                  ref={refs[index]}
                >
                  <Container size={90}>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>
                      by
                      {' '}
                      {item.data_collaborator[0].name_collaborator}
                    </CardSubtitle>
                  </Container>
                </ImageBackground>
              ))}
            </HeroSwipperContainer>
          </ScrollView>
          <HeroButton>
            <SliderButton onClick={handlePrevSlider}>
              {'<'}
            </SliderButton>
            <SliderButton onClick={handleNextSlider}>
              {'>'}
            </SliderButton>
          </HeroButton>
        </Container>
      </HeroSwipper>
      <HeroCourse>
        <Container size={85}>
          <HeroCourseHeader>
            <HeroCourseHeaderTitle>
              Latets Courses
            </HeroCourseHeaderTitle>
            <HeroCourseHeaderSubtitle>
              See More
            </HeroCourseHeaderSubtitle>
          </HeroCourseHeader>
          <ScrollView>
            <HeroCourseMain>
              {data.map((item) => (
                <Card key={item.id.toString()}>
                  <Image
                    src={item.thumbnail_src}
                    alt={item.thumbnail_src}
                  />
                  <CardTitleCourse>{item.title}</CardTitleCourse>
                  <CardSubtitleCourse>
                    by
                    {' '}
                    {item.data_collaborator[0].name_collaborator}
                  </CardSubtitleCourse>
                </Card>
              ))}
            </HeroCourseMain>
          </ScrollView>
        </Container>
      </HeroCourse>
      <HeroCourse>
        <Container size={85}>
          <HeroCourseHeader>
            <HeroCourseHeaderTitle>
              LATEST BLUEPRINTS
            </HeroCourseHeaderTitle>
            <HeroCourseHeaderSubtitle>
              See More
            </HeroCourseHeaderSubtitle>
          </HeroCourseHeader>
          <ScrollView>
            <HeroCourseMain>
              {data.map((item) => (
                <Card key={item.id.toString()}>
                  <Image
                    src={item.thumbnail_src}
                    alt={item.thumbnail_src}
                  />
                  <CardTitleCourse>{item.title}</CardTitleCourse>
                  <CardSubtitleCourse>
                    by
                    {' '}
                    {item.data_collaborator[0].name_collaborator}
                  </CardSubtitleCourse>
                </Card>
              ))}
            </HeroCourseMain>
          </ScrollView>
        </Container>
      </HeroCourse>
      <Footer>
        <Container size={85}>
          <FooterTitle>
            FREQUENTLY ASKED QUESTIONS
          </FooterTitle>
          <FooterSmalerTitle>
            I’m interested. How do I get the products?
          </FooterSmalerTitle>
          <OrderedList>
            {lists.map((item, index) => <List key={index.toString()}>{item}</List>)}
          </OrderedList>
          {secondLists.map((item, index) => <FooterSmalerTitle key={index.toString()}>{item}</FooterSmalerTitle>)}
        </Container>
      </Footer>
    </Hero>
  );
};
