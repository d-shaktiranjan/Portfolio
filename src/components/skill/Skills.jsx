const Skill = (props) => {
  return (
    <div className="flex skill">
      <img
        className="skill-img"
        src={`/static/icons/${props.title.toLowerCase()}.svg`}
        alt={props.title}
      />
      <p>{props.title}</p>
    </div>
  );
};

export const Skills = (props) => {
  return (
    <div className="skill-box">
      <h1 className="underline accent">{props.heading}</h1>
      <div className="grid skills">
        {props.list.map((item) => (
          <Skill title={item} key={item} />
        ))}
      </div>
    </div>
  );
};
