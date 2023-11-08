import './Assets/css/style.css';
const table =(props) =>
{
  return(
    <>
      <h1>STUDENTS INFORMATION</h1>
      <div className='aa'>
      <table border={2} cellPadding={20} cellSpacing={10} className='a1'>
        <tr>
          <td><b>NAME</b></td>
          <td><b>{props.name}</b></td>
        </tr>
        <tr>
          <td><b>ROLL NO</b></td>
          <td><b>{props.roll}</b></td>
        </tr>
        <tr>
          <td><b>EMAIL</b></td>
          <td><b>{props.mail}</b></td>
        </tr>
        <tr>
          <td><b>CGPA</b></td>
          <td><b>{props.cgpa}</b></td>
        </tr>
        <tr>
          <td><b>PHONE NUMBER</b></td>
          <td><b>{props.contact}</b></td>
        </tr>
      </table></div>
    </>
  )
}
export default table;