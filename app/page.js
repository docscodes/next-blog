function Card({text = "Default text"}) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      Card component: {text}
    </div>
  );
}

export default function Home() {
  const name = "Piotr";

  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        <Card text="This is being passed from the parent" />
        <Card text={"This is JS!"} />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
