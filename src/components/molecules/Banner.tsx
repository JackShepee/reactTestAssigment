import Button from "../atoms/Button";
import ArrowDown from "../../assets/Arrow - Down.svg";

const Banner = () => {
  return (
    <div>
      <p>THE SPACE IS WAITING FOR</p>
      <p>YOU</p>
      <Button
        text={
          <>
            <p>Explore tours</p> <img src={ArrowDown} alt="arrow down" />
          </>
        }
      />
    </div>
  );
};

export default Banner;
