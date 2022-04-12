import TypeWriterEffect from 'react-typewriter-effect';

const Typewritter = () => {
  return (
    <TypeWriterEffect
      textStyle={{ fontFamily: "Poppins", fontWeight: 'bold', fontSize: '25px' }}
      startDelay={500}
      cursorColor="cyan"
      multiText={[
          'I build beautiful and interactive web applications',
          'React.js and Next.js are my favorite technologies',
          'This website is empowered by Next.js and Sanity',
           'Contact me for work! ',
           'Feel free to explore this website, there are many cool things here! ',
        ]}
      typeSpeed={120}
    />
  );
};

export default Typewritter;
