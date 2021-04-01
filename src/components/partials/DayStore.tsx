import "../styles.css";

interface IProps {
  day: string;
}

export default function DayStore({ day }: IProps) {
  return (
    <>
      <div>
        <header>
          <h1>{day}</h1>
        </header>
      </div>
      <div className="rectangle-column"></div>
    </>
  );
}
