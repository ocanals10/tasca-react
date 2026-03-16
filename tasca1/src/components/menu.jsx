
function Menu({canviarTasca}) {

    const menuItems = ["tasca 1", "tasca 2", "tasca 3", "tasca 4", "tasca 5"];

  return (
    <div>
      {menuItems.map((item) => (
        <button key={item} onClick={() => canviarTasca(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Menu
