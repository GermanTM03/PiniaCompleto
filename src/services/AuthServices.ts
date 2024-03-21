import type IStudent from '@/interfaces/IStudent'

const API_URL = 'https://65fb979b14650eb2100a2a3e.mockapi.io/api'



export default {
  async GetStudent(): Promise<IStudent[]> {
    try {
      const response = await fetch(`${API_URL}/Alumnos`)
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos de los usuarios')
      }
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  },

 
  async  GetEmail(email: string, password: string): Promise<IStudent | null> {
    try {
      const response = await fetch(`${API_URL}/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos del usuario');
      }
  
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  ,

        
  async CreateAlumno(name: string, email: string,  group: string): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/Alumnos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, group }) 
      })
      if (!response.ok) {
        throw new Error('No se pudo registrar el usuario')
      }
    } catch (error) {
      console.error(error)
    }
  },

  async DeleteStudent(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/Alumnos/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('No se pudo eliminar el usuario');
      }
    } catch (error) {
      console.error(error);
    }
  }
  
}
