export default interface IStudent {
    id: number 
    email: string
    name: string
    group: string
    users : IStudent[]
  }
  