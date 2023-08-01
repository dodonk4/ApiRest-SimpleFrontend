const loginFailure = (req, res) =>{
    res.status(404).send("Wrong credentials");
}

export default loginFailure;