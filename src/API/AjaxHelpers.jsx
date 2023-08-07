
export async function fetchAllPlayers() {
try {
    const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players", {
    }
    );
    const result = await response.json();
   // console.log(result)
    //console.log(result)
   // console.log("Response data:", result.data.players)
    //const players = await response.json();
    //const players = data.data.players
   // console.log(data);
   return result.data.players;
} catch (error) {
    console.error(error);
    throw error
} 
}
