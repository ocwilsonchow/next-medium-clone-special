import TypeWriterEffect from "react-typewriter-effect";

const Typewritter = () => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "25px",
      }}
      startDelay={500}
      cursorColor="cyan"
      multiText={[
        "I love building beautiful and interactive web applications",
        "React.js and Next.js are one of my favorite technologies",
        "This website is built with Next.js and Sanity",
        "Contact me for work! ",
        "Check out my website! ",
        "I am a full stack web developer"
      ]}
      typeSpeed={100}
    />
  );
};

export default Typewritter;
