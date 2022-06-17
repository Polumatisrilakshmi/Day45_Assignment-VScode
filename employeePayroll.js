window.addEventListener('DOMContentLoaded',(event)=>{
    creatInnerHtml();
}) 


const creatInnerHtml = () => {
    const headerHtml =   `<th>profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>
    "`;
let empPayrollData = createEmployeePayrollJSON()[0];

    const innerHtml = 
` ${headerHtml}

<tr>
    <td><img  class="profile"   src="swapnil.jpeg" alt=""> 
    </td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td><div class="dept-lavel">ENGINEERS</div>
    </td>
     <td>3000000</td>
     <td>1 NOV 2020</td>
     <td>
            <img id="1" onclick="remove(this)" alt="delete" src="deleteLogo.jpg" >
            <img id="1" onclick="update(this)" alt="edit" src="editLogo.jpg" >
         </td>
</tr>
`;
document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = ()=>{ 
		let empPayrollListLocal = [
			{
				_name: 'SRILAKSHMI',
				_gender: 'FEMALE',
				_deptartment: 'Engineer',
				_salary: '250000',
				_startDate: '25 DEC 1994',
				_note: ' ',
				_id: new Date().getTime(),
				_profilePic: 'SRI image.jpeg'
			},
			{
				_name: 'AKash',
				_gender: 'MALE',
				_deptartment: 'MARKETING',
				_salary: '300000',
				_startDate: '14 JUNE 2021',
				_note: ' ',
				_id: new Date().getTime() + 1,
				_profilePic: ' '
			}
		];
    return empPayrollListLocal;
		}