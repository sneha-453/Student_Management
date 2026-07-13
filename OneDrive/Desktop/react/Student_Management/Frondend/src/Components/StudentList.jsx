import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import studentService from "../Services/student.service"
const StudentList = () => {
    const [students, setstudents] = useState([]);
    const init = () => {
        studentService.getAll()
            .then(response => {
                console.log('Printing students data', response.data);
                setstudents(response.data)
            })
            .catch(error => {
                console.log('Something went worng', error);
            })
    }
    useEffect(() => {
        init();
    }, []);
    const HandleDelete = (id) => {
        console.log('printing id', id);
        studentService.remove(id)
            .then(response => {
                console.log('student deleted successfully', response.data);
                init();
            })
            .catch(error => {
                console.log('Something went worng', error);
            })
    }
    return (
        <div className="container p-5">
            <h2>Student mark list</h2>
            <hr />
            <div>

                <table className="table table-bordered table-striped">
                    <thead className="thead-primary text-center">
                        <tr>
                            <th>Name</th>
                            <th>Tamil</th>
                            <th>English</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>Social</th>
                            <th>Total</th>
                            <th>Average</th>

                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.tamil}</td>
                                    <td>{student.english}</td>
                                    <td>{student.maths}</td>
                                    <td>{student.science}</td>
                                    <td>{student.social}</td>
                                    <td>{student.total}</td>
                                    <td>{student.average}</td>
                                    <td>

                                        <Link className="btn btn-info me-3" to={`students/edit/${student.id}`}>Update</Link>
                                        <button className="btn btn-danger ml-2" onClick={() => {
                                            HandleDelete(student.id);
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Link to="/add" className="btn btn-primary mb-2 mt-3">Add Student</Link>
        </div>
    );
}
export default StudentList;