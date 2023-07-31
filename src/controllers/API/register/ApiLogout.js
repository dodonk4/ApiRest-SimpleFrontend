const apiLogout = (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.status(200).send("Logged out succesfully")
      });
};

export default apiLogout;