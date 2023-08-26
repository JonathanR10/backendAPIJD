function errorLogger(err, req,res,next)
{
    console.log(err);
    next(err);
}

function boomErrorHandler(err, req, res, next){
    if(err.isBoom)
    {
        res.status(err.output.statusCode).json({
                                            message: err.output.payload
                                });
    }
    else{
        next(err);
    }
}

function generalErrorHandler(){
    read.status(500).json({
        message:'Something went wrong :('
    });
}

module.exports = {
    errorLogger, 
    boomErrorHandler,
     generalErrorHandler};

