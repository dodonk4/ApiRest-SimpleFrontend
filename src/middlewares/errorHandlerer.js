const errorHandlerer = (err, req, res, next) => {
    
    console.error('Error:', err.message);

    switch (err.message) {
        case "The file is undefined":
            req.flash('mensaje', 'An image has not been selected');
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;
        
        case "The file is undefined in API":
            req.flash('mensaje', err.message);
            res.status(400).send('The file is undefined');
            break;

        case "Data missing":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;

        case "Data missing in API":
            req.flash('mensaje', err.message);
            res.status(404).send('Data missing');
            break;

        case "No model specified":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;
        
        case "No model specified in API":
            req.flash('mensaje', err.message);
            res.status(404).send('No model specified');
            break;

        case "Product not found":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
            break;

        case "Product not found in API":
            req.flash('mensaje', err.message);
            res.status(404).send('Product not Found');
            break;
        
        case "Product Id not provided":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
        break;

        case "Product Id not provided in API":
            req.flash('mensaje', err.message);
            res.status(400).send('Product Id not provided in API');
        break;

        case "No parameters given to update":
            req.flash('mensaje', err.message);
            res.render('userTools',  { mensaje: req.flash('mensaje') });
        break;

        case "No parameters given to update in API":
            req.flash('mensaje', err.message);
            res.status(400).send('No parameters given to update in API');
        break;

        default:
            res.send("Error: " + err.message);
            break;
    }

    
};

export default errorHandlerer;
