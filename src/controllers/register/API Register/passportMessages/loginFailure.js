const loginFailure = (req, res) =>{
    res.status(404).send("An error has occured trying to log in");
}

export default loginFailure;