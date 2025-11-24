export default function List() {
  const items = [
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
  ];

  const listItems = items.map((item, index) => (
    <li key={item.message}>
      {index} - {item.message}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
