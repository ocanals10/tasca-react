function Menu({canviarTasca}) {
    const menuItems = ["Tasca 1", "Tasca 2", "Tasca 3", "Tasca 4", "Tasca 5","Tasca 6"];

  return (

    <div style={{ 
        display: 'flex',    
        justifyContent: 'center',
        gap: '10px',          
        padding: '20px',     
    }}>
      {menuItems.map((item) => (
        <button 
          key={item} 
          onClick={() => canviarTasca(item)}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Menu;