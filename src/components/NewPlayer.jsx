import React, {useState} from "react";

export default function NewPlayerForm() {
    const [FormOpen, setFormOpen] = useState(false);
    const [newPuppy, setNewPuppy] = useState({
        id: '',
        name: '',
        breed: '',
        status: '',
        imageUrl: '',
        teamId: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/JSON',
                },
                body: JSON.stringify(newPuppy),
            });
           const result = await response.json
            console.log(result)
            setNewPuppy({
                id: '',
                name: '',
                breed: '',
                status: '',
                imageUrl: '',
                teamId: '',
            });
            setFormOpen(false);
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="new-form">
            <button onClick={() => setFormOpen(!FormOpen)}>New Player Form!</button>
            {FormOpen && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Id:</td>
                                <td>
                                    <input 
                                    type="text"
                                    value={newPuppy.id}
                                    onChange={(e) => setNewPuppy({ ...newPuppy, id: e.target.value })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>
                                    <input 
                                    type="text" 
                                    value={newPuppy.name}
                                    onChange={(e) => setNewPuppy({ ...newPuppy, name: e.target.value })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Breed:</td>
                                <td>
                                    <input 
                                    type="text" 
                                    value={newPuppy.breed}
                                    onChange={(e) => setNewPuppy({ ...newPuppy, breed: e.target.value})}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Status:</td>
                                <td>
                                    <input
                                    type="text"
                                    value={newPuppy.status}
                                    onChange={(e) => setNewPuppy({ ...newPuppy, status: e.target.value})}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Team Id:</td>
                                <td>
                                    <input 
                                    type="text"
                                    value={newPuppy.teamId}
                                    onChange={(e) => setNewPuppy({ ...newPuppy, teamId: e.target.value })}
                                    />
                                </td>
                                </tr>
                                <tr>
                                    <td>Picture!:</td>
                                    <td>
                                    <input 
                                    type="text" 
                                    value={newPuppy.imageUrl}                              
                                    onChange={(e) => setNewPuppy({...newPuppy, imageUrl: e.target.value })}
                                    />
                                    </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                <button type="submit">Add Player</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            )}
        </div>
    );
}