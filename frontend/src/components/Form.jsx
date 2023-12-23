import { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import "./Form.css";
const Form = () => {
  const { user } = useKindeAuth();
  const [formData, setFormData] = useState({
    firstname: user.given_name || "",
    lastname: user.family_name || "",
    email: user.email || "",
    gender: "male", // assuming a default value
    interests: [],
    age: 0, // assuming a default value
    isTutor: false, // assuming a default value
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleInterestsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      interests: checked
        ? [...prevData.interests, value]
        : prevData.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/register_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
      } else {
        console.error('Response not ok');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Is Tutor:
        <input
          type="checkbox"
          name="isTutor"
          checked={formData.isTutor}
          onChange={handleChange}
        />
      </label>

      <label>
        First Name:
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          color="grey"
          readOnly
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          color="grey"
          readOnly
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          color="grey"
          readOnly
        />
      </label>

      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Interests:
        <div>
          <label>
            Math
            <input
              type="checkbox"
              name="interests"
              value="Math"
              checked={formData.interests.includes("Math")}
              onChange={handleInterestsChange}
            />
          </label>

          <label>
            Computer Science
            <input
              type="checkbox"
              name="interests"
              value="Computer Science"
              checked={formData.interests.includes("Computer Science")}
              onChange={handleInterestsChange}
            />
          </label>

          <label>
            Science
            <input
              type="checkbox"
              name="interests"
              value="Science"
              checked={formData.interests.includes("Science")}
              onChange={handleInterestsChange}
            />
          </label>

          <label>
            English
            <input
              type="checkbox"
              name="interests"
              value="English"
              checked={formData.interests.includes("English")}
              onChange={handleInterestsChange}
            />
          </label>

          <label>
            History
            <input
              type="checkbox"
              name="interests"
              value="History"
              checked={formData.interests.includes("History")}
              onChange={handleInterestsChange}
            />
          </label>
        </div>
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
