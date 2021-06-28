import BlockLayout from "../shared/BlockLayout";
import StatusBlock from "../shared/StatusBlock";

const THING = [
  {
    title: "Eventpop",
    description: "A description for Eventpop",
    current: 2,
    max: 5
  },
  {
    title: "Eventpop",
    description: "A description for Eventpop",
    current: 5,
    max: 5
  },
  {
    title: "Eventpop",
    description: "A description for Eventpop",
    current: 3,
    max: 5
  },
  {
    title: "Eventpop",
    description: "A description for Eventpop",
    current: 2,
    max: 5
  },
  {
    title: "Eventpop",
    description: "A description for Eventpop",
    current: 4,
    max: 5
  },
]

export default (props) => {
  const Blocks = THING.map((e, i) => {
    return <StatusBlock
        title={e.title} 
        desc={e.description}
        current={e.current}
        max={e.max} key={e.title + i.toString()}
      />
  })

  return (
    <>
      <BlockLayout header="Registration" variant="1" id="register">
        {Blocks}
      </BlockLayout>
    </>
  );
}
