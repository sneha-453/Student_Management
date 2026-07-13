import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import studentService from "../Services/student.service";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [tamil, setTamil] = useState("");
  const [english, setEnglish] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");
  const [social, setSocial] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const saveStudent = (e) => {
    e.preventDefault();

    const student = {
      id,
      name,
      tamil: Number(tamil),
      english: Number(english),
      maths: Number(maths),
      science: Number(science),
      social: Number(social),
    };

    if (id) {
      studentService
        .update(student)
        .then((response) => {
          console.log("Student updated successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      studentService
        .create(student)
        .then((response) => {
          console.log("Student added successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      studentService
        .get(id)
        .then((response) => {
          const student = response.data;

          setName(student.name);
          setTamil(student.tamil);
          setEnglish(student.english);
          setMaths(student.maths);
          setScience(student.science);
          setSocial(student.social);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h3>{id ? "Update Student" : "Add Student"}</h3>
      <hr />

      <form onSubmit={saveStudent}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Tamil"
            value={tamil}
            onChange={(e) => setTamil(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="English"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Maths"
            value={maths}
            onChange={(e) => setMaths(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Science"
            value={science}
            onChange={(e) => setScience(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Social"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Save"}
        </button>

        <Link to="/" className="btn btn-secondary ms-2">
          Back
        </Link>
      </form>
    </div>
  );
};

export default AddStudent;