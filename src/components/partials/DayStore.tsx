import "../styles.css";

interface IProps {
  day: string;
}

export default function DayStore({ day }: IProps) {
  return (
    <>
      <div className="rectangle-column">
        <header>
          <h1>{day}</h1>
        </header>
      </div>
    </>
  );
}
