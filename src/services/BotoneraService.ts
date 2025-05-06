export interface ButtonItem {
    id: number;
    name: string;
    color: string;
  }
  
  // Devuelve una lista de botones simulada
  export async function getButtonList(): Promise<ButtonItem[]> {
    return [
      { id: 1, name: 'Botón 1', color: '#3498db' },
      { id: 2, name: 'Botón 2', color: '#e67e22' },
      { id: 3, name: 'Botón 3', color: '#2ecc71' },
      { id: 4, name: 'Botón 4', color: '#9b59b6' },
      { id: 5, name: 'Botón 5', color: '#f1c40f' },
    ];
  }
  