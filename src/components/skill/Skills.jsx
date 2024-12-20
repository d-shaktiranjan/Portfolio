const Skill = (props) => {
  return (
    <div className="flex skill">
      <img
        className="skill-img"
        src={`/static/icons/${props.title.toLowerCase()}.svg`}
        alt={props.title}
      />
      <div>{props.title}</div>
    </div>
  );
};

export const Skills = (props) => {
  return (
    <div>
      <h1 className="sub-heading underline accent">{props.heading}</h1>
      <div className="grid skills">
        {props.list.map((item, index) => (
          <Skill title={item} key={index} />
        ))}
      </div>
    </div>
  );
};
