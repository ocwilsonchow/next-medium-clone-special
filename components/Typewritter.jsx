import TypeWriterEffect from "react-typewriter-effect";

const Typewritter = () => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "Poppins",
        fontWeight: "",
        fontSize: "25px",
      }}
      startDelay={1500}
      cursorColor="cyan"
      multiText={[
        "I love building beautiful and interactive web applications",
        "React.js and Next.js are two of my favorite technologies",
        "Please reach out to me any time!",
        "I am a full stack web developer, and I love building beautiful and interactive web applications."
      ]}
      typeSpeed={100}
    />
  );
};

export default Typewritter;
