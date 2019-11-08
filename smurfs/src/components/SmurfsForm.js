import React, { useState } from "react";
import "./App.css"

const SmurfsForm = () => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChanges = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(smurf);
        setSmurf({
            name: "",
            age: "",
            height: ""
        });
    };
    
    return (
        <div className="smurfForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                           value={smurf.name}
                           name="name"
                           placeholder="Smurf Name"
                           onChange={handleChanges}
                    />
                </div>
                <div>
                    <input type="text"
                           value={smurf.age}
                           name="age"
                           placeholder="Smurf Age"
                           onChange={handleChanges}
                    />
                </div>
                <div>
                    <input type="text"
                           value={smurf.height}
                           name="height"
                           placeholder="Smurf Height"
                           onChange={handleChanges}
                    />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
};

export default SmurfsForm;

