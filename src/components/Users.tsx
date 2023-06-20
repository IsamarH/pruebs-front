import { useEffect, useState } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        
        try {
          const response = await fetch(`http://localhost:3000/users`);
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.log('Error al obtener los productos:', error);
        }
      };
    
      useEffect(() => {
       getUsers();
      }, []);


return(
    <div>
         <table className='table'>
        <thead>
          <tr>
            <th  className='filas'>Nombre</th>
            <th  className='filas'>Apellidos</th>
            <th  className='filas'>Sexo</th>
            <th  className='filas'>Edad</th>
          
          </tr>
        </thead>
        
        <tbody>
          {users.map((producto) => (
            <tr key={producto.id}>
              <td className='filas'>{producto.name}</td>
              <td className='filas'>{producto.apellidos}</td>
              <td className='filas'>{producto.sexo}</td>
              <td className='filas'>{producto.edad}</td>

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)


};

export default Users;