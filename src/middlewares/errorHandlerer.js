const errorHandlerer = (err, req, res, next) => {
    
    console.error('Error:', err.message);
  
    

    switch (err.message) {
        case "The file is undefined":
            req.flash('mensaje', 'An image has not been selected');
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;
    
        case "Data missing":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;

        case "No model specified":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;

        case "Product not found":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;
        
        case "Product Id not provided":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
        break;

        case "No parameters given to update":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
        break;

        default:
            res.send("Error: " + err.message);
            break;
    }

    
};

export default errorHandlerer;
