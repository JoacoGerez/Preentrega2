import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1>Carrito de Compras</h1>
      <div style={{ position: 'relative', marginLeft: '10px' }}>
        <ShoppingCartIcon style={{ fontSize: 30, color: 'white', marginTop: '-10px' }} />
        <span 
          style={{
            position: 'absolute',
            top: '-10px', 
            right: '-10px', 
            backgroundColor: 'red', 
            color: 'white', 
            borderRadius: '50%', 
            padding: '5px',
            fontSize: '9px'
          }}
        >
          4
        </span>
      </div>
    </div>
  );
}

export default CartWidget;
